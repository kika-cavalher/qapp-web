import { useContext } from 'react';

import { AuthContext } from '../../../contexts/UserContext';

import MenuWithoutLogin from './menu-withoutLogin';

import FullLogo from '../logo/fullLogo';
import MenuLogado from './menu-logado';
import './style.scss'
import { MenuMobile } from './menu-mobile';

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