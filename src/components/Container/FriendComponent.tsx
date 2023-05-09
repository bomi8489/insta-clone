import React from 'react'
import {
    FriendBox,
    FriendProfilePhotoBox,
    FriendNameAndNicknameBox,
    FriendNickName,
    Follow,
} from '../Presenter/FriendComponentPresenter'
import instaProfile from '../../image/insta-default-profile2.png';

interface FriendComponentProps {
    nickname: String;
}

const FriendComponent = ({ nickname }: FriendComponentProps) => {
    return (
        <FriendBox>
            <FriendProfilePhotoBox>
                <img src={`${instaProfile}`} alt='profile' />
            </FriendProfilePhotoBox>
            <FriendNameAndNicknameBox>
                <FriendNickName>{nickname}</FriendNickName>
                <div>회원님을 팔로우합니다</div>
            </FriendNameAndNicknameBox>
            <Follow>
                <div>
                    <button>팔로우</button>
                </div>
            </Follow>
        </FriendBox>
    )
}

export default FriendComponent
