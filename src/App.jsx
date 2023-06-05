import Board from './components/Board'
import Typography from "@mui/material/Typography";
function App() {
  return (
    <>
    <Typography sx={{justifyContent:'center',textAlign:'center'}}variant="h6" component="h1">
      TASK MANAGEMENT
    </Typography>
        <Board></Board>
    </>
  )
}

export default App
