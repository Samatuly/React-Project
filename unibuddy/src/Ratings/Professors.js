import React from "react";
import ratingsData from "./RatingsData";
import facultyData from "./FacultyData";
import Ratings from './Ratings';

import {Grid} from "@mui/material";
import Box from '@mui/material/Box';
import './ratings.css';
function Professors(){
    return(
        <div className="ratings">
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {ratingsData.map((r, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                        <Ratings key = {r.id} faculty = {r}></Ratings>
                </Grid>
            ))
            }
            </Grid>
            </Box>
        </div>
    )
}
export default Professors