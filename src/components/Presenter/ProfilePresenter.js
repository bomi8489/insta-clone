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

const ProfileHeader = styled.div`
height: 150px;
margin-bottom: 44px;
`

const PrifileNavBox = styled.div`
height: 52px;
border-top: solid 1px #DBDBDB;
> div:first-child {
    display: flex;
    justify-content: center;
    >li {
        margin-right: 35px;
        margin-left: 30px;
    }
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
display: flex;
justify-content: center;
`

const ProfileContenOutline = styled.div`
display: flex;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 298px;
margin: 60px 44px;

> div:first-child {
    &:hover {
        cursor: pointer;
    }
}

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
    
const ProfileFooter = styled.div`
> div {
    height: 134px;
    padding: 0 16px;
}
`

const ProfileFooterContentsBox = styled.div`
display: flex;
flex-direction: column;
> div {
    display: flex;
    justify-content: center;
    > li {
        list-style: none;
        margin: 0 8px 12px 8px;
        font-size: 12px;
        opacity: 0.6;
    }
}

> div:first-child {
    margin-top: 24px;
}
`

const FooterList = styled.li`
&:hover {
    cursor: pointer;
    text-decoration: underline;
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
    ProfileFooterContentsBox,
    FooterList,
}