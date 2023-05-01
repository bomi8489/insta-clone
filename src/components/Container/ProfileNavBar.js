import React, { useState } from 'react'
import { ProfileNavComponent } from '../Presenter/ProfilePresenter'

function ProfileNavBar() {
    const [checkPost, setCheckPost] = useState(true);
    const [checkSaved, setCheckSaved] = useState(false);
    const [checkTaged, setCheckTaged] = useState(false);
    
    const onNavClick = (e) => {
        if(e.target.innerText === '게시물') {
            setCheckPost(true);
            setCheckSaved(false);
            setCheckTaged(false);
        } else if(e.target.innerText === '저장됨') {
            setCheckPost(false);
            setCheckSaved(true);
            setCheckTaged(false);
        } else if(e.target.innerText === '태그됨') {
            setCheckPost(false);
            setCheckSaved(false);
            setCheckTaged(true);
        }
    }

    return (
        <>
            <ProfileNavComponent onClick={onNavClick} check={checkPost} value='게시물'>게시물</ProfileNavComponent>
            <ProfileNavComponent onClick={onNavClick} check={checkSaved} value='저장됨'>저장됨</ProfileNavComponent>
            <ProfileNavComponent onClick={onNavClick} check={checkTaged} value='태그됨'>태그됨</ProfileNavComponent>
        </>
    )
}

export default ProfileNavBar
