import React from 'react'

export const Contacts = (props) => {
    return (
        <ul>
            {props.allContacts.map( (name, index) => {
                return <li key={index}>{name}
                <span className="close" onClick={() => props.deleteFuncProp(index)}>X</span></li>
            })}
        </ul>
    )
}
