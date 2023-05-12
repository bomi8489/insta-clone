import React from 'react'
import {
  MainBox,
  Contents,
} from '../Presenter/MainPresenter';
import Sidebar from './Sidebar';
import MainContents from './MainContents';
import { forwardRef } from 'react';
import { Ref } from '../../types';

const Main = forwardRef<Ref>((_, ref) => {
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
