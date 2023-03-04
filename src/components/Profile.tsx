import React from 'react';

import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Profile() {
  return (
    <Box sx={{minWidth: 500, maxWidth: 600, margin:'auto'}} p={2}>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h3">
          SHOTA YOKOI
        </Typography>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h6">
            誕生日
          </Typography>
          <Typography variant="body1">
            1999/11/12
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">
            所属
          </Typography>
          <Typography variant="body1">
            明治大学大学院 理工学研究科 ソフトウェア工学研究室
          </Typography>
        </CardContent>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Likes
            </Typography>
            <Typography variant="body1">
              VTuber / 同人音楽
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Likes
            </Typography>
            <Typography variant="body1">
              emacs / unixporn
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </Box>
  )
}

export default Profile;
