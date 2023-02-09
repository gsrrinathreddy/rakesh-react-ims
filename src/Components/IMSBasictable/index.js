import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Features/Postsapi/postSlice";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function IMSBasictable(props) {
  let a1 = props.a[0];
  let a2 = props.a[1];
  let a3 = props.a[2];
  let a4 = props.a[3];

  const postsapi = useSelector((state) => state.post.posts);
  console.log("Table of Posts", postsapi);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">{a1}</TableCell>
            <TableCell align="right">{a2}</TableCell>
            <TableCell align="right">{a3}</TableCell>
            <TableCell align="right">{a4}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postsapi.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.userId}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
