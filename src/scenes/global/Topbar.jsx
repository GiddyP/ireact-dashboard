import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Topbar.css';
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        margin: { xs: "0", lg: "0 30px" },
        position: { xs: "fixed", lg: "relative" },
        backgroundColor: { xs: colors.blueAccent[700], lg: "initial" },
        width: { xs: "100%", lg: "initial" },
        borderRadius: { xs: "0 0 3px 3px", lg: "none" },
        zIndex: { xs: "2", lg: "0" }
      }}

    >
      {/* Logo  */}
      <Box className="logo1"
        color={colors.grey[100]}
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      >
        <span className="logo__name">P_ <span className="logo__name2">W</span>ILD</span>
      </Box>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
        sx={{
          width: { xs: "54%", lg: "30%" },

        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton
          type="button"
          sx={{
            "& :hover": {
              color: `${colors.greenAccent[400]} !important`,
            },
            p: 1
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box
        display="flex"
        position="relative"
        sx={{
          "& :hover": {
            color: `${colors.greenAccent[400]} !important`,
          },
        }}
      >
        <IconButton
          sx={{
            display: { xs: "none", lg: "flex" }
          }}
        >
          <SettingsSuggestIcon />
        </IconButton>

        <IconButton
          sx={{
            marginLeft: { xs: "2px", lg: "0" },
            "& :hover": {
              color: `${colors.greenAccent[400]} !important`,
            },
          }}
          onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        >
          <PersonOutlinedIcon />
        </IconButton>

        <IconButton
          onClick={(e) => setOpen(true)}
          sx={{
            display: { xs: "flex", lg: "none" },
          }}
        >
          <WidgetsOutlinedIcon />
        </IconButton>
      </Box>
      <div
        className={open === true ? "nav__menu show" : "nav__menu"}
        id="nav-menu"
        style={{
          background: colors.grey[800],
        }}
      >
        <div className="nav__close" id="nav-close" onClick={(e) => setOpen(false)}>
          <CloseOutlinedIcon />
        </div>

        <ul className="nav__list">
          <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/ireact-dashboard/" className="nav__link">Home</Link></li>
          {/* <li class="nav__item" onClick={(e) => setOpen(false)} ><Link to="/team" class="nav__link">Team</Link></li> */}
          {/* <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/contacts" className="nav__link">Contacts</Link></li> */}
          <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/form" className="nav__link">Profile Form</Link></li>
          <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/calendar" className="nav__link">Calendar</Link></li>
          <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/faq" className="nav__link">FAQ</Link></li>
          <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/pie" className="nav__link">Pie Chart</Link></li>
          <li className="nav__item" onClick={(e) => setOpen(false)} ><Link to="/geography" className="nav__link">Geo Chart</Link></li>
        </ul>
      </div>



      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // set the initial state and then change it with the set method 
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          display: { xs: "none", lg: "flex" },
          marginTop: '30px',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default Topbar;