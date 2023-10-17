const db = require('./connection');
const { User, Company, Room } = require('../models');

db.once('open', async () => {

  await Room.insertMany([
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

  const rooms = await Room.find();

  console.log('rooms seeded');

 await Company.insertMany([
    { name: 'Company1', 
      code: 'joker', 
    },
    { name: 'Company2', 
      code: 'batman', 
    },
    { name: 'Company3', 
      code: 'riddler', 
    },
  ]);

  await Promise.all([
    { name: 'Company1', 
      chatRooms: [rooms[0]._id, rooms[1]._id, rooms[2]._id] 
    },
    { name: 'Company2', 
      chatRooms: [rooms[3]._id, rooms[4]._id, rooms[5]._id] 
    },
    { name: 'Company3', 
      chatRooms: [rooms[6]._id, rooms[7]._id, rooms[8]._id] 
    },
  ].map(async ({name, chatRooms}) => {
    await Company.updateMany(
      {name: name, },
      {chatRooms: chatRooms })
  }));

  console.log('companies seeded');

  process.exit();
});
