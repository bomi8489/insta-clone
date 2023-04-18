import React from 'react'
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
    Comments, 
    CommentBox,
    MoreComment,
    WriteComment,
} from '../Presenter/MainContentsPresenter';
import {RxDotsHorizontal} from 'react-icons/rx';
import {FiSend} from 'react-icons/fi'
import {FaRegComment} from 'react-icons/fa'
import {RiBookmarkLine} from 'react-icons/ri'
import instaProfile from '../../image/insta-default-profile2.png';
import Comment from './Comment';
import FeedLikeBtn from './FeedLikeBtn';
import FeedPhoto from './FeedPhoto';
import WriteComponent from './WriteComponent';

const FeedContent = ({user, testComments, picture}) => {

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
            <FeedPicture>
                <FeedPhoto picture={picture}/>
            </FeedPicture>
            <FeedFooter>
                <IconsContainer>
                    <div><FeedLikeBtn /></div>
                    <div><FaRegComment style={{transform: 'scaleX(-1)'}}/></div>
                    <div><FiSend /></div>
                    <div><RiBookmarkLine /></div>
                </IconsContainer>
                <LikeContainer><span>{user[2]}</span>이 좋아합니다</LikeContainer>
                <CommentsContainer>
                    <div>
                        <span>{user[0]}</span> <span>test 피드입니다</span>
                    </div>
                    {testComments.length > 1 && <MoreComment>댓글 {testComments.length}개 모두 보기</MoreComment>}
                    <CommentBox>
                        {testComments.filter((_, idx) => (
                            idx <= 1
                        )).map((_, idx2) => (
                            <Comments key={idx2}>
                                <Comment testComments={testComments} idx={idx2}/>
                            </Comments>
                        ))}
                    </CommentBox>
                </CommentsContainer>
                <WriteComment>
                    <WriteComponent />
                </WriteComment>
            </FeedFooter>
        </Feed>
    )
}

export default FeedContent