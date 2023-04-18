import React from 'react'
import { useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa'

function FeedLikeBtn() {        
    const [likeBtn, setLikeBtn] = useState(false);

    const onLikeClick = () => {
        setLikeBtn(prev => !prev);
    }
    return (
        <>
            <div onClick={onLikeClick}>
                {(likeBtn === false) ? <FaRegHeart /> : <FaHeart color='#EB4649' />}
            </div>
        </>
    )
}

export default FeedLikeBtn
