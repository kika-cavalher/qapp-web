import React, { useState } from "react"
import { ProjectProps } from "../../../../types/project";
import { Button } from "../../../Global/button/index";
import { v4 as uuidv4 } from 'uuid';

import addModal from '../../../assets/icon/addModal.png'
import iconCloseModal from '../../../assets/icon/closeModalX.png'
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

    function handleClose() {
        closeModal(false) 
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
        <div className="modal-main">
            <div className="modal">
                <div className="modal-header">
                    <img className="item-project--btn-add-modal" 
                    src={addModal} alt="icone para fechar o modal." />
                    <h1>Novo Projeto</h1>
                    <Button 
                    className="icon-close-modal"
                    onClick={handleClose}>
                        <img className="item-project--btn-close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
                    </Button>  
                </div>
                </div>
                <div className="modal-out" onClick={handleClose}>
                </div>
            </div>
    )
}
