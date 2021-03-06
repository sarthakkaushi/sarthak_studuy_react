import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../actions/authAction";
import Logout from "../Auth/Logout";
import { newLogout } from "../../actions/authAction";
import { MobileAddPost } from "./HelperNavbar";
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function loginOrlogout() {
    if (props.isAuthenticated === true) {
      return (
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          onClick={() => handleLogout()}
        >
          <ExitToAppIcon />
          <Logout />
        </IconButton>
      );
    } else {
      return (
        <Link
          to="/login"
          style={{
            marginTop: "0",
            marginLeft: "5px",
            color: "white",
            textDecoration: "none"
          }}
        >
          Login
        </Link>
      );
    }
  }
  const displayUsername = () => {
    if (props.user) {
      return (
        <Typography variant="h5" noWrap>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            {props.user.name}
          </Link>
        </Typography>
      );
    }
  };

  const displayAddPost = () => {
    if (props.user) {
      return (
        <div className={classes.sectionDesktop}>
          <Link
            to="/add-new"
            style={{
              marginTop: "0",
              color: "white",
              textDecoration: "none"
            }}
          >
            <IconButton aria-label="show 4 new mails" color="inherit">
              <AddCircleIcon />
            </IconButton>
          </Link>
        </div>
      );
    }
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {MobileAddPost(props.user)}

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {displayUsername()}
      </MenuItem>
    </Menu>
  );
  const handleLogout = e => {
    newLogout();
    window.location.reload();
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              marginTop: "0",
              color: "white",
              textDecoration: "none"
            }}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Link
            to="/"
            style={{
              marginTop: "0",
              color: "white",
              textDecoration: "none"
            }}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              Study
            </Typography>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{displayUsername()}</div>
          {displayAddPost()}

          <div className={classes.sectionDesktop}>
            {loginOrlogout(props.isAuthenticated)}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
