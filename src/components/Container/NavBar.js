import React from 'react';
import instagram from '../../image/instagram.png';
import instaProfile from '../../image/insta-default-profile2.png';
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

const NavBar = () => {
    return (
        <NavBarBox>
            <Header>
                <ImageBox>
                    <BsInstagram/>
                    <img src={`${instagram}`} alt='instagram'/>
                </ImageBox>
            </Header>
            <Menu>
                <NavbarMenuContentComponent iconProp={<MdHomeFilled />} text={"홈"}/>
                <NavbarMenuContentComponent iconProp={<BiSearch/>} text={"검색"}/>
                <NavbarMenuContentComponent iconProp={<FaRegCompass/>} text={"탐색 탭"}/>
                <NavbarMenuContentComponent iconProp={<BiMoviePlay/>} text={"릴스"}/>
                <NavbarMenuContentComponent iconProp={<FiSend />} text={"메시지"}/>
                <NavbarMenuContentComponent iconProp={<FiHeart />} text={"알림"}/>
                <NavbarMenuContentComponent iconProp={<FiPlusSquare />} text={"만들기"}/>
                <NavbarMenuContentComponent iconProp={<img src={`${instaProfile}`} alt='profile'/>} text={"프로필"}/>
            </Menu>
            <More>
                <HiOutlineMenu/>
                <div>더 보기</div>
            </More>
        </NavBarBox>
    )
}

export default NavBar
