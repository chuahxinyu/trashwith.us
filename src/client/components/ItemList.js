import React, {useState} from 'react'
import Item from './Item'

export default function ItemList() {
    const [isBlurred, setIsBlurred] = useState(false)

    const items = [
        {
            "id": 1, 
            "itemName": "aerosol cans",
            "itemImg": "",
            "actionList": [1, 2, 3]
        },
        {
            "id": 2,
            "itemName": "adhesive strips (band aids)", 
            "itemImg": "",
            "actionList": [1, 2]
        },
        {
            "id": 3,
            "itemName": "aluminium cans", 
            "itemImg": "",
            "actionList": [2, 3]
        },
        {
            "id": 4,
            "itemName": "alumninuim foil", 
            "itemImg": "",
            "actionList": [1, 3]
        },
        {
            "id": 5,
            "itemName": "aluminium trays", 
            "itemImg": "",
            "actionList": [2]
        }
    ]

    const actionlist = [
        {
            id: 1,
            name: "recycle",
            description: "recycle at a local recycling centre"
        },
        {
            id: 2,
            name: "landfill",
            description: "place in your landfill bin"
        },
        {
            id: 3,
            name: "donate",
            description: "donate it to a local donation centre"
        }
    ]

    return (
        <div>
            <div className="item-list">
                {items.map((item) => (
                    <Item 
                        key = {item.id}
                        name = {item.itemName}
                        actionlist = {actionlist}
                        setIsBlurred = {setIsBlurred}
                    />
                ))}
            </div>
            
            
            {isBlurred ?
                <div className="blur"></div>
            : null}
        </div>
    )
}
