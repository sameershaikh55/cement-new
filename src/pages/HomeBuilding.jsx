import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import ThreeC from "../components/ThreeC";
import Seo from "../components/Seo";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { buildingApi } from "../redux";
import { imgUrl } from "../redux/config";

const HomeBuilding = ({ building, buildingApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		buildingApi();
	}, []);

	return (
		<>
			{(Object.keys(building).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={building.page_title}
						description={building.meta_description}
						canonical={building.canonical_rel}
						robot={building.meta_robots}
					/>
					<Hero
						heading={building.homebuild_title}
						img1={imgUrl + building.banner_img}
						img2={imgUrl + building.banner_img_mob}
						alt1={building.banner_img_alt}
						alt2={building.banner_img_alt}
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
													dangerouslySetInnerHTML={{
														__html: building.overview_title,
													}}
													className={`h6 mt-direction2Env text-uppercase`}
												></span>
											</div>
										</div>
										{/* DIRECTION SECTION END */}
									</div>
									<p
										data-aos="fade-right"
										data-aos-delay="1200"
										data-aos-duration="500"
										className="textJustify"
										dangerouslySetInnerHTML={{ __html: building.overview_desc }}
									></p>
								</div>
							</div>
						</div>
					</div>
					{/* BODY END */}

					<Feature data={building} />
					<ThreeC data={building} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		building: state.buildingRed.building,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		buildingApi: function () {
			dispatch(buildingApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeBuilding);
