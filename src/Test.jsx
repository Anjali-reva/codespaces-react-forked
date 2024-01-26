import React, { useState, useEffect } from 'react';

const AdjustableTextarea = ({ value,onchangeValue, className = '' }) => {
    const [text, setText] = useState('');
    const [textareaHeight, setTextareaHeight] = useState('');

    useEffect(() => {
        const textarea = document.getElementById('adjustable-textarea');
        // text.length !== 0 ? setTextareaHeight(`${textarea.scrollHeight}px`) : setTextareaHeight(`${24}px`);
        setTextareaHeight(`${textarea.scrollHeight}px`)
        console.log(textarea.scrollHeight)
    }, [text]);

    return (
        <textarea
            id="adjustable-textarea"
            value={value}
            onChange={onchangeValue}
            placeholder='Take a note...'
            style={{ height:textareaHeight, scrollbarWidth: 'none' }}
            className={`${className} border outline-none resize-none`}
        />
    );
};

export default AdjustableTextarea;
