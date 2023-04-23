import React, { useCallback, useRef, useState } from 'react'
import NavBar from '../components/Container/NavBar'

function Profile() {
    const [init, setInit] = useState(false);
    const navBarRef = useRef();

    const onClickHomeBox = useCallback((e) => {
        if(navBarRef.current.contains(e.target)){
        setInit(false);
        } else {
        setInit(true);
        }
    }, [])

    return (
        <div onClick={onClickHomeBox}>
            <NavBar init={init} ref={navBarRef}/>
            <div>asdf</div>
        </div>
    )
}

export default Profile
