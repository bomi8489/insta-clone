import React from 'react'
import { 
    MainBox,
    Contents,
} from '../Presenter/MainPresenter'
import Sidebar from './Sidebar'
import MainContents from './MainContents'
import { forwardRef } from 'react'

const Main = forwardRef((_, ref) => {
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
