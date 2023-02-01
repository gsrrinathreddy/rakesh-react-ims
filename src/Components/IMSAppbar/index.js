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
import { Link } from "react-router-dom";
import IMSBadge from "../IMSBadge";
import { useSelector } from "react-redux";
import IMSAvatar from "../IMSAvatar";
import IMSAutocomplete from "../IMSAutocomplete";

export default function IMSAppbar(props) {
  let pages = props.pages;
  let settings = props.settings;
  let landingpage = props.landingpage;
  let ordercake = useSelector((state) => state.cake.noOfOrdered);
  let ordericecream = useSelector((state) => state.icecream.noOfOrdered);
  let orderchocolate = useSelector((state) => state.chocolate.noOfOrdered);
  let ordergift = useSelector((state) => state.gift.noOfOrdered);
  let orderflower = useSelector((state) => state.flower.noOfOrdered);
  let sum =
    ordercake + ordericecream + orderchocolate + ordergift + orderflower;

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
              <Link to={page} style={{ textDecoration: "none" }}>
                <Button
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
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ marginRight: "15px" }}>
            <IMSAutocomplete menu={menu}></IMSAutocomplete>
          </Box>

          <Box sx={{ marginRight: "10px" }} title="Cart">
            <Link to="Carts">
              <IMSBadge badgeContent={sum}></IMSBadge>
            </Link>
          </Box>

          <Box sx={{ marginRight: "15px" }}>
            <Tooltip title="Delivery Status">
              <Link to="Delivery">
                <IMSAvatar
                  photo={
                    "https://t4.ftcdn.net/jpg/04/29/81/81/360_F_429818115_FC8Yo1bGel4E8YXnLyA3HChkrGVU0h25.jpg"
                  }
                ></IMSAvatar>
              </Link>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
                <Link to={setting} style={{ textDecoration: "none" }}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
const menu = [
  { label: "Cakes" },
  { label: "Icecream" },
  { label: "Chocolate" },
  { label: "Gifts" },
  { label: "Flowers" },
];
