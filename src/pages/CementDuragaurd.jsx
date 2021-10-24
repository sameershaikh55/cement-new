import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import ApplicationAreas from "../components/ApplicationAreas";
import Benefits from "../components/Benefits";
import Brouchers from "../components/Brouchers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

// IMPORTING IMAGES
import banner from "../assets/banner.jpg";
import bannerM from "../assets/cementBannerMobile.jpg";
// import cementDVideoThumb from "../assets/cementDVideoThumb.png";

// IMPORTING ANIMATIONS
import { Fade } from "react-awesome-reveal";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

// IMPORTING REDUX
import { productDetailsPageApi } from "../redux/index";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Seo from "../components/Seo";

const CementDuragaurd = ({ productDetailsPage, productDetailsPageApi }) => {
	const params = useParams();
	const location = useLocation();

	useEffect(async () => {
		var x = await location.pathname.split("/");
		productDetailsPageApi(`${x[1]}/${x[2]}`);
	}, [params.pageurl]);

	if (Object.keys(productDetailsPage).length) {
		var temp_page = { ...productDetailsPage.data };
		temp_page.banner = JSON.parse(temp_page.banner);
		temp_page.page = JSON.parse(temp_page.page);
		temp_page.page.area_of_application_img = JSON.parse(
			temp_page.page.area_of_application_img
		);
		temp_page.page.area_of_application_img_title = JSON.parse(
			temp_page.page.area_of_application_img_title
		);
		temp_page.page.benifits_img = JSON.parse(temp_page.page.benifits_img);
		temp_page.page.benifits_img_title = JSON.parse(
			temp_page.page.benifits_img_title
		);
		temp_page.page.broucher_langage_file = JSON.parse(
			temp_page.page.broucher_langage_file
		);
		temp_page.page.broucher_langage = JSON.parse(
			temp_page.page.broucher_langage
		);
	}

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".cementTagline");
			if (header !== null && window.scrollY > 400) {
				header.classList.add("downAnimation");
			}
		});
	}, []);

	return (
		<>
			{(!Object.keys(productDetailsPage).length && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={temp_page.page.page_title}
						description={temp_page.page.meta_description}
						canonical={temp_page.page.canonical_rel}
					/>
					<Hero
						heading={temp_page.page.product_title}
						img1={banner}
						img2={bannerM}
						alt1={temp_page.page.banner_img_alt}
						alt2={temp_page.page.banner_img_alt}
					/>
					{/* == PRODUCT START == */}
					<div className="page_container">
						<div className="container-fluid mt-5">
							{/* DIRECTION SECTION START */}
							<div
								className="direction_product"
								data-aos="zoom-in"
								data-aos-offset="500"
								data-aos-delay="1200"
							>
								<div className="d-flex justify-content-center align-items-center">
									<div className="directionBg main_more text-white d-flex justify-content-center">
										<span
											dangerouslySetInnerHTML={{
												__html: temp_page.page.product_title,
											}}
											className={`h6 mt-direction2 text-uppercase`}
										></span>
									</div>
								</div>
							</div>
							{/* DIRECTION SECTION END */}
							<div className="row">
								<div className="col-md-10 col-lg-10 mx-auto text-center">
									<Fade triggerOnce delay={1500}>
										<img
											className="my-4"
											width="100%"
											src={`${temp_page.project_path}${temp_page.page.desc_img}`}
											alt={temp_page.page.section1_img_alt}
											title={temp_page.page.section1_img_title}
										/>
									</Fade>
								</div>
							</div>
							<div>
								<div className="row">
									<p
										dangerouslySetInnerHTML={{
											__html: temp_page.page.section1_desc,
										}}
										className="cementTagline col-md-10 col-lg-8 mx-auto text-center"
									></p>
								</div>
							</div>
						</div>
					</div>
					{/* == PRODUCT END == */}
					<br />
					<br />
					<br />
					<ApplicationAreas temp_page={temp_page} />
					<br />
					<Benefits temp_page={temp_page} />
					{/* VIDEO START */}
					{/* <div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<h5
									data-aos="flip-down"
									data-aos-duration="800"
									data-aos-offset="500"
									data-aos-delay="400"
									className="text-center"
								>
									<span className="themeColor borderBottom pb-2 px-5 text-uppercase">
										Video
									</span>
								</h5>
								<div className="row gx-0">
									<div
										data-aos="flip-up"
										data-aos-duration="800"
										data-aos-offset="500"
										data-aos-delay="400"
										className="col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1 mt-4"
									>
										<img
											className="w-100"
											src={cementDVideoThumb}
											alt="cementDVideoThumb"
										/>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/* VIDEO END */}

					{temp_page.page.broucher_langage.length && (
						<Brouchers temp_page={temp_page} />
					)}
					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		productDetailsPage: state.productDetailsRed.productDetailsPage,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		productDetailsPageApi: function (page_url) {
			dispatch(productDetailsPageApi(page_url));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CementDuragaurd);
