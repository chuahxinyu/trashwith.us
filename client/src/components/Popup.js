import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react/cjs/react.development'
import Action from './Action'
import AddAction from './AddAction'
import { FaPlusCircle } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

export default function Popup({isOpen, onClose, actionlist, name, imgSrc, items}) {
    const [isAddOpen, setIsAddOpen] = useState(false)

    if (!isOpen) return null

    return (
        <div className="popup">
            <div className="popup-header">
                <h2 className="popup-header">{name}</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>

            <div className="popup-container">
                <div className="popup-img-container popup-column-1">
                    <img className="popup-img" src={imgSrc} alt={name}></img>
                </div>

                <div className="popup-column-2">
                    {actionlist.map((action) => (
                        <Action 
                            key = {action.id}
                            name = {action.actionName}
                            description = {action.description}
                            />
                        ))}
                    {actionlist.length ? null : <p>👀 There are no actions yet, maybe you should suggest one!</p>}
                </div>
            </div>

            <div className="add-btn-in-popup-container" onClick={() => {setIsAddOpen(true)}}>
                <FaPlusCircle 
                    className="add-btn-in-popup" 
                    data-tip data-for="addAction" />
            </div>
            <ReactTooltip className="tooltip" id="addAction"><p>Suggest an action</p></ReactTooltip>

            <div>
                <AddAction 
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                    items={items}
                />
            </div>
        </div>
    )
}
