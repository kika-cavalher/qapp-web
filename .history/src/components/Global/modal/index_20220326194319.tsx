import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import { CreateProjectProps, ListProps, ProjectProps } from "../../../types/project";
import { Button } from "../button";

import './style.scss'


const Modals: React.RefForwardingComponent<CreateProjectProps> = (props, ref) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const abbreviationRef = useRef<HTMLInputElement>(null);
    const describeRef = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useState(false);
    const [project, setProject] = useState<ProjectProps[]>([]);
    const [select, setSelect] = useState<ListProps>();
    
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

    function createProject(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setProject(allprojects => 
          [
            ...allprojects,
            {
              project,
              selecionado: false,
              id: uuidv4()
            }
          ]
        )
        setTarefa("");
      }

    return (
        <div className="modal-out">
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
                            placeholder="3 caracteres">
                            </input>
                        </div>
                    </div>
                    <div className="modal-content--describe">
                        <p className="modal-content--describe__title">Descrição</p>
                        <input className="modal-content--describe_input"
                        ref={describeRef}
                        type="text-area"
                        placeholder="Digite oque se refere esse projeto">
                        </input>
                    </div>
                    <div className="btn">
                        <Button 
                        onClick={handleCloseModal}
                        className="btn__send"
                        >Salvar</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
       
    )
}

