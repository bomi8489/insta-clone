import React, { useState } from 'react'
import {CiFaceSmile} from 'react-icons/ci'

function WriteComponent() {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setText("");
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    value={text}
                    onChange={onChange}
                    placeholder='댓글 달기...'
                />
                <CiFaceSmile />
            </form>
        </>
    )
}

export default WriteComponent
