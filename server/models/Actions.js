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

    Actions.associate = (models) => {
        Actions.belongsToMany(models.Items, {
            through: 'ItemActions',
            onDelete: "cascade"
        });
    }

    return Actions;
}