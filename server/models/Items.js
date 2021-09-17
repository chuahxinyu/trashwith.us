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
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Items;
} 