module.exports = (sequelize, DataTypes) => {

    const Suggestions = sequelize.define("Suggestions", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING
        }
    })
    return Suggestions;
}