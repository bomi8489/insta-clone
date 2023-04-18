import React, {useEffect, useRef, useState} from 'react'
import { LeftBtn, RightBtn } from '../Presenter/StoryComponentPresenter';
import { PictureBox } from '../Presenter/MainContentsPresenter';
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'

function FeedPhoto({picture}) {
    const [position, setPosition] = useState(0);
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();

    const clickLeftBtn = () => {
        if(position > -468) {
            setPosition(0);
        }
        else setPosition(prev => prev + 468);
    }

    const clickRightBtn = () => {
        if(position <= -468) {
            setPosition(-468)
        }
        else setPosition(prev => prev - 468)
    }

    useEffect(() => {
        rightBtnRef.current.parentNode.children[2].style = `
        transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s; transform: translateX(${position}px);
        `;
    },[position])

    useEffect(() => {
        leftBtnRef.current.parentNode.children[2].style = `
        transition: transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s; transform: translateX(${position}px);
        `;
    },[position])
    return (
        <>
            <LeftBtn onClick={clickLeftBtn} ref={leftBtnRef}>
                {position !== 0 && 
                <AiFillLeftCircle color='#E6E2DA'/>
                }
            </LeftBtn>
            <RightBtn onClick={clickRightBtn} ref={rightBtnRef}>
                {position > -468 &&
                <AiFillRightCircle color='#E6E2DA'/>
                }
            </RightBtn>
            <PictureBox>
                {picture.map((pic, idx) => (
                    <img key={idx} src={pic} alt='feed pic'/>
                ))}
            </PictureBox>
        </>
    )
}

export default FeedPhoto
