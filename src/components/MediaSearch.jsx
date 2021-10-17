import React, { useEffect, useState } from "react";

// IMPORTING IMAGES
import calenderIcon from "../assets/calenderIcon.png";
import selectIcon from "../assets/selectIcon.png";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

const MediaSearch = ({
	temp_data,
	setAll,
	setsetSpecificCheack,
	allCheack,
	specificCheack,
	mediaRelationSearchApi,
	selectedYear,
	setSelectedYear,
	selectedMonth,
	setSelectedMonth,
	selectedCategory,
	setSelectedCategory,
	setSpecificCheack,
	setAllCheack,
}) => {
	useEffect(() => {
		mediaRelationSearchApi(selectedCategory, "", "");
	}, []);

	const paddingLeft = {
		paddingLeft: "3.4rem",
	};

	return (
		<div className="page_container mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-12 mx-auto">
						<h4
							data-aos="fade-up"
							data-aos-delay="1200"
							data-aos-duration="400"
							data-aos-offset="600"
							className="text-center themeColor text-uppercase"
						>
							S<span className="borderBottom border-3 pb-1">earc</span>h
						</h4>

						<div className="d-flex justify-content-center flex-wrap mt-4">
							{
								// top right
								temp_data.media_cat.map((item, index) => (
									<Fade delay={1000} left>
										<button
											onClick={() => {
												setSelectedCategory(item.id);
												mediaRelationSearchApi(item.id, "", "");
												setSpecificCheack(false);
												setAllCheack(true);
											}}
											className={`${
												(selectedCategory === item.id &&
													"themeGBG border-0 py-1 px-4 mt-2 text-white") ||
												"border-0 py-1 px-4 mt-2"
											} me-3`}
										>
											{item.category}
										</button>
									</Fade>
								))
							}{" "}
						</div>

						<div className="page_container2 mt-5">
							<div className="container-fluid">
								<div className="row my-5">
									<div className="col-11 mx-auto">
										<div
											data-aos="fade"
											data-aos-delay="1800"
											data-aos-duration="400"
											data-aos-offset="600"
											className="row d-block d-md-none borderG py-2 mb-3"
										>
											<div>
												<label className="d-flex align-items-center container-checkbox">
													All
													<input
														type="checkbox"
														name="all"
														value="all"
														onChange={(e) => {
															setAll(e, selectedCategory);
															setSelectedYear("");
															setSelectedMonth("");
														}}
														checked={allCheack}
													/>
													<span className="checkmark"></span>
												</label>
											</div>
										</div>
										<div
											data-aos="fade"
											data-aos-delay="1800"
											data-aos-duration="400"
											data-aos-offset="600"
											className="row borderG pt-2 pb-4"
										>
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
															<input
																type="checkbox"
																name="all"
																value="all"
																onChange={(e) => {
																	setAll(e, selectedCategory);
																	setSelectedYear("");
																	setSelectedMonth("");
																}}
																checked={allCheack}
															/>
															<span className="checkmark"></span>
														</label>
													</div>
													<div className="ms-0 ms-md-3 pt-2 pb-1 pb-md-3">
														<label className="d-flex align-items-center container-checkbox">
															Specific
															<input
																type="checkbox"
																name="specific"
																value="specific"
																onChange={(e) => setsetSpecificCheack(e)}
																checked={specificCheack}
															/>
															<span className="checkmark specific_"></span>
														</label>
													</div>
												</div>

												{specificCheack && (
													<div className="row">
														<div
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay="500"
															className="col-12 col-md-6 mt-3 mt-md-0"
														>
															<div
																data-aos="fade-up"
																data-aos-duration="600"
																data-aos-delay="500"
																className="contactField withoutIcon"
															>
																<label
																	className="fw-bold themeColorG"
																	htmlFor="year"
																>
																	Year
																</label>
																<br />
																<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																	<select
																		className="w-100 border-0 rounded-3"
																		name="year"
																		id="year"
																		style={paddingLeft}
																		onChange={(e) =>
																			setSelectedYear(e.target.value)
																		}
																	>
																		{temp_data.media_year.map((item) => (
																			<option
																				value={item.id}
																				key={item.id}
																				selected={selectedYear == item.id}
																			>
																				{item.year}
																			</option>
																		))}
																	</select>
																	<img
																		className="selectIcon"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																	<img
																		className="contactIcon ps-1"
																		src={calenderIcon}
																		alt="calenderIcon"
																	/>
																</div>
															</div>
														</div>

														{/* Month */}
														<div
															className="col-12 col-md-6 mt-3 mt-md-0"
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay="500"
														>
															<div>
																<div className="w-100 contactField withoutIcon">
																	<label
																		className="fw-bold themeColorG"
																		htmlFor="year"
																	>
																		Month
																	</label>
																	<br />
																	<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																		<select
																			className="w-100 border-0 rounded-3"
																			type="text"
																			name=""
																			id=""
																			style={paddingLeft}
																			onChange={(e) =>
																				setSelectedMonth(e.target.value)
																			}
																		>
																			{temp_data.media_month.map((item) => (
																				<option
																					value={item.id}
																					key={item.id}
																					selected={selectedMonth == item.id}
																				>
																					{item.month}
																				</option>
																			))}
																		</select>
																		<img
																			className="contactIcon ps-1"
																			src={calenderIcon}
																			alt="calenderIcon"
																		/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												)}
											</div>
											{specificCheack && (
												<div
													data-aos="fade-up"
													data-aos-duration="600"
													data-aos-delay="500"
													className="col-12 col-md-2 align-self-end mb-2 mt-4 mt-md-0 text-center d-none d-md-block"
												>
													<button
														className="downloadBtn greenBtn text-white px-4 py-2 text-uppercase"
														onClick={() =>
															mediaRelationSearchApi(
																selectedCategory,
																selectedYear,
																selectedMonth
															)
														}
													>
														submit
													</button>
												</div>
											)}
										</div>
									</div>
									<div
										data-aos="fade-up"
										data-aos-delay="1600"
										data-aos-duration="400"
										data-aos-offset="600"
										className="mb-2 mt-3 text-center d-block d-md-none"
										onClick={() =>
											mediaRelationSearchApi(
												selectedCategory,
												selectedYear,
												selectedMonth
											)
										}
									>
										<button className="greenBtn text-white px-4 py-2 text-uppercase">
											submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaSearch;
