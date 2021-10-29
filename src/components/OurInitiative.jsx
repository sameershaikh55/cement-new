import React, { useState } from "react";

// IMPORTING IMAGES
import selectIcon from "../assets/selectIcon.png";
import calenderIcon from "../assets/calenderIcon.png";
import searchIcon from "../assets/searchIcon.png";

const OurInitiative = ({
	year,
	month,
	getFilterData,
	our_initiative,
	monthRef,
}) => {
	const [selectedYear, setSelectedYear] = useState("All");
	const [selectedMonth, setSelectedMonth] = useState("All");

	const field1 = (e) => {
		setSelectedYear(e.target.value);
		if (e.target.value === "All") {
			setSelectedMonth("All");
		}
	};

	const field2 = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<>
			{/* GOOD PRACTICES START */}
			<div className="page_container2 mt-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h4
								data-aos="fade-up"
								data-aos-delay="400"
								data-aos-duration="400"
								data-aos-offset="600"
								className="text-center themeColor text-uppercase"
							>
								O
								<span className="borderBottom border-3 pb-1">
									UR Initiative
								</span>
								s
							</h4>

							<div className="row my-4">
								<div className="col-12 col-md-11 mx-auto">
									<div className="row">
										<div className="col-12 col-md-10">
											<div className="row">
												<div
													data-aos="fade-up"
													data-aos-duration="600"
													data-aos-delay="1000"
													className="col-12 col-md-6 contactField"
												>
													<label
														className="themeColorG fw-bold"
														htmlFor="State"
													>
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3"
															value={selectedYear}
															onChange={field1}
														>
															<option selected value="All">
																All
															</option>
															{year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	// selected={selectedYear == item.id}
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
															className="contactIcon"
															src={calenderIcon}
															alt=""
														/>
													</div>
												</div>

												<div
													data-aos="fade-up"
													data-aos-delay="1200"
													data-aos-duration="400"
													data-aos-offset="600"
													className="col-12 col-md-6 mt-3 mt-md-0 contactField"
												>
													<label
														className="themeColorG fw-bold"
														htmlFor="State"
													>
														Month
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															ref={monthRef}
															disabled={selectedYear === "All" && true}
															value={selectedMonth}
															className="w-100 border-0 rounded-3"
															onChange={field2}
														>
															<option selected value="All">
																All
															</option>
															{month.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	// selected={selectedMonth == item.id}
																>
																	{item.month}
																</option>
															))}
														</select>
														<img
															className="selectIcon"
															src={selectIcon}
															alt="selectIcon"
														/>
														<img
															className="contactIcon"
															src={searchIcon}
															alt="contactIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="1600"
											data-aos-duration="400"
											data-aos-offset="600"
											className="col-12 col-md-2 align-self-end mb-2 mt-4 mt-md-0 text-center"
										>
											<button
												className="greenBtn text-white px-5 py-2 text-uppercase"
												onClick={() =>
													getFilterData(
														selectedYear,
														selectedMonth,
														our_initiative
													)
												}
											>
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
			{/* GOOD PRACTICES END */}
		</>
	);
};

export default OurInitiative;
