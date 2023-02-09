import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IMSBasictable from "../../Components/IMSBasictable";
import { fetchPosts } from "../../Features/Postsapi/postSlice";

export default function PostsApi() {
  let a = ["userId", "Id", "Title", "Body"];

  //   const postsapi = useSelector((state) => state.posts.posts);
  //   console.log("Table of Posts api", postsapi);
  const dispatch = useDispatch();

  return (
    <>
      This is Post API page
      {/* <Button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        posts api
      </Button> */}
      <IMSBasictable a={a}></IMSBasictable>
    </>
  );
}
