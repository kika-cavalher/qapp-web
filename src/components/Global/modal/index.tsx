import { CreateProjectProps } from "../../../types/project";
import { useProjects } from "../../../hooks/useProjects";

import { ButtonModal } from "../button/modal";

import addModal from '../../../assets/icon/addModal.png'
import iconCloseModal from '../../../assets/icon/closeModalX.png'
import './style.scss'

export function Modal({  titleModal, nameModal, name_placeholder, contentModal, content_placeholder, describeModal, describe_placeholder }: CreateProjectProps) {


    const {
        handleClose,
        handleSubmit,
        name,
        nameHandler,
        content,
        contentHandler,
        describe,
        describeHandler } = useProjects()

    return (
        <div className="modal-main">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-header--title">
                        <img className="item-project--btn-add-modal"
                            src={addModal} alt="icone para fechar o modal." />
                        <h1>{titleModal}</h1>
                    </div>
                    <div className="modal-header--close-menu">
                        <ButtonModal
                            className="icon-close-modal"
                            onClick={handleClose}>
                            <img className="item-project--btn-close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
                        </ButtonModal>
                    </div>
                </div>
                <form className="modal-content--form" onSubmit={handleSubmit}>
                    <div className="modal-content--titleAndAbreviation">
                        <div className="modal-content--title">
                            <p className="modal---title">{nameModal}</p>
                            <input className="modal--title__input"
                                name="NameModal"
                                value={name}
                                // value={!setProject?.title? state.title : setProject.title}
                                onChange={nameHandler}
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
                                onChange={contentHandler}
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
                            onChange={describeHandler}
                            maxLength={170}
                            placeholder={describe_placeholder}>
                        </textarea>
                    </div>
                </form>
                <ButtonModal
                    className="btn__send--modal">
                    Salvar
                </ButtonModal>
            </div>
            <div className="modal-out"
            >
            </div>
        </div>
    )
}


