const db = require('./connection');
const { User, Company } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Company', 'companies');

  const companies = await Company.insertMany([
    { name: 'Company1', code: 'joker' },
    { name: 'Compnay2', code: 'batman' },
    { name: 'Company3', code: 'riddler' },
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
    email: 'rodolfo@testmail.com',
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
