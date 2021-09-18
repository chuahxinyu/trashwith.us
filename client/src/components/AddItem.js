import React, { useState } from 'react'
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa'

export default function AddItem({isOpen, onClose}) {
    
    const [name, setName] = useState("")
    const [imgSrc, setImgSrc] = useState("")

    const [nameError, setNameError] = useState(false)
    const [imgError, setImgError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!name) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (!imgSrc) {
            setImgError(true)
        } else {
            setImgError(false)
        }

        if (name && imgSrc) {
            // post request
            const newItem = {"name": {name}, "imgSrc": {imgSrc}}
            console.log(newItem)
            setName("")
            setImgSrc("")
        }
    }
    
    if (!isOpen) return null
    return (
        <div className="popup">
            
            <div className="popup-header">
                <h2 className="popup-header">Add an item</h2>
                <div 
                    className="close"
                    onClick={onClose}>
                    <FaTimes />
                </div>
            </div>

            <p className="sub-text">did we miss something out in our list? add it here!</p>

            <form className="add-form" onSubmit={handleSubmit}>

                <div className="form-row">
                    <label className="form-label" >item name</label>
                    <input 
                        className="form-text-input"
                        type="text"
                        placeholder="eg. batteries"
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                {nameError ?
                    <p className="form-error"><FaExclamationTriangle /> please enter an item name</p>
                : null}

                <div className="form-row">
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
                :null}

                <button type="submit" className="form-btn">
                    create item
                </button>
                
            </form>

            

        </div>
    )
}
