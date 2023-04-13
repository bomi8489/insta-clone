import styled from 'styled-components'

const MainBox = styled.div`
margin-left: 336px;
height: 100vh;
width: 100% - 336px;
font-size: 77px;

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
width: fit-content;
display: flex;
margin: auto;
`

const FriendsRecommendBox = styled.div`
`

export { MainBox, Contents, FriendsRecommendBox, };