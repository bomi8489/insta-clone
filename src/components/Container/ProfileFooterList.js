import React from 'react'
import { FooterList } from '../Presenter/ProfilePresenter';

function ProfileFooterList() {
    const footerListArray = ['Meta', '소개', '블로그', '채용 정보', '도움말', 'API', '개인정보처리방침', '약관', '인기 계정', '위치','Instagram Lite', '연락처 업로드 & 비사용자', 'Meta Verified'];
    return (
        <>
            {footerListArray.map((list, idx) => 
                <FooterList key={idx}>{list}</FooterList>
            )}
        </>
    )
}

export default ProfileFooterList
