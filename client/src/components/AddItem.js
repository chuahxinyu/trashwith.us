import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function AddItem({isOpen, onClose}) {
    if (!isOpen) return null

    return (
        <div className="popup">
            <div className="popup-header">
                <h2 className="popup-header">Add an item</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>

            <p className="sub-text">did we miss something out in our list? add it here!</p>

            <form className="add-form">

                <div className="form-row">
                    <label className="form-label">item name</label>
                    <input className="form-text-input" type="text" placeholder="eg. batteries"></input>
                </div>

                <div className="form-row">
                    <label className="form-label">item image</label>

                    <div className="form-text-input">
                        <button type="submit" className="form-btn">
                            upload
                        </button>
                    </div>
                </div>

                <button type="submit" className="form-btn">
                    create item
                </button>
                
            </form>

        </div>
    )
}
