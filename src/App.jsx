
import {BrowserRouter , Routes, Route} from "react-router-dom"
import { Navbar , Feed, VideoDetails, Channel, SearchFeed } from "./Components"
import {Box} from "@mui/material"

function App() {
  return (
    <BrowserRouter>
        <Box sx={{ backgroundColor: "white"}}> 
       < Navbar />
      <Routes>
      <Route path="/" exact element={<Feed /> } />
      <Route path="/video/:id"  element={<VideoDetails /> } />
      <Route path="/channel/:id"  element={<Channel /> } />
      <Route path="/search/:searchTerm"  element={<SearchFeed /> } />

      </Routes>

        </Box>
    </BrowserRouter>
  );
}

export default App;
