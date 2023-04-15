import React from 'react'

const FooterList = () => {
    const footerArray = ["소개", "도움말", "홍보 센터", "API", "채용 정보", "개인정보처리방침", "약관", "위치", "언어", "Meta Verified"];
    return (
        <>
            <div>
                <ul>
                    {footerArray.map((text, idx) => (
                        <li key={idx}><span>{text}</span></li>
                    ))}
                </ul>
            </div>
            <div>© 2023 INSTAGRAM FROM META</div>
        </>
    )
}

export default FooterList
