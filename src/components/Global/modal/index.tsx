import { useState } from "react"

import { CreateProjectProps } from "../../../types/project";
import { Button } from "../button/default";
import { ProjectsContextProvider } from "../../../contexts/ProjectsContext";

import addModal from '../../../assets/icon/addModal.png'
import iconCloseModal from '../../../assets/icon/closeModalX.png'
import './style.scss'



export function Modal({ closeModal, createOrEditProject, titleModal, nameModal, name_placeholder, contentModal, content_placeholder, describeModal, describe_placeholder }: CreateProjectProps) {
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [describe, setDescribe] = useState("")

    function handleClose() {
        closeModal(false)
    };

    return (
        <ProjectsContextProvider>
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
                        <h1>{titleModal}</h1>
                    </div>
                    <form className="modal-content--form" onSubmit={createOrEditProject}>
                        <div className="modal-content--titleAndAbreviation">
                            <div className="modal-content--title">
                                <p className="modal---title">{nameModal}</p>
                                <input className="modal--title__input"
                                    name="NameModal"
                                    value={name}
                                    // value={!setProject?.title? state.title : setProject.title}
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    maxLength={28}
                                    placeholder={name_placeholder}
                                    required>
                                </input>
                            </div>
                            <div className="modal-content--abbreviation">
                                <p className="modal--abbreviation">{contentModal}</p>
                                <input className="modal--abbreviation__input"
                                    name="contentModal"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                    type="text"
                                    maxLength={3}
                                    placeholder={content_placeholder}
                                    required>
                                </input>
                            </div>
                        </div>
                        <div className="modal-content--describe">
                            <p className="modal-content--describe__title">{describeModal}</p>
                            <textarea className="modal-content--describe_input"
                                name="describeModal"
                                value={describe}
                                onChange={e => setDescribe(e.target.value)}
                                maxLength={200}
                                placeholder={describe_placeholder}>
                            </textarea>
                        </div>
                        <div className="btn">
                            <Button
                                className="btn__send"
                            >Salvar</Button>
                        </div>
                    </form>
                </div>
                <div className="modal-out" onClick={handleClose}>
                </div>
            </div>
        </ProjectsContextProvider>
    )
}


