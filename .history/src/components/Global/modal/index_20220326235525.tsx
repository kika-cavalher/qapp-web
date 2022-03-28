import React, { useCallback, useImperativeHandle, useRef, useState } from "react"
import { ProjectProps } from "../../../types/project";
import { Button } from "../button";

import './style.scss'

export type CreateProjectProps = {
    setProject?: React.Dispatch<React.SetStateAction<ProjectProps[]>>
}

export function Modals({ setProject }: CreateProjectProps) {
    const [openModal, setOpenModal] = useState(true);
    const [state, setState] = useState({
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

    function handleClose() {
        setOpenModal(false)
    };

    function createProject(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setProject!((oldProject: ProjectProps[]) => 
            [...oldProject, 
                {
                    title: "",
                    abbreviation: "",
                    describe: ""
                    
                } 
            ]
        )
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
                            placeholder="Digite o nome do projeto">
                            </input>
                        </div>
                        <div className="modal-content--abbreviation">
                            <p className="modal--abbreviation">Abreviação</p>
                            <input className="modal--abbreviation__input"
                            name="abbreviation"
                            value={state.abbreviation}
                            onChange={handleChange}
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
                        onChange={handleChange}
                        type="text-area"
                        placeholder="Digite oque se refere esse projeto">
                        </input>
                    </div>
                    <div className="btn">
                        <Button
                        className="btn__send"
                        onClick={handleClose} 
                        >Salvar</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
       
    )
}
