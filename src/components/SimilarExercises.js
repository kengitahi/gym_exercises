import React from 'react'
import { Box, Stack, Typography } from "@mui/material"

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ similarExercises, equipmentExercises, target, equipment }) => {
	return (
		<Box
			sx={{ marginTop: { lg: "30px", xs: "20px" } }}
			p="20px"
		>
			<Typography variant="h4" textTransform="capitalize" mb="33px">
				Additional <span style={{ color: "#ff2625" }}>{target}</span> Exercises.
			</Typography>
			<Stack direction="row" sx={{ p: "2", position: "relative" }} >
				{similarExercises.length
					? <HorizontalScrollbar data={similarExercises} />
					: <Loader />
				}
			</Stack>
			<Typography variant="h4" textTransform="capitalize" mb="33px">
				Additional Exercises Using <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{equipment}</span>.
			</Typography>
			<Stack direction="row" p="2" sx={{ position: "relative" }} >
				{equipmentExercises.length
					? <HorizontalScrollbar data={equipmentExercises} />
					: <Loader />
				}
			</Stack>
		</Box>
	)
}

export default SimilarExercises