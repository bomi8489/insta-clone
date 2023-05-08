import styled from "styled-components"

const FriendBox = styled.div`
display: flex;
flex-direction: row;
padding-top: 8px;
padding-bottom: 8px;
&:hover {
    cursor: pointer;
}
`

const FriendProfilePhotoBox = styled.div`
height: 34px;
width: 34px;
flex-direction: column;
justify-content: center;
margin-right: 10px;
padding-left: 5px;
> img {
    height: 32px;
    width: 32px;
    
}
`

const FriendNameAndNicknameBox = styled.div`
height: 34px;
width: 223px;
display: flex;
flex-direction: column;
justify-content: center;
> div {
    font-size: 12px;
}
> div:nth-child(2) {
    opacity: 0.6;
}
`

const FriendNickName = styled.div`
    font-weight: bold;
`

const Follow = styled.div`
height: 34px;
display: flex;
flex-direction: column;
justify-content: center;
> div {
    margin-left: 11px;
}
button {
    border: none;
    background-color: white;
    color: #4193EF;
    font-weight: bold;
    font-size: 12px;
    &:hover {
        cursor: pointer;
        color: black;
    }
}
`

export { FriendBox, FriendProfilePhotoBox, FriendNameAndNicknameBox, FriendNickName, Follow, }