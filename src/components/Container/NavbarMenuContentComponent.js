import React from 'react'
import { MenuContents } from '../Presenter/NavBarPresenter'

const NavbarMenuContentComponent = ({iconProp, text}) => {
    return (
        <MenuContents>
            {iconProp}
            <div>{text}</div>
        </MenuContents>
    )
}

export default NavbarMenuContentComponent
