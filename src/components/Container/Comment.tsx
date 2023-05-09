import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface CommentProps {
    testComments: string[][];
    idx: number;
}

const Comment = ({ testComments, idx }: CommentProps) => {
    const [commentLikeBtn, setCommentLikeBtn] = useState(false);

    const commentLikeClick = () => {
        setCommentLikeBtn(prev => !prev)
    }


    return (
        <>
            <div>
                <span>{testComments[idx][0]}</span><span>{testComments[idx][1]}</span>
            </div>
            <div onClick={commentLikeClick}>
                {(commentLikeBtn === false) ? <FaRegHeart /> : <FaHeart color='#EB4649' />}
            </div>
        </>
    )
}

export default Comment
