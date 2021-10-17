import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader.jsx";

// IMPORTING IMAGES
import bannerM from "../assets/pRelation1BannerM.png";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { partnerRelationsDetailApi } from "../redux";
import Seo from "../components/Seo.jsx";
import { imgUrl } from "../redux/config.jsx";

const PartnerRelations2 = ({
	partnerRelationsDetail,
	partnerRelationsDetailApi,
}) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);
	const { partnerName } = useParams();
	const location = useLocation();

	useEffect(async () => {
		var x = await location.pathname.split("/");
		partnerRelationsDetailApi(partnerName);
	}, [partnerName.pageurl]);

	if (Object.keys(partnerRelationsDetail).length) {
		var temp_data = { ...partnerRelationsDetail.data };
		temp_data.page = JSON.parse(temp_data.page);
		temp_data.page.points_of_earning_logos = JSON.parse(
			temp_data.page.points_of_earning_logos
		);
		temp_data.page.points_of_earning_subtitle = JSON.parse(
			temp_data.page.points_of_earning_subtitle
		);
		temp_data.page.points_of_earning_orderby = JSON.parse(
			temp_data.page.points_of_earning_orderby
		);
		temp_data.page.partners_subtitle = JSON.parse(
			temp_data.page.partners_subtitle
		);
		temp_data.page.partners_order_by = JSON.parse(
			temp_data.page.partners_order_by
		);
		temp_data.page.redemption_thumbnail = JSON.parse(
			temp_data.page.redemption_thumbnail
		);
		temp_data.redemption_thumbnail_order = JSON.parse(
			temp_data.page.redemption_thumbnail_order
		);
		temp_data.page.redemption_thumbnail_subtitle = JSON.parse(
			temp_data.page.redemption_thumbnail_subtitle
		);

	}

	return (
		<>
			{(!Object.keys(partnerRelationsDetail).length && (
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
					/>
					<Hero
						heading={temp_data.page.banner_img_title}
						img1={imgUrl + temp_data.page.banner_img}
						img2={imgUrl + temp_data.page.banner_img_mob}
						alt1={temp_data.page.banner_img_alt}
						alt2={temp_data.page.banner_img_alt}
					/>
					{/* BODY START */}
					<div className="page_container2 mt-4">
						<div className="container-fluid">
							<div
								data-aos="fade"
								data-aos-delay="800"
								data-aos-duration="600"
								data-aos-offset="600"
								className="healthLogo text-center"
							>
								<img
									src={`${temp_data.project_path}${temp_data.page.partner_logo}`}
									alt={temp_data.page.partner_logo_alt}
								/>
							</div>

							<div className="row">
								<div className="col-10 col-md-12 mx-auto">
									<div
										data-aos="zoom-in-down"
										data-aos-delay="1200"
										data-aos-duration="500"
										className="mt-3"
									>
										{/* DIRECTION SECTION START */}
										<div className="d-flex justify-content-center align-items-center">
											<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
												<span className={`h6 mt-direction2Env text-uppercase`}>
													{temp_data.page.partner_about_title}
												</span>
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
											__html: temp_data.page.partner_about_desc,
										}}
									></p>

									<h4
										data-aos="zoom-in"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="500"
										className="text-center themeColor text-uppercase my-5"
										dangerouslySetInnerHTML={{
											__html: temp_data.page.elegibility_title,
										}}
									></h4>
									<p
										data-aos="fade-right"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="500"
										className="textJustify"
									>
										{temp_data.page.elegibility_desc}{" "}
									</p>

									<div
										data-aos="zoom-in"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="500"
										className="mt-5"
									>
										<h4
											className="text-center themeColor text-uppercase my-5"
											dangerouslySetInnerHTML={{
												__html: temp_data.page.points_of_earning_title,
											}}
										></h4>
									</div>

									<div className="row">
										{temp_data.page.points_of_earning_logos.map((prev, i) => {
											return (
												<div
													data-aos="zoom-in"
													data-aos-duration="600"
													data-aos-offset="700"
													data-aos-delay={`${i * 200}`}
													key={i}
													className="col-6 col-md-4 col-lg-3 commitmentCard text-center"
												>
													<img
														src={`${temp_data.project_path}${prev}`}
														alt="icon"
													/>
													<p>{temp_data.page.points_of_earning_subtitle[i]}</p>
												</div>
											);
										})}
									</div>

									<h4
										className="text-center themeColor text-uppercase my-5"
										dangerouslySetInnerHTML={{
											__html: temp_data.page.insurance_benifit_title,
										}}
									></h4>
									<p
										data-aos="fade-right"
										data-aos-delay="1400"
										data-aos-duration="500"
										className="textJustify"
									>
										{temp_data.page.insurance_benifit_desc}
									</p>

									<div
										data-aos="zoom-in"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="500"
										className="mt-5"
									>
										{/* DIRECTION SECTION START */}
										<h4
											className="text-center themeColor text-uppercase my-5"
											dangerouslySetInnerHTML={{
												__html: temp_data.page.redemption_title,
											}}
										></h4>
										{/* DIRECTION SECTION END */}
									</div>

									<div className="row justify-content-center">
										{temp_data.page.redemption_thumbnail.map((prev, i) => {
											return (
												<div
													data-aos="zoom-in"
													data-aos-duration="600"
													data-aos-offset="700"
													data-aos-delay={`${i * 200}`}
													key={i}
													className="col-6 col-md-4 col-lg-3 commitmentCard text-center"
												>
													<img
														src={`${temp_data.project_path}${prev}`}
														alt="icon"
													/>
													<p>
														{temp_data.page.redemption_thumbnail_subtitle[i]}
													</p>
												</div>
											);
										})}
									</div>

									<h4
										className="text-center themeColor text-uppercase mt-5 mb-4"
										dangerouslySetInnerHTML={{
											__html: temp_data.page.contact_title,
										}}
									>
										{/* <span className="borderBottom border-3">contact</span> */}
									</h4>
									<p
										data-aos="fade-right"
										data-aos-delay="1400"
										data-aos-duration="500"
										className="textJustify"
										dangerouslySetInnerHTML={{
											__html: temp_data.page.contact_desc,
										}}
									></p>
								</div>
							</div>
						</div>
					</div>
					{/* OVERVIEW END */}

					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		partnerRelationsDetail: state.partnerRelationsRed.partnerRelationsDetail,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		partnerRelationsDetailApi: function (pageurl) {
			dispatch(partnerRelationsDetailApi(pageurl));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PartnerRelations2);
