import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"
import classes from '../style.module.css'
export function ToDoDetail({openDialog,setOpen,detail}){

  return (
    <>
    <Dialog open={openDialog} >
      <DialogTitle>{detail?.todo}</DialogTitle>
      <DialogActions>
        <Button  onClick={()=>{setOpen(false)}}   sx={{
          backgroundColor:"rgb(0, 163, 232)",
          color:"white",
          border:"none"
        }}>Close</Button>
      </DialogActions>
    </Dialog>
    </>
  )
}