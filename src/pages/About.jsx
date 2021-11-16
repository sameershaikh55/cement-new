import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurJourney from "../components/OurJourney";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import cementCard2 from "../assets/about2.png";
import Seo from "../components/Seo";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { Link } from "react-router-dom";
import { nuvocoGlanceApi } from "../redux";
import { connect } from "react-redux";
import { imgUrl } from "../redux/config";

const About = ({ nuvocoGlance, nuvocoGlanceApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		nuvocoGlanceApi();
	}, []);
	return (
		<>
			{(Object.keys(nuvocoGlance).length && (
				<>
					<div>
						<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
						<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />

						<Seo
							title={nuvocoGlance.about_nuvoco.meta_title}
							description={nuvocoGlance.about_nuvoco.meta_description}
							canonical={nuvocoGlance.about_nuvoco.canonical_rel}
							robot={nuvocoGlance.about_nuvoco.meta_robots}
						/>
						<Hero
							heading={nuvocoGlance.about_nuvoco.banner_img_title}
							img1={imgUrl + nuvocoGlance.about_nuvoco.banner_img}
							img2={imgUrl + nuvocoGlance.about_nuvoco.banner_img_mob}
							alt1={nuvocoGlance.about_nuvoco.banner_img_alt}
							alt2={nuvocoGlance.about_nuvoco.banner_img_alt}
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
														style={{ marginTop: "15px" }}
														className={`h6 mt-direction2Env text-uppercase`}
														dangerouslySetInnerHTML={{
															__html:
																nuvocoGlance.about_nuvoco.nuvoco_at_glance,
														}}
													></span>
												</div>
											</div>
											{/* DIRECTION SECTION END */}
										</div>

										<div
											dangerouslySetInnerHTML={{
												__html: nuvocoGlance.about_nuvoco.nuvoco_at_glance_desc,
											}}
										></div>
										<h6 className="mt-4 text-center text-md-start fw-bold">
											Our business portfolio includes:
										</h6>
									</div>
								</div>
							</div>
						</div>

						{/* SECOND SECTION START */}
						<div className="page_container my-5">
							<div className="container-fluid">
								{nuvocoGlance.about_nuvoco.buss_portfilio_title.map(
									(prev, ind) => {
										return (
											<>
												{(ind % 2 === 0 && (
													<div className="row">
														<div className="col-12">
															<div className="row mt-5">
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
																				nuvocoGlance.about_nuvoco
																					.buss_portfilio_img[ind]
																			}
																			alt="cardImage"
																		/>
																		<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
																			<div>
																				<h4
																					dangerouslySetInnerHTML={{
																						__html: prev,
																					}}
																					className="themeColorG"
																				></h4>
																				<p
																					dangerouslySetInnerHTML={{
																						__html:
																							nuvocoGlance.about_nuvoco
																								.buss_portfilio_desc[ind],
																					}}
																					className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify fiveLineElipses"
																				></p>
																			</div>
																			<div>
																				<Link
																					to={`/${nuvocoGlance.about_nuvoco.buss_portfilio_link[ind]}`}
																				>
																					<button className="greenBtn px-3 py-1 text-uppercase text-white">
																						Know more
																					</button>
																				</Link>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														{/* FIRST START */}
													</div>
												)) || (
													<div className="row">
														{/* SECOND START */}
														<div className="col-12 mt-5 mt-md-0">
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
																					Ready-Mix Con
																					<span className="borderBottomG pb-0 pb-sm-2">
																						crete
																					</span>
																				</h4>
																				<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify fiveLineElipses">
																					Our Ready-Mix Concrete (RMX) business
																					enjoys pan-India presence offering
																					specialised products under the brands
																					Artiste, InstaMix, XCon and Concreto
																					and being proud contributors to the
																					landmark projects like Lodha World
																					One, Amritsar Entry Gate, and the
																					Metros (Delhi, Jaipur, Noida and
																					Mumbai).
																				</p>
																			</div>
																			<div className="text-end">
																				<Link to="/concrete">
																					<button className="greenBtn px-3 py-1 text-uppercase text-white">
																						Know more
																					</button>
																				</Link>
																			</div>
																		</div>
																		<img src={cementCard2} alt="cardImage" />
																	</div>
																</div>
															</div>
														</div>
														{/* SECOND END */}
													</div>
												)}
											</>
										);
									}
								)}
								{/* FIRST START */}
							</div>
						</div>
						{/* BODY END */}
					</div>
				</>
			)) ||
				""}

			<OurJourney data={nuvocoGlance} />

			{(Object.keys(nuvocoGlance).length && <Footer />) || ""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		nuvocoGlance: state.nuvocoGlanceRed.nuvocoGlance,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		nuvocoGlanceApi: function () {
			dispatch(nuvocoGlanceApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(About);
