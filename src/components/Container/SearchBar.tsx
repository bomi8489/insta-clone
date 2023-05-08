import React, { forwardRef, useEffect, useRef, useState } from 'react'
import {
    SearchBarBox,
    SearchContents,
    SearchBox,
    SearchingInput,
    SearchResult,
    Search,
} from '../Presenter/NavBarPresenter';
import { IoIosCloseCircle } from 'react-icons/io'

interface SearchBarProps {
    searchBtn: boolean;
}

type Ref = HTMLDivElement;

const SearchBar = forwardRef<Ref, SearchBarProps>(({ searchBtn }, ref) => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }
    const onClickX = () => {
        setSearchText("");
    }

    useEffect(() => {
        if (searchBtn === true) {
            inputRef.current!.focus();
        }
    }, [searchBtn]);

    return (
        <SearchBarBox searchBtn={searchBtn} ref={ref}>
            <SearchContents>
                <div>검색</div>
                <SearchBox>
                    <SearchingInput>
                        <div>
                            <Search
                                placeholder='검색'
                                value={searchText}
                                onChange={onChange}
                                onClick={onClickX}
                                ref={inputRef}
                            />
                            <IoIosCloseCircle onClick={onClickX} />
                        </div>
                    </SearchingInput>
                    <SearchResult>
                        <div>
                            <div>최근 검색 항목</div>
                            <div>최근 검색 내역 없음.</div>
                        </div>
                    </SearchResult>
                </SearchBox>
            </SearchContents>
        </SearchBarBox>
    )
})

export default SearchBar
