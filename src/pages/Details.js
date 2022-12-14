import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const randomImage = 'https://picsum.photos/600/400';

export default function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', padding: '5rem 0' }}>
      <Card
        sx={{ maxWidth: 600, width: '90%', margin: 'auto', bgcolor: '#073B4C' }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe"></Avatar>
          }
          title={
            <Typography
              variant="h4"
              sx={{ color: '#EF476F', fontWeight: 'bold' }}
            >
              {state.title.toUpperCase()}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          height="max-content"
          image={state.image ? state.image : randomImage}
          alt={state.title}
        />
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: 16, color: '#FFD166' }}>
            {state.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <ReplyAllIcon
              sx={{ color: 'orangered' }}
              onClick={() => navigate(-1)}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
