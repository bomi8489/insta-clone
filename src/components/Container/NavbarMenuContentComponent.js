import React, { forwardRef } from 'react'
import { MenuContents } from '../Presenter/NavBarPresenter'

const NavbarMenuContentComponent = forwardRef(({searchBtn, iconProp, text, onClick}, ref) => {
    return (
        <MenuContents onClick={onClick} searchBtn={searchBtn} ref={ref}>
            {iconProp}
            <div>{text}</div>
        </MenuContents>
    )
})

export default NavbarMenuContentComponent