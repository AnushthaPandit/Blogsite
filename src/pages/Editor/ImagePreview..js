import React from "react";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

const ImagePreview = ({ defaulImges, onCrossClick }) => {
	const handleCrossClick = (imageArrayIndex) => {
		if (typeof onCrossClick === "function") {
			onCrossClick(imageArrayIndex);
		}
	};

	return defaulImges
		? defaulImges.map((e, i) =>
				e ? (
					<div key={e} style={{ position: "relative" }}>
						<IconButton
							onClick={handleCrossClick.bind(this, i, e)}
							style={{
								position: "absolute",
								top: 0,
								right: 0,
							}}>
							<CancelIcon />
						</IconButton>
						<img width="100" height={"100"} src={"/logo192.png"} alt="" />
					</div>
				) : (
					""
				)
		  )
		: null;
};

export default ImagePreview;
