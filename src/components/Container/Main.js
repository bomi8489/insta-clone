import React from 'react'
import { 
    MainBox,
    Contents,
} from '../Presenter/MainPresenter'
import Sidebar from './Sidebar'
import MainContents from './MainContents'

const Main = () => {
  return (
    <MainBox>
        <Contents>
            <MainContents />
            <Sidebar />
        </Contents>
    </MainBox>
  )
}

export default Main
