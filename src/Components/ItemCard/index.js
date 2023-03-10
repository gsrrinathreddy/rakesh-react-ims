import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google, Style } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IMSBadge from "../IMSBadge";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import IMSSnackbar from "../IMSSnackbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IMSChip from "../IMSChip";
import IMSSpeeddial from "../IMSSpeeddial";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard(props) {
  const ordercake = useSelector((state) => state.cake.noOfOrdered);
  let title = props.title;
  let subheader = props.subheader;
  let photo = props.photo;
  let actualPrice = props.actualPrice;
  let discountedPrice = props.discountedPrice;
  let rating = props.rating;
  let ap = props.ap;
  let dp = props.dp;
  let msg = props.msg;
  let orderbutton = props.orderbutton;
  let discountpercent = props.discountpercent;
  let m1 = props.m1;
  let seller = props.seller;
  let orderplaced = props.order;
  let favorder = props.favorder;
  const dispatch = useDispatch();
  let dpoff = props.discountedPercentage + "% off ";
  let colblue = "primary";
  let colwarning = "warning";
  let colSuccess = "success";
  let des = props.des;
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);
  let [qty, setQty] = React.useState(0);
  let [active, setActive] = React.useState();

  let params = {
    title: title,
    actualPrice: actualPrice,
    discountedPrice: discountedPrice,
    photo: photo,
    qty: parseInt(qty),
  };

  let param = {
    title: title,
    actualPrice: actualPrice,
    discountedPrice: discountedPrice,
    photo: photo,
    rating: rating,
    seller: seller,
    qty: parseInt(qty),
  };

  const like = () => {
    setActive(!active);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      {/* <CardMedia
         component="img"
         height="194"
         image={photo}
      /> */}
      <Card sx={{ width: "250px", marginLeft: "40px", marginRight: "40px" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia sx={{ height: "190px" }} component="img" image={photo} />
          <Box
            sx={{
              position: "absolute",
              alignItems: "flex-end",
              color: "white",
              top: 0,
              left: "85%",
              transform: "translateX(-50%)",
            }}
          >
            <Stack spacing={1}>
              <IMSChip label={seller} col={colSuccess}></IMSChip>
            </Stack>
            <Stack
              direction="row"
              flexDirection="row"
              justifyContent="flex-end"
              spacing={1}
            >
              <IMSChip label={rating} col={colwarning}></IMSChip>
            </Stack>
          </Box>
          <IMSChip label={m1}></IMSChip>
        </Box>
        <IMSChip label={dpoff} col={colblue}></IMSChip>
      </Card>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography variant="h4">
            {dp}
            {discountedPrice}
            <br />
          </Typography>
          <Typography variant="h6" sx={{ textDecorationLine: "line-through" }}>
            {ap}
            {actualPrice}
          </Typography>
        </Stack>
        <Typography>
          <br />
          <TextField
            sx={{ width: "100px" }}
            size="small"
            label="quantity"
            variant="outlined"
            type="number "
            InputProps={{
              inputProps: { min: 0 },
            }}
            defaultValue={0}
            onChange={(e) => setQty(e.currentTarget.value)}
          />
          <Button
            onClick={() => {
              if (qty > 0) dispatch(orderplaced(params));
            }}
          >
            <IMSSnackbar
              msg={qty + msg}
              orderbutton={orderbutton}
            ></IMSSnackbar>
          </Button>
          <IMSBadge
            badgeContent={qty}
            cartIcon={<ShoppingCartIcon />}
          ></IMSBadge>
          <IconButton
            onClick={() => {
              dispatch(favorder(param));
            }}
          >
            <FavoriteIcon
              onClick={like}
              sx={{ color: active ? "red" : "grey" }}
              // onClick={() => {
              //   dispatch(favorder(fav));
              // }}
            />
          </IconButton>
          <IMSSpeeddial share={actions}></IMSSpeeddial>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}

const actions = [
  { icon: <InstagramIcon></InstagramIcon>, name: "Instagram" },
  { icon: <FacebookIcon></FacebookIcon>, name: "Facebook" },
  { icon: <Google></Google>, name: "Google" },
  { icon: <LinkedInIcon></LinkedInIcon>, name: "LinkedIn" },
];
