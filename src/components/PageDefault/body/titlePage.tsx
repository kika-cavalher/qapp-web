import { PagesProps } from '../../../types/defaultPages';
import './style.scss';

export function TitlePage({titlePage}: PagesProps) {
    return (
        <div className='page-title'>
            <h1>{titlePage}</h1>
        </div>
    )
}