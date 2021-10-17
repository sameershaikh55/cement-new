import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// IMPORTING ICONS
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import Fade from "react-reveal/Fade";

// import Bounce from "react-reveal/Bounce";
import { Bounce } from "react-awesome-reveal";
import { connect } from "react-redux";
import { menuApi } from "../redux";

const Sidebar = ({ isOpen, setIsOpen, setHamb, menuApi, menu }) => {
	useEffect(() => {
		menuApi();
	}, []);

	const [care, setCare] = useState(false);
	const [investor, setInvestor] = useState(false);
	const [media, setMedia] = useState(false);
	const [careers, setCareers] = useState(false);
	const [product, setProduct] = useState(false);
	const [about, setAbout] = useState(false);

	let history = useHistory();

	// HAMBERGER START
	const hambH = () => {
		setHamb(false);
	};
	const hambS = () => {
		setHamb(true);
	};
	// HAMBERGER END

	// SIDEBAR OPEN START
	const sbOpen = () => {
		setIsOpen(true);
	};
	const sbClosed = () => {
		setIsOpen(false);
	};
	// SIDEBAR OPEN END

	const careFunc2 = () => {
		setCare(false);
		hambS();
		sbOpen();
	};

	const investorFunc2 = () => {
		setInvestor(false);
		hambS();
		sbOpen();
	};

	const mediaFunc1 = () => {
		setMedia(true);
		hambH();
		sbClosed();
	};
	const mediaFunc2 = () => {
		setMedia(false);
		hambS();
		sbOpen();
	};

	const careersFunc1 = () => {
		setCareers(true);
		hambH();
		sbClosed();
	};
	const careersFunc2 = () => {
		setCareers(false);
		hambS();
		sbOpen();
	};

	const productFunc2 = () => {
		setProduct(false);
		hambS();
		sbOpen();
	};

	const aboutFunc2 = () => {
		setAbout(false);
		hambS();
		sbOpen();
	};

	const nestMenu = (url) => {
		if (url === "About Us") {
			setAbout(true);
			hambH();
			sbClosed();
		} else if (url === "Our Product Portfolio") {
			setProduct(true);
			hambH();
			sbClosed();
		} else if (url === "Investor Relations") {
			setInvestor(true);
			hambH();
			sbClosed();
		} else if (url === "Sustainability") {
			setCare(true);
			hambH();
			sbClosed();
		}
	};

	return (
		<>
			{(Object.keys(menu).length && (
				<div>
					{isOpen && (
						<div onClick={() => setIsOpen(false)} className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<ul className="list-unstyled">
									{menu.menu_list.map((prev, i) => {
										return (
											<li className="text-center">
												{(!prev.menu_url && (
													<div onClick={() => nestMenu(prev.menu)}>
														{prev.menu}
													</div>
												)) || (
													<NavLink
														className="text-dark text-decoration-none text-center"
														activeClassName="activeNav"
														to={prev.menu_url}
													>
														{prev.menu}
													</NavLink>
												)}
											</li>
										);
									})}
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}

					{/* CARE START */}
					{care && (
						<div className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<h3 className="themeColorG mb-3">
									Su
									<span className="borderBottomG pb-0 border-3">stainabil</span>
									ity
								</h3>
								<ul className="list-unstyled">
									{menu.menu_list[2].submenus.map((prev, i) => {
										return (
											<li key={i}>
												<NavLink
													className="text-dark text-decoration-none"
													activeClassName="activeNav"
													to={menu.menu_list[2].submenu_url[i]}
												>
													{prev}
												</NavLink>
											</li>
										);
									})}
									<li>
										<HiOutlineArrowCircleLeft
											fontSize="2rem"
											onClick={careFunc2}
											className="pointer themeColor"
										/>
									</li>
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}
					{/* CARE END */}

					{/* INVESTOR START */}
					{investor && (
						<div className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<h3 className="themeColorG mb-3">
									Inves
									<span className="borderBottomG pb-0 border-3">tor Relat</span>
									ions
								</h3>
								<ul className="list-unstyled">
									{menu.menu_list[3].submenus.map((prev, i) => {
										return (
											<li key={i}>
												<NavLink
													className="text-dark text-decoration-none"
													activeClassName="activeNav"
													to={menu.menu_list[3].submenu_url[i]}
												>
													{prev}
												</NavLink>
											</li>
										);
									})}
									<li>
										<HiOutlineArrowCircleLeft
											fontSize="2rem"
											onClick={investorFunc2}
											className="pointer themeColor"
										/>
									</li>
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}
					{/* INVESTOR END */}

					{/* MEDIA START */}
					{media && (
						<div className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<h3 className="borderBottomG pb-0 border-3 themeColorG mb-3">
									Media Relations
								</h3>
								<ul className="list-unstyled">
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/`}
										>
											Press Released
										</NavLink>
									</li>
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/`}
										>
											Key Interview
										</NavLink>
									</li>
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/`}
										>
											Contributory Articles
										</NavLink>
									</li>
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/`}
										>
											Media Contact
										</NavLink>
									</li>
									<li>
										<HiOutlineArrowCircleLeft
											fontSize="2rem"
											onClick={mediaFunc2}
											className="pointer themeColor"
										/>
									</li>
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}
					{/* MEDIA END */}

					{/* CAREERS START */}
					{careers && (
						<div className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<h3 className="themeColorG mb-3">
									Pe
									<span className="borderBottomG pb-0 border-3">ople & Ca</span>
									reer
								</h3>
								<ul className="list-unstyled">
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/nuvoco_life`}
										>
											Life @ Nuvoco
										</NavLink>
									</li>
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/nuvoco_life`}
										>
											Employee Testimonials
										</NavLink>
									</li>
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/nuvoco_life`}
										>
											Current Opening
										</NavLink>
									</li>
									<li>
										<NavLink
											className="text-dark text-decoration-none"
											activeClassName="activeNav"
											to={`/nuvoco_life`}
										>
											Submit a Resume
										</NavLink>
									</li>
									<li>
										<HiOutlineArrowCircleLeft
											fontSize="2rem"
											onClick={careersFunc2}
											className="pointer themeColor"
										/>
									</li>
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}
					{/* CAREERS END */}

					{/* CAREERS START */}
					{product && (
						<div className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<h3 className="themeColorG mb-3">
									Our Pr
									<span className="borderBottomG pb-0 border-3 ">oduct Po</span>
									rtfolio
								</h3>
								<ul className="list-unstyled">
									{menu.menu_list[1].submenus.map((prev, i) => {
										return (
											<li key={i}>
												<NavLink
													className="text-dark text-decoration-none"
													activeClassName="activeNav"
													to={menu.menu_list[1].submenu_url[i]}
												>
													{prev}
												</NavLink>
											</li>
										);
									})}
									<li>
										<HiOutlineArrowCircleLeft
											fontSize="2rem"
											onClick={productFunc2}
											className="pointer themeColor"
										/>
									</li>
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}
					{/* CAREERS END */}

					{/* CAREERS START */}
					{about && (
						<div className="SideBarContainer">
							<Bounce duration={500} cascade={true}>
								<h3 className="borderBottomG pb-0 border-3 themeColorG mb-3">
									About Us
								</h3>
								<ul className="list-unstyled">
									{menu.menu_list[0].submenus.map((prev, i) => {
										return (
											<li key={i}>
												{(menu.menu_list[0].submenu_url[i] === "/aboutUs" && (
													<a
														className="text-dark text-decoration-none"
														href={menu.menu_list[0].submenu_url[i]}
													>
														{prev}
													</a>
												)) || (
													<NavLink
														className="text-dark text-decoration-none"
														activeClassName="activeNav"
														to={menu.menu_list[0].submenu_url[i]}
													>
														{prev}
													</NavLink>
												)}
											</li>
										);
									})}
									<li>
										<HiOutlineArrowCircleLeft
											fontSize="2rem"
											onClick={aboutFunc2}
											className="pointer themeColor"
										/>
									</li>
								</ul>
							</Bounce>

							<div className="share_icons d-flex align-items-center">
								<Fade bottom>
									<a
										className="text-dark"
										href="https://www.facebook.com/Nuvoco"
										target="blank"
									>
										<div className="icon">
											<FaFacebookF />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={200}>
									<a
										className="text-dark"
										href="https://in.linkedin.com/company/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaLinkedinIn />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={400}>
									<a
										className="text-dark"
										href="https://twitter.com/nuvocovistas"
										target="blank"
									>
										<div className="icon ms-3">
											<FaTwitter />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={600}>
									<a
										className="text-dark"
										href="https://www.instagram.com/nuvocovistasofficial"
										target="blank"
									>
										<div className="icon ms-3">
											<AiOutlineInstagram />
										</div>
									</a>
								</Fade>
								<Fade bottom delay={800}>
									<a
										className="text-dark"
										href="https://www.youtube.com/NuvocoVistasCorpLtd"
										target="blank"
									>
										<div className="icon ms-3">
											<AiFillYoutube />
										</div>
									</a>
								</Fade>
							</div>
						</div>
					)}
					{/* CAREERS END */}
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		menu: state.menuRed.menu,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		menuApi: function () {
			dispatch(menuApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Sidebar);
