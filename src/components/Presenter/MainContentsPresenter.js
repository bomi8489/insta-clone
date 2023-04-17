import styled from 'styled-components'

const MainContentsBox = styled.div`
margin-right: 64px;
> div:first-child {
    margin: -4px;
    height: 16px
}
`

const StoryBox = styled.div`
height: 85px;
width: 630px;
padding-top: 16px;
padding-bottom: 16px;
margin-top: 16px;
`

const FeedBox = styled.div`
display: flex;
flex-direction: column;
`

const FeedContainer = styled.div`
width: 470px;
margin: 0 auto;
margin-top: 16px;
`

const Feed = styled.div`
height: 807px;
padding-bottom: 20px;
border-bottom: solid 1px #DBDBDB;
margin-bottom: 12px;
display: flex;
flex-direction: column;
`

const FeedHeader = styled.div`
height: 56px;
display: flex;
justify-content: space-between;
> div:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: -9px;
}
svg {
    height: 20px;
    width: 20px;
    padding: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
}
`

const PictureAndNickname = styled.div`
width: 422px;
height: 40px;
margin: 8px 4px 8px 5px;
display: flex;
align-items: center;
font-weight: bold;
font-size: 13px;
img {
    height: 32px;
    width: 32px;
    &:hover {
        cursor: pointer;
    }
}
`

const UserName = styled.div`
margin-left: 10px;
opacity: 0.8;
&:hover {
    cursor: pointer;
    opacity: 0.5;
}
`

const UploadTime = styled.div`
opacity: 0.5;
::before {
    content: '•';
    margin-bottom: 4px;
}
`

const FeedPicture = styled.div`
height: 587px;
border: solid 1px;
`

const FeedFooter = styled.div`
height: 164px;
display: flex;
flex-direction: column;
`

const IconsContainer = styled.div`
height: 40px;
margin-top: 4px;
padding-bottom: 6px;
display: flex;
> div {
    height: 40px;
    width: 40px;
    > svg {
        height: 24px;
        width: 24px;
        padding: 8px;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
}
> div:nth-child(1) {
    margin-left: -8px;
}
> div:last-child {
    margin-left: 328px;
    margin-right: -10px;
}
`

const LikeContainer = styled.div`
height: 18px;
margin-bottom: 8px;
font-size: 14px;
> span {
    font-weight: bold;
}
`

const CommentsContainer = styled.div`
height: 70px;
display: flex;
flex-direction: column;
`

const WriteComment = styled.div`
height: 18px;

> form {
    display: flex;
    align-items: center;
    svg {
        height: 14px;
        width: 14px;
        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }
}

input {
    width: 457px;
    height: 18px;
    border: none;
    font-size: 14px;
    :focus {
        outline: none;
    }
}
`

export { MainContentsBox, StoryBox, FeedBox, FeedContainer, Feed, FeedHeader, PictureAndNickname, UserName, UploadTime, FeedPicture, FeedFooter, IconsContainer, LikeContainer, CommentsContainer, WriteComment, };