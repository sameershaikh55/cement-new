import React, { useEffect } from "react";

// IMPORTING ROUTER AND SWITCH
import { Switch, Route, useLocation, NavLink } from "react-router-dom";

// CSS LINKS SLICK CROUSEL
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "aos/dist/aos.css";
import "./styles/index-generated.css";

// IMPORTING ANIMATIONS
import AOS from "aos";

// IMPORTING CONTEXT
import BoardContext from "./context/BoardContext.jsx";
import EmployeeTestimonial from "./context/NuvocoLifeTestimonials.jsx";
import NuvocoLifeContext from "./context/NuvocoLifeContext.jsx";
import ManufacturingUnitsContext from "./context/ManufacturingUnitsContext";

// IMPORTING LOADER
import Loader from "./components/Loader.jsx";

// IMPORTING PAGES
import CementDuragaurd from "./pages/CementDuragaurd";
import Blogs from "./pages/Blogs";
import HomeBuilding from "./pages/HomeBuilding";
import BoardComitee from "./pages/BoardComitee";
import Cement from "./pages/Cement";
import Enviroment from "./pages/Enviroment";
import ContactUs from "./pages/ContactUs";
import BlogsList from "./pages/BlogsList";
import CoorporateOffice from "./pages/CoorporateOffice";
import HealthSefty from "./pages/HealthSefty";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import NovocoLife from "./pages/NovocoLife";
// import ScrollToTop from "./components/ScrollToTop.jsx";
import BoardDetails from "./pages/BoardDetails.jsx";
import EmployeeDetails from "./pages/EmployeeDetails";
import Sustainability from "./pages/Sustainability";
import MbmIstamax from "./pages/MbmIstamax";
import ConcreteAriste from "./pages/MbmAriste";
import Mbm from "./pages/Mbm";
import ManufacturingUnits from "./pages/ManufacturingUnits";
import CorporateGovernance from "./pages/CorporateGovernance";
import ManagementTeam from "./pages/ManagementTeam";
import BoardDetailsManagement from "./pages/BoardDetailsManagement";
import FinancialInformation from "./pages/FinancialInformation";
import InvestorContact from "./pages/InvestorContact";
import Media from "./pages/Media";
import About from "./pages/About";
import Covid from "./pages/Covid";
import Awards from "./pages/Awards";
import PartnerRelations from "./pages/PartnerRelations";
// import TestAnim2 from "./pages/TestAnim2";
import PartnerRelations2 from "./pages/PartnerRelations2";
import CSR from "./pages/CSR";
import LandMark from "./pages/LandMark";
import MissionVission from "./pages/MissionVission";
import InnovationCenter from "./pages/InnovationCenter";
import Home from "./pages/Home";

// IMPORTING ICONS
import { SiWhatsapp } from "react-icons/si";
import WhyNuvocoDetail from "./pages/WhyNuvocoDetail";
import UnitsPopUp from "./pages/UnitsPopUp";
import Disclaimer from "./pages/Disclaimer";
import { connect } from "react-redux";
import { menuApi, homeApi } from "./redux";

function App({ menuApi, menu, homeApi, home }) {
	useEffect(() => {
		menuApi();
		homeApi();
	}, []);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		window.addEventListener("load", (event) => {
			document.body.style.overflowY = "auto";
			const load = document.querySelector(".loading_page");
			load.style.opacity = "0";
			load.style.display = "none";
		});
	}, []);

	let history = useLocation().pathname;
	const hist = history.split("/");
	hist.shift();

	// let { nuvocoLife } = useParams();

	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<>
			<div className="loading_page">
				<div className="inner_loading">
					<Loader />
				</div>
			</div>
			{/* BUTTONS START */}
			{(Object.keys(menu).length && Object.keys(home).length && (
				<div className="fixedSideBtn d-flex">
					<NavLink to={menu.menu_list[7].menu_url}>
						<button> Contact Us </button>
					</NavLink>
					<NavLink to={home.home_page_list[4].link}>
						<button className="ms-4"> Home Builders </button>
					</NavLink>
				</div>
			)) ||
				""}
			<div className="fixedShareBtns">
				<a href="https://wa.me/919830017272?text=hi" target="blank">
					<button>
						<SiWhatsapp color="#fff" className="ws" />
					</button>
				</a>
			</div>
			{/* BUTTONS END  */}
			<ManufacturingUnitsContext>
				<BoardContext>
					<EmployeeTestimonial>
						<NuvocoLifeContext>
							{(Object.keys(menu).length && Object.keys(home).length && (
								<Switch>
									{/* <ScrollToTop /> */}
									{/* <Route exact path={`/`} component={TestAnim} /> */}
									{/* <Route exact path={`/`} component={TestAnim2} /> */}
									<Route exact path={`/`} component={Home} />
									<Route
										exact
										path={home.home_page_list[4].link}
										component={HomeBuilding}
									/>
									<Route
										exact
										path={`/products/:productName`}
										component={CementDuragaurd}
									/>
									<Route exact path={`/blog/:single`} component={Blogs} />
									<Route
										exact
										path={menu.menu_list[0].submenu_url[3]}
										component={BoardComitee}
									/>
									<Route
										exact
										path={menu.menu_list[1].submenu_url[0]}
										component={Cement}
									/>
									<Route
										exact
										path={menu.menu_list[2].submenu_url[2]}
										component={Enviroment}
									/>
									<Route
										exact
										path={menu.menu_list[7].menu_url}
										component={ContactUs}
									/>
									<Route
										exact
										path={menu.menu_list[8].menu_url}
										component={BlogsList}
									/>
									<Route exact path={`/disclaimer`} component={Disclaimer} />
									<Route
										exact
										path={menu.menu_list[0].submenu_url[5]}
										component={CoorporateOffice}
									/>
									<Route
										exact
										path={menu.menu_list[2].submenu_url[1]}
										component={HealthSefty}
									/>
									<Route
										exact
										path={home.home_page_list[7].link}
										component={Sustainability}
									/>
									<Route exact path={`/mbmIstamax`} component={MbmIstamax} />
									<Route
										exact
										path={menu.menu_list[1].submenu_url[2]}
										component={Mbm}
									/>
									<Route
										exact
										path={menu.menu_list[1].submenu_url[1]}
										component={ConcreteAriste}
									/>
									<Route
										exact
										path={menu.menu_list[0].submenu_url[8]}
										component={Awards}
									/>
									<Route
										exact
										path={menu.menu_list[5].menu_url}
										component={PartnerRelations}
									/>
									<Route
										exact
										path={menu.menu_list[2].submenu_url[3]}
										component={CSR}
									/>
									<Route
										exact
										path={menu.menu_list[0].submenu_url[1]}
										component={MissionVission}
									/>
									<Route
										exact
										path={menu.menu_list[0].submenu_url[7]}
										component={InnovationCenter}
									/>
									<Route
										exact
										path={`/partner-relations/:partnerName`}
										component={PartnerRelations2}
									/>
									<Route
										exact
										path={menu.menu_list[3].submenu_url[2]}
										component={CorporateGovernance}
									/>
									<Route
										exact
										path={menu.menu_list[3].submenu_url[0]}
										component={FinancialInformation}
									/>
									<Route
										exact
										path={menu.menu_list[0].submenu_url[0]}
										component={About}
									/>
									<Route
										exact
										path={menu.menu_list[3].submenu_url[1]}
										component={InvestorContact}
									/>
									<Route
										exact
										path={menu.menu_list[4].menu_url}
										component={Media}
									/>
									<Route
										exact
										path={menu.menu_list[2].submenu_url[0]}
										component={Covid}
									/>
									<Route
										exact
										path={home.home_page_list[5].link}
										component={LandMark}
									/>
									{(hist[0] ===
										menu.menu_list[0].submenu_url[2].replace("/", "") && (
										<>
											{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP START */}
											<div>
												<Route
													path={menu.menu_list[0].submenu_url[2]}
													component={BoardOfDirectors}
												/>
												<Route
													path={`${menu.menu_list[0].submenu_url[2]}/:board`}
													component={BoardDetails}
												/>
											</div>
											{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
										</>
									)) ||
										(hist[0] ===
											menu.menu_list[0].submenu_url[4].replace("/", "") && (
											<>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP START */}
												<div>
													<Route
														path={menu.menu_list[0].submenu_url[4]}
														component={ManagementTeam}
													/>
													<Route
														path={`${menu.menu_list[0].submenu_url[4]}/:board`}
														component={BoardDetailsManagement}
													/>
												</div>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
											</>
										)) ||
										(hist[0] === "nuvoco_life2" && (
											<>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP START */}
												<div>
													<Route
														path={`/nuvoco_life2`}
														component={NovocoLife}
													/>
													<Route
														path={`/nuvoco_life2/:nuvocoLife`}
														component={WhyNuvocoDetail}
													/>
												</div>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
											</>
										)) ||
										(hist[0] ===
											menu.menu_list[0].submenu_url[6].replace("/", "") && (
											<div>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
												<Route
													path={menu.menu_list[0].submenu_url[6]}
													component={ManufacturingUnits}
												/>
												<Route
													path={`${menu.menu_list[0].submenu_url[6]}/:units`}
													component={UnitsPopUp}
												/>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
											</div>
										)) || (
											<>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
												<div>
													<Route
														path={menu.menu_list[6].menu_url}
														component={NovocoLife}
													/>
													<Route
														path={`${menu.menu_list[6].menu_url}/:employee`}
														component={EmployeeDetails}
													/>
												</div>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
											</>
										)}
									{/* BOARD DIRECTOR */}
								</Switch>
							)) ||
								""}
						</NuvocoLifeContext>
					</EmployeeTestimonial>
				</BoardContext>
			</ManufacturingUnitsContext>
		</>
	);
}

const mapStatetoProps = (state) => {
	return {
		menu: state.menuRed.menu,
		home: state.homeRed.home,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		menuApi: function () {
			dispatch(menuApi());
		},
		homeApi: function () {
			dispatch(homeApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
