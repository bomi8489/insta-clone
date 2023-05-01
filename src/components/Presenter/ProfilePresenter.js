import styled from "styled-components";

const ProfilePage = styled.div`
`

const ProfileBox = styled.div`
margin-left: 336px;

//추후 100%로 변경
height: 100vh;
background-color: white;
`

const ProfileContentsBox = styled.div`
height: 835px;

> div {
    height: 805px;
    width: 935px;
    padding: 30px 20px 0px 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
}
`

const ProfileFooter = styled.div`
height: 134px;
`

const ProfileHeader = styled.div`
height: 150px;
margin-bottom: 44px;
`

const PrifileNavBox = styled.div`
height: 52px;
border-top: solid 1px #DBDBDB;
display: flex;
justify-content: center;
> li {
    margin-right: 60px;
}

> li:last-child {
    margin-right: 0px;
}
`

const ProfileNavComponent = styled.li`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
height: 51px;
width: 57px;
font-size: 13px;
font-weight: bold;
opacity: ${props => props.check ? 1.0 : 0.5};
border-top: ${props => props.check ? 'solid 1px black' : 'solid 1px none'};
margin-top: ${props => props.check ? '-1px' : '0px'};
&:hover {
    cursor: pointer;
}

> svg {
    height: 13px;
    width: 13px;
}
`

const ProfileContent = styled.div`
height: 308px;
display: flex;
justify-content: center;
`

const ProfileContenOutline = styled.div`
display: flex;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 188px;
width: 298px;
margin: 60px 44px;

> div:nth-child(2) {
    font-size: 30px;
    font-weight: bold;
    margin: 24px 0;
}

> div:nth-child(3) {
    font-size: 13px;
    margin-bottom: 24px;
}

> div:nth-child(4) {
    color: #4193EF;
    font-size: 13px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
}
`

export {
    ProfilePage,
    ProfileBox,
    ProfileContentsBox,
    ProfileFooter,
    ProfileHeader,
    PrifileNavBox,
    ProfileNavComponent,
    ProfileContent,
    ProfileContenOutline,
}