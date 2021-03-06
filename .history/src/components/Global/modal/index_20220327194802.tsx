import React, { useCallback, useImperativeHandle, useRef, useState } from "react"
import { ProjectProps } from "../../../types/project";
import { Button } from "../button";
import { v4 as uuidv4 } from 'uuid';

import './style.scss'

export type CreateProjectProps = {
    setProject?: React.Dispatch<React.SetStateAction<ProjectProps[]>>,
    closeModal: (isOpen: boolean) => void
}

export function Modals({ setProject, closeModal }: CreateProjectProps) {
    const [openModal, setOpenModal] = useState(true);
    const [state, setState] = useState({
        id: "",
        title: "",
        abbreviation: "",
        describe: ""
      });

    function handleChange(e: any) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      };

    function handleClose(e: any) {
        createProject(state)
        
    };

    function createProject(e: any) {
        const value = e.target.value;
        e.preventDefault();
        setProject!((oldProject: ProjectProps[]) => 
            [...oldProject, 
                {
                    ...state,
                    selecionado: false,
                    id: uuidv4()
                } 
            ]
        )

        setState({
            id: "",
            title: "",
            abbreviation: "",
            describe: "",
        });
        closeModal(false)
    };


    return (
        <div className="modal-out">
            <div className="modal">
            <div className="modal-header">
                <h1>Adicionar um novo Projeto</h1>
            </div>
            <div className="modal-content">
                <form className="modal-content--form" onSubmit={createProject}>
                    <div className="modal-content--titleAndAbreviation">
                        <div className="modal-content--title">
                            <p className="modal---title">Titulo</p>
                            <input className="modal--title__input"
                            name="title"
                            value={state.title}
                            onChange={handleChange}
                            type="text"
                            maxLength={28}
                            placeholder="Digite o nome do projeto"
                            required>
                            </input>
                        </div>
                        <div className="modal-content--abbreviation">
                            <p className="modal--abbreviation">Abrevia????o</p>
                            <input className="modal--abbreviation__input"
                            name="abbreviation"
                            value={state.abbreviation}
                            onChange={handleChange}
                            type="text"
                            maxLength={3}
                            placeholder="3 caracteres"
                            required>
                            </input>
                        </div>
                    </div>
                    <div className="modal-content--describe">
                        <p className="modal-content--describe__title">Descri????o</p>
                        <input className="modal-content--describe_input"
                        name="describe"
                        value={state.describe}
                        onChange={handleChange}
                        type="text-area"
                        maxLength={200}
                        placeholder="Digite oque se refere esse projeto">
                        </input>
                    </div>
                    <div className="btn">
                        <Button
                        className="btn__send"
                        onClick={() => createProject} 
                        >Salvar</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
       
    )
}
