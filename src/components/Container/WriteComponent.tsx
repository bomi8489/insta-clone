import React, { useState } from 'react'
import { CiFaceSmile } from 'react-icons/ci'

function WriteComponent() {
    const [text, setText] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
