module.exports = (sequelize, Sequelize) => {
  const player = sequelize.define("player", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
     filename: {
       type: Sequelize.STRING
     }
  });

  return player;
}