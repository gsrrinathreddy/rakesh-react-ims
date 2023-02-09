import { Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../Features/Users/userSlice";

export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user.users);
  const navigate = useNavigate();
  return (
    <>
      This is users page
      <Button onClick={() => dispatch(fetchUsers())}>Fetch Users</Button>
      {user.loading && <CircularProgress></CircularProgress>}
      {!user.loading && user.error ? (
        <Typography>Error:{user.users.err}</Typography>
      ) : null}
      {!user.loading && user.users.length
        ? user.users.map((item) => {
            return <Typography>{item.name}</Typography>;
          })
        : null}
      <br />
      <Button
        onClick={() => {
          navigate("/PostsApi");
        }}
      >
        Posts API
      </Button>
      <br />
      <Button
        onClick={() => {
          navigate("/Taskpage");
        }}
      >
        Task{" "}
      </Button>
    </>
  );
}
