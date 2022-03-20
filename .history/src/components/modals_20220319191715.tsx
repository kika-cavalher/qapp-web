import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react"

export interface ModalHandles {
    openModal: () => void;
}

const Modals: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const abbreviationRef = useRef<HTMLInputElement>(null);
    const describeRef = useRef<HTMLInputElement>(null);

    
    const openModal = useCallback(() => {
        setVisible(true);
    }, []);

    const [visible, setVisible] = useState(true);
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
                    <input className="modal-content--title"
                    ref={titleRef}
                    type="text"
                    placeholder="Digite o nome do projeto">
                    </input>
                    <input className="modal-content--title"
                    ref={abbreviationRef}
                    type="text"
                    placeholder="Digite o nome do projeto">
                    </input>
                    <input className="modal-content--title"
                    ref={describeRef}
                    type="text"
                    placeholder="Digite o nome do projeto">
                    </input>

                    <button className="btn--modal">Salvar</button>

                </form>
            </div>
        </div>
    )
}

export default forwardRef(Modals);
