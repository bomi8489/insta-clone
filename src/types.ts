export interface NavBarProps {
    init: boolean;
}

export interface CommentProps {
    testComments: string[][];
    idx: number;
}

export interface FeedContentProps {
    user: string[];
    testComments: string[][];
    picture: string[];
}

export interface FeedLikeBtnProps {
    likeBtn: boolean;
    onLikeClick: React.MouseEventHandler<HTMLDivElement>;
}

export interface FeedPhotoProps {
    picture: string[];
}

export interface FriendComponentProps {
    nickname: String;
}

export interface NavbarMenuContentProps {
    searchBtn?: boolean;
    text: string;
    iconProp: JSX.Element;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface SearchBarProps {
    searchBtn: boolean;
}

export interface ProfileNavDivBoxProps {
    value: string;
}

export type Ref = HTMLDivElement;