import React from 'react'
import { Box, Stack, Typography } from "@mui/material"

const ExerciseVideos = ({ exerciseVideos, name }) => {

	return (
		<Box
			sx={{ marginTop: { lg: "30px", xs: "20px" } }}
			p="20px"
		>
			<Typography variant="h4" textTransform="capitalize" mb="33px">
				Watch <span style={{ color: "#ff2625" }}>{name}</span> Exercise Videos!
			</Typography>
			<Stack
				justifyContent="flex-start"
				alignItems="center"
				flexWrap="wrap"
				sx={{ flexDirection: { lg: "row" }, gap: { lg: "10px", xs: "0px" } }}
			>
				{exerciseVideos?.slice(0, 6).map((singleVideo, index) => (
					<a
						key={index}
						className="exercise-video"
						href={`https://www.youtube.com/watch?v=${singleVideo.video.videoId}`}
						target="blank"
						rel="noreferrer"
					>
						<img src={singleVideo.video.thumbnails[0].url} alt={singleVideo.video.title} className="video-thumbnail" />
						<Box>
							<Typography variant="h5" textTransform="capitalize" style={{ color: "#000" }}>
								{singleVideo.video.title}
							</Typography>
							<Typography variant="h6" textTransform="capitalize" style={{ color: "#000" }}>
								From: <a href={`https://www.youtube.com/channel/${singleVideo.video.channelId}`} target="blank"
									rel="noreferrer">{singleVideo.video.channelName}</a>
							</Typography>
						</Box>

					</a>
				))}
			</Stack>
		</Box>
	)
}

export default ExerciseVideos