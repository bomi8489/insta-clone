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
/* :first-child {
    opacity: 1.0;
    border-top: solid 1px black;
} */
border-top: ${props => props.check ? 'solid 1px black' : 'solid 1px none'};
&:hover {
    cursor: pointer;
}
`

const ProfileContent = styled.div`
height: 308px;
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
}