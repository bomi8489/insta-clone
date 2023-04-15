import styled from 'styled-components'

const MainContentsBox = styled.div`
height: 100%;
width: 630px;
margin-right: 64px;
> div:first-child {
    margin: -4px;
    height: 16px
}
`

const StoryBox = styled.div`
height: 85px;
width: 630px;
padding-top: 16px;
padding-bottom: 16px;
margin-top: 16px;
`

const FeedBox = styled.div`
font-size: 77px;
`

export { MainContentsBox, StoryBox, FeedBox, };