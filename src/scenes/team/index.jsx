import React from 'react';
// import { Box, Typography, useTheme } from '@mui/system';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Box, Typography, useTheme } from '@mui/material';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: 'number',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
    ];
    return (
        <Box ml={"2px"}>
            <Header title="TEAM" subtitle={"Managing the Team Members"} />
            <Box
                m={"40px 0 0 0"}
                height={"75vh"}
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none", 
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none", 
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[500] 
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none", 
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                    display: {xs: "none", lg: "block"}
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;