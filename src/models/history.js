module.exports= (sequelize, DataTypes)=>{

const History = sequelize.define(
    "History",{
        id_history:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        delivery_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        delivery_status:{
            type:DataTypes.ENUM('A tiempo', 'Tarde', 'Temprano'),
            allowNull:false,
        },
        penalty:{
            type: DataTypes.DECIMAL(10,2),
            defaultValue: 0.00
        },
        comments:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        id_rent:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "rent",
                key:"id_rent"
            }
        }

    }, {tableName: "history",timestamps: false});


    return History;

};
