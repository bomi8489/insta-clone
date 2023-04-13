import styled from "styled-components";

const NavBarBox = styled.div`
background-color: white;
position: fixed;
height: 100vh;
width: 311px;
display: flex;
flex-direction: column;
padding-top: 8px;
padding-right: 12px;
padding-bottom: 20px;
padding-left: 12px;
border-right: solid 1px #DBDBDB;

@media screen and (max-width: 1919px){
    width: 220px;
}

@media screen and (max-width: 1264px){
    width: 48px;
}
`

const Header = styled.div`
height: 92px;
width: 100%;
`

const ImageBox = styled.div`
height: 36px;
width: 287px;
padding-top: 25px;
padding-right: 12px;
padding-bottom: 14px;
padding-left: 9px;
display: flex;
> svg {
    display: none;
}

@media screen and (max-width: 1919px){
    width: 196px;
}

@media screen and (max-width: 1264px){
    width: 24px;
    height: 32px;
    padding: 12px;
    > img {
        display: none;
    }
    > svg {
        display: block;
    }
}
`

const Menu = styled.div`
height: 793px;
width: 100%;
    > div:first-child > div {
        font-weight: bold;
    }
`

const MenuContents = styled.div`
height: 24px;
width: 287px;
display: flex;
padding-left: 12px;
padding-right: 12px;
padding-top: 14px;
padding-bottom: 14px;
margin-top: 4px;
margin-bottom: 4px;
border-radius: 10px;
&:hover {
    background-color: #F2F2F2;
}
> div {
    padding-left: 16px;
}

@media screen and (max-width: 1919px){
    width: 196px;
}

@media screen and (max-width: 1264px){
    width: 24px;
    height: 32px;
    padding: 12px;
    > div {
        display: none;
    }
}
`

const More = styled.div`
height: 24px;
width: 287px;
display: flex;
padding: 12px;
border-radius: 10px;
> div {
    padding-left: 16px;
}

&:hover {
    background-color: #F2F2F2;
}

@media screen and (max-width: 1919px){
    width: 196px;
}

@media screen and (max-width: 1264px){
    width: 24px;
    height: 32px;
    padding: 12px;
    > div {
        display: none;
    }
}
`

export {NavBarBox, Header, Menu, More, ImageBox, MenuContents, };