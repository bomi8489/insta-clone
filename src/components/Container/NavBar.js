import React from 'react';
import instagram from '../../image/instagram.png';
import instaProfile from '../../image/insta-default-profile2.png';
import { 
    Header, 
    ImageBox, 
    Menu, 
    MenuContents, 
    More, 
    NavBarBox 
} from '../Presenter/NavBarPresenter';
import { MdHomeFilled } from "react-icons/md";
import { BiSearch, BiMoviePlay } from 'react-icons/bi';
import { FaRegCompass } from 'react-icons/fa';
import { FiSend, FiHeart, FiPlusSquare } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';

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
                <MenuContents>
                    <MdHomeFilled/>
                    <div>홈</div>
                </MenuContents>
                <MenuContents>
                    <BiSearch/>
                    <div>검색</div>
                </MenuContents>
                <MenuContents>
                    <FaRegCompass/>
                    <div>탐색 탭</div>
                </MenuContents>
                <MenuContents>
                    <BiMoviePlay/>
                    <div>릴스</div>
                </MenuContents>
                <MenuContents>
                    <FiSend/>
                    <div>메시지</div>
                </MenuContents>
                <MenuContents>
                    <FiHeart/>
                    <div>알림</div>
                </MenuContents>
                <MenuContents>
                    <FiPlusSquare/>
                    <div>만들기</div>
                </MenuContents>
                <MenuContents>
                    <img src={`${instaProfile}`} alt='profile'/>
                    <div>프로필</div>
                </MenuContents>
            </Menu>
            <More>
                <HiOutlineMenu/>
                <div>더 보기</div>
            </More>
        </NavBarBox>
    )
}

export default NavBar
