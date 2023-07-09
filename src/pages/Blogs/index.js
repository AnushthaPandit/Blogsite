import React, { useEffect, useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import BackdropLoader from "../../components/Backdrop";
import CreateBlog from "./CreateBlog";

import configs from "../../configs";
import { deleteBlogById } from "../../apis/blog.apis";
import { useBlogList } from "../../context/BlogList.context";

const BlogList = () => {
	const { setloading, loading, rows, fetchBlogs } = useBlogList();
	const [openCreateDialog, setopenCreateDialog] = useState(false);

	const browserHistory = useHistory();

	const handleDelete = (blog_id) => {
		if (
			window.confirm("Are you sure you want to delete blog id " + blog_id + "?")
		) {
			(async () => {
				try {
					setloading(true);
					await deleteBlogById(blog_id);
					fetchBlogs();
				} catch (error) {
					alert("something went wrong!");
				} finally {
					setloading(false);
				}
			})();
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<>
			<BackdropLoader open={loading} />
			<Button
				variant="contained"
				color="primary"
				onClick={setopenCreateDialog.bind(this, true)}>
				Create Blog
			</Button>
			{!rows.length ? (
				<Typography variant="h6">No Data Found!</Typography>
			) : (
				<>
					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Blog id</TableCell>
									<TableCell align="right">Title</TableCell>
									<TableCell align="right">Header SEO Image</TableCell>
									<TableCell align="right">Blog Created At</TableCell>
									<TableCell align="right">URL</TableCell>
									<TableCell align="right">Edit</TableCell>
									<TableCell align="right">Delete</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.blog_id}>
										<TableCell component="th" scope="row">
											{row.blog_id}
										</TableCell>
										<TableCell align="right">
											{row.title.slice(0, 12)}
										</TableCell>
										<TableCell align="right">
											<img
												height="30"
												width="30"
												src={row.header_image}
												alt="blog header"
											/>
										</TableCell>
										<TableCell align="right">
											{moment(row.blog_created_time).format(
												"dddd, MMMM Do YYYY, h:mm:ss a"
											)}
										</TableCell>

										<TableCell align="right">
											<a
												href={`${configs.BASE_URL}/pages/articles/wedding/${row.slug}/preview`}
												target="_blank"
												rel="noopener noreferrer">
												preview
											</a>
										</TableCell>
										<TableCell align="right">
											<IconButton
												onClick={() =>
													browserHistory.push(`/blog/edit/${row.blog_id}`)
												}>
												<EditIcon color="primary" />
											</IconButton>
										</TableCell>
										<TableCell align="right">
											<IconButton
												onClick={handleDelete.bind(this, row.blog_id)}>
												<DeleteIcon color="primary" />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</>
			)}
			<CreateBlog
				open={openCreateDialog}
				handleClose={setopenCreateDialog.bind(this, false)}
			/>
		</>
	);
};

export default BlogList;
