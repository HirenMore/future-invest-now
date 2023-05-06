import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";

export const NewsCard = (props: any) => {
  return (
    <Card>
      <CardActionArea>
        <Grid>
          <Grid xs={10}>
            <CardHeader
              title={props.index + 1 + "   " + props.props.title}
            ></CardHeader>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
