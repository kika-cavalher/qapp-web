import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectsContext'

export function useProjects() {
  const value = useContext(ProjectContext)

  return value;
}