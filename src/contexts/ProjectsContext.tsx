import React, { FormEvent } from "react";
import { createContext, useState } from "react";
import { Modal } from "../components/Global/modal";
import api from "../services/api";

type ProjectContextProviderProps = {
  children: React.ReactNode;
};

type ProjectContextType = {
  handleAddProject: () => void;
  handleClose: () => void;
  handleSubmit: (event: any) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  nameHandler: (event: any) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  contentHandler: (event: any) => void;
  describe: string;
  setDescribe: React.Dispatch<React.SetStateAction<string>>;
  describeHandler: (event: any) => void;
};

export const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

export function ProjectsContextProvider({ children }: ProjectContextProviderProps) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [describe, setDescribe] = useState("")

  function handleAddProject() {
    setOpenFormModal(true);
  }

  function handleClose() {
    setOpenFormModal(false);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const project = {
      name, content, describe
    }
    api.post("projects", project);
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
        name,
        setName,
        nameHandler,
        content,
        setContent,
        contentHandler,
        describe,
        setDescribe,
        describeHandler
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
