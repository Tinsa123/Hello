const { Sequelize } = require('sequelize');
const express = require('express');

const app = express();
// helllo 
const sequelize = new Sequelize('tinsa','root', 'Tinsa@11', {
    host: 'localhost',
    port:'3306',
    dialect: 'mysql',
  });

  const Todo = sequelize.define('Todo', {
    Task: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

  app.get('/todo', async (req, res) => {
    try {
      const tasks = await Todo.findAll();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  

  // Define associations, if any
  // User.hasMany(OtherModel);
  // User.belongsTo(AnotherModel);

  const PORT = 3100; // You can choose your desired port number

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');

    await sequelize.sync({ force: false }); // Set `force` to true to drop and recreate tables on each server start

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();

  
