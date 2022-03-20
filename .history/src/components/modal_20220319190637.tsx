import '../styles/components/modal.scss'

export function ModalAdd () {

    const handleClickOutside = (event : MouseEvent)=> {
        let overlay = document.getElementById("overlay");
        let modal = document.getElementById("modal");
    
        if (!modal?.contains(event.target as HTMLDivElement)) {
            modal!.style.display = 'none';
            overlay!.style.display = 'none';
            document.removeEventListener('click', handleClickOutside, false);
        }
    }


    const openModal = () => {
        let overlay = document.getElementById("overlay");
        let modal = document.getElementById("modal");
        overlay!.style.display = 'flex'
        modal!.style.display = 'flex'
        document.addEventListener('click', handleClickOutside);
    }


    return (
        <>
        <div className="modal-overlay" id="overlay">
            <div className="modal" id="modal">
                <div className="modal-header">
                    <h1>Adicionar um novo Projeto</h1>
                </div>
                <div className="modal-content">
                    <form className="modal-content--form">

                    </form>
                </div>
                <div className="modal-footer">
                    footer
                </div>
            </div>
        </div>
            <button onClick={() => openModal()}>Porraa</button>
        </>
    )
};