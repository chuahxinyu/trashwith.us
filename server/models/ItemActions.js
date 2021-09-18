const Actions = require("./Actions");

module.exports = (sequelize, DataTypes) => {

    const ItemActions = sequelize.define("ItemActions", {
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Items',
                key: 'id'
            }
        },
        actionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Actions',
                key:'id'
            }
        }
    })

    return ItemActions;
}