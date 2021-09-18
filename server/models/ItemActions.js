const Actions = require("./Actions");

module.exports = (sequelize, DataTypes) => {

    const ItemActions = sequelize.define("ItemActions", {
        itemActionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    })

    return ItemActions;
}