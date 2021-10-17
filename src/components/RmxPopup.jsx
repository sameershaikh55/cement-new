import React, { useState } from "react";
import ManufacturingPopup from "../components/ManufacturingPopup";

const RmxPopup = ({ prev }) => {
	const [popUpData, setPopUpData] = useState({
		img: "",
		desc: "",
	});

	const {
		state,
		office_name,
		company_name,
		office_address1,
		office_address2,
		office_address3,
		office_phone,
		office_direction,
		know_more_image,
		know_more_description,
	} = prev;

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = (ind) => {
		setPopUpData({
			title: know_more_image !== null && know_more_image[ind],
			img: know_more_image !== null && know_more_image[ind],
			desc: know_more_description !== null && know_more_description[ind],
		});

		if (know_more_image !== null && know_more_image[ind] !== null) {
			if (
				know_more_description !== null &&
				know_more_description[ind] !== null
			) {
				setOpen(true);
			}
		}
	};

	return (
		<div
			data-aos="zoom-out"
			data-aos-duration="500"
			data-aos-offset="300"
			data-aos-delay="300"
			className="col-6 coorporateCard"
		>
			<div>
				<h5 className="fw-bold borderBottomG border-3 pb-2">{state}</h5>
				<div className="row gy-5">
					{office_name.map((prev, ind) => {
						return (
							<div className="col-12" key={ind}>
								<ManufacturingPopup
									open={open}
									setOpen={setOpen}
									popUpData={popUpData}
								/>
								<h6 className="fw-bold">{prev}</h6>
								<h6 className="fw-bold">{company_name[ind]}</h6>
								<p className="mb-1">
									<strong>Address:</strong> {office_address1[ind]}
								</p>
								<p className="mb-1">{office_address2[ind]}</p>
								{office_address3[ind] !== null && (
									<p className="mb-1">{office_address3[ind]}</p>
								)}
								{(office_phone[ind] !== null && (
									<p className="mb-2">
										<strong>Phone:</strong> {office_phone[ind]}
									</p>
								)) ||
									""}
								<a target="blank" href={office_direction[ind]}>
									<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
										Get Location
									</button>
								</a>
								{know_more_image !== null && know_more_image[ind] !== null && (
									<button
										onClick={() => handleClickOpen(ind)}
										className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold"
									>
										Know more
									</button>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RmxPopup;
