import React, { forwardRef } from 'react'
import { MenuContents } from '../Presenter/NavBarPresenter'

interface NavbarMenuContentProps {
    searchBtn?: boolean;
    text: string;
    iconProp: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type Ref = HTMLDivElement;

const NavbarMenuContentComponent = forwardRef<Ref, NavbarMenuContentProps>(({ searchBtn, iconProp, text, onClick }, ref?) => {
    return (
        <MenuContents onClick={onClick} searchBtn={searchBtn!} ref={ref}>
            {iconProp}
            <div>{text}</div>
        </MenuContents>
    )
})

export default NavbarMenuContentComponent