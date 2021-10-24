import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { Fade } from "react-awesome-reveal";
import { connect } from "react-redux";
import { icApi } from "../redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const InvestorContact = ({ ic, icApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);
	const [change, setChange] = useState(false);

	useEffect(() => {
		icApi();
	}, []);

	// console.log(ic);

	return (
		<>
			{(Object.keys(ic).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={ic.page.page_title}
						description={ic.page.meta_description}
						canonical={ic.page.canonical_rel}
					/>
					<Hero
						heading={ic.page.banner_img_title}
						img1={imgUrl + ic.page.banner_img}
						img2={imgUrl + ic.page.banner_img_mob}
						alt1={ic.page.banner_img_alt}
						alt2={ic.page.banner_img_alt}
					/>
					{/* INVESTOR BODY START */}
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
										Nuvoco Vistas Corp. Ltd.
									</button>
								</Fade>
								<Fade delay={1000} right>
									<button
										onClick={() => setChange(true)}
										className={`${
											(change && "greenBtn rounded-0 text-white px-3 py-1") ||
											"text-dark border-0 rounded-0 px-3 py-1"
										} me-3`}
									>
										NU Vista Ltd.
									</button>
								</Fade>
							</div>

							{(change && (
								<div className="row">
									<div className="col-11 col-md-12 mx-auto">
										<div className="row">
											{ic.page_investor[0].title.map((prev, i) => {
												console.log(prev);
												return (
													<div
														key={i}
														data-aos="zoom-out"
														data-aos-duration="500"
														data-aos-offset="300"
														data-aos-delay={`${
															(i === 0 && "1400") ||
															(i === 1 && "1800") ||
															(i === 2 && "2200")
														}`}
														className="col-12 col-md-6 coorporateCard"
													>
														<div>
															<h5 className="fw-bold borderBottomG border-3 pb-2">
																{prev}
															</h5>
															<div>
																<h6
																	dangerouslySetInnerHTML={{
																		__html:
																			ic.page_investor[0].office_type_name[i],
																	}}
																	className="fw-bold"
																></h6>
																<p className="mb-1">
																	<strong>Address:</strong>{" "}
																	<span
																		dangerouslySetInnerHTML={{
																			__html:
																				ic.page_investor[0].address_one[i],
																		}}
																	></span>
																</p>
																<p
																	dangerouslySetInnerHTML={{
																		__html: ic.page_investor[0].address_two[i],
																	}}
																	className="mb-1"
																></p>
																{ic.page_investor[0].address_three[i] && (
																	<p
																		dangerouslySetInnerHTML={{
																			__html:
																				ic.page_investor[0].address_three[i],
																		}}
																		className="mb-1"
																	></p>
																)}
																<p className="mb-2">
																	<strong>Phone:</strong>{" "}
																	<span
																		dangerouslySetInnerHTML={{
																			__html: ic.page_investor[0].phone[i],
																		}}
																	></span>
																</p>
																{ic.page_investor[0].email[i] && (
																	<p className="mb-2">
																		<strong>Email:</strong>{" "}
																		<span
																			dangerouslySetInnerHTML={{
																				__html: ic.page_investor[0].email[i],
																			}}
																		></span>
																	</p>
																)}
																{ic.page_investor[0].website[i] && (
																	<p className="mb-2">
																		<strong>Website:</strong>{" "}
																		<span
																			dangerouslySetInnerHTML={{
																				__html: ic.page_investor[0].website[i],
																			}}
																		></span>
																	</p>
																)}

																<a
																	target="blank"
																	href={ic.page_investor[0].direction[i]}
																>
																	<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
																		Get Directions
																	</button>
																</a>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							)) || (
								<div className="row">
									<div className="col-11 col-md-12 mx-auto">
										<div className="row">
											{ic.page_investor[1].title.map((prev, i) => {
												return (
													<div
														key={i}
														data-aos="zoom-out"
														data-aos-duration="500"
														data-aos-offset="300"
														data-aos-delay={`${
															(i === 0 && "1400") ||
															(i === 1 && "1800") ||
															(i === 2 && "2200")
														}`}
														className="col-12 col-md-6 coorporateCard"
													>
														<div>
															<h5 className="fw-bold borderBottomG border-3 pb-2">
																{prev}
															</h5>
															<div>
																<h6
																	dangerouslySetInnerHTML={{
																		__html:
																			ic.page_investor[1].office_type_name[i],
																	}}
																	className="fw-bold"
																></h6>
																<p className="mb-1">
																	<strong>Address:</strong>{" "}
																	<span
																		dangerouslySetInnerHTML={{
																			__html:
																				ic.page_investor[1].address_one[i],
																		}}
																	></span>
																</p>
																<p
																	dangerouslySetInnerHTML={{
																		__html: ic.page_investor[1].address_two[i],
																	}}
																	className="mb-1"
																></p>
																{ic.page_investor[1].address_three[i] && (
																	<p
																		dangerouslySetInnerHTML={{
																			__html:
																				ic.page_investor[1].address_three[i],
																		}}
																		className="mb-1"
																	></p>
																)}
																<p className="mb-2">
																	<strong>Phone:</strong>{" "}
																	<span
																		dangerouslySetInnerHTML={{
																			__html: ic.page_investor[1].phone[i],
																		}}
																	></span>
																</p>
																{ic.page_investor[1].email[i] && (
																	<p className="mb-2">
																		<strong>Email:</strong>{" "}
																		<span
																			dangerouslySetInnerHTML={{
																				__html: ic.page_investor[1].email[i],
																			}}
																		></span>
																	</p>
																)}
																{ic.page_investor[1].website[i] && (
																	<p className="mb-2">
																		<strong>Website:</strong>{" "}
																		<span
																			dangerouslySetInnerHTML={{
																				__html: ic.page_investor[1].website[i],
																			}}
																		></span>
																	</p>
																)}

																<a
																	target="blank"
																	href={ic.page_investor[1].direction[i]}
																>
																	<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
																		Get Directions
																	</button>
																</a>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					{/* INVESTOR BODY END */}

					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		ic: state.icRed.ic,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		icApi: function () {
			dispatch(icApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(InvestorContact);
