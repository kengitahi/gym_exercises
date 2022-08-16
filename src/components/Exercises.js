import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box, Typography, Stack } from "@mui/material"

import ExerciseCard from "./ExerciseCard"

import { exerciseOptions, fetchData } from "../utils/fetchData"


const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setcurrentPage] = useState(1)
    const exercisesPerPage = 9

    const indexOfLastExercise = exercisesPerPage * currentPage;
    const indexOfFirstExercise  = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const Paginate = ((e, value) =>{
        setcurrentPage(value)

    window.scrollTo({top:1800, behavior:"smooth"})
    } )

    useEffect(() => {
        const fetchExercisesData = async()=>{
            let exercisesData = []

            if (bodyPart === "All"){
                const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData)
        }
        fetchExercisesData();
    }, [bodyPart])

    return (
        <Box 
            id="exercises"
            sx = {{mt:{lg:"110px"}}}
            mt="50px"
            p="20px"
        >
            {exercises.length > 0 && (
                <Typography variant="h4" mb="46px" textTransform= "capitalize">
                    Here some some exercises from your search.
                </Typography>
                )
            }
            <Stack 
                direction="row"
                sx={{gap:{lg:"110px", sm:"50px"}}}
                flexWrap="wrap"
                justifyContent = "center"
            >
                {currentExercises.map((exercise,index) => (
                    <ExerciseCard exercise={exercise} key={index}/>
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length >9 && (
                    <Pagination 
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length/exercisesPerPage)}
                        page={currentPage}
                        onChange={Paginate}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises