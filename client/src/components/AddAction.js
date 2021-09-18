import React, { useState } from 'react'
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa'

export default function AddAction({isOpen, onClose, items}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const [nameError, setNameError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!name) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (!description) {
            setDescriptionError(true)
        } else {
            setDescriptionError(false)
        }

        if (name && description) {
            // post request
            const newAction = {"name": {name}, "description": {description}}
            console.log(newAction)
            setName("")
            setDescription("")
        }
    }

    if (!isOpen) return null
    return (
        <div className="popup">
            <div className="popup-header">
                <h2 className="popup-header">Add an action</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>
            
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="form-label" >action name</label>
                    <select className="form-text-input">
                        {items.map( (item) => 
                        <option key={item.id}>{item.name}</option>)}
                    </select>
                </div>

                <div className="form-row">
                    <label className="form-label" >action name</label>
                    <input 
                        className="form-text-input"
                        type="text"
                        placeholder="enter action name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                {nameError ?
                    <p className="form-error"><FaExclamationTriangle /> please enter an action name</p>
                : null}

                <div className="form-row">
                    <label className="form-label" >action description</label>
                    <input 
                        className="form-text-input"
                        type="text"
                        placeholder="enter action description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>
                    </input>
                </div>

                
                {descriptionError ?
                    <p className="form-error"><FaExclamationTriangle /> please enter an action description</p>
                :null}

                <button type="submit" className="form-btn">
                    create action
                </button>
                
            </form>

        </div>
    )
}
