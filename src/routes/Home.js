import React, {useRef, useState, useCallback } from 'react'
import NavBar from '../components/Container/NavBar'
import Main from '../components/Container/Main'
import styled from 'styled-components'

const HomeBox = styled.div`
`

function Home() {
  const [init, setInit] = useState(false);
  const navBarRef = useRef();
  const mainRef = useRef();

  const onClickHomeBox = useCallback((e) => {
    if(navBarRef.current.contains(e.target)){
      setInit(false);
    } else {
      setInit(true);
    }
  }, [])

  return (
    <HomeBox onClick={onClickHomeBox}>
        <NavBar init={init} ref={navBarRef} />
        <Main ref={mainRef} />
    </HomeBox>
  )
}

export default Home
