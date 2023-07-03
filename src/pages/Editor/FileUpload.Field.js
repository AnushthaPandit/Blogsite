import React from "react";

import { Box, TextField, Typography } from "@mui/material";

import ImagePreview from "./ImagePreview.";
import { imageUploadAPI } from "../../apis/blog.apis";

const FileUploadField = ({
	onUpload,
	label,
	name,
	isMultiple,
	setloading,
	defaulImges,
	onCrossClick,
	...rest
}) => {
	const chnageHandler = (e) => {
		if (!e.target.files.length) {
			console.log("NO FILES");
			return;
		}

		e.persist();

		const fileFormData = new FormData();

		setloading(true);

		if (isMultiple) {
			for (let i = 0; i < e.target.files.length; i++) {
				fileFormData.append(
					"images",
					e.target.files[i],
					e.target.files[i].name
				);
			}
		} else {
			fileFormData.append("images", e.target.files[0], e.target.files[0].name);
		}

		imageUploadAPI(isMultiple ? "array" : "single", "blogImages", fileFormData)
			.then((res) => {
				const {
					data: { data },
				} = res;
				// const value =
				// 	"https://www.feba.co.in//media/BridalImages/270/15918095443150.jpg";
				// onUpload(isMultiple ? [value] : value, e);
				onUpload(data, e);
			})
			.catch((e) => {
				alert("Something went wrong!!");
				console.log(e);
			})
			.finally((e) => setloading(false));
	};

	return (
		<>
			<Box m={1} pt={3} display="flex" flexDirection="row">
				<div>
					<Typography variant="body1">{label}</Typography>
					<TextField
						type="file"
						fullWidth
						name={name}
						onChange={chnageHandler}
						inputProps={{
							accept: ".jpg, .png, .jpeg, .webp",
							multiple: !!isMultiple,
						}}
						{...rest}
					/>
				</div>
				<ImagePreview defaulImges={defaulImges} onCrossClick={onCrossClick} />
			</Box>
		</>
	);
};

export default FileUploadField;