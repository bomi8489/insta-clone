import React, { useRef, useState, useCallback } from 'react'
import NavBar from '../components/Container/NavBar'
import Main from '../components/Container/Main'
import styled from 'styled-components'

const HomeBox = styled.div`
`

function Home() {
  const [init, setInit] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const onClickHomeBox = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (navBarRef.current?.contains((e.target as HTMLInputElement))) {
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
