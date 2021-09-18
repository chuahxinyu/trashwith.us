const Actions = require("./Actions");

module.exports = (sequelize, DataTypes) => {

    const Items = sequelize.define("Items", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgSrc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        otherResources: {
            type: DataTypes.STRING
        }
    })

    Items.associate = (models) => {
        Items.belongsToMany(models.Actions, {
            through: models.ItemActions,
            onDelete: "cascade"
        });
    }

    return Items;
}

