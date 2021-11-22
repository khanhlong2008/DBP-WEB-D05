import React from 'react'
import "./Button.css"
export default function Button(props) {
    return (
        <button type="button" className="button">
            {props.children}
        </button>
    )
}
