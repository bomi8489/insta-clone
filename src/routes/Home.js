import React from 'react'
import NavBar from '../components/Container/NavBar'
import Main from '../components/Container/Main'
import styled from 'styled-components'

const HomeBox = styled.div`
`

function Home() {
  return (
    <HomeBox>
        <NavBar />
        <Main />
    </HomeBox>
  )
}

export default Home
