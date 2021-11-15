import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader.jsx";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { partnerRelationsApi } from "../redux";
import PartnerRBody from "./PartnerRBody";
import Seo from "../components/Seo.jsx";
import { imgUrl } from "../redux/config.jsx";

const PartnerRelations = ({ partnerRelations, partnerRelationsApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		partnerRelationsApi();
	}, []);

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(partnerRelations).length) {
		var temp_data = { ...partnerRelations.data };
		temp_data.partner = JSON.parse(temp_data.partner);
		temp_data.page = JSON.parse(temp_data.page);
	}
	// ERROR HANDLING AND SORTING (PARSE) END

	return (
		<>
			{(!Object.keys(partnerRelations).length && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={temp_data.page.page_title}
						description={temp_data.page.meta_description}
						canonical={temp_data.page.canonical_rel}
						robot={temp_data.page.meta_robots}
					/>
					<Hero
						heading={temp_data.page.banner_img_title}
						img1={imgUrl + temp_data.page.banner_img}
						img2={imgUrl + temp_data.page.banner_img_mob}
						alt1={temp_data.page.banner_img_alt}
						alt2={temp_data.page.banner_img_alt}
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
														__html: temp_data.page.section1_title,
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
										dangerouslySetInnerHTML={{
											__html: temp_data.page.section1_desc,
										}}
									></p>
								</div>
							</div>
						</div>
					</div>

					{/* SECOND SECTION START */}
					<div className="page_container mb-5">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row">
										{temp_data.partner.map((temp_dataPrev, ind) => {
											return (
												<PartnerRBody
													temp_data={temp_dataPrev}
													ind={ind}
													project_path={temp_data.project_path}
												/>
											);
										})}
									</div>

									<div className="mt-5">
										<h6 className="lh-base">
											We also offer multi-specialty technical services (off-site
											and on-site) to our customers. To avail, connect with us
											on <strong className="themeColor">1800 345 6666</strong>{" "}
											(Toll-free)
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* BODY END */}

					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		partnerRelations: state.partnerRelationsRed.partnerRelations,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		partnerRelationsApi: function () {
			dispatch(partnerRelationsApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PartnerRelations);
