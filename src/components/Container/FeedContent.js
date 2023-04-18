import React, { useEffect, useRef, useState } from 'react'
import { 
    Feed, 
    FeedFooter, 
    FeedHeader, 
    PictureAndNickname,
    UserName,
    UploadTime,
    FeedPicture,
    PictureBox,
    IconsContainer, 
    LikeContainer, 
    CommentsContainer, 
    Comments, 
    CommentBox,
    MoreComment,
    WriteComment,
} from '../Presenter/MainContentsPresenter';
import {RxDotsHorizontal} from 'react-icons/rx';
import {FiHeart, FiSend} from 'react-icons/fi'
import {FaRegComment, FaRegHeart} from 'react-icons/fa'
import {RiBookmarkLine} from 'react-icons/ri'
import {CiFaceSmile} from 'react-icons/ci'
import {FaHeart} from 'react-icons/fa'
import instaProfile from '../../image/insta-default-profile2.png';
import { LeftBtn, RightBtn } from '../Presenter/StoryComponentPresenter';
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'

const FeedContent = ({user, testComments, picture}) => {
    const [text, setText] = useState("");
    const [likeBtn, setLikeBtn] = useState(false);
    const [position, setPosition] = useState(0);
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setText("");
    }

    const onLikeClick = (e) => {
        setLikeBtn(prev => !prev);
        console.log(e.target.style)
    }

        const clickLeftBtn = () => {
        if(position > -468) {
            setPosition(0);
        }
        else setPosition(prev => prev + 468);
    }

    const clickRightBtn = () => {
        if(position <= -468) {
            setPosition(-468)
        }
        else setPosition(prev => prev - 468)
    }

    useEffect(() => {
        rightBtnRef.current.parentNode.children[2].style = `
        transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s; transform: translateX(${position}px);
        `;
    },[position])

    useEffect(() => {
        leftBtnRef.current.parentNode.children[2].style = `
        transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s; transform: translateX(${position}px);
        `;
    },[position])

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
                <LeftBtn onClick={clickLeftBtn} ref={leftBtnRef}>
                    {position !== 0 && 
                    <AiFillLeftCircle color='#E6E2DA'/>
                    }
                </LeftBtn>
                <RightBtn onClick={clickRightBtn} ref={rightBtnRef}>
                    {position > -468 &&
                    <AiFillRightCircle color='#E6E2DA'/>
                    }
                </RightBtn>
                <PictureBox>
                    {picture.map((pic, idx) => (
                        <img key={idx} src={pic} alt='feed pic'/>
                    ))}
                </PictureBox>
            </FeedPicture>
            <FeedFooter>
                <IconsContainer likeBtn={likeBtn}>
                    <div onClick={onLikeClick}>
                        {(likeBtn === false) ? <FaRegHeart /> : <FaHeart color='#EB4649' />}
                    </div>
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
                            <Comments key={idx2}><div><span>{testComments[idx2][0]}</span><span>{testComments[idx2][1]}</span></div><FiHeart /></Comments>
                        ))}
                    </CommentBox>
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