import React from 'react'
import { 
    FeedBox, 
    FeedContainer, 
    MainContentsBox,
    StoryBox
} from '../Presenter/MainContentsPresenter'
import StoryComponent from './StoryComponent'
import FeedContent from './FeedContent'
import loopy from '../image/loopy.png'
import loopy2 from '../image/loopy2.png'

const MainContents = () => {
  const userPostArray = [
    ["Test_User1", "1시간", "18명"], ["Test_User2", "5시간", "18명"], ["Test_User3", "1일", "18명"],
    ["Test_User4", "1일", "18명"], ["Test_User5", "1일", "18명"], ["Test_User6", "1일", "18명"],
    ["Test_User7", "2일", "18명"], ["Test_User8", "2일", "18명"], ["Test_User9", "2일", "18명"],
    ["Test_User10", "4일", "18명"], ["Test_User11", "4일", "18명"], ["Test_User12", "1주", "18명"],
    ["Test_User13", "1주", "18명"], ["Test_User14", "2주", "18명"], ["Test_User15", "2주", "18명"],
    ["Test_User16", "3주", "18명"], ["Test_User17", "3주", "18명"], ["Test_User18", "4주", "18명"],
  ];

  const testComments = [
    ["Kim_Water_Hwan", "사진이 마음에 들어요"], ["Kim_Water_Hwan", "퍼가요"], ["Kim_Water_Hwan", "퍼가요"], ["Kim_Water_Hwan", "싫어요"], ["Kim_Water_Hwan", "김수환바보"], ["Kim_Water_Hwan", "우와"], 
  ]

  const feedPicture = [
    loopy, loopy2
  ]

  return (
    <MainContentsBox>
        <div></div>
        <StoryBox>
          <StoryComponent />
        </StoryBox>
        <FeedBox>
          <FeedContainer>
            {userPostArray.map((user, idx) => (
              <FeedContent key={idx} user={user} testComments={testComments} picture={feedPicture}/>
            ))}
          </FeedContainer>
        </FeedBox>
    </MainContentsBox>
  )
}

export default MainContents
