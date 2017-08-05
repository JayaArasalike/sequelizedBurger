
//module.exports = burger;
module.exports = function(sequelize, DataTypes) {
  const burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1, 160]
      // }
    },
    devoured: {
      type: DataTypes.BOOLEAN,       
      allowNull: false,
      defaultValue: false
    }

  }, {
    freezeTableName: true
  });

  // burger.associate = function(models) {     // Associating Author with Posts     // When an Author is deleted, also delete any associated Posts     
  //   Burger.hasMany(models.Customer, {       
  //     onDelete: "cascade"     
  //   });   
  // }; 
  // burger.sync();  
  return burger;
};
