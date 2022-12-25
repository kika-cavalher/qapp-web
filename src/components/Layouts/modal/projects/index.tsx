import { useState } from 'react';
import { ButtonCloseModal } from '../../../Global/button/modal/close';
import { ButtonSend } from '../../../Global/button/send';

import './style.scss'

export default function ModalProject() {
    const [show, setShow] = useState(true)

    return (
        <>
            {show &&
                <div className='main--modal__project'>
                    <div className='container--modal__project'>
                        <div className='content--modal__header'>
                            <h1 className='title--modal__project'>Segmente os seus projetos para melhor gerir e organizar </h1>
                            <div className='content--modal__idProject'>
                                <h1 className='title--Idproduct'>Id do projeto</h1>
                                <h2 className='input--Idproduct'>TC001</h2>
                            </div>
                        </div>
                        <form className='content--modal__form'>
                            <div className='content--form__title'>
                                <p>Título</p>
                                <input
                                    type="text"
                                    placeholder="Escreva o titulo do projeto para identificar de forma rápida." />
                            </div>
                            <div className='content--form__describe'>
                                <p>Descrição</p>
                                <textarea 
                                    placeholder="Descreva o seu projeto para saber em detalhes sobre o objetivo do projeto e testes dentro deles." />
                            </div>
                            <ButtonSend />
                        </form>
                    </div>
                </div>
            }
        </>
    );
}
