import React from 'react'
import {
    SidebarBox,
    NameAndNicknameBox,
    NickName,
    ProfilePictureBox,
    ConversionBox,
    FriendsRecommendBox,
    FriendsRecommendMenu,
    RecommendedFriends,
    Footer,
} from '../Presenter/SideBarPresenter'
import FriendComponent from './FriendComponent';
import FooterList from './FooterList';
import instaProfile from '../../image/insta-default-profile2.png';

const Sidebar = () => {
    const RecommendedFriendArray = [
        "Amu_Dog1", "Amu_Dog2", "Amu_Dog3", "Amu_Dog4", "Amu_Dog5"
    ]
    return (
        <div>
            <SidebarBox>
                <div>
                    <ProfilePictureBox>
                        <img src={`${instaProfile}`} alt='profile'/>
                    </ProfilePictureBox>
                    <NameAndNicknameBox>
                        <div>
                            <NickName>b.__.omi</NickName>
                            <div>권기범</div>
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
                        {RecommendedFriendArray.map((friend, idx) => (
                            <FriendComponent key={idx} nickname={friend}/>
                        ))}
                    </RecommendedFriends>
                </FriendsRecommendBox>
                <Footer>
                    <FooterList/>
                </Footer>
            </SidebarBox>
        </div>
    )
}

export default Sidebar
