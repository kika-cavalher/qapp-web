import React, { useState } from "react"
import { ProjectProps } from "../../../types/project";
import { Button } from "../button";
import { v4 as uuidv4 } from 'uuid';

import addModal from '../../../assets/icon/addModal.png'
import iconCloseModal from '../../../assets/icon/closeModalX.png'
import './style.scss'
// import { getDatabase, ref, set } from "firebase/database";

export type CreateProjectProps = {
    setProject?: React.Dispatch<React.SetStateAction<ProjectProps[]>>,
    closeModal: (isOpen: boolean) => void
}

export function Modals({ setProject, closeModal }: CreateProjectProps) {
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

    function handleClose() {
        closeModal(false) 
    };

    function createProject(e: any) {
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

    // function writeProjectData({id, title, abbreviation, describe}: ProjectProps) {
    //     set(ref(database, 'projects/' + id), {
    //         ProjectId: state.id,
    //         title: state.title,
    //         abbreviation : state.abbreviation,
    //         describe : state.describe
    //     });
    //   }


    return (
        <div className="modal-main">
            <div className="modal">
                <div className="modal-header--close-menu">
                    <Button 
                    className="icon-close-modal"
                    onClick={handleClose}>
                        <img className="item-project--btn-close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
                    </Button>
                </div>
                <div className="modal-header">
                    <img className="item-project--btn-add-modal" 
                    src={addModal} alt="icone para fechar o modal." />
                    <h1>Novo Projeto</h1>
                </div>
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
                            <p className="modal--abbreviation">Abreviação</p>
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
                        <p className="modal-content--describe__title">Descrição</p>
                        <textarea className="modal-content--describe_input"
                        name="describe"
                        value={state.describe}
                        onChange={handleChange}
                        maxLength={200}
                        placeholder="Digite oque se refere esse projeto">
                        </textarea>
                    </div>
                    <div className="btn">
                        <Button
                        className="btn__send"
                        onClick={() => createProject} 
                        >Salvar</Button>
                    </div>
                </form>
                </div>
                <div className="modal-out" onClick={handleClose}>
                </div>
            </div>
    )
}
