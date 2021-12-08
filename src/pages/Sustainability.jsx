import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

// IMPORTING IMAGES
import cementCard1 from "../assets/sustain1.png";
import cementCard2 from "../assets/sustain2.png";
import cementCard3 from "../assets/environmentCard.jpg";
import cementCard4 from "../assets/CSRCard.jpg";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { sustainabilityApi } from "../redux";
import { imgUrl } from "../redux/config";
import SustainabilityCard from "../components/SustainabilityCard";

const Sustainability = ({ sustainability, sustainabilityApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		sustainabilityApi();
	}, []);

	return (
		<>
			{(Object.keys(sustainability).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />

					<Seo
						title={sustainability.meta_title}
						description={sustainability.meta_description}
						canonical={sustainability.canonical_rel}
						robot={sustainability.meta_robots}
					/>
					<Hero
						heading={sustainability.sustanability_title}
						img1={imgUrl + sustainability.sustanability_banner_img}
						img2={imgUrl + sustainability.banner_img_mob}
						alt1={sustainability.sustanability_banner_img_alt}
						alt2={sustainability.sustanability_banner_img_alt}
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
														__html: sustainability.overview_title,
													}}
												></span>
											</div>
										</div>
										{/* DIRECTION SECTION END */}
									</div>
									<p
										data-aos="fade-right"
										data-aos-delay="1400"
										data-aos-duration="500"
										className="textJustify"
										dangerouslySetInnerHTML={{
											__html: sustainability.overview_desc,
										}}
									></p>
								</div>
							</div>
						</div>
					</div>

					{/* SECOND SECTION START */}
					<div className="page_container my-5">
						<div className="container-fluid">
							<div className="row">
								<div className="col-12 mb-5">
									<h4
										data-aos="fade-up"
										data-aos-delay="1800"
										data-aos-duration="500"
										className="text-center text-uppercase themeColor fw-bold"
									>
										OU
										<span className="borderBottom">R AREAS OF W</span>ORK
									</h4>
								</div>

								{sustainability.work_order.map((prev, i) => {
									return (
										<SustainabilityCard
											banner_img={sustainability.work_img[i]}
											banner_img_alt={sustainability.work_img_alt[i]}
											banner_img_title={sustainability.work_img_title[i]}
											short_desc={sustainability.work_subtitle[i]}
											title={sustainability.work_title[i]}
											ind={i}
											urlLink={sustainability.work_cta[i]}
										/>
									);
								})}
							</div>
						</div>
					</div>
					{/* SECOND SECTION END */}
					{/* BODY END */}

					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		sustainability: state.sustainabilityRed.sustainability,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		sustainabilityApi: function () {
			dispatch(sustainabilityApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Sustainability);
