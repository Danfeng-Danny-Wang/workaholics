const db = require('./connection');
const { User, Company } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Company', 'companies');

  const companies = await Company.insertMany([
    { name: 'Company1', code: 'joker', chatRooms: [Room1, Room2, Room3] },
    { name: 'Compnay2', code: 'batman', chatRooms: [Room1, Room2, Room3] },
    { name: 'Company3', code: 'riddler', chatRooms: [Room1, Room2, Room3] },
  ]);

  console.log('companies seeded');

  await User.create({
    firstName: 'Danfeng',
    lastName: 'Wang',
    username: 'dangwang',
    email: 'danfeng@testmail.com',
    password: 'password12345',
    company: companies[0].name,
  });

  await User.create({
    firstName: 'Rodolfo',
    lastName: 'Silva',
    username: 'roddy',
    email: 'rodolfo@testmail.com',
    password: 'password12345',
    company: companies[0].name,
  });

  await User.create({
    firstName: 'Alex',
    lastName: 'Colwell',
    username: 'coldest',
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
