import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"

import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }} position="relative" p="20px">
            <Typography color="#ff2625" fontWeight="600" sx={{ fontSize: { lg: "22px", sm: "20px" } }}>
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", sm: "30px" } }} lineHeight="1.25" mb="20px" mt="20px">
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check Out The Most Effective Exercises
            </Typography>
            <Button href="#exercises" variant="contained" color="error" sx={{ backgroundColor: "#ff2625", padding: "10px 15px" }}>
                Explore Exercises
            </Button>
            <Typography fontWeight="600" fontSize="200px" color="#ff2625" sx={{ opacity: 0.05, display: { lg: "block", xs: "none" } }}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="Hero Banner" className="hero-banner-img" />
        </Box >
    )
}

export default HeroBanner