import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    flexDirection: { xs: "column", lg: "row" },
                    alignItems: { xs: "flex-start", lg: "center" },
                    mt: { xs: "80px", lg: "0"}
                }}
            >
                <Header title="DASHBOARD" subtitle="Welcome" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.greenAccent[400],
                            color: colors.grey[100],
                            fontSize: { xs: "10px", lg: "14px" },
                            fontWeight: "bold",
                            padding: { xs: "5px 10px", lg: "10px 20px" },
                            zIndex: '-1',
                        }}
                    >
                        Download Reports
                        <DownloadOutlinedIcon
                            sx={{
                                ml: {xs: "2px", lg: "10px"}
                            }} />
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"

                sx={{
                    display:{xs: "flex", lg: "grid"},
                    flexDirection: "column",
                    mt: {xs: "14px", lg: "0px"}
                }}
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        padding: {xs: "19px 0", lg: "inherit"}
                    }}
                >
                    <StatBox
                        title="6,901"
                        subtitle="Inbox"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        padding: {xs: "19px 0", lg: "inherit"}
                    }}
                >
                    <StatBox
                        title="$601,573"
                        subtitle="Sales"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        padding: {xs: "19px 0", lg: "inherit"}
                    }}
                >
                    <StatBox
                        title="$59,342,320"
                        subtitle="Revenue Generated"
                        progress="0.30"
                        increase="+29%"
                        icon={
                            <AccountBalanceOutlinedIcon
                                sx={{ color: colors.greenAccent[400], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn={"span 8"}
                    gridRow={"span 2"}
                    backgroundColor={colors.primary[400]}
                    sx={{
                        display: {xs: "none", lg: "block"}
                    }}
                >
                    <Box
                        mt={"25px"}
                        p={"0 30px"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>

                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.grey[500]}
                            >
                                $59,342,320
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500]
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box height={"250px"} mt={"-20px"}>
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                {/* TRANSACTIONS  */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 4"}
                    backgroundColor={colors.primary[400]}
                    overflow={"auto"}
                    
                    sx={{
                        mb:{xs: "10px", lg: "0"},
                    }}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        p={"15px"}
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight={"600"}
                        >
                            Recent Transaction
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId} - ${i}`}
                            display={"flex"}
                            justifyContent={'space-between'}
                            alignItems={"center"}
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p={"15px"}
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight={"600"}
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography
                                    color={colors.grey[100]}
                                >
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius={"4px"}
                            >
                                {transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
                        {/* CHARTS  */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{
                            p: "30px 30px 0 30px"
                        }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box
                        height={"250px"}
                        mt={"-20px"}
                    >
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    backgroundColor={colors.primary[400]}
                    p="30px"
                    sx={{
                        display: {xs: "none", lg: "block"}
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{
                            mb: "15px"
                        }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box
                        height={"200px"}
                    >
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
                {/*  */}
            </Box>
        </Box>
    );
};

export default Dashboard;