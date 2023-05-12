import React, { useState } from 'react';
import {
    ProfileContenOutline,
    ProfileContent,
    ProfileNavComponent,
    ProfileNavDivBox,
    ProfileSavedContents,
} from '../Presenter/ProfilePresenter';
import userImage from '../../image/user.png';
import { GrGrid } from 'react-icons/gr';
import { RiBookmarkLine } from 'react-icons/ri';
import { MdOutlinePersonPin } from 'react-icons/md';
import { CiCamera } from 'react-icons/ci';

function ProfileNavBar() {
    const [check, setCheck] = useState([true, false, false]);
    const onNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLInputElement
        if (target.attributes[0].value === '게시물') {
            setCheck([true, false, false]);
        } else if (target.attributes[0].value === '저장') {
            setCheck([false, true, false]);
        } else if (target.attributes[0].value === '태그') {
            setCheck([false, false, true]);
        }
    }

    return (
        <>
            <div>
                <ProfileNavComponent check={check[0]}><GrGrid /><ProfileNavDivBox onClick={onNavClick} value='게시물'>&nbsp;게시물</ProfileNavDivBox></ProfileNavComponent>
                <ProfileNavComponent check={check[1]}><RiBookmarkLine /><ProfileNavDivBox onClick={onNavClick} value='저장'>&nbsp;저장됨</ProfileNavDivBox></ProfileNavComponent>
                <ProfileNavComponent check={check[2]}><MdOutlinePersonPin /><ProfileNavDivBox onClick={onNavClick} value='태그'>&nbsp;태그됨</ProfileNavDivBox></ProfileNavComponent>
            </div>
            <ProfileContent>
                {check[0] &&
                    <ProfileContenOutline>
                        <div><CiCamera size={62} /></div>
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
                        <div><img src={`${userImage}`} alt='userImage' /></div>
                        <div>내가 나온 사진</div>
                        <div>사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다.</div>
                    </ProfileContenOutline>
                }
            </ProfileContent>
        </>
    )
}

export default ProfileNavBar
