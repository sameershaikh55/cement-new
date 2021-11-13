import React, { useState } from "react";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";
import { imgUrl } from "../redux/config";

const ManagementTeamBodyMobile = ({ managementTeam }) => {
	const [change, setChange] = useState(false);

	return (
		<div className="page_container my-5">
			<div className="container-fluid">
				<div className="d-flex justify-content-center mb-5">
					<Fade delay={1000} right>
						<button
							onClick={() => setChange(false)}
							className={`${
								(!change && "greenBtn rounded-0 text-white px-3 py-1") ||
								"text-dark border-0 rounded-0 px-3 py-1"
							} me-3`}
						>
							Nuvoco Vistas Corp. Ltd.
						</button>
					</Fade>
					<Fade delay={1000} left>
						<button
							onClick={() => setChange(true)}
							className={`${
								(change && "greenBtn rounded-0 text-white px-3 py-1") ||
								"text-dark border-0 rounded-0 px-3 py-1"
							}`}
						>
							NU Vista Limited
						</button>
					</Fade>
				</div>
				{(change && (
					<div className="row">
						<div
							data-aos="fade-up"
							data-aos-offset="700"
							data-aos-delay="200"
							className="col-11 mx-auto"
						>
							<div className="row">
								{managementTeam.management_team_detail[1].NU_Vistas_Limited.map(
									(prev, i) => {
										const {
											person_photo,
											person_name,
											person_designation,
											person_description,
											image_alt,
										} = prev;
										return (
											<div key={i} className="col-12">
												<div className="row">
													<div className="col-4">
														<div className="row">
															<div className="col-12 col-sm-10 col-md-8">
																<img
																	className="w-100"
																	src={imgUrl + person_photo}
																	alt={image_alt}
																/>
																<h6
																	dangerouslySetInnerHTML={{
																		__html: person_name,
																	}}
																	className="themeColorG mb-0 mt-2 text-uppercase"
																></h6>
																<p
																	dangerouslySetInnerHTML={{
																		__html: person_designation,
																	}}
																></p>
															</div>
														</div>
													</div>
													<div className="col-8">
														<div className="d-flex align-items-start textJustify">
															<p
																dangerouslySetInnerHTML={{
																	__html: person_description,
																}}
																className="ms-1"
															></p>
														</div>
													</div>
													{managementTeam.management_team_detail[1]
														.NU_Vistas_Limited.length !==
														i + 1 && <hr className="my-4 mb-5" />}
												</div>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				)) || (
					<div className="row">
						<div
							data-aos="fade-up"
							data-aos-offset="700"
							data-aos-delay="200"
							className="col-11 mx-auto"
						>
							<div className="row">
								{managementTeam.management_team_detail[0].Nuvoco_Vistas_Crop_Ltd.map(
									(prev, i) => {
										const {
											person_photo,
											person_name,
											person_designation,
											person_description,
											image_alt,
										} = prev;
										return (
											<div key={i} className="col-12">
												<div className="row">
													<div className="col-4">
														<div className="row">
															<div className="col-12 col-sm-10 col-md-8">
																<img
																	className="w-100"
																	src={imgUrl + person_photo}
																	alt={image_alt}
																/>
																<h6
																	dangerouslySetInnerHTML={{
																		__html: person_name,
																	}}
																	className="themeColorG mb-0 mt-2 text-uppercase"
																></h6>
																<p
																	dangerouslySetInnerHTML={{
																		__html: person_designation,
																	}}
																></p>
															</div>
														</div>
													</div>
													<div className="col-8">
														<div className="d-flex align-items-start textJustify">
															<p
																dangerouslySetInnerHTML={{
																	__html: person_description,
																}}
																className="ms-1"
															></p>
														</div>
													</div>
													{managementTeam.management_team_detail[0]
														.Nuvoco_Vistas_Crop_Ltd.length !==
														i + 1 && <hr className="my-4 mb-5" />}
												</div>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ManagementTeamBodyMobile;
