import React from "react";
import { Box, TextField, Button } from "@mui/material";

import FileUploadField from "./FileUpload.Field";

const Paragraph = ({
	fieldsStructure,
	setfieldsStructure,
	setloading,
	initialValues,
}) => {
	const handleADDclick = () => {
		setfieldsStructure((prev) => [
			...prev,
			{
				para_title: "",
				para: "",
				single_image: "",
				slide_image: [],
				carousel: [],
			},
		]);
	};

	let handleChange = (i, e) => {
		let newFormValues = [...fieldsStructure];
		newFormValues[i][e.target.name] = e.target.value;
		setfieldsStructure(newFormValues);
	};

	const handleUpload = (i, v, e) => {
		let newFormValues = [...fieldsStructure];
		newFormValues[i][e.target.name] = v;
		setfieldsStructure(newFormValues);
	};

	const handleImageCrossClick = (inputName, arrIndex, imgIndex, imgSrc) => {
		if (inputName === "single_image") {
			let newfieldsStructure = fieldsStructure.map((e, i) => {
				if (i === arrIndex) {
					return { ...e, single_image: "" };
				}
				return e;
			});

			setfieldsStructure(newfieldsStructure);
			return;
		}

		let newfieldsStructure = fieldsStructure.map((e, i) => {
			if (i === arrIndex) {
				let d = { ...e };
				d[inputName] = d[inputName].filter((e, i) => i !== imgIndex);
				return d;
			}
			return e;
		});

		setfieldsStructure(newfieldsStructure);

		console.log({ inputName, arrIndex, imgIndex });
	};

	// const handleCrossClick = (structureIndex) => {
	// 	setfieldsStructure((curr) => curr.filter((e, i) => i !== structureIndex));
	// };

	return (
		<div style={{ margin: "12px" }}>
			{fieldsStructure.map((d, index) => (
				<div
					key={index}
					style={{
						padding: "8px",
						margin: "18px",
						border: "2px solid red",
						borderRadius: "20px",
						position: "relative",
					}}>
					{/* <IconButton
						style={{ position: "absolute", top: 0, right: 0 }}
						onClick={handleCrossClick.bind(this, index)}>
						<CancelIcon />
					</IconButton> */}
					<FileUploadField
						label="Single Image"
						name={"single_image"}
						defaulImges={[d.single_image]}
						setloading={setloading}
						onCrossClick={handleImageCrossClick.bind(
							this,
							"single_image",
							index
						)}
						onUpload={handleUpload.bind(this, index)}
					/>
					<FileUploadField
						label="Slide Images"
						name={"slide_image"}
						defaulImges={d.slide_image}
						setloading={setloading}
						onUpload={handleUpload.bind(this, index)}
						onCrossClick={handleImageCrossClick.bind(
							this,
							"slide_image",
							index
						)}
						isMultiple
					/>
					<FileUploadField
						label="Carousel Image"
						name={"carousel"}
						defaulImges={d.carousel}
						setloading={setloading}
						onUpload={handleUpload.bind(this, index)}
						onCrossClick={handleImageCrossClick.bind(this, "carousel", index)}
						isMultiple
					/>

					<Box m={1} pt={3}>
						<TextField
							variant="outlined"
							label={"Para Title"}
							name={"para_title"}
							defaultValue={fieldsStructure[index].para_title}
							onChange={handleChange.bind(this, index)}
							InputLabelProps={{ shrink: true }}
							fullWidth
							multiline
						/>
					</Box>
					<Box m={1} pt={3}>
						<TextField
							variant="outlined"
							label={"Paragraph"}
							name={"para"}
							defaultValue={fieldsStructure[index].para}
							onChange={handleChange.bind(this, index)}
							InputLabelProps={{ shrink: true }}
							fullWidth
							multiline
						/>
					</Box>
				</div>
			))}

			<Button
				style={{ float: "right" }}
				variant="contained"
				color="primary"
				onClick={handleADDclick}>
				ADD MORE PARAGRAPH
			</Button>
		</div>
	);
};

export default Paragraph;
