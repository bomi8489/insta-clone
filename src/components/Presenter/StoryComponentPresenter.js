import styled from "styled-components";

const StoryUl = styled.ul`
height: 85px;
width: 630px;
display: flex;
overflow: hidden;
position: relative;
`

const ListContainer = styled.div`
width: 100%;
display: flex;
`

const StoryList = styled.li`
height: 122px;
width: 66px;
list-style: none;
margin-right: 14.5px;

> div {
height: 79px;
width: 58px;
padding-right: 4px;
padding-left: 4px;
display: flex;
flex-direction: column;
align-items: center;
&:hover {
    cursor: pointer;
}
    > div{
        font-size: 11px;
    }
}

img {
    height: 56px;
    width: 56px;
    margin-bottom: 8px;
}
`

const LeftBtn = styled.div`
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
left: 0px;
top: 40%;
transform: translateY(-50%);
z-index: 100;
&:hover {
    cursor: pointer;
}
svg {
    position: fixed;
    height: 30px;
    width: 30px;
}
`

const RightBtn = styled.div`
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 0px;
top: 40%;
transform: translateY(-50%);
z-index: 100;
&:hover {
    cursor: pointer;
}
svg {
    position: fixed;
    height: 30px;
    width: 30px;
}

`

export { StoryUl, ListContainer, StoryList, LeftBtn, RightBtn, }