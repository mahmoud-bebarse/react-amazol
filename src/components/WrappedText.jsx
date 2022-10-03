import React from 'react';
import "./WrappedText.css"

const WrappedText = (props) => {
    const { text, limit } = props;

    const getWrappedText = (text= '', limit= 0) => {
        if (text.length > limit) {
            return `${text.slice(0, limit)}...`;
        } else {
            return text;
        } 
    }

    return(
        <div className='tool-tip'>
            {getWrappedText(text, limit)}
            <span className="tool-tip-text">{text}</span>
        </div>
    )
}

export default WrappedText;