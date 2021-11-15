import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CovidBody from "../components/CovidBody";
import CovidGallery from "../components/CovidGallery";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { covidApi } from "../redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const Covid = ({ covid, covidApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		covidApi();
	}, []);

	return (
		<>
			{(Object.keys(covid).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={covid.covid_initiative.meta_title}
						description={covid.covid_initiative.meta_description}
						canonical={covid.covid_initiative.canonical_rel}
						robot={covid.covid_initiative.meta_robots}
					/>
					<Hero
						heading={covid.covid_initiative.banner_img_title}
						img1={imgUrl + covid.covid_initiative.banner_img}
						img2={imgUrl + covid.covid_initiative.banner_img_mob}
						alt1={covid.covid_initiative.banner_img_alt}
						alt2={covid.covid_initiative.banner_img_alt}
					/>{" "}
					{/* BODY START */}
					<div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-10 col-md-12 mx-auto">
									<div
										data-aos="zoom-in-down"
										data-aos-delay="1000"
										data-aos-duration="500"
										className="mt-5"
									>
										{/* DIRECTION SECTION START */}
										<div className="d-flex justify-content-center align-items-center">
											<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
												<span
													className={`h6 mt-direction2Env text-uppercase`}
													dangerouslySetInnerHTML={{
														__html: covid.covid_initiative.overview_title,
													}}
												></span>
											</div>
										</div>
										{/* DIRECTION SECTION END */}
									</div>
									<div
										dangerouslySetInnerHTML={{
											__html: covid.covid_initiative.overview_desc,
										}}
										data-aos="fade-right"
										data-aos-delay="1000"
										data-aos-duration="500"
										className="textJustify"
									></div>
									<p
										data-aos="fade-right"
										data-aos-delay="1000"
										data-aos-duration="500"
										className="textJustify"
									>
										We are contributing through various initiatives across the
										organization at all levels - employees, stakeholders and,
										local communities.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* BODY END */}
					<CovidBody data={covid} />
					<div className="page_container my-5 pt-4">
						<div className="container-fluid">
							<div className="row">
								<div className="col-12 col-md-7 mx-auto">
									<p
										data-aos="fade-right"
										data-aos-delay="1000"
										data-aos-duration="500"
										className="text-center"
									>
										Overall, we witnessed a resurgence of a strong ‘can do’
										attitude along with improved levels of collaboration across
										teams and functions.
									</p>
								</div>
							</div>
						</div>
					</div>
					<CovidGallery data={covid.covid_initiative} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		covid: state.covidRed.covid,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		covidApi: function () {
			dispatch(covidApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Covid);
