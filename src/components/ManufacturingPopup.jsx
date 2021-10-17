import * as React from "react";
import { DialogTitle } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import { imgUrl } from "../redux/config";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ManufacturingPopup = ({ open, setOpen, popUpData }) => {
	const handleClose = () => {
		setOpen(false);
	};

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
						<img src={imgUrl + popUpData.img} alt="" />
						<p className="text-center">{popUpData.desc}</p>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ManufacturingPopup;
