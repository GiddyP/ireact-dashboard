import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";
const PieChart = (isDashboard = false) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsivePie
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
            }}
            // This is how to customize pie chart individual colors 
            // colors={['#111111', '#222222', '#cd44']}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.1}
            cornerRadius={3}
            activeOuterRadiusOffset={5}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            onMouseMove

            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[100]}
            arcLinkLabelsColor={colors.grey[100]}
            arcLinkLabelsThickness={1}
            enableArcLabels={false}
            activeInnerRadiusOffset={80}
            arcLabelsRadiusOffset={0.4}
            arcLabelsSkipAngle={7}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemWidth: isDashboard ? 42 : 100, // changed,
                    itemHeight: isDashboard ? 10 : 18, // changed,
                    itemTextColor: colors.redAccent[100],
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: isDashboard ? 10 : 18,
                    symbolShape: "circle",
                    itemsSpacing: 14,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#fff",
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default PieChart;