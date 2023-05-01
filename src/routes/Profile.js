import React, { useCallback, useRef, useState } from 'react';
import NavBar from '../components/Container/NavBar';
import { 
    PrifileNavBox,
    ProfileBox,
    ProfileContentsBox,
    ProfileFooter,
    ProfileFooterContentsBox,
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
                        </PrifileNavBox>
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
