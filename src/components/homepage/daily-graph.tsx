import { Button, Card, CardHeader, Container, Grid } from "@mui/material";
import { useState } from "react";
import HistoricalDataService from "../../services/API/HistoricalDataService";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { theme } from "../../utills/theme/Theme";
import {
  WeeklyObject,
  createWeeklyObject,
} from "../../DataObjects/weeklyObject";

export const DailyGraph = (): React.ReactElement => {
  const service = new HistoricalDataService();
  const [graphData, setGraphData] = useState<WeeklyObject[]>([]);

  const getDataFromAPI = () => {
    service.getWeeklyGraphData().then((data) => {
      const weeklyData = data.data["Weekly Adjusted Time Series"];
      let weeklyDataArray: any[] = [];
      Object.keys(weeklyData).forEach((element) => {
        weeklyDataArray.push(createWeeklyObject(weeklyData[element], element));
      });
      weeklyDataArray = weeklyDataArray.slice(0, 100);
      localStorage.setItem("data", JSON.stringify(graphData));
      setGraphData((oldData) => weeklyDataArray);
    });
  };

  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Card>
            <CardHeader title="Graph data for IBM"></CardHeader>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card>
            <Button
              onClick={getDataFromAPI}
              variant="contained"
              sx={{ width: "100%" }}
            >
              Get Graph
            </Button>
          </Card>
        </Grid>

        <Grid xs={12}>
          <Card sx={{ width: 1, height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={graphData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="transactionDate" />
                <YAxis />1
                <Tooltip cursor={{ stroke: "red", strokeWidth: 1 }} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="open" stroke="#82ca9d" />
                <Line
                  type="monotone"
                  dataKey="close"
                  stroke={theme?.palette?.primary.main}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
