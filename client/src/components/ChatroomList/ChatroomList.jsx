import LinkButton from "../LinkButton/LinkButton";

function ChatroomList() {
  return (
    <>
      <LinkButton
        url="/ChatBox"
        sx={{ marginBottom: 1, marginTop: 1 }}
        variant="contained"
        style={{
          backgroundColor: "#5C76B7",
          padding: "10px 100px",
          fontSize: "18px",
        }}
      >
        Room 1
      </LinkButton>

      <LinkButton
        url="/ChatBox"
        sx={{ marginBottom: 1, marginTop: 1 }}
        variant="contained"
        style={{
          backgroundColor: "#5DBA40",
          padding: "10px 100px",
          fontSize: "18px",
        }}
      >
        Room 2
      </LinkButton>

      <LinkButton
        url="/ChatBox"
        sx={{ marginBottom: 1, marginTop: 1 }}
        variant="contained"
        style={{
          backgroundColor: "#ffea00",
          padding: "10px 100px",
          fontSize: "18px",
        }}
      >
        Room 3
      </LinkButton>

      <LinkButton
        url="/ChatBox"
        sx={{ marginBottom: 1, marginTop: 1 }}
        variant="contained"
        style={{
          backgroundColor: "#e53935",
          padding: "10px 100px",
          fontSize: "18px",
        }}
      >
        Room 4
      </LinkButton>
    </>
  );
}

export default ChatroomList;
