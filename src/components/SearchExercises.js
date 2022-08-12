import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

import HorizontalScrollbar from "./HorizontalScrollbar"

import { exerciseOptions, fetchData } from "../utils/fetchData"


const SearchExercises = ( {setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([])

    //load body parts list as soon as page load
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
            setBodyParts(["All", ...bodyPartsData])
            console.log(bodyPartsData)
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search)
            );
            //clear search field after finishing the search
            setSearch("")
            setExercises(searchedExercises)
        }

    }

    return (
        <Stack alignItems="center" justifyContent="center" mt="40px" p="20px">
            <Typography
                fontWeight="700"
                lineHeight="1.25"
                sx={{ fontSize: { lg: "44px", sm: "30px" } }}
                mb="50px"
                textAlign="center">
                Awesome Exercises <br />You Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: { fontWeight: "700", border: "none", borderRadius: "4px 0 0 4px" },
                        width: { lg: "700px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "4px 0 0 4px"
                    }}
                    height="76px"
                    value={search}
                    placeholder="Search Exercises"
                    type="text"
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                />
                <Button
                    className="search-btn"
                    p={1}
                    sx={{
                        backgroundColor: "#ff2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "16px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        borderRadius: "0 4px 4px 0",
                        right: "0",
                        fontWeight: "700"
                    }}
                    onClick={handleSearch}
                >
                    Search</Button>
            </Box>
            <Box sx={{ position:"relative", width:"100%", padding:"20px"}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        </Stack>
    )
}

export default SearchExercises