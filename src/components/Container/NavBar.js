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
import { BiSearch } from 'react-icons/bi';
import { FaRegCompass } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';
import { FiSend, FiHeart, FiPlusSquare } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';


function NavBar() {
    return (
        <NavBarBox>
            <Header>
                <ImageBox>
                    <BsInstagram size={24}/>
                    <img src={`${instagram}`} width='109px' height='39px' alt='instagram'/>
                </ImageBox>
            </Header>
            <Menu>
                <MenuContents>
                    <MdHomeFilled size="24"/>
                    <div>홈</div>
                </MenuContents>
                <MenuContents>
                    <BiSearch size="24"/>
                    <div>검색</div>
                </MenuContents>
                <MenuContents>
                    <FaRegCompass size="24"/>
                    <div>탐색 탭</div>
                </MenuContents>
                <MenuContents>
                    <BiMoviePlay size="24"/>
                    <div>릴스</div>
                </MenuContents>
                <MenuContents>
                    <FiSend size="24"/>
                    <div>메시지</div>
                </MenuContents>
                <MenuContents>
                    <FiHeart size="24"/>
                    <div>알림</div>
                </MenuContents>
                <MenuContents>
                    <FiPlusSquare size="24"/>
                    <div>만들기</div>
                </MenuContents>
                <MenuContents>
                    <img src={`${instaProfile}`} height="24px" width="24px" alt='profile'/>
                    <div>프로필</div>
                </MenuContents>
            </Menu>
            <More>
                <HiOutlineMenu size={24} />
                <div>더 보기</div>
            </More>
        </NavBarBox>
    )
}

export default NavBar
