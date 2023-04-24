import React, { useCallback, useRef, useState } from 'react';
import NavBar from '../components/Container/NavBar';
import { 
    PrifileNavBox,
    ProfileBox,
    ProfileContent,
    ProfileContentsBox,
    ProfileFooter,
    ProfileHeader,
    ProfilePage,
} from '../components/Presenter/ProfilePresenter';
import ProfileNavBar from '../components/Container/ProfileNavBar';

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
                            {/* <ProfileNavComponent>게시물</ProfileNavComponent>
                            <ProfileNavComponent>저장됨</ProfileNavComponent>
                            <ProfileNavComponent>태그됨</ProfileNavComponent> */}
                        </PrifileNavBox>
                        <ProfileContent>3</ProfileContent>
                    </div>
                </ProfileContentsBox>
                <ProfileFooter></ProfileFooter>
            </ProfileBox>
        </ProfilePage>
    )
}

export default Profile;
