import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { ProjectProps } from '../types/project'

type ProjectContextProviderProps = {
    children: any;
  };

type ProjectContextType = {
    teste: any
  };
  
export const ProjectContext = React.createContext<ProjectContextType | null>(null);

const ProjectsContextProvider: React.FC = ({children}) => {
    const [projects , setProjects] = useState([]);
    
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

    
    const teste = console.log('teste context precisa aparecer')
    return (
        <ProjectContext.Provider value={{ teste }}>
          {children}
        </ProjectContext.Provider>
    );
};

export {ProjectsContextProvider};