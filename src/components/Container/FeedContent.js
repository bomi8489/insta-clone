import React, { useState } from 'react'
import { 
    Feed, 
    FeedFooter, 
    FeedHeader, 
    PictureAndNickname,
    UserName,
    UploadTime,
    FeedPicture,
    IconsContainer, 
    LikeContainer, 
    CommentsContainer, 
    WriteComment,
} from '../Presenter/MainContentsPresenter';
import {RxDotsHorizontal} from 'react-icons/rx';
import {FiHeart, FiSend} from 'react-icons/fi'
import {FaRegComment} from 'react-icons/fa'
import {RiBookmarkLine} from 'react-icons/ri'
import {CiFaceSmile} from 'react-icons/ci'
import instaProfile from '../../image/insta-default-profile2.png';

const FeedContent = ({user}) => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setText("");
    }

    return (
        <Feed>
            <FeedHeader>
                <PictureAndNickname>
                    <img src={`${instaProfile}`} alt='profile'/>
                    <UserName>{user[0]}&nbsp;</UserName>
                    <UploadTime>&nbsp;{user[1]}</UploadTime>
                </PictureAndNickname>
                <div>
                    <RxDotsHorizontal />
                </div>
            </FeedHeader>
            <FeedPicture></FeedPicture>
            <FeedFooter>
                <IconsContainer>
                    <div><FiHeart /></div>
                    <div><FaRegComment style={{transform: 'scaleX(-1)'}}/></div>
                    <div><FiSend /></div>
                    <div><RiBookmarkLine /></div>
                </IconsContainer>
                <LikeContainer><span>{user[2]}</span>이 좋아합니다</LikeContainer>
                <CommentsContainer>
                    <div>
                        
                    </div>
                </CommentsContainer>
                <WriteComment>
                    <form onSubmit={onSubmit}>
                        <input 
                            type='text'
                            value={text}
                            onChange={onChange}
                            placeholder='댓글 달기...'
                        />
                        <CiFaceSmile />
                    </form>
                </WriteComment>
            </FeedFooter>
        </Feed>
    )
}

export default FeedContent