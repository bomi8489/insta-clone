import React from 'react'
import { 
    MainBox,
    Contents,
    FriendsRecommendBox,
} from '../Presenter/MainPresenter'

function Main() {
  return (
    <MainBox>
        <Contents>
            <div>
                Main
            </div>
            <div>
                <FriendsRecommendBox>
                    친구추천
                </FriendsRecommendBox>
            </div>
        </Contents>
    </MainBox>
  )
}

export default Main
