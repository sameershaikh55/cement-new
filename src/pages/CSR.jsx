import React, { useEffect, useRef, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import { imgUrl } from "../redux/config";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import CsrProjects from "../components/CsrProjects";
import OurInitiative from "../components/OurInitiative";
import CsrSlider from "../components/CsrSlider";
import { csrApi } from "../redux";
import { connect } from "react-redux";
import Seo from "../components/Seo";

const CSR = ({ csr, csrApi }) => {
	const monthRef = useRef();

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	const [searchedData, setSearchedData] = useState(false);
	const [sliderState, setSliderState] = useState([]);

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(csr).length) {
		var temp_data = { ...csr.data };
		temp_data.month = JSON.parse(temp_data.month);
		temp_data.year = JSON.parse(temp_data.year);
		temp_data.our_initiative = JSON.parse(temp_data.our_initiative);
		temp_data.page = JSON.parse(temp_data.page);
		temp_data.page.key_focus_area_img = JSON.parse(
			temp_data.page.key_focus_area_img
		);
		temp_data.page.key_focus_area_desc = JSON.parse(
			temp_data.page.key_focus_area_desc
		);
		temp_data.page.key_focus_area_title = JSON.parse(
			temp_data.page.key_focus_area_title
		);
		temp_data.page.key_focus_area_image_alt = JSON.parse(
			temp_data.page.key_focus_area_image_alt
		);
	}

	const getFilterData = (
		selectedYear1,
		selectedMonth1,
		goodPracticeSliderData1
	) => {
		setSearchedData(true);
		let sliderData;
		if (
			selectedYear1 !== "All" &&
			selectedMonth1 !== "All" &&
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
			setSliderState(temp_data.our_initiative);
		}
		if (sliderData) {
			setSliderState(sliderData);
		}
	};

	useEffect(() => {
		csrApi();
	}, []);

	return (
		<>
			{(Object.keys(csr).length && (
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
					/>

					{/* BODY START */}
					<div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-10 col-md-12 mx-auto">
									<div
										data-aos="zoom-in-down"
										data-aos-delay="1200"
										data-aos-duration="500"
										className="mt-5"
									>
										{/* DIRECTION SECTION START */}
										<div className="d-flex justify-content-center align-items-center">
											<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
												<span
													className={`h6 mt-direction2Env text-uppercase`}
													dangerouslySetInnerHTML={{
														__html: temp_data.page.corporate_social_res,
													}}
												></span>
											</div>
										</div>
										{/* DIRECTION SECTION END */}
									</div>
									<div
										dangerouslySetInnerHTML={{
											__html: temp_data.page.corporate_social_desc,
										}}
									></div>

									<h5 className="text-center themeColor mb-5 text-uppercase mt-5">
										Ke
										<span className="borderBottom pb-2">y focus Are</span>
										as
									</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="page_container my-5">
						<div className="container-fluid">
							{temp_data.page.key_focus_area_title.map((prev, ind) => {
								return (
									<div className="row">
										{(ind % 2 === 0 && (
											<div className="col-12">
												{/* FIRST START */}
												<div className="row">
													<div
														data-aos="fade-right"
														data-aos-delay="300"
														data-aos-duration="600"
														data-aos-offset="600"
														className="col-12 col-sm-10 col-md-8 col-lg-6"
													>
														<div className="cementCard">
															<img
																src={
																	imgUrl +
																	temp_data.page.key_focus_area_img[ind]
																}
																alt={temp_data.page.key_focus_area_image_alt[ind]}
															/>
															<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
																<div>
																	<h4 className="themeColorG">{prev}</h4>
																	<p
																		dangerouslySetInnerHTML={{
																			__html:
																				temp_data.page.key_focus_area_desc[ind],
																		}}
																		className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify"
																	></p>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* FIRST START */}
											</div>
										)) || (
											<div className="col-12 mt-5 mt-md-0">
												{/* SECOND START */}
												<div className="row">
													<div
														data-aos="fade-left"
														data-aos-delay="300"
														data-aos-duration="600"
														data-aos-offset="600"
														className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
													>
														<div className="cementCard">
															<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
																<div>
																	<h4 className="rtlDirection themeColorG">
																		{prev}
																	</h4>
																	<p
																		dangerouslySetInnerHTML={{
																			__html:
																				temp_data.page.key_focus_area_desc[ind],
																		}}
																		className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify"
																	></p>
																</div>
															</div>
															<img
																src={
																	imgUrl +
																	temp_data.page.key_focus_area_img[ind]
																}
																alt="cardImage"
															/>
														</div>
													</div>
												</div>
												{/* SECOND END */}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
					{/* BODY END */}
				</div>
			)) ||
				""}

			<CsrProjects
				data={
					Object.keys(csr).length && temp_data.corporate_social_key_csr_project
				}
			/>

			{(!Object.keys(csr).length && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<>
					<OurInitiative
						monthRef={monthRef}
						year={temp_data.year}
						month={temp_data.month}
						our_initiative={temp_data.our_initiative}
						getFilterData={getFilterData}
						temp_data={temp_data}
					/>

					{(searchedData && (
						<div>
							{(sliderState.length > 0 && (
								<CsrSlider
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
						<CsrSlider
							temp_data={
								(sliderState.length > 0 && sliderState) ||
								temp_data.our_initiative
							}
							project_path={temp_data.project_path}
						/>
					)}

					{/* CSR BROUCHER START */}
					<div className="page_container mb-5 mt-5">
						<div className="container-fluid">
							<div className="row">
								{/* FIRST START */}
								<div className="col-12 text-center">
									<h4
										data-aos="fade-up"
										data-aos-delay="400"
										data-aos-duration="400"
										data-aos-offset="600"
										className="themeColor text-uppercase mb-4"
									>
										C
										<span className="borderBottom border-3 pb-1">
											SR BROCHUR
										</span>
										E
									</h4>

									<a
										target="blank"
										href="https://nuvoco.in/wp-content/uploads/2017/07/CSR-Brochure.pdf"
									>
										<button className="greenBtn px-4 py-1 text-uppercase text-white">
											Download
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			{/* CSR BROUCHER END */}

			<Footer />
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		csr: state.csrRed.csr,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		csrApi: function () {
			dispatch(csrApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CSR);
