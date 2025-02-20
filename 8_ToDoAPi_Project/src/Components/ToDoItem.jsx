import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from '../style.module.css'


export function ToDoItem({item,fetchDetail}){
  return(
    <>

    <Card className={classes.task}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item?.todo}
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button onClick={()=>{fetchDetail(item?.id)}} sx={{
          backgroundColor:"rgb(0, 163, 232)",
          color:"white",
          border:"none"
        }} size="small">Details</Button>
      </CardActions>
    </Card>
    
    </>
  )
}