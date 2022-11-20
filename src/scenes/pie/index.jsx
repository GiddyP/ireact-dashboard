import { Box } from "@mui/system";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m={"20px"}

            sx={{
                zIndex: '-1 !important',
                mt: { xs: "80px", lg: "0" }
            }}
        >
            <Header title={"Pie Chart"} subtitle={"Company's Pie Chart"} />
            <Box
                sx={{
                    height: { xs: "65vh", lg: "75vh" },
                }}
            >
                <PieChart
                />
            </Box>
        </Box>
    );
};

export default Pie;