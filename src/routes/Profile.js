import React, { useCallback, useRef, useState } from 'react';
import NavBar from '../components/Container/NavBar';
import { 
    ModalBox,
    PrifileNavBox,
    ProfileBox,
    ProfileContentsBox,
    ProfileFooter,
    ProfileFooterContentsBox,
    ProfileHeader,
    ProfileHeaderContents,
    ProfilePage,
} from '../components/Presenter/ProfilePresenter';
import instaProfile from '../image/insta-default-profile2.png';
import ProfileNavBar from '../components/Container/ProfileNavBar';
import ProfileFooterList from '../components/Container/ProfileFooterList';
import {BsChevronDown} from 'react-icons/bs';
import {BsGearWide} from 'react-icons/bs';

function Profile() {
    let numArray = Array(6).fill(0).map((num, idx) => num + idx);
    const [init, setInit] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const navBarRef = useRef();
    const modalBoxRef = useRef();
    
    const onClickHomeBox = useCallback((e) => {
        if(navBarRef.current.contains(e.target)){
            setInit(false);
        } else {
            setInit(true);
        }
    }, [])

    const clickSetting = () => {
        setOpenModal(true);
    }

    const clickMocalBox = (e) => {
        let result = numArray.map(num => e.target === modalBoxRef.current.childNodes[0].childNodes[num]);
        if(result.reduce((cal, cur) => cal + cur) !== 1) setOpenModal(false);
    }

    return (
        <ProfilePage onClick={onClickHomeBox}>
            <NavBar init={init} ref={navBarRef} />
            <ProfileBox>
                <ProfileContentsBox>
                    <div>
                        <ProfileHeader>
                            <div>
                                <img src={`${instaProfile}`} alt='profile'/>
                            </div>
                            <ProfileHeaderContents>
                                <div>
                                    <div>b.__.omi</div>
                                    <div>프로필 편집</div>
                                    <div onClick={clickSetting}><BsGearWide size={24}/></div>
                                </div>
                                <div>
                                    <div>게시물 <span>0</span></div>
                                    <div>팔로우 <span>1</span></div>
                                    <div>팔로워 <span>1</span></div>
                                </div>
                                <div>권기범</div>
                            </ProfileHeaderContents>
                        </ProfileHeader>
                        <PrifileNavBox>
                            <ProfileNavBar />
                        </PrifileNavBox>
                    </div>
                </ProfileContentsBox>
                <ProfileFooter>
                    <div>
                        <ProfileFooterContentsBox>
                            <div>
                                <ProfileFooterList />
                            </div>
                            <div>
                                <li>한국어 <BsChevronDown /></li>
                                <li>© 2023 Instagram from Meta</li>
                            </div>
                        </ProfileFooterContentsBox>
                    </div>
                </ProfileFooter>
            </ProfileBox>
            {openModal && 
            <ModalBox onClick={clickMocalBox} ref={modalBoxRef}>
                <div>
                    <div>앱 및 웹사이트</div>
                    <div>QR 코드</div>
                    <div>알림</div>
                    <div>설정 및 개인정보</div>
                    <div>관리 감독</div>
                    <div>로그아웃</div>
                    <div>취소</div>
                </div>
            </ModalBox>
            }
        </ProfilePage>
    )
}

export default Profile;
