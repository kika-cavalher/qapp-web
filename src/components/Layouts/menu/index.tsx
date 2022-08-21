import { useContext } from 'react';

import { AuthContext } from '../../../contexts/UserContext';

import MenuLogado from './menu-logado';
import { MenuMobile } from './menu-mobile';
import MenuWithoutLogin from './menu-withoutLogin';

import FullLogo from '../logo/fullLogo';
import './style.scss'

export function TopMenu() {

    const { authenticated } = useContext(AuthContext)

    return (
        <div id="component--top-menu">
            <FullLogo />
                {authenticated ? (<>
                 <MenuLogado />
                 <MenuMobile />
                </>
                ) : (
                    <MenuWithoutLogin />
                )}
            </div>
    )
}