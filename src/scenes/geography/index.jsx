import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
// import PieChart from "../../components/PieChart";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            m={"20px"}
            sx={{
                mt: { xs: "80px", lg: "0" }
            }}
        >
            <Header title={"Geography Chart"} subtitle={"Geography Chart"} />
            <Box
                sx={{
                    height: { xs: "65vh", lg: "75vh" },
                    zIndex: "-1 !important",
                }}
                border={`1px solid ${colors.grey[200]}`}
                borderRadius={"4px"}
            >
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default Geography;