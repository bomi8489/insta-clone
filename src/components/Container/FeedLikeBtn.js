import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

function FeedLikeBtn({likeBtn, onLikeClick}) {
    const foucusOutHeart = (e) => {
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
