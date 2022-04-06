import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ManufacturingPopup = ({ open, setOpen, popUpData, imgPath }) => {
	const handleClose = () => {
		setOpen(false);
	};

	console.log(imgPath);
	console.log(popUpData, "popUpData");

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<h2 className="text-center">{popUpData.title}</h2>
						<img
							style={{ minHeight: "250px", background: "#000" }}
							className="rounded-3 w-100 mb-2"
							src={`${imgPath}/${popUpData.img}`}
							alt={popUpData.title}
						/>
						<p className="text-center">{popUpData.desc}</p>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ManufacturingPopup;
