import LinkButton from "../LinkButton/LinkButton";

function ChatroomList() {
  // const rooms = [
  //   { name: 'ROOM 1', color: '#5C76B7', },
  //   { name: 'ROOM 2', color: '#5DBA40', },
  //   { name: 'ROOM 3', color: '#ffea00', },
  //   { name: 'ROOM 4', color: '#e53935', }
  // ];
  const rooms = [
    { name: 'ROOM 1', color: 'error', },
    { name: 'ROOM 2', color: 'secondary', },
    { name: 'ROOM 3', color: 'success', },
    { name: 'ROOM 4', color: 'info', }
  ];

  return (
    <>
      {rooms.map((room, index) => (
        <LinkButton
          key={index}
          url="/ChatBox"
          sx={{ marginBottom: 1, marginTop: 1 }}
          variant="outlined"
          color={room.color}
          style={{
            // backgroundColor: room.color,
            padding: "10px 100px",
            fontSize: "18px",
          }}
        >
          <strong>{room.name}</strong>
        </LinkButton>
      ))}
    </>
  );
}

export default ChatroomList;
