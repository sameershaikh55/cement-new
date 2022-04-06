import React, { useState } from "react";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";
import ManufacturingPopup from "./ManufacturingPopup";
import RmxPopup from "./RmxPopup";

const ManufacturingUnitBody = ({ manufacturing }) => {
	const [change, setChange] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [popUpData, setPopUpData] = useState({
		title: "",
		img: "",
		desc: "",
	});

	const handleClickOpen = (i, ind) => {
		setPopUpData({
			title:
				manufacturing.manufacturing_unit_cement[i].office_name !== null &&
				manufacturing.manufacturing_unit_cement[i].office_name[ind],
			img:
				manufacturing.manufacturing_unit_cement[i].know_more_image !== null &&
				manufacturing.manufacturing_unit_cement[i].know_more_image[ind],
			desc:
				manufacturing.manufacturing_unit_cement[i].know_more_description !==
					null &&
				manufacturing.manufacturing_unit_cement[i].know_more_description[ind],
		});

		if (
			manufacturing.manufacturing_unit_cement[i].office_name[0] !== null &&
			manufacturing.manufacturing_unit_cement[i].know_more_image[0] !== null &&
			manufacturing.manufacturing_unit_cement[i].know_more_description[0] !==
				null
		) {
			setOpen(true);
		}
	};

	return (
		<div>
			<ManufacturingPopup
				open={open}
				setOpen={setOpen}
				popUpData={popUpData}
				imgPath={manufacturing.manufacturing_detail.know_more_img_path}
			/>

			<div className="page_container my-5">
				<div className="container-fluid">
					<div className="d-flex justify-content-center">
						<Fade delay={1000} right>
							<button
								onClick={() => setChange(false)}
								className={`${
									(!change && "greenBtn rounded-0 text-white px-3 py-1") ||
									"text-dark border-0 rounded-0 px-3 py-1"
								} me-3`}
							>
								Cement
							</button>
						</Fade>
						<Fade delay={1000} left>
							<button
								onClick={() => setChange(true)}
								className={`${
									(change && "greenBtn rounded-0 text-white px-3 py-1") ||
									"text-dark border-0 rounded-0 px-3 py-1"
								} me-3`}
							>
								Ready-Mix Concrete
							</button>
						</Fade>
					</div>

					{(change && (
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="row">
									{manufacturing.manufacturing_unit_ready_mix_concrete.map(
										(prev, i) => {
											return <RmxPopup prev={prev} />;
										}
									)}
								</div>
							</div>
						</div>
					)) || (
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row">
										{manufacturing.manufacturing_unit_cement.map((prev, i) => {
											const {
												state,
												office_name,
												company_name,
												office_address1,
												office_address2,
												office_address3,
												office_phone,
												office_direction,
											} = prev;

											return (
												<div
													key={i}
													data-aos="zoom-out"
													data-aos-duration="500"
													data-aos-offset="300"
													data-aos-delay="300"
													className="col-6 coorporateCard"
												>
													<div>
														<h5
															dangerouslySetInnerHTML={{ __html: state }}
															className="fw-bold borderBottomG border-3 pb-2"
														></h5>
														<div className="row gy-5">
															{office_name.map((prev, ind) => {
																const checkingReadmore =
																	manufacturing.manufacturing_unit_cement[i]
																		.know_more_description !== null &&
																	manufacturing.manufacturing_unit_cement[i]
																		.know_more_description[ind];

																return (
																	<div className="col-12" key={ind}>
																		<h6 className="fw-bold">{prev}</h6>
																		<h6
																			dangerouslySetInnerHTML={{
																				__html: company_name[ind],
																			}}
																			className="fw-bold"
																		></h6>
																		<p className="mb-1">
																			<strong>Address:</strong>{" "}
																			<span
																				dangerouslySetInnerHTML={{
																					__html: office_address1[ind],
																				}}
																			></span>
																		</p>
																		<p
																			dangerouslySetInnerHTML={{
																				__html: office_address2[ind],
																			}}
																			className="mb-1"
																		></p>
																		{office_address3[ind] !== null && (
																			<p
																				dangerouslySetInnerHTML={{
																					__html: office_address3[ind],
																				}}
																				className="mb-1"
																			></p>
																		)}
																		{(office_phone[ind] !== null && (
																			<p className="mb-2">
																				<strong>Phone:</strong>{" "}
																				<span
																					dangerouslySetInnerHTML={{
																						__html: office_phone[ind],
																					}}
																				></span>
																			</p>
																		)) ||
																			""}
																		<a
																			target="blank"
																			href={office_direction[ind]}
																		>
																			<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
																				Get Location
																			</button>
																		</a>
																		{checkingReadmore && (
																			<button
																				onClick={() => handleClickOpen(i, ind)}
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
										})}
									</div>
								</div>
							</div>
						) ||
						""}
				</div>
			</div>
		</div>
	);
};

export default ManufacturingUnitBody;
