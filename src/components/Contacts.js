import React from 'react'

export const Contacts = (props) => {
    return (
        <ul>
            {props.allContacts.map( (name, index) => {
                return <li key={index}>
                <span className="delete" onClick={() => props.deleteFuncProp(index)}>X  </span>{name}</li>
            })}
        </ul>
    )
}
