import styled from "styled-components";
import { ProfileNavDivBoxProps } from "../../types";

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
display: flex;
justify-content: center;
> div:first-child{
    margin: auto;
    > img {
        height: 150px;
        width: 150px;
    }
}
img {
    height: 150px;
    width: 150px;
}
`

const ProfileHeaderContents = styled.div`
display: flex;
flex-direction: column;
width: 613px;

> div {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
}

> div:first-child {
    > div:first-child {
        font-size: 20px;
    }
    > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        width: 106px;
        height: 32px;
        margin-left: 20px;
        font-weight: bold;
        background-color: #EFEFEF;
        border-radius: 10px;
        &:hover {
            background-color: #DBDBDB;
            cursor: pointer;
        }
    }
    > div:last-child {
        margin-left: 5px;
        > svg {
            padding: 8px;
        }
        &:hover {
            cursor: pointer;
        }
    }
}

> div:nth-child(2){
    > div {
        margin-right: 40px;
        > span {
            font-weight: bold;
        }
    }
    > div:nth-child(2) {
        &:hover {
            cursor: pointer;
        }
    }
    > div:nth-child(3) {
        &:hover {
            cursor: pointer;
        }
    }
}

> div:last-child {
    margin-bottom: 0;
    font-weight: bold;
    font-size: 14px;
}
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

const ProfileNavComponent = styled.li<{ check: ConstrainBoolean }>`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
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

const ProfileNavDivBox = styled.div<ProfileNavDivBoxProps>`
display: flex;
justify-content: center;
align-items: center;
height: 51px;
`

const ProfileContent = styled.div`
display: flex;
justify-content: center;
`

const ProfileContenOutline = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
max-width: 350px;
margin: 60px 44px;

> div:first-child {
    svg {
        &:hover {
            cursor: pointer;
        }
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
        color: black;
        cursor: pointer;
    }
}
`

const ProfileSavedContents = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> div {
    display: flex;
    width: 935px;
}

> div:first-child {
    margin: 32px 0 16px 0;
    justify-content: space-between;
    > div:first-child {
        font-size: 12px;
        opacity: 0.7;
    }
    > div:last-child {
        color: #4193EF;
        font-size: 14px;
        font-weight: bold;
        &:hover {
            color: black;
            cursor: pointer;
        }
    }
}

> div:last-child {
    flex-direction: column-reverse;
    background: linear-gradient(to top, #838383, white);
    height: 300px;
    width: 300px;
    border: solid 1px #DBDBDB;
    > div {
        padding: 20px 20px 15px 20px;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }

&:hover {
    opacity: 0.3;
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

const ModalBox = styled.div`
height: 100vh;
width: 100vw;
background-color: #595959;
position: fixed;
left: 0;
top: 0;
z-index: 999;
background-color: rgba(0, 0, 0, 0.6);
> div {
    position: fixed;
    left: 39%;
    top: 33%;
    background-color: white;
    height: 336px;
    width: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    > div {
        height: 48px;
        font-size: 14px;
        border-bottom: solid 1px #DBDBDB;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
        }
    }
    > div:last-child {
        border-bottom: none;
    }
}
`

export {
    ProfilePage,
    ProfileBox,
    ProfileContentsBox,
    ProfileSavedContents,
    ProfileFooter,
    ProfileHeader,
    ProfileHeaderContents,
    PrifileNavBox,
    ProfileNavComponent,
    ProfileNavDivBox,
    ProfileContent,
    ProfileContenOutline,
    ProfileFooterContentsBox,
    FooterList,
    ModalBox,
}