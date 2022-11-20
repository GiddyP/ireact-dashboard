import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { SidebarData } from "../../data/mockData";
import './Sidebar.css';

const Sidebar2 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState(0);

    return (
        <div className="Sidebar">
            <h5 className="logo"> P_wild </h5>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div
                            className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={item.to}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <Link
                                className="link"
                                to={item.to}>
                                {item.heading}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar2;
