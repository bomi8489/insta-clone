import styled from 'styled-components'

const MainBox = styled.div`
margin-left: 336px;
height: 100vh;
width: 100% - 336px;
background-color: white;

@media screen and (max-width: 1919px) {
    margin-left: 245px;
    width: 100% - 245px;
}

@media screen and (max-width: 1264px){
    margin-left: 73px;
    width: 100% - 73px;
}
`

const Contents = styled.div`
height: 100vh;
width: 1013px;
display: flex;
padding-top: 4px;
margin: auto;
    > div:first-child {
        font-size: 77px;
    }
`

const MainContentsBox = styled.div`
height: 100%;
width: 630px;
margin-right: 64px;
`

const SidebarBox = styled.div`
height: 100%;
width: 319px;
padding-top: 30px;
margin-bottom: 30px;
    > div:first-child {
        margin-top: 16px;
        margin-bottom: 10px;
        display: flex;
        &:hover {
            cursor: pointer;
        }
    }
`

const ProfilePictureBox = styled.div`
height: 66px;
width: 62px;
display: flex;
flex-direction: column;
justify-content: center;
> img {
    height: 56px;
    width: 56px;
}
`

const NameAndNicknameBox = styled.div`
height: 66px;
> div {
    height: 100%;
    width: 221px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
        font-size: 14px;
        margin-left: 12px;
        opacity: 0.8;
    }
}
`

const NickName = styled.div`
    font-weight: bold;
`

const ConversionBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
> div {
    margin-left: 12px;
}
button {
    border: none;
    background-color: white;
    color: #4193EF;
    font-weight: bold;
    font-size: 12px;
    &:hover {
        cursor: pointer;
    }
}
`

const FriendsRecommendBox = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 12px;
`

const FriendsRecommendMenu = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
font-weight: bold;
padding-top: 4px;
padding-bottom: 4px;

> div:first-child {
    opacity: 0.6;
    font-size: 14px;
}
> div:nth-child(2) {
    font-size: 12px;
    &:hover {
        cursor: pointer;
    }
}
`

const RecommendedFriends = styled.div`
height: 250px;
width: 100%;
padding-top: 8px;
padding-bottom: 12px;
`

const Friend = styled.div`

`

const Footer = styled.div`
height: 73px;
width: 319px;
padding-bottom: 38px;
font-size: 12px;
opacity: 0.3;
font-weight: bold;

> div:first-child {
    height: 39px;
    width: 319px;
    margin-bottom: 16px;
}

li {
    display: inline-block;
    list-style: none;
    > span {
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
}
li::after {
    font-weight: bold;
    margin-left: 3px;
    margin-right: 3px;
    content: '·';
}
`

export { MainBox, Contents, MainContentsBox, SidebarBox, NameAndNicknameBox, NickName, ProfilePictureBox, ConversionBox, FriendsRecommendBox, RecommendedFriends, FriendsRecommendMenu, Friend, Footer, };