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
                    <p className="modal-content--title__title">
                        Titulo
                    </p>
                    <input className="modal-content--title__input"
                    ref={titleRef}
                    type="text"
                    placeholder="Digite o nome do projeto">
                    <p className="modal-content--abbreviation__title">
                        Abreviação
                    </p>
                    </input>
                    <input className="modal-content--abbreviation__input"
                    ref={abbreviationRef}
                    type="text"
                    placeholder="Digite uma abreviação de 3 caracteres">
                    </input>
                    <p className="modal-content--describe__title">
                        Descrição
                    </p>
                    <input className="modal-content--describe_input"
                    ref={describeRef}
                    type="text"
                    placeholder="Digite oque se refere esse projeto">
                    </input>

                    <button onClick={handleCloseModal} className="btn--modal">Salvar</button>

                </form>
            </div>
        </div>
    )
}

export default forwardRef(Modals);
