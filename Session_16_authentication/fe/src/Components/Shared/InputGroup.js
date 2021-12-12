import React from 'react'
import './input.css'
export default function InputGroup(props) {
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <input
                type={props.htmlType}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}
