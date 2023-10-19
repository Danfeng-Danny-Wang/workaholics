import LinkButton from "../LinkButton/LinkButton";

function ChatroomList() {
  const rooms = [
    { name: 'ROOM 1', color: 'error', },
    { name: 'ROOM 2', color: 'success', },
    { name: 'ROOM 3', color: 'warning', },
    { name: 'ROOM 4', color: 'info', }
  ];

  return (
    <>
      {rooms.map((room, index) => (
        <LinkButton
          key={index}
          url="/ChatBox"
          sx={{ marginBottom: 1, marginTop: 1 }}
          variant="contained"
          color={room.color}
          style={{
            color: "black",
            padding: "10px 100px",
            fontSize: "18px",
          }}
        >
          {room.name}
        </LinkButton>
      ))}
    </>
  );
}

export default ChatroomList;
