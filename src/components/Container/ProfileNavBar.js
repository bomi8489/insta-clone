import React, { useState } from 'react';
import { ProfileNavComponent } from '../Presenter/ProfilePresenter';
import {GrGrid} from 'react-icons/gr';
import {RiBookmarkLine} from 'react-icons/ri';
import {MdOutlinePersonPin} from 'react-icons/md'

function ProfileNavBar() {
    const [checkPost, setCheckPost] = useState(true);
    const [checkSaved, setCheckSaved] = useState(false);
    const [checkTaged, setCheckTaged] = useState(false);
    
    const onNavClick = (e) => {
        if(e.target.attributes.value.value === '게시물') {
            setCheckPost(true);
            setCheckSaved(false);
            setCheckTaged(false);
        } else if(e.target.attributes.value.value === '저장') {
            setCheckPost(false);
            setCheckSaved(true);
            setCheckTaged(false);
        } else if(e.target.attributes.value.value === '태그') {
            setCheckPost(false);
            setCheckSaved(false);
            setCheckTaged(true);
        }
    }

    return (
        <>
            <ProfileNavComponent onClick={onNavClick} check={checkPost} value='게시물'><GrGrid />&nbsp;게시물</ProfileNavComponent>
            <ProfileNavComponent onClick={onNavClick} check={checkSaved} value='저장'><RiBookmarkLine />&nbsp;저장됨</ProfileNavComponent>
            <ProfileNavComponent onClick={onNavClick} check={checkTaged} value='태그'><MdOutlinePersonPin />&nbsp;태그됨</ProfileNavComponent>
        </>
    )
}

export default ProfileNavBar
