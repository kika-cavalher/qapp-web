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

    
    const teste = console.log('teste context precisa aparecer')
    return (
        <ProjectContext.Provider value={{ teste }}>
          {children}
        </ProjectContext.Provider>
    );
};

export {ProjectsContextProvider};