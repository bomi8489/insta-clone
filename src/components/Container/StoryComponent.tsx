import React, { useState } from 'react'
import {
    StoryList,
    ListContainer,
    StoryUl,
    LeftBtn,
    RightBtn,
} from '../Presenter/StoryComponentPresenter'
import instaProfile from '../../image/insta-default-profile2.png';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

const StoryComponent = () => {
    const userArray = [
        "Test_User1", "Test_User2", "Test_User3",
        "Test_User4", "Test_User5", "Test_User6",
        "Test_User7", "Test_User8", "Test_User9",
        "Test_User10", "Test_User11", "Test_User12",
        "Test_User13", "Test_User14", "Test_User15",
        "Test_User16", "Test_User17", "Test_User18",
    ];

    const [position, setPosition] = useState(0);

    const clickLeftBtn = () => {
        if (position > -320) {
            setPosition(0);
        }
        else setPosition(prev => prev + 320);
    }

    const clickRightBtn = () => {
        if (position <= -640) {
            setPosition(-800)
        }
        else setPosition(prev => prev - 320)
    }

    return (
        <div>
            <StoryUl>
                <LeftBtn onClick={clickLeftBtn}>
                    {position !== 0 &&
                        <AiFillLeftCircle color='white' />
                    }
                </LeftBtn>
                <RightBtn onClick={clickRightBtn}>
                    {position > -800 &&
                        <AiFillRightCircle color='white' />
                    }
                </RightBtn>

                <ListContainer position={position}>
                    {userArray && userArray.map((user, idx) => (
                        <StoryList key={idx}>
                            <div>
                                <img src={`${instaProfile}`} alt='profile' />
                                <div>{user}</div>
                            </div>
                        </StoryList>
                    ))}
                </ListContainer>
            </StoryUl>
        </div>
    )
}

export default StoryComponent
