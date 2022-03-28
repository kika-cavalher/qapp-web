import { useCallback, useImperativeHandle, useRef, useState } from "react"
import { ProjectProps } from "../../../types/project";
import { Button } from "../button";

import './style.scss'

export type CreateProjectProps = {
    project?: ProjectProps[],
    setProject?: React.Dispatch<React.SetStateAction<ProjectProps[]>>
}

export function Modals({ project, setProject }: CreateProjectProps) {
    const [projects, setProjects] = useState("");
    const [state, setState] = useState({
        title: "",
        abbreviation: "",
        describe: ""
      })

    function handleChange(e: any) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      }

    // function handleCloseModal= useCallback(() => {
    //     setVisible(false);
    //     }, []);

// const Modals: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
//     const titleRef = useRef<HTMLInputElement>(null);
//     const abbreviationRef = useRef<HTMLInputElement>(null);
//     const describeRef = useRef<HTMLInputElement>(null);
//     const [visible, setVisible] = useState(false);
    
//     const openModal = useCallback(() => {
//         setVisible(true);
//     }, []);

//     useImperativeHandle(ref, () => {
//         return {
//             openModal
//         };
//     });

//     const handleCloseModal = useCallback(() => {
//         setVisible(false);
//     }, []);

//     if(!visible) {
//         return null;
//     }
    return (
        <div className="modal-out">
            <div className="modal">
            <div className="modal-header">
                <h1>Adicionar um novo Projeto</h1>
            </div>
            <div className="modal-content">
                <form className="modal-content--form">
                    <div className="modal-content--titleAndAbreviation">
                        <div className="modal-content--title">
                            <p className="modal---title">Titulo</p>
                            <input className="modal--title__input"
                            name="title"
                            value={state.title}
                            type="text"
                            placeholder="Digite o nome do projeto">
                            </input>
                        </div>
                        <div className="modal-content--abbreviation">
                            <p className="modal--abbreviation">Abreviação</p>
                            <input className="modal--abbreviation__input"
                            name="abbreviation"
                            value={state.abbreviation}
                            type="text"
                            placeholder="3 caracteres">
                            </input>
                        </div>
                    </div>
                    <div className="modal-content--describe">
                        <p className="modal-content--describe__title">Descrição</p>
                        <input className="modal-content--describe_input"
                        name="describe"
                        value={state.describe}
                        type="text-area"
                        placeholder="Digite oque se refere esse projeto">
                        </input>
                    </div>
                    <div className="btn">
                        <Button 
                        className="btn__send"
                        >Salvar</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
       
    )
}
