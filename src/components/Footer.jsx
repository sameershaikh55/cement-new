import React from "react";

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

const Footer = () => {
	return (
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
					<source src={footerV} type="video/mp4" />
					<source src={footerV} type="video/ogg" />
					Your browser does not support the video tag.
				</video>

				<video
					playsInline={true}
					className="footerImg d-block d-md-none"
					autoPlay
					loop
					muted
				>
					<source src={mobileFooter} type="video/mp4" />
					<source src={mobileFooter} type="video/ogg" />
					Your browser does not support the video tag.
				</video>

				<div className="footerInner position-absolute w-100">
					<div className="page_container">
						<div className="container-fluid">
							<h4 className="mb-3 fw-bold">QUICK LINKS</h4>
							<div className="row mt-2 mb-4">
								<div className="col-6 col-md-4">
									<Bounce delay={400} left>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/aboutUs"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>About Us</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce delay={200} left>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/landmark"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Landmark Projects</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce left>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/cement"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Cement</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce left>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/partnerRelations"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Partner Relations</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce right>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/concrete"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Ready-Mix Concrete</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce delay={200} right>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/sustainability"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Sustainability</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce delay={400} right>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/mbm"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Modern Building Materials</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce delay={400} right>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/nuvoco_life"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Careers</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
								<div className="col-6 col-md-4">
									<Bounce delay={400} right>
										<div className="d-flex align-items-center pointer mb-2">
											<NavLink
												className="text-decoration-none text-dark d-flex align-items-start"
												to="/homeBuilding"
											>
												<div>
													<GiPlainSquare
														fontSize="0.5rem"
														color="#42bb52"
														className="me-2"
													/>
												</div>
												<div>Home Building Solutions</div>
											</NavLink>
										</div>
									</Bounce>
								</div>
							</div>

							<LightSpeed delay={1600} right cascade>
								<div className="bottomFooter d-flex flex-column mt-3 mb-3">
									<small className="mb-1">
										© 2021, Nuvoco Vistas Corp Ltd. All Rights reserved.{" "}
										<NavLink className="text-decoration-none" to="/disclaimer">
											<span className="themeColorG">Disclaimer</span>
										</NavLink>
									</small>
									<small>
										The complete information on the licenses held by the
										manufacturer can be obtained from BIS website{" "}
										<a
											target="blank"
											href="https://www.bis.gov.in/"
											className="themeColorG text-decoration-none"
										>
											www.bis.gov.in
										</a>
									</small>
								</div>
							</LightSpeed>
						</div>
					</div>
				</div>
			</div>
			{/* == DESKTOP SCREEN END == */}
		</>
	);
};

export default Footer;
