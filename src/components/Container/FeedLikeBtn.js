import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

function FeedLikeBtn({likeBtn, onLikeClick}) {
    return (
        <>
            <div onClick={onLikeClick}>
                {(likeBtn === false) ? <FaRegHeart /> : <FaHeart color='#EB4649' />}
            </div>
        </>
    )
}

export default FeedLikeBtn
