import React, { useState } from 'react'
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'

export default function AddAction({isOpen, onClose, items}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const [nameError, setNameError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)

    const [addedAction, setAddedAction] = useState(false)

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
            axios
                .post('https://trashwithus-api.herokuapp.com/api/suggestions', {
                    type: "Action",
                    name: {name},
                    description: {description}
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            setName("")
            setDescription("")
            setAddedAction(true)
        }
    }

    if (!isOpen) return null
    return (
        <div className="popup">
            <div className="popup-header">
                <h2 className="popup-header">Suggest an action</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>

            <p className="sub-text">found another way to get rid of an item sustainably? suggest it here!</p>
            
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="form-label" >action name</label>
                    <input 
                        className="form-text-input"
                        type="text"
                        placeholder="enter action name..."
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value); 
                            if (name) {
                                setAddedAction(false)
                            }
                            }}>
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

                <button type="submit" className="form-btn suggest-btn">
                    suggest action
                </button>

                {addedAction ?
                    <p className="form-success">Your suggestion has been made! Feel free to suggest some more.</p>
                : null}
                
            </form>

        </div>
    )
}
