const db = require('./connection');
const { User, Company, Room } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Company', 'companies');
  await cleanDB('Room', 'rooms');

  const rooms = await Room.insertMany([
    { name: 'Room1' },
    { name: 'Room2' },
    { name: 'Room3' },
    { name: 'Room4' },
    { name: 'Room5' },
    { name: 'Room6' },
    { name: 'Room7' },
    { name: 'Room8' },
    { name: 'Room9' },
  ]);

  console.log('rooms seeded');

  const companies = await Company.insertMany([
    { name: 'Company1', 
      code: 'joker', 
      chatRooms: [rooms[0]._id, rooms[1]._id, rooms[2]._id] 
    },
    { name: 'Company2', 
      code: 'batman', 
      chatRooms: [rooms[3]._id, rooms[4]._id, rooms[5]._id] 
    },
    { name: 'Company3', 
      code: 'riddler', 
      chatRooms: [rooms[6]._id, rooms[7]._id, rooms[8]._id] 
    },
  ]);

  console.log('companies seeded');

  await User.create({
    firstName: 'Danfeng',
    lastName: 'Wang',
    username: 'danny',
    email: 'danfeng@testmail.com',
    password: 'password12345',
    company: companies[0].name,
  });

  await User.create({
    firstName: 'Rodolfo',
    lastName: 'Silva',
    username: 'morgan',
    email: 'rodolfo@testmail.com',
    password: 'password12345',
    company: companies[0].name,
  });

  await User.create({
    firstName: 'Alex',
    lastName: 'Colwell',
    username: 'alex',
    email: 'allcold@testmail.com',
    password: 'password12345',
    company: companies[1].name,
  });

  await User.create({
    firstName: 'Eric',
    lastName: 'Beverly',
    username: 'esbev',
    email: 'ericb@testmail.com',
    password: 'password12345',
    company: companies[1].name,
  });

  console.log('users seeded');

  process.exit();
});
