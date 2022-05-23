import React from "react";
import { createContext, useState } from "react";
import { Modal } from "../components/Global/modal";

type ProjectContextProviderProps = {
    children: React.ReactNode;
  };

type ProjectContextType = {
    handleAddProject: () => void;
  };
  
export const ProjectContext = createContext<ProjectContextType>({} as ProjectContextType);

export function ProjectsContextProvider ({ children }: ProjectContextProviderProps) {
    const [openFormModal , setOpenFormModal] = useState(false);

    function handleAddProject() {
      setOpenFormModal(true);
    }

  return (
    <ProjectContext.Provider value={{ handleAddProject }}>
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
