import React from 'react'
import { Typography, Stack, Button } from "@mui/material"

import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"


const Detail = ({ exerciseDetail }) => {
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
	const extraDetail = [{
		icon: BodyPartImage,
		name: bodyPart
	},
	{
		icon: TargetImage,
		name: target
	},
	{
		icon: EquipmentImage,
		name: equipment
	},
	]

	return (
		<div>
			<Stack
				gap="60px"
				sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
			>
				<img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
				<Stack
					sx={{ gap: { lg: "35px", xs: "20px" } }}
				>
					<Typography textTransform="capitalize" variant="h3">
						{name}
					</Typography>
					<Typography variant="h6">
						Exercises keep you strong. {name} is one of the best exercises to target your {target}.
						It will help you improve your mood and make your {target} strong.
					</Typography>
					{extraDetail.map((detail) => (
						<Stack flexDirection="row" alignItems="center" gap="24px" key={detail.name}>
							<Button sx={{ backgroundColor: "#fff2db", borderRadius: "50%", width: "100px", height: "100px", }}>
								<img src={detail.icon} sx={{ p: "10px" }} alt={bodyPart} style={{ width: "50px", height: "50px" }} />
							</Button>
							<Typography textTransform="capitalize" variant="h5">{detail.name}</Typography>
						</Stack>
					))
					}
				</Stack>
			</Stack>
		</div>
	)
}

export default Detail