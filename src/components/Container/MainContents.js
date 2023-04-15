import React from 'react'
import { 
    FeedBox, 
    MainContentsBox,
    StoryBox
} from '../Presenter/MainContentsPresenter'
import StoryComponent from './StoryComponent'

const MainContents = () => {
  return (
    <MainContentsBox>
        <div></div>
        <StoryBox>
            <StoryComponent />
        </StoryBox>
        <FeedBox>
            대충 무언가 엄청난 피드
        </FeedBox>
    </MainContentsBox>
  )
}

export default MainContents
