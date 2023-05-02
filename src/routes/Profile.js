import React, { useCallback, useRef, useState } from 'react';
import NavBar from '../components/Container/NavBar';
import { 
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
    const [init, setInit] = useState(false);
    const navBarRef = useRef();
    
    const onClickHomeBox = useCallback((e) => {
        if(navBarRef.current.contains(e.target)){
            setInit(false);
        } else {
            setInit(true);
        }
    }, []);

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
                                    <div><BsGearWide size={24}/></div>
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
        </ProfilePage>
    )
}

export default Profile;
