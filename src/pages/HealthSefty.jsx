import React, { useEffect, useRef, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import OurComitment from "../components/OurComitment";
import SaftySlider from "../components/SaftySlider";
import VideoGallery from "../components/VideoGallery";

// IMPORTING IMAGES
import calenderIcon from "../assets/calenderIcon.png";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { healthSafetyApi } from "../redux";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const HealthSefty = ({ healthSafety, healthSafetyApi }) => {
	const monthRef = useRef();

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);
	const [selectedYear, setSelectedYear] = useState("All");
	const [selectedMonth, setSelectedMonth] = useState("All");
	const [searchedData, setSearchedData] = useState(false);
	const [sliderState, setSliderState] = useState([]);

	const field1 = (e) => {
		setSelectedYear(e.target.value);
		if (e.target.value === "All") {
			setSelectedMonth("All");
		}
	};

	const field2 = (e) => {
		setSelectedMonth(e.target.value);
	};

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(healthSafety).length) {
		var temp_data = { ...healthSafety.data };
		temp_data.month = JSON.parse(temp_data.month);
		temp_data.year = JSON.parse(temp_data.year);
		temp_data.good_practice = JSON.parse(temp_data.good_practice);
		temp_data.page = JSON.parse(temp_data.page);
		temp_data.page.section3_imgs = JSON.parse(temp_data.page.section3_imgs);
		temp_data.page.section3_imgs_titles = JSON.parse(
			temp_data.page.section3_imgs_titles
		);
		temp_data.page.video = JSON.parse(temp_data.page.video);
		console.log(temp_data);
	}

	const getFilterData = (
		selectedYear1,
		selectedMonth1,
		goodPracticeSliderData1
	) => {
		setSearchedData(true);
		if (
			(selectedYear === undefined && selectedMonth === undefined) ||
			(selectedYear === "All" && selectedMonth === "All")
		) {
			setSliderState(temp_data.good_practice);
		} else {
			let sliderData;

			if (
				selectedYear1 !== "All" &&
				selectedMonth !== "All" &&
				monthRef.current.disabled === false
			) {
				sliderData = goodPracticeSliderData1.filter(
					(item) =>
						item.year_id == selectedYear1 && item.month_id == selectedMonth1
				);
			} else if (selectedYear1 !== "All") {
				sliderData = goodPracticeSliderData1.filter(
					(item) => item.year_id == selectedYear1
				);
			} else {
				setSliderState(temp_data.good_practice);
			}
			if (sliderData) {
				setSliderState(sliderData);
			}
		}
	};
	useEffect(() => {
		healthSafetyApi();
	}, []);

	return (
		<>
			{(!Object.keys(healthSafety).length && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Seo
						title={temp_data.page.page_title}
						description={temp_data.page.meta_description}
						canonical={temp_data.page.canonical_rel}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={temp_data.page.banner_img_title}
						img1={imgUrl + temp_data.page.banner_img}
						img2={imgUrl + temp_data.page.banner_img_mob}
						alt1={temp_data.page.banner_img_alt}
						alt2={temp_data.page.banner_img_alt}
					/>{" "}
					{/* BODY START */}
					<div className="page_container2 mt-4">
						<div className="container-fluid">
							<div
								data-aos="fade"
								data-aos-delay="800"
								data-aos-duration="600"
								data-aos-offset="600"
								className="healthLogo text-center"
							>
								<img
									src={imgUrl + temp_data.page.section1_img}
									alt={temp_data.page.section1_imgs_titles}
									title={temp_data.page.section1_imgs_titles}
								/>
							</div>
							{/* OVERVIEW START */}
							<div
								data-aos="zoom-in"
								data-aos-delay="900"
								data-aos-duration="600"
								data-aos-offset="600"
								className="mt-3"
							>
								{/* DIRECTION SECTION START */}
								<div className="d-flex justify-content-center align-items-center">
									<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
										<span className={`h6 mt-direction2Env text-uppercase`}>
											{temp_data.page.section1_title}
										</span>
									</div>
								</div>
								{/* DIRECTION SECTION END */}
							</div>
							<div className="row mt-1 align-items-center">
								<div
									dangerouslySetInnerHTML={{ __html: temp_data.page.section1 }}
									className="col-12 col-md-6"
								></div>
								<div
									data-aos="fade-left"
									data-aos-delay="1200"
									data-aos-duration="600"
									data-aos-offset="400"
									className="col-12 col-md-6 d-none d-md-block"
								>
									<img
										className="w-100"
										src={imgUrl + temp_data.page.section1_center_img}
										alt="health"
									/>
								</div>
							</div>
							{/* OVERVIEW END */}

							{/* OUR POLICY START */}
							<div
								data-aos="zoom-in"
								data-aos-delay="400"
								data-aos-duration="600"
								data-aos-offset="400"
								className="mt-4"
							>
								{/* DIRECTION SECTION START */}
								<div className="d-flex justify-content-center align-items-center">
									<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
										<span className={`h6 mt-direction2Env text-uppercase`}>
											{temp_data.page.section2_title}
										</span>
									</div>
								</div>
								{/* DIRECTION SECTION END */}
							</div>
							<div
								dangerouslySetInnerHTML={{ __html: temp_data.page.section2 }}
							></div>
						</div>
					</div>
					{/* OUR POLICY END */}
					{/* BODY END */}
					<OurComitment temp_data={temp_data} />
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
										Go
										<span className="borderBottom border-3 pb-1">
											od Practi
										</span>
										ces
									</h4>

									<div className="row my-4">
										<div className="col-12 col-md-11 mx-auto">
											<div className="row">
												<div className="col-12 col-md-10">
													<div className="row">
														{/* YEAR START*/}
														<div
															data-aos="fade-up"
															data-aos-delay="800"
															data-aos-duration="400"
															data-aos-offset="600"
															className="col-12 col-md-6"
														>
															<div>
																<div className="w-100 contactField">
																	<label
																		className="fw-bold themeColorG"
																		htmlFor="year"
																	>
																		Year
																	</label>
																	<br />
																	<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																		{/* <input
																	className="w-100 border-0 rounded-3"
																	type="text"
																	name=""
																	id=""
																	placeholder="2015"
																/> */}
																		<select
																			className="w-100 border-0 rounded-3"
																			value={selectedYear}
																			onChange={field1}
																		>
																			<option selected value="All">
																				All
																			</option>
																			{temp_data.year.map((item) => (
																				<option value={item.id} key={item.id}>
																					{item.year}
																				</option>
																			))}
																		</select>
																		<img
																			className="contactIcon"
																			src={calenderIcon}
																			alt="calenderIcon"
																		/>
																	</div>
																</div>
															</div>
														</div>
														{/* YEAR END*/}

														{/* MONTH */}
														<div
															data-aos="fade-up"
															data-aos-delay="1200"
															data-aos-duration="400"
															data-aos-offset="600"
															className="col-12 col-md-6 mt-3 mt-md-0"
														>
															<div>
																<div className="w-100 contactField">
																	<label
																		className="fw-bold themeColorG"
																		htmlFor="year"
																	>
																		Month
																	</label>
																	<br />
																	<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																		{/* <input
																	className="w-100 border-0 rounded-3"
																	type="text"
																	name=""
																	id=""
																	placeholder="September"
																/> */}
																		<select
																			ref={monthRef}
																			disabled={selectedYear === "All" && true}
																			className="w-100 border-0 rounded-3"
																			value={selectedMonth}
																			onChange={field2}
																		>
																			<option selected value="All">
																				All
																			</option>
																			{temp_data.month.map((item) => (
																				<option value={item.id} key={item.id}>
																					{item.month}
																				</option>
																			))}
																		</select>
																		<img
																			className="contactIcon"
																			src={calenderIcon}
																			alt="calenderIcon"
																		/>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* MONTH END*/}
												{/* SUBMIT BTN START */}
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
																temp_data.good_practice
															)
														}
													>
														{temp_data.good_practice[0].submit_btn_text}
													</button>
												</div>
												{/* SUBMIT BTN END */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}
					{(searchedData && (
						<div>
							{(sliderState.length > 0 && (
								<SaftySlider
									temp_data={sliderState}
									project_path={temp_data.project_path}
								/>
							)) || (
								<div className="fw-bold text-center my-5 pb-3">
									No Data Available
								</div>
							)}
						</div>
					)) || (
						<SaftySlider
							temp_data={
								(sliderState.length > 0 && sliderState) ||
								temp_data.good_practice
							}
							project_path={temp_data.project_path}
						/>
					)}
					<div className="page_container my-5">
						<div className="container-fluid">
							<h4
								data-aos="fade-up"
								data-aos-delay="400"
								data-aos-duration="400"
								data-aos-offset="600"
								className="text-center themeColor text-uppercase mb-5 fw-bold"
							>
								te
								<span className="borderBottom border-3 pb-1">stimonia</span>ls
							</h4>

							<div className="row">
								<div className="col-12 col-md-10 mx-auto">
									<VideoGallery data={temp_data} />
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		healthSafety: state.healthSafetyRed.healthSafety,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		healthSafetyApi: function () {
			dispatch(healthSafetyApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HealthSefty);
