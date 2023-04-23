import React, { useCallback, useRef, useState, useEffect, forwardRef } from 'react';
import instagram from '../../image/instagram.png';
import instaProfile from '../../image/insta-default-profile2.png';
import {
    Link,
} from 'react-router-dom'
import { 
    Header, 
    ImageBox, 
    Menu, 
    More, 
    NavBarBox 
} from '../Presenter/NavBarPresenter';
import { MdHomeFilled } from "react-icons/md";
import { BiSearch, BiMoviePlay } from 'react-icons/bi';
import { FaRegCompass } from 'react-icons/fa';
import { FiSend, FiHeart, FiPlusSquare } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';
import NavbarMenuContentComponent from './NavbarMenuContentComponent';
import SearchBar from './SearchBar';

const NavBar = forwardRef(({init}, ref) => {
    const [searchBtn, setSearchBtn] = useState(false);
    const searchBarRef = useRef();
    const searchBtnRef = useRef();

    const initState = () => {
        setSearchBtn(false);
    }

    const onSearch = () => {
        setSearchBtn(prev => !prev);
    }
    
    const checkFocusNavbar = useCallback((e) => {
        if(!searchBarRef.current.contains(e.target) && !searchBtnRef.current.contains(e.target)){
            initState();
        }
    }, []);

    useEffect(() => {
        if(init === true) {
            initState();
        }
    }, [init])
    
    return (
        <div onClick={checkFocusNavbar} ref={ref}>
            <NavBarBox searchBtn={searchBtn}>
                <Header>
                    <Link to={"/"}>
                        <ImageBox onClick={initState} searchBtn={searchBtn}>
                            <BsInstagram/>
                            <img src={`${instagram}`} alt='instagram'/>
                        </ImageBox>
                    </Link>
                </Header>
                <Menu searchBtn={searchBtn}>
                    <Link to={"/"}>
                        <NavbarMenuContentComponent onClick={initState} iconProp={<MdHomeFilled />} text={"홈"}/>
                    </Link>
                    <NavbarMenuContentComponent ref={searchBtnRef} searchBtn={searchBtn} onClick={onSearch} iconProp={<BiSearch/>} text={"검색"}/>
                    <NavbarMenuContentComponent iconProp={<FaRegCompass/>} text={"탐색 탭"}/>
                    <NavbarMenuContentComponent iconProp={<BiMoviePlay/>} text={"릴스"}/>
                    <NavbarMenuContentComponent iconProp={<FiSend />} text={"메시지"}/>
                    <NavbarMenuContentComponent onClick={initState} iconProp={<FiHeart />} text={"알림"}/>
                    <NavbarMenuContentComponent iconProp={<FiPlusSquare />} text={"만들기"}/>
                    <Link to={"/b.__.omi"}>
                        <NavbarMenuContentComponent iconProp={<img src={`${instaProfile}`} alt='profile'/>} text={"프로필"}/>
                    </Link>
                </Menu>
                <More searchBtn={searchBtn}>
                    <HiOutlineMenu/>
                    <div>더 보기</div>
                </More>
            </NavBarBox>
            <SearchBar ref={searchBarRef} searchBtn={searchBtn}/>
        </div>
    )
})

export default NavBar
