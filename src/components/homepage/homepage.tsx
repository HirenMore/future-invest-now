import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Skeleton,
  Stack,
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import React, { useState } from "react";
import HistoricalDataService from "../../services/API/HistoricalDataService";
import { NewsCard } from "./newsCard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
export const Homepage = (): React.ReactElement => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const service = new HistoricalDataService();
  const getLatestNews = () => {
    setIsLoading(true);
    service.getNews().then(async (data) => {
      await timeout(3000);
      setIsLoading(false);
      setNews(data.data.feed);
    });
  };
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid xs={12}>
          <Card>
            <CardHeader title="Homepage"></CardHeader>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card>
            <CardContent>
              Click on the button to get latest news from
              <Button
                style={{ marginLeft: "50px" }}
                variant="contained"
                onClick={getLatestNews}
                endIcon={<NewspaperIcon />}
              >
                Get News
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Card>
          {news.map((singleNews: any) => (
            <div> {singleNews?.summery}</div>
          ))}
        </Card>
      </Grid>

      <Stack spacing={3}>
        {news.map((singleNews, index) => (
          <NewsCard props={singleNews} index={index}></NewsCard>
        ))}
      </Stack>
      {isLoading && (
        <Stack>
          {[...Array(10)].map((e, i) => (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={60}
              />
            </Box>
          ))}
        </Stack>
      )}
    </>
  );
};
