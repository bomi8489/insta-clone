import React from 'react'
import { ProfileNavComponent } from '../Presenter/ProfilePresenter'

function ProfileNavBar() {
    const navArray = ["게시물", "저장됨", "태그됨"];
    const onNavClick = (e) => {
        e.target.style = `
        opacity: 1;
        `
    }
    return (
        <>
            {navArray.map((nav, idx) => (
                <ProfileNavComponent onClick={onNavClick} key={idx}>
                {nav}
                </ProfileNavComponent>
            ))}
        </>
    )
}

export default ProfileNavBar
