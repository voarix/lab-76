import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import dayjs from "dayjs";

interface Props {
  datetime: string;
  author: string;
  message: string;
}

const MessageItem: React.FC<Props> = ({datetime, author, message}) => {
  const formatDate = dayjs(datetime).format('YYYY-MM-DD HH:mm');

  return (
    <Card sx={{mb: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Typography variant="body2" fontWeight="bolder" color='primary'>
              {author}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>
              {formatDate}
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="h5">{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default MessageItem;