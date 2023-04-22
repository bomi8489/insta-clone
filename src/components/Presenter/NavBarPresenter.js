import styled from "styled-components";

const NavBarBox = styled.div`
background-color: white;
position: fixed;
height: 100vh;
width: ${props => (props.searchBtn === true) ? '48px' : '311px'};
display: flex;
flex-direction: column;
padding-top: 8px;
padding-right: 12px;
padding-bottom: 20px;
padding-left: 12px;
transition: 0.6s ease;
border-right: solid 1px #DBDBDB;
z-index: 100;

@media screen and (max-width: 1919px){
    width: 220px;
}

@media screen and (max-width: 1264px){
    width: 48px;
}
`

const Header = styled.div`
height: 70px;
width: 100%;
display: blobk;
margin-top: 20px;
> a {
    height: 36px;
    width: 287px;
}
`

const ImageBox = styled.div`
/* height: ${props => (props.searchBtn === true) ? '32px' : '32px'};
padding: ${props => (props.searchBtn === true) ? '12px' : '12px'}; */
height: 32px;
padding: 12px;
width: ${props => (props.searchBtn === true) ? '24px' : '287px'};
display: flex;
align-items: center;
transition: 0.2s ease-out;
&:hover {
    cursor: pointer;
}
> a {
    height: 100%;
    width: 100%;
}
svg {
    animation: ${props => (props.searchBtn === true) ? 'fadein 0.3s' : 'none'};
    height: 24px;
    width: 24px;
    display: ${props => (props.searchBtn === true) ? 'block' : 'none'};
}

img {
    width: 109px;
    height: 39px;
    display: ${props => (props.searchBtn === true) ? 'none' : 'block'};
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
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
height: 800px;
width: 100%;
div:first-child > div {
    font-weight: bold;
}

> a > div {
    width: ${props => (props.searchBtn === true) ? '24px' : '287px'};
    > div {
        display: ${props => (props.searchBtn === true) ? 'none' : 'display'};
    }
}
> div {
    width: ${props => (props.searchBtn === true) ? '24px' : '287px'};
    > div {
        display: ${props => (props.searchBtn === true) ? 'none' : 'display'};
    }
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
border-radius: 10px;
transition: 0.2s ease;
margin: ${props => (props.searchBtn === true) ? '-1px' : '4px 0'};
border: ${props => (props.searchBtn === true) ? 'solid 1px #DBDBDB' : 'none'};
> div {
    padding-left: 16px;
}
> img, svg {
    height: 24px;
    width: 24px;
    transition: transform 0.2s ease-in-out;
}

&:hover{
    background-color: #F2F2F2;
    > img, svg {
        transform: scale(1.1);
    }
    cursor: pointer;
}

@media screen and (max-width: 1919px){
    width: 196px;
}

@media screen and (max-width: 1264px){
    width: 24px;
    padding: 14px;
    > div {
        display: none;
    }
}
`

const More = styled.div`
height: 24px;
width: ${props => (props.searchBtn === true) ? '24px' : '287px'};
display: flex;
padding: 12px;
border-radius: 10px;
> div {
    padding-left: 16px;
    display: ${props => (props.searchBtn === true) ? 'none' : 'block'};
}

> svg {
    height: 24px;
    width: 24px;
    transition: transform 0.2s ease-in-out;
}

&:hover {
    background-color: #F2F2F2;
    > svg {
        transform: scale(1.1);
    }
    cursor: pointer;
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

const SearchBarBox = styled.div`
transition: ${props => (props.searchBtn === true) ? '0.5s ease' : '1.5s ease'};
position: fixed;
left: ${props => (props.searchBtn === true) ? '73px' : '-397px'};
height: 100%;
width: 396px;
background-color: white;
border-right: solid 1px #DBDBDB;
border-radius: 0 16px 16px 0;
box-shadow: 4px 0 24px #EAEAEA;
z-index: 99;
`

const SearchContents = styled.div`
height: 100%;
padding-top: 8px;
padding-bottom: 8px;
display: flex;
flex-direction: column;

> div:first-child {
    height: 24px;
    width: 358px;
    padding: 9px 14px 36px 24px;
    margin: 8px 0;
    font-size: 24px;
    font-weight: bold;
}
`

const SearchBox = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

const SearchingInput = styled.div`
height: 64px;
width: 363px;
margin: 0 16px;
> div {
    position: relative;
}
`

const SearchResult = styled.div`
height: 803px;
border-top: solid 1px #DBDBDB;
> div {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    height: 792px;

    > div:first-child {
        height: 20px;
        width: 348px;
        margin: 6px 24px 8px 24px;
        font-weight: bold;
    }
    > div:nth-child(2) {
        font-size: 14px;
        font-weight: bold;
        height: 757px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.5;
    }
}
`

const Search = styled.input`
height: 34px;
width: 332px;
margin-bottom: 24px;
border: none;
outline: none;
background-color: #EFEFEF;
border-radius: 7px;
padding: 3px 16px;
font-size: 17px;
~ svg {
    height: 17px;
    width: 17px;
    position: absolute;
    color: #C8C8C8;
    top: 12px;
    right: 10px;
    &:hover {
        cursor: pointer;
    }
}
`

export {NavBarBox, Header, Menu, More, ImageBox, MenuContents, SearchBarBox, SearchContents, SearchBox, SearchingInput, SearchResult, Search, };