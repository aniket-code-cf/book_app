import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
  

      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
      
          <Typography variant="h3">Book Store App</Typography>
        </Button>
          <img  width="400" height="300" src="https://thumbs.dreamstime.com/b/library-books-background-book-closet-filled-41199253.jpg" class="photo " alt="books"/>
       

     
    
</Box>


    </div>







  );
};

export default Home;
