import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        marginTop: '3rem',
      }}
    >
      <Card sx={{ maxWidth: 345, marginTop: '4rem', bgcolor: '#073B4C' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image="https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg"
            alt="Not found"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: '#EF476F', fontSize: 32, fontWeight: 700 }}
            >
              Page Not Found
            </Typography>
            <p className="color">
              Below are the possible reasons for this error to occur.
            </p>
            <ul>
              <li className="color">Wrong URL</li>
              <li className="color">Post might be deleted</li>
              <li className="color">Unstable internet connection</li>
              <li className="color">Database connection problems</li>
            </ul>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{ color: '#9E0059', bgcolor: '#95D5B2' }}
            onClick={() => navigate('/')}
          >
            Home
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default NotFound;
