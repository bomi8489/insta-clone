import React, { useCallback, useRef, useState } from 'react';
import NavBar from '../components/Container/NavBar';
import { 
    PrifileNavBox,
    ProfileBox,
    ProfileContenOutline,
    ProfileContent,
    ProfileContentsBox,
    ProfileFooter,
    ProfileFooterContentsBox,
    ProfileHeader,
    ProfilePage,
} from '../components/Presenter/ProfilePresenter';
import ProfileNavBar from '../components/Container/ProfileNavBar';
import {CiCamera} from 'react-icons/ci';

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
                            <div></div>
                            <div></div>
                        </ProfileHeader>
                        <PrifileNavBox>
                            <ProfileNavBar />
                        </PrifileNavBox>
                        <ProfileContent>
                            <ProfileContenOutline>
                                <div><CiCamera size={62}/></div>
                                <div>사진 공유</div>
                                <div>사진을 공유하면 회원님의 프로필에 표시됩니다.</div>
                                <div>첫 사진 공유하기</div>
                            </ProfileContenOutline>
                        </ProfileContent>
                    </div>
                </ProfileContentsBox>
                <ProfileFooter>
                    <div>
                        <ProfileFooterContentsBox>
                            <div>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </div>
                            <div>
                                <li>2</li>
                                <li>2</li>
                            </div>
                        </ProfileFooterContentsBox>
                    </div>
                </ProfileFooter>
            </ProfileBox>
        </ProfilePage>
    )
}

export default Profile;
