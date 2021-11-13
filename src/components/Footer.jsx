import React, { useEffect } from "react";

// IMPORTING ICONS
import { GiPlainSquare } from "react-icons/gi";

// IMPORTING ANIMATIONS
import Bounce from "react-reveal/Bounce";
// import Fade from "r
import LightSpeed from "react-reveal/LightSpeed";
import { NavLink } from "react-router-dom";

// IMPORTING IMAGES
import footerV from "../assets/Footer.mp4";
import mobileFooter from "../assets/mobileFooter.mp4";

// REDUX
import { connect } from "react-redux";
import { footerApi } from "../redux";
import { imgUrl } from "../redux/config";

const Footer = ({ footer, footerApi }) => {
	useEffect(() => {
		footerApi();
	}, []);

	let footerLinks = [];

	if (Object.keys(footer).length) {
		footer.footer[0].footer_menu
			.map((prev, i) => {
				footerLinks.push({
					footer_menu: prev,
					quick_links: footer.footer[0].quick_links[i],
					order_by: footer.footer[0].order_by[i],
				});
			})
			.sort((a, b) => parseInt(a.order_by) - parseInt(b.order_by));
	}

	return (
		<>
			{(Object.keys(footer).length && (
				<>
					{/* == DESKTOP SCREEN START == */}
					<div className="footer_container position-relative pb-3">
						<video
							playsInline={true}
							className="footerImg d-none d-md-block"
							autoPlay
							loop
							muted
						>
							<source src={imgUrl + footer.footer[0].videos} type="video/mp4" />
							Your browser does not support the video tag.
						</video>

						<video
							playsInline={true}
							className="footerImg d-block d-md-none"
							autoPlay
							loop
							muted
						>
							<source
								src={imgUrl + footer.footer[0].video_mob}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>

						<div className="footerInner position-absolute w-100">
							<div className="page_container">
								<div className="container-fluid">
									<h4 className="mb-3 fw-bold">QUICK LINKS</h4>
									<div className="row mt-2 mb-4">
										{footerLinks.map((prev, i) => {
											let splitLink =
												Object.keys(footer).length &&
												prev.quick_links.split("/");

											return (
												<div key={i} className="col-6 col-md-4">
													<Bounce delay={400} left>
														<div className="d-flex align-items-center pointer mb-2">
															<NavLink
																className="text-decoration-none text-dark d-flex align-items-start"
																to={`/${
																	splitLink.length &&
																	splitLink[splitLink.length - 1]
																}`}
															>
																<div>
																	<GiPlainSquare
																		fontSize="0.5rem"
																		color="#42bb52"
																		className="me-2"
																	/>
																</div>
																<div>{prev.footer_menu}</div>
															</NavLink>
														</div>
													</Bounce>
												</div>
											);
										})}
									</div>

									<LightSpeed delay={1600} right cascade>
										<div
											dangerouslySetInnerHTML={{
												__html: footer.footer[0].copyright,
											}}
										></div>
									</LightSpeed>
								</div>
							</div>
						</div>
					</div>
					{/* == DESKTOP SCREEN END == */}
				</>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		footer: state.footerRed.footer,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		footerApi: function () {
			dispatch(footerApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Footer);
