import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import IMSBadge from "../IMSBadge";
import { useSelector } from "react-redux";
import IMSAvatar from "../IMSAvatar";
import IMSAutocomplete from "../IMSAutocomplete";
import { NavLink } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function IMSAppbar(props) {
  let pages = props.pages;
  let settings = props.settings;
  let landingpage = props.landingpage;
  let ordercake = useSelector((state) => state.cake.noOfOrdered);
  let ordericecream = useSelector((state) => state.icecream.noOfOrdered);
  let orderchocolate = useSelector((state) => state.chocolate.noOfOrdered);
  let ordergift = useSelector((state) => state.gift.noOfOrdered);
  let orderflower = useSelector((state) => state.flower.noOfOrdered);
  let orderproductitems = useSelector(
    (state) => state.productitems.noOfProductItems
  );

  let sum =
    ordercake +
    ordericecream +
    orderchocolate +
    ordergift +
    orderflower +
    orderproductitems;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      //fontColor: isActive ? 'red' : 'white',
      textDecoration: "none",
      textTransform: "none",
      my: 2,
      fontSize: isActive ? "18px" : "16px",
      display: "block",
      color: isActive ? "Pink" : "white",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "10px",
      marginLeft: "10px",
    };
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        backgroundImage: "linear-gradient(to right, indigo,pink)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {landingpage}
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page} style={{ textDecoration: "none" }}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {landingpage}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={page}
                style={navLinkStyles}
                onClick={handleCloseNavMenu}
              >
                {/* <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button> */}
                {page}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ marginRight: "15px" }}>
            <IMSAutocomplete menu={menu}></IMSAutocomplete>
          </Box>

          <Box sx={{ marginRight: "15px" }} title="Cart">
            <Link to="Carts">
              <IMSBadge
                badgeContent={sum}
                cartIcon={<ShoppingCartIcon />}
              ></IMSBadge>
            </Link>
          </Box>
          <Box sx={{ marginRight: "10px" }} title="Wishlist">
            <Link to="Fav">
              <IMSBadge cartIcon={<BookmarkIcon></BookmarkIcon>}></IMSBadge>
            </Link>
          </Box>

          {/* <Box sx={{ marginRight: "15px" }}>
            <Tooltip title="Delivery Status">
              <NavLink to="Delivery">
                <IMSAvatar
                  photo={
                    "https://t4.ftcdn.net/jpg/04/29/81/81/360_F_429818115_FC8Yo1bGel4E8YXnLyA3HChkrGVU0h25.jpg"
                  }
                ></IMSAvatar>
              </NavLink>
            </Tooltip>
          </Box> */}

          {/* <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <IMSAvatar
                  photo={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxAeBdUYoyKybeW_mEB3G-TH_qF_Vs4sEGw&usqp=CAU"
                  }
                ></IMSAvatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <NavLink to={setting} style={{ textDecoration: "none" }}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box> */}
          <Box>
            <Tooltip>
              <Box>
                <Button
                  color="inherit"
                  variant="text"
                  style={{ color: "black" }}
                  onClick={() => navigate("Signup")}
                >
                  Sign up
                </Button>
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
const menu = [
  { label: "Cake" },
  { label: "Icecream" },
  { label: "Chocolate" },
  { label: "Gifts" },
  { label: "Flowers" },
];
