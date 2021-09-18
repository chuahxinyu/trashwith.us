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
            allowNull: false,
            defaultValue: "https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6"
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

