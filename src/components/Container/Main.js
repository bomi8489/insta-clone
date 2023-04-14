import React from 'react'
import { 
    MainBox,
    Contents,
    MainContentsBox,
    SidebarBox,
    NameAndNicknameBox,
    NickName,
    ProfilePictureBox,
    ConversionBox,
    FriendsRecommendBox,
    FriendsRecommendMenu,
    RecommendedFriends,
    Friend,
    Footer,
} from '../Presenter/MainPresenter'
import instaProfile from '../../image/insta-default-profile2.png';

const Main = () => {
  return (
    <MainBox>
        <div>
            <Contents>
                <MainContentsBox>
                    대충 수많은 피드글
                </MainContentsBox>
                <div>
                    <SidebarBox>
                        <div>
                            <ProfilePictureBox>
                                <img src={`${instaProfile}`} alt='profile'/>
                            </ProfilePictureBox>
                            <NameAndNicknameBox>
                                <div>
                                    <NickName>kim_water_hwan</NickName>
                                    <div>김수환</div>
                                </div>
                            </NameAndNicknameBox>
                            <ConversionBox>
                                <div>
                                    <button>전환</button>
                                </div>
                            </ConversionBox>
                        </div>
                        <FriendsRecommendBox>
                            <FriendsRecommendMenu>
                                <div>회원님을 위한 추천</div>
                                <div>모두 보기</div>
                            </FriendsRecommendMenu>
                            <RecommendedFriends>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                            </RecommendedFriends>
                        </FriendsRecommendBox>
                        <Footer>
                            <div>
                                <ul>
                                    <li><span>소개</span></li>
                                    <li><span>도움말</span></li>
                                    <li><span>홍보 센터</span></li>
                                    <li><span>API</span></li>
                                    <li><span>채용 정보</span></li>
                                    <li><span>개인정보처리방침</span></li>
                                    <li><span>약관</span></li>
                                    <li><span>위치</span></li>
                                    <li><span>언어</span></li>
                                    <li><span>Meta Verified</span></li>
                                </ul>
                            </div>
                            <div>© 2023 INSTAGRAM FROM META</div>
                        </Footer>
                    </SidebarBox>
                </div>
            </Contents>
        </div>
    </MainBox>
  )
}

export default Main
