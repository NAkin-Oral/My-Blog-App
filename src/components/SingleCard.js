import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import EditPost from '../components/EditPost';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import FavoriteIcon from '@mui/icons-material/Favorite';

const randomImage = 'https://picsum.photos/350/200';

const SingleCard = props => {
  const [isValid, setIsValid] = useState(false);
  const { deletePost, setEditPostOpen, setUpdateInfo, increaseFav } =
    useContext(BlogContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { author, content, title, image, id, userId, favourite, likes } =
    props.post;

  const handleEdit = () => {
    setUpdateInfo({
      author: author,
      title: title,
      image: image,
      id: id,
      content: content,
      favourite: favourite,
      likes: likes,
    });
    setEditPostOpen(true);
  };

  const handleDetails = () => {
    if (user) {
      navigate(`/details/${title.split(' ').join('-')}`, {
        state: { id, userId, author, content, title, image, favourite, likes },
      });
    } else {
      toast.error('You Should Login to See Details');
    }
  };

  function checkImage(url) {
    const image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        setIsValid(true);
      }
    };
    image.onerror = function () {
      setIsValid(false);
    };
    image.src = url;
  }

  checkImage(image);

  return (
    <Grid item>
      <Card sx={{ width: 400, maxHeight: 530, bgcolor: '#073B4C' }}>
        <CardActionArea sx={{ cursor: 'default' }}>
          <CardMedia
            component="img"
            // height="140"
            // width='345'
            sx={{ maxHeight: '300px', maxWidth: '400px', objectFit: 'fill' }}
            image={isValid ? image : randomImage}
            alt={title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                height: '35px',
                fontWeight: 'bold',
                fontSize: 35,
                color: '#EF476F',
              }}
            >
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              sx={{ fontWeight: 'bold', fontSize: 20, color: '#06D6A0' }}
            >
              <i> #{author}</i>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                height: '50px',
                color: '#FFD166',
              }}
            >
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{ bgcolor: '#4D908E' }}
            onClick={handleDetails}
          >
            Details
          </Button>
          {user.uid === userId && (
            <>
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: '#9470FF' }}
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: '#6A040F' }}
                onClick={() => deletePost(id)}
              >
                Delete
              </Button>
            </>
          )}
          <FavoriteIcon
            sx={{
              marginLeft: 'auto',
              color: favourite !== '0' && 'red',
              cursor: 'pointer',
            }}
            onClick={() => increaseFav(props.post)}
          />
          <Typography sx={{ color: '#FFD166' }}>
            {favourite !== '0' ? favourite : null}
          </Typography>
        </CardActions>
      </Card>
      <EditPost />
    </Grid>
  );
};
export default SingleCard;
