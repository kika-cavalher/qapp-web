import { useContext } from 'react';

import { AuthContext } from '../../../contexts/UserContext';

import FullLogo from '../logo/fullLogo';
import './style.scss'

export function TopMenu() {

    const { authenticated } = useContext(AuthContext)

    return (
        <div id="component--top-menu">
            <FullLogo />
            </div>
    )
}