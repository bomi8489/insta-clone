import React, { useState } from 'react';
import { 
    ProfileContenOutline, 
    ProfileContent, 
    ProfileNavComponent,
    ProfileSavedContents, 
} from '../Presenter/ProfilePresenter';
import userImage from '../../image/user.png'
import {GrGrid} from 'react-icons/gr';
import {RiBookmarkLine} from 'react-icons/ri';
import {MdOutlinePersonPin} from 'react-icons/md';
import {CiCamera} from 'react-icons/ci';

function ProfileNavBar() {
    const [check, setCheck] = useState([true, false, false]);
    const onNavClick = (e) => {
        if(e.target.attributes.value.value === '게시물') {
            setCheck([true, false, false]);
        } else if(e.target.attributes.value.value === '저장') {
            setCheck([false, true, false]);
        } else if(e.target.attributes.value.value === '태그') {
            setCheck([false, false, true]);
        }
    }

    return (
        <>
            <div>
                <ProfileNavComponent onClick={onNavClick} check={check[0]} value='게시물'><GrGrid />&nbsp;게시물</ProfileNavComponent>
                <ProfileNavComponent onClick={onNavClick} check={check[1]} value='저장'><RiBookmarkLine />&nbsp;저장됨</ProfileNavComponent>
                <ProfileNavComponent onClick={onNavClick} check={check[2]} value='태그'><MdOutlinePersonPin />&nbsp;태그됨</ProfileNavComponent>
            </div>
            <ProfileContent>
                {check[0] && 
                <ProfileContenOutline>
                    <div><CiCamera size={62}/></div>
                    <div>사진 공유</div>
                    <div>사진을 공유하면 회원님의 프로필에 표시됩니다.</div>
                    <div>첫 사진 공유하기</div>
                </ProfileContenOutline>
                }
                {check[1] && 
                <ProfileSavedContents>
                    <div>
                        <div>저장한 내용은 회원님만 볼 수 있습니다</div>
                        <div>+ 새 컬렉션</div>
                    </div>
                    <div><div>모든 게시물</div></div>
                </ProfileSavedContents>
                }
                {check[2] &&
                <ProfileContenOutline>
                    <div><img src={`${userImage}`} alt='userImage'/></div>
                    <div>내가 나온 사진</div>
                    <div>사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다.</div>
                </ProfileContenOutline>
                }
            </ProfileContent>
        </>
    )
}

export default ProfileNavBar
