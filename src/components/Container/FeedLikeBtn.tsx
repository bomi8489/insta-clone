import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FeedLikeBtnProps } from '../../types';

function FeedLikeBtn({ likeBtn, onLikeClick }: FeedLikeBtnProps) {
    const foucusOutHeart = (e: React.FocusEvent<HTMLDivElement>) => {
        console.log(e.target.style);
    }

    return (
        <>
            <div onClick={onLikeClick} onBlur={foucusOutHeart}>
                {(likeBtn === false) ? <FaRegHeart /> : <FaHeart color='#EB4649' />}
            </div>
        </>
    )
}

export default FeedLikeBtn
