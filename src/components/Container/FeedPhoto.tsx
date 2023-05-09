import React, { useState } from 'react'
import { LeftBtn, RightBtn } from '../Presenter/StoryComponentPresenter';
import { PictureBox } from '../Presenter/MainContentsPresenter';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

interface FeedPhotoProps {
    picture: string[];
}

function FeedPhoto({ picture }: FeedPhotoProps) {
    const [position, setPosition] = useState(0);

    const clickLeftBtn = () => {
        if (position > -468) {
            setPosition(0);
        }
        else setPosition(prev => prev + 468);
    }

    const clickRightBtn = () => {
        if (position <= -468) {
            setPosition(-468)
        }
        else setPosition(prev => prev - 468)
    }

    return (
        <>
            <LeftBtn onClick={clickLeftBtn}>
                {position !== 0 &&
                    <AiFillLeftCircle color='#E6E2DA' />
                }
            </LeftBtn>
            <RightBtn onClick={clickRightBtn}>
                {position > -468 &&
                    <AiFillRightCircle color='#E6E2DA' />
                }
            </RightBtn>
            <PictureBox position={position}>
                {picture.map((pic, idx) => (
                    <img key={idx} src={pic} alt='feed pic' />
                ))}
            </PictureBox>
        </>
    )
}

export default FeedPhoto
