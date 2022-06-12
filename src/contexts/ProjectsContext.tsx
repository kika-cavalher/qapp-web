import { createContext, useState } from "react";
import { mutate as mutateGlobal }  from 'swr'

import { Modal } from "../components/Global/modal";
import { useApi } from "../hooks/useApi";
import api from "../services/api";
import { ProjectContextProviderProps, ProjectContextType, ProjectProps } from "../types/project";

export const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

export function ProjectsContextProvider({ children }: ProjectContextProviderProps) {
  const { data, mutate } = useApi('projects')

  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [describe, setDescribe] = useState("")

  const [openFormModal, setOpenFormModal] = useState(false);
  const [id, setId] = useState("")

  function handleSubmit(event: any) {
    event.preventDefault();

    const project = {
      name,
      content,
      describe
    }

    if (id) {
      api.put(`projects/${id}`, project);

      const updateProject = data?.map((projects: ProjectProps) => {
        if (projects._id === id) {
          return { ...projects, name, content, describe }
        }
        return projects
      });
      mutate(updateProject, false)
      mutateGlobal(`projects/${id}`, { id, name, content, describe })

    } else {
      api.post("projects", project);
      const updateProject =  [...data, project]
      mutate(updateProject, false)
    }
    console.log(`handleSubmit --> ${id}`)
    setOpenFormModal(false);

    if (id) {
      setId('')
    }
    if (name) {
      setName('')
    }
    if (content) {
      setContent('')
    }
    if (describe) {
      setDescribe('')
    }
  }

  function handleEdit({ _id, name, content, describe }: ProjectProps) {
    setId(_id);
    setName(name);
    setContent(content);
    setDescribe(describe);

    console.log(`handleEdit --> ${id}`)
    setOpenFormModal(true);
  }

  function handleDelete(id: string) {
    api.delete(`projects/${id}`);

    const updateProject = data?.filter((projects: ProjectProps) => projects._id !== id);
    mutate(updateProject, false)

  }

  function handleAddProject() {
    setOpenFormModal(true);
  }

  function handleClose() {
    if (name) {
      setName('')
    }
    if (content) {
      setContent('')
    }
    if (describe) {
      setDescribe('')
    }

    setOpenFormModal(false);
  }

  function nameHandler(event: any) {
    setName(event.target.value)
  }

  function contentHandler(event: any) {
    setContent(event.target.value)
  }

  function describeHandler(event: any) {
    setDescribe(event.target.value)
  }


  return (
    <ProjectContext.Provider
      value={{
        handleAddProject,
        handleClose,
        handleSubmit,
        handleEdit,
        handleDelete,
        id,
        setId,
        name,
        setName,
        nameHandler,
        content,
        setContent,
        contentHandler,
        describe,
        setDescribe,
        describeHandler,
      }}>
      {children}
      {openFormModal && <Modal
        titleModal={'Adicione um novo projeto.'}
        nameModal={'Nome do projeto.'}
        name_placeholder={'Qual será o titulo do seu projeto.'}
        contentModal={'Abreviação.'}
        content_placeholder={'3 caracteres.'}
        describeModal={'Descreva o seu projeto.'}
        describe_placeholder={'Descreva o seu projeto melhor nesse campo.'}
      />}
    </ProjectContext.Provider>
  );
}