import React, { useEffect } from "react";

// IMPORTING ROUTER AND SWITCH
import {
	Switch,
	Route,
	useLocation,
	NavLink,
	useParams,
} from "react-router-dom";

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

// IMPORTING REDUX PROVIDER AND STORE
import { Provider } from "react-redux";
import store from "./redux/store";

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

function App() {
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
			<Provider store={store}>
				{/* BUTTONS START */}
				<div className="fixedSideBtn d-flex">
					<NavLink to="/contact_us">
						<button> Contact Us </button>
					</NavLink>
					<NavLink to="/homeBuilding">
						<button className="ms-4"> Home Builders </button>
					</NavLink>
				</div>
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
								{/* <ScrollToTop /> */}
								<Switch>
									{/* <Route exact path={`/`} component={TestAnim} /> */}
									{/* <Route exact path={`/`} component={TestAnim2} /> */}
									<Route exact path={`/`} component={Home} />
									<Route
										exact
										path={`/homeBuilding`}
										component={HomeBuilding}
									/>
									<Route
										exact
										path={`/products/:productName`}
										component={CementDuragaurd}
									/>
									<Route exact path={`/blogs`} component={Blogs} />
									<Route
										exact
										path={`/board_committee`}
										component={BoardComitee}
									/>
									<Route exact path={`/cement`} component={Cement} />
									<Route exact path={`/enviroment`} component={Enviroment} />
									<Route exact path={`/contact_us`} component={ContactUs} />
									<Route exact path={`/blog_list`} component={BlogsList} />
									<Route exact path={`/disclaimer`} component={Disclaimer} />
									<Route
										exact
										path={`/co_orporate_office`}
										component={CoorporateOffice}
									/>
									<Route
										exact
										path={`/health_and_safety`}
										component={HealthSefty}
									/>
									<Route
										exact
										path={`/sustainability`}
										component={Sustainability}
									/>
									<Route exact path={`/mbmIstamax`} component={MbmIstamax} />
									<Route exact path={`/mbm`} component={Mbm} />
									<Route exact path={`/concrete`} component={ConcreteAriste} />
									<Route exact path={`/awards`} component={Awards} />
									<Route
										exact
										path={`/partnerRelations`}
										component={PartnerRelations}
									/>
									<Route exact path={`/csr`} component={CSR} />
									<Route exact path={`/VMV`} component={MissionVission} />
									<Route
										exact
										path={`/innovationCenter`}
										component={InnovationCenter}
									/>
									<Route
										exact
										path={`/partnerRelations2/:partnerName`}
										component={PartnerRelations2}
									/>
									<Route
										exact
										path={`/corporateGovernance`}
										component={CorporateGovernance}
									/>
									<Route
										exact
										path={`/financialInformation`}
										component={FinancialInformation}
									/>
									<Route exact path={`/aboutUs`} component={About} />
									<Route
										exact
										path={`/investorContact`}
										component={InvestorContact}
									/>
									<Route exact path={`/media`} component={Media} />
									<Route exact path={`/covid`} component={Covid} />
									<Route exact path={`/landmark`} component={LandMark} />
									{(hist[0] === "board_of_directors" && (
										<>
											{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP START */}
											<div>
												<Route
													path={`/board_of_directors`}
													component={BoardOfDirectors}
												/>
												<Route
													path={`/board_of_directors/:board`}
													component={BoardDetails}
												/>
											</div>
											{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
										</>
									)) ||
										(hist[0] === "managementTeam" && (
											<>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP START */}
												<div>
													<Route
														path={`/managementTeam`}
														component={ManagementTeam}
													/>
													<Route
														path={`/managementTeam/:board`}
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
										(hist[0] === "manufacturingUnits" && (
											<div>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
												<Route
													path={`/manufacturingUnits`}
													component={ManufacturingUnits}
												/>
												<Route
													path={`/manufacturingUnits/:units`}
													component={UnitsPopUp}
												/>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
											</div>
										)) || (
											<>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
												<div>
													<Route path={`/nuvoco_life`} component={NovocoLife} />
													<Route
														path={`/nuvoco_life/:employee`}
														component={EmployeeDetails}
													/>
												</div>
												{/* ROUTES FOR BOARD OF DIRECTOR PAGE AND IT'S POP-UP END */}
											</>
										)}
									{/* BOARD DIRECTOR */}
								</Switch>
							</NuvocoLifeContext>
						</EmployeeTestimonial>
					</BoardContext>
				</ManufacturingUnitsContext>
			</Provider>
		</>
	);
}

export default App;
