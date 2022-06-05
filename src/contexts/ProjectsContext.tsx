import { createContext, useState } from "react";

import { Modal } from "../components/Global/modal";
import api from "../services/api";
import { ProjectContextProviderProps, ProjectContextType, ProjectProps } from "../types/project";

export const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

export function ProjectsContextProvider({ children }: ProjectContextProviderProps) {
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

    if(id) {
      api.put(`projects/${id}`, project);
    }else {
      api.post("projects", project);
    }

    setOpenFormModal(false);

    if(name) {
      setName('')
    }
    if(content) {
      setContent('')
    }
    if(describe) {
      setDescribe('')
    }
  }

  function handleEdit({_id, name, content, describe} : ProjectProps) {
    setName(name);
    setContent(content);
    setDescribe(describe);

    setId(_id);
    setOpenFormModal(true);
  }

  function handleDelete(id: string) {
    api.delete(`projects/${id}`);
  }

  function handleAddProject() {
    setOpenFormModal(true);
  }

  function handleClose() {
    if(name) {
      setName('')
    }
    if(content) {
      setContent('')
    }
    if(describe) {
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


// export const ProjectsContextProvider: React.FC<React.ReactNode> = ({children}) => {
    
    // useEffect(() => {
    //   api.get("projects")
    //   .then(({data}) => {
    //     setProjects(data);
    //   })
    // } , [])

  //   function createProject(e: any) {
  //     e.preventDefault();
  //     axios.post('https://qapp-api.herokuapp.com/projects', {
  //         title: state.title,
  //         abbreviation: state.abbreviation,
  //         describe: state.describe
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error))

  //     setState({
  //         title: "",
  //         abbreviation: "",
  //         describe: "",
  //     });
  //     closeModal(false)
  // };

  // function createEditProject(e: any) {
  //     e.preventDefault();
  //     axios.put('https://qapp-api.herokuapp.com/projects', {
  //         title: state.title,
  //         abbreviation: state.abbreviation,
  //         describe: state.describe
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error))

  //     setState({
  //         title: "",
  //         abbreviation: "",
  //         describe: "",
  //     });
  //     closeModal(false)
  // };

     //     function UpdateProject(title:string, abbreviation:string, describe:string) {
    //     setUpdateProject({
    //         title,
    //         abbreviation,
    //         describe})
    //     setOpenModal(true)
    //     axios.put('https://qapp-api.herokuapp.com/projects', {
    //         title,
    //         abbreviation,
    //         describe
    //     })
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log(error))
    // }

    //     useEffect(() => {
    //         api.get("projects")
    //         .then(({data}) => {
    //             setProjects(data);
    //         })
    //     } , [])


// };
