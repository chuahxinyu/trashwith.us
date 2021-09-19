import React, { useState } from 'react'
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa'
import axios from 'axios'

export default function AddItem({isOpen, onClose}) {
    
    const [name, setName] = useState("")

    const [nameError, setNameError] = useState(false)

    const [addedItem, setAddedItem] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!name) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (name) {
            axios
                .post('https://trashwithus-api.herokuapp.com/api/suggestions', {
                    type: "Item",
                    name: {name}
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })

            setName("")
            setAddedItem(true)
        }
    }
    
    if (!isOpen) return null
    return (
        <div className="popup">
            
            <div className="popup-header">
                <h2 className="popup-header">Suggest an item</h2>
                <div 
                    className="close"
                    onClick={onClose}>
                    <FaTimes />
                </div>
            </div>

            <p className="sub-text">did we miss something out in our list? suggest one here!</p>

            <form className="add-form" onSubmit={handleSubmit}>

                <div className="form-row">
                    <label className="form-label" >item name</label>
                    <input 
                        className="form-text-input"
                        type="text"
                        placeholder="eg. batteries"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (name) {
                                setAddedItem(false)
                            }}}>
                    </input>
                </div>
                {nameError ?
                    <p className="form-error"><FaExclamationTriangle /> please enter an item name</p>
                : null}

                {/* <div className="form-row">
                    <label className="form-label">item image</label>
                    <div className="form-img-input">
                        <button 
                            type="button"
                            className="form-upload-btn"
                            onClick={()=>{setImgSrc("image added")}}
                        >
                            upload
                        </button>
                    </div>
                </div>

                
                {imgError ?
                    <p className="form-error"><FaExclamationTriangle /> please enter an item image</p>
                :null} */}

                <button type="submit" className="form-btn">
                    suggest item
                </button>
                
            </form>

            {addedItem ?
                <p className="form-success">Your suggestion has been made! Feel free to suggest some more.</p>
            : null}

        </div>
    )
}
