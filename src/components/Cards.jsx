
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { IoStarHalfOutline } from 'react-icons/io5';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box >

        <img style={{width:'100%', height:300}} src="https://img.freepik.com/free-photo/vertical-shot-concentrated-businessman-listening-carefully-with-crossed-hands_181624-29443.jpg" />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography sx={{display:'flex',gap:1}}>
          <span>Rating:</span> <span style={{display:'flex', alignItems:'center', gap:2}}>4.3<IoStarHalfOutline color='#fa2' size={22}  /></span>
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
       
        <Button  sx={{background:'#6af', color:'#fff'}}>Read More</Button>
        <Button  sx={{background:'#f66', color:'#fff'}}>Add To Card</Button>

      </CardActions>
      
    </Card>
  );
}