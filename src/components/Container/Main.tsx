import React from 'react'
import {
  MainBox,
  Contents,
} from '../Presenter/MainPresenter'
import Sidebar from './Sidebar'
import MainContents from './MainContents'
import { forwardRef } from 'react'

interface MainProps {

}

type Ref = HTMLDivElement

const Main = forwardRef<Ref, MainProps>((_, ref) => {
  return (
    <MainBox ref={ref}>
      <Contents>
        <MainContents />
        <Sidebar />
      </Contents>
    </MainBox>
  )
})

export default Main
