import React from "react";

// IMPORTING IMAGES
import placeholderEmployee from "../assets/placeholderEmployee.png";

// IMPORTING IMAGES
// import selectIcon from "../assets/selectIcon.png";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// IMPORTING CONTEXT
import { EmployeeTestimonial } from "../context/NuvocoLifeTestimonials.jsx";

// IMPORTING LINK
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const EmployeTestimonials = () => {
	return (
		<EmployeeTestimonial.Consumer>
			{(state) => {
				return (
					<div className="page_container mt-4">
						<div className="container-fluid">
							<div
								data-aos="zoom-in"
								data-aos-delay="1200"
								data-aos-duration="600"
								data-aos-offset="500"
							>
								{/* DIRECTION SECTION START */}
								<div className="d-flex justify-content-center align-items-center">
									<div className="directionBgEnv em_test text-white d-flex justify-content-center fw-bold">
										<span className={`h6 me-1 mt-direction2Env text-uppercase`}>
											employee testimonials
										</span>
									</div>
								</div>
								{/* DIRECTION SECTION END */}
							</div>

							<div
								data-aos="flip-up"
								data-aos-delay="1800"
								data-aos-duration="600"
								data-aos-offset="500"
								className="employeeReviewSwiper mt-3"
							>
								<Swiper
									direction={"vertical"}
									navigation={true}
									className="mySwiper"
								>
									{state.EmployeeTestimonials.map((el, i) => {
										let title = state.nameToUrl(el.name);
										return (
											<SwiperSlide key={i}>
												<Link
													to={`/nuvoco_life/${title}`}
													className="text-decoration-none"
												>
													<div
														data-aos="flip-up"
														data-aos-delay="500"
														data-aos-duration="600"
														data-aos-offset="500"
														className="employeeTestimonial"
													>
														<div className="innerEmployeeTestimonial mx-auto py-3 py-sm-5 text-dark">
															<h2 className="text-center fw-bold">
																Tell us about your journey at Nuvoco
															</h2>
															<div className="row mt-4 mt-sm-5">
																<div className="col-7 col-md-9">
																	<h5 className="themeColorG">Learnings</h5>
																	<p className="onlyTextJustify">
																		The journey has been very exciting although
																		full of challenges which presented lot of
																		opportunities to learn. The challenging
																		situations have helped me to continually
																		expand the capacity to create the results
																		which is truly desired. In Nuvoco there is a
																		lot of emphasis on creating, acquiring, and
																		transferring knowledge, and at modifying
																		behaviour to reflect new knowledge and
																		insights
																	</p>
																</div>
																<div className="col-5 ps-0 ps-sm-3 col-md-3 mx-auto text-center">
																	<img
																		className="placeholderImg"
																		src={placeholderEmployee}
																		alt="placeholderEmployee"
																	/>
																	<h5 className="mt-2 fw-bold authorName">
																		-Ashwini Parashar
																	</h5>
																</div>
															</div>
														</div>
													</div>
												</Link>
											</SwiperSlide>
										);
									})}
								</Swiper>
							</div>

							{/* <div className="page_container2 mt-5 pt-3">
								<div className="container-fluid">
									DIRECTION SECTION START
									<div
										data-aos="zoom-in"
										data-aos-delay="1200"
										data-aos-duration="600"
										data-aos-offset="500"
										className="d-flex justify-content-center align-items-center"
									>
										<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
											<span className={`h6 mt-direction2Env text-uppercase`}>
												Openings at Nuvoco
											</span>
										</div>
									</div>
									DIRECTION SECTION END

									<div className="row mb-5 mt-2">
										<div className="col-11 mx-auto">
											<div className="row d-block d-md-none borderG py-2 mb-3">
												<div
													data-aos="fade-right"
													data-aos-duration="600"
													data-aos-delay="1000"
												>
													<label className="d-flex align-items-center container-checkbox">
														All
														<input type="checkbox" defaultChecked />
														<span className="checkmark"></span>
													</label>
												</div>
											</div>
											<div className="row borderG pt-2 pb-4">
												<div className="col-12 col-md-10">
													<div
														data-aos="fade-right"
														data-aos-duration="600"
														data-aos-delay="1200"
														className="d-flex"
													>
														<div className="d-none d-md-block pt-2 pb-1 pb-md-3">
															<label className="d-flex align-items-center container-checkbox">
																All
																<input type="checkbox" defaultChecked />
																<span className="checkmark"></span>
															</label>
														</div>
														<div className="ms-0 ms-md-3 pt-2 pb-1 pb-md-3">
															<label className="d-flex align-items-center container-checkbox">
																Specific
																<input type="checkbox" defaultChecked />
																<span className="checkmark"></span>
															</label>
														</div>
													</div>
													<div className="row">
														<div
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay="1000"
															className="col-12 col-md-6 mt-3 mt-md-0"
														>
															<div
																data-aos="fade-up"
																data-aos-duration="600"
																data-aos-delay="1000"
																className="contactField withoutIcon"
															>
																<label htmlFor="State">State*</label>
																<br />
																<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																	<select
																		className="w-100 border-0 rounded-3"
																		name="State"
																		id="State"
																	>
																		<option value="volvo">California</option>
																	</select>
																	<img
																		className="selectIcon"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
															</div>
														</div>
														<div
															data-aos="fade-up"
															data-aos-delay="1200"
															data-aos-duration="400"
															data-aos-offset="600"
															className="col-12 col-md-6 mt-3 mt-md-0"
														>
															<div>
																<div className="w-100 contactField withoutIcon">
																	<label
																		className="fw-bold themeColorG"
																		htmlFor="year"
																	>
																		Location
																	</label>
																	<br />
																	<div className="inp w-100 d-flex align-items-center rounded-2">
																		<input
																			className="w-100 border-0 rounded-3"
																			type="text"
																			name=""
																			id=""
																			placeholder="Jharkhand"
																		/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div
													data-aos="fade-up"
													data-aos-delay="1600"
													data-aos-duration="400"
													data-aos-offset="600"
													className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center d-none d-md-block"
												>
													<button className="greenBtn text-white px-5 py-2 text-uppercase mt-4">
														submit
													</button>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="1600"
											data-aos-duration="400"
											data-aos-offset="600"
											className="mb-2 mt-3 text-center d-block d-md-none"
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				);
			}}
		</EmployeeTestimonial.Consumer>
	);
};

export default EmployeTestimonials;
