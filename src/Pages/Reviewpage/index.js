import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { CardMedia } from "@mui/material";

const products = [
  {
    name: [],
    price: [],
  },
  //   {
  //     name: "Product 2",
  //     desc: "Another thing",
  //     price: "$3.45",
  //   },
  //   {
  //     name: "Product 3",
  //     desc: "Something else",
  //     price: "$6.51",
  //   },
  //   {
  //     name: "Product 4",
  //     desc: "Best thing of all",
  //     price: "$14.11",
  //   },
  //   { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Reviewpage() {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log("cart", cartList);
  let sum = 0;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartList.map((item) => (
          <ListItem key={item.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.title} />
            <Typography></Typography>
            <ListItemText
              primary={item.qty}
              secondary={item.discountedPrice}
            ></ListItemText>
            <Typography variant="body2">
              {item.qty * item.discountedPrice}
            </Typography>
          </ListItem>
        ))}
        {cartList.map((item) => {
          sum += item.discountedPrice * item.qty;
        })}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {sum}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid> */}
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
