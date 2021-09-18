module.exports = (sequelize, DataTypes) => {

    const Actions = sequelize.define("Actions", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        actionName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Actions;
} 