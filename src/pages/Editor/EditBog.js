import React from "react";

import { Typography, Box, TextField, Divider, Switch } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

import BubbleButon from "./Bubbles";
import FileUploadField from "./FileUpload.Field";
import Paragraph from "./Paragraph";

const EditBog = ({
	initialValues,
	validationSchema,
	onSubmitHandler,
	handleHeaderImage,
	headerImage,
	fieldsStructure,
	setfieldsStructure,
	setloading,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmitHandler}
			enableReinitialize>
			<Form>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Typography variant="h4">Edit Blog</Typography>
					<Switch checked={initialValues.is_published} size="large" />
				</Box>

				{/* SEO header image */}

				<FileUploadField
					label="SEO Header Image"
					name="headerImage"
					setloading={setloading}
					defaulImges={[headerImage]}
					onUpload={handleHeaderImage}
					onCrossClick={handleHeaderImage.bind(
						this,
						"media/BridalImages/default.jpg"
					)}
				/>

				{/* Title */}
				<Field type="text" name="title">
					{(props) => {
						let { field } = props;
						return (
							<Box m={1} pt={3}>
								<TextField
									variant="outlined"
									label={"Title"}
									fullWidth
									required
									{...field}
								/>
							</Box>
						);
					}}
				</Field>
				<ErrorMessage name="title">
					{(errMsg) => (
						<Typography color="primary" variant="body2">
							{errMsg}
						</Typography>
					)}
				</ErrorMessage>

				{/* Description */}

				<Field type="text" name="desc">
					{(props) => {
						let { field } = props;
						return (
							<Box m={1} pt={3}>
								<TextField
									variant="outlined"
									label={"Description"}
									fullWidth
									required
									multiline
									{...field}
								/>
							</Box>
						);
					}}
				</Field>
				<ErrorMessage name="desc">
					{(errMsg) => (
						<Typography color="primary" variant="body2">
							{errMsg}
						</Typography>
					)}
				</ErrorMessage>
				{/* HEADING H1 TEXT */}
				<Field type="number" name="h1">
					{(props) => {
						let { field } = props;
						return (
							<Box m={1} pt={3}>
								<TextField
									variant="outlined"
									label={"Heading H1 Text"}
									fullWidth
									{...field}
								/>
							</Box>
						);
					}}
				</Field>
				<ErrorMessage name="h1">
					{(errMsg) => (
						<Typography color="primary" variant="body2">
							{errMsg}
						</Typography>
					)}
				</ErrorMessage>
				{/* HEADING H2 TEXT */}
				<Field type="number" name="h2">
					{(props) => {
						let { field } = props;
						return (
							<Box m={1} pt={3}>
								<TextField
									variant="outlined"
									label={"Heading H2 Text"}
									fullWidth
									{...field}
								/>
							</Box>
						);
					}}
				</Field>
				<ErrorMessage name="h2">
					{(errMsg) => (
						<Typography color="primary" variant="body2">
							{errMsg}
						</Typography>
					)}
				</ErrorMessage>

				<Divider style={{ margin: "20px 0" }} />

				{/*  Paragraphs */}
				<Typography variant="h5">PARAGRAPHS</Typography>
				<Paragraph
					fieldsStructure={fieldsStructure}
					setfieldsStructure={setfieldsStructure}
					setloading={setloading}
					initialValues={initialValues}
				/>

				<Divider style={{ margin: "20px 0" }} />

				{/* Bottom bar */}
				<Typography variant="h5">FIXED BOTTOM BAR SETTINGS</Typography>

				<div
					style={{
						padding: "8px",
						margin: "18px",
						border: "2px solid red",
						borderRadius: "20px",
					}}>
					{/* Bottom bar h3 */}
					<Field type="number" name="bottom_bar_h3">
						{(props) => {
							let { field } = props;
							return (
								<Box m={1} pt={3}>
									<TextField
										variant="outlined"
										label={"Bottom Bar line 1 Text"}
										fullWidth
										{...field}
									/>
								</Box>
							);
						}}
					</Field>
					<ErrorMessage name="bottom_bar_h3">
						{(errMsg) => (
							<Typography color="primary" variant="body2">
								{errMsg}
							</Typography>
						)}
					</ErrorMessage>
					{/* Bottom bar h5 */}
					<Field type="number" name="bottom_bar_h5">
						{(props) => {
							let { field } = props;
							return (
								<Box m={1} pt={3}>
									<TextField
										variant="outlined"
										label={"Bottom Bar line 2 Text"}
										fullWidth
										{...field}
									/>
								</Box>
							);
						}}
					</Field>
					<ErrorMessage name="bottom_bar_h5">
						{(errMsg) => (
							<Typography color="primary" variant="body2">
								{errMsg}
							</Typography>
						)}
					</ErrorMessage>
					{/* button 1 text */}
					<Field type="number" name="btn_1_text">
						{(props) => {
							let { field } = props;
							return (
								<Box m={1} pt={3}>
									<TextField
										variant="outlined"
										label={"Button 1 text"}
										fullWidth
										{...field}
									/>
								</Box>
							);
						}}
					</Field>
					<ErrorMessage name="btn_1_text">
						{(errMsg) => (
							<Typography color="primary" variant="body2">
								{errMsg}
							</Typography>
						)}
					</ErrorMessage>
					{/* button 1 url */}
					<Field type="number" name="btn_1_url">
						{(props) => {
							let { field } = props;
							return (
								<Box m={1} pt={3}>
									<TextField
										variant="outlined"
										label={"Button 1 url"}
										fullWidth
										{...field}
									/>
								</Box>
							);
						}}
					</Field>
					<ErrorMessage name="btn_1_url">
						{(errMsg) => (
							<Typography color="primary" variant="body2">
								{errMsg}
							</Typography>
						)}
					</ErrorMessage>
					{/* button 2 text */}
					<Field type="number" name="btn_2_text">
						{(props) => {
							let { field } = props;
							return (
								<Box m={1} pt={3}>
									<TextField
										variant="outlined"
										label={"Button 2 text"}
										fullWidth
										{...field}
									/>
								</Box>
							);
						}}
					</Field>
					<ErrorMessage name="btn_2_text">
						{(errMsg) => (
							<Typography color="primary" variant="body2">
								{errMsg}
							</Typography>
						)}
					</ErrorMessage>
					{/* button 2 url */}
					<Field type="number" name="btn_2_url">
						{(props) => {
							let { field } = props;
							return (
								<Box m={1} pt={3}>
									<TextField
										variant="outlined"
										label={"Button 2 url"}
										fullWidth
										{...field}
									/>
								</Box>
							);
						}}
					</Field>
					<ErrorMessage name="btn_2_url">
						{(errMsg) => (
							<Typography color="primary" variant="body2">
								{errMsg}
							</Typography>
						)}
					</ErrorMessage>
				</div>

				{/* Save Button */}
				<BubbleButon
					variant="contained"
					text={"Save Blog!"}
					type="submit"
					fullWidth
				/>
			</Form>
		</Formik>
	);
};

export default EditBog;
