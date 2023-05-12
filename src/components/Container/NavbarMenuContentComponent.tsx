import React, { forwardRef } from 'react'
import { MenuContents } from '../Presenter/NavBarPresenter'
import { NavbarMenuContentProps, Ref } from '../../types'

const NavbarMenuContentComponent = forwardRef<Ref, NavbarMenuContentProps>(({ searchBtn, iconProp, text, onClick }, ref?) => {
    return (
        <MenuContents onClick={onClick} searchBtn={searchBtn!} ref={ref}>
            {iconProp}
            <div>{text}</div>
        </MenuContents>
    )
})

export default NavbarMenuContentComponent