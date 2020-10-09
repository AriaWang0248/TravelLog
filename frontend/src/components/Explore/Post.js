import React from "react";
import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";

function Post(props) {
  return (
    <div>
      <Card>
        <CardContent>
          {/* <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          {/* <Typography color="textSecondary">adjective</Typography> */}
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
