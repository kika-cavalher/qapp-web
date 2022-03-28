import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react"
import '../styles/components/modals.scss'

export interface ModalHandles {
    openModal: () => void;
}

const Modals: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const abbreviationRef = useRef<HTMLInputElement>(null);
    const describeRef = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false);
    
    const openModal = useCallback(() => {
        setVisible(true);
    }, []);

    useImperativeHandle(ref, () => {
        return {
            openModal
        };
    });

    const handleCloseModal = useCallback(() => {
        setVisible(false);
    }, []);

    if(!visible) {
        return null;
    }
    return (
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
                            ref={titleRef}
                            type="text"
                            placeholder="Digite o nome do projeto">
                            </input>
                        </div>
                        <div className="modal-content--abbreviation">
                            <p className="modal--abbreviation">Abreviação</p>
                            <input className="modal--abbreviation__input"
                            ref={abbreviationRef}
                            type="text"
                            placeholder="Digite uma abreviação de 3 caracteres">
                            </input>
                        </div>
                    </div>
                    <div className="modal-content--describe">
                        <p className="modal-content--describe__title">Descrição</p>
                        <textarea className="modal-content--describe_input"
                        ref={describeRef}
                        type="text-area"
                        placeholder="Digite oque se refere esse projeto">
                        </textarea>
                    </div>
                    <div className="btn-modal">
                        <button onClick={handleCloseModal} className="btn--modal">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default forwardRef(Modals);
