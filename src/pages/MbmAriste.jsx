import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import Direction from "../components/Direction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import StandOutAristist from "../components/StandOutAristist";
import Footer from "../components/Footer";
import { Link } from "react-scroll";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import CementSliderAristist from "../components/CementSliderAristist";
import { connect } from "react-redux";
import { productDetailsApi } from "../redux/index";
import ProductCard from "../components/ProductCard";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const ConcreteAriste = ({ productDetails, productDetailsApi }) => {
	useEffect(() => {
		productDetailsApi("product-ready-mix-concrete-portfolio");
	}, []);

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(productDetails).length) {
		var temp_data = { ...productDetails.data };
		temp_data.page.category.section2_images = JSON.parse(
			temp_data.page.category.section2_images
		);
		temp_data.page.category.section2_subtitles = JSON.parse(
			temp_data.page.category.section2_subtitles
		);
		temp_data.page.category.section2_image_alt = JSON.parse(
			temp_data.page.category.section2_image_alt
		);
		// temp_data.page.category.section2_images = JSON.parse(
		// 	temp_data.page.category.section2_images
		// );
	}
	// ERROR HANDLING AND SORTING (PARSE) END

	return (
		<>
			{(Object.keys(productDetails).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={temp_data.page.category.page_title}
						description={temp_data.page.category.meta_description}
						canonical={temp_data.page.category.canonical_rel}
						robot={temp_data.page.category.meta_robots}
					/>
					<Hero
						heading={temp_data.page.category.banner_img_title}
						img1={imgUrl + temp_data.page.category.banner_img}
						img2={imgUrl + temp_data.page.category.banner_img_mob}
						alt1={temp_data.page.category.banner_img_alt}
						alt2={temp_data.page.category.banner_img_alt}
					/>
					{/* BODY START */}
					<div className="page_container mt-5">
						<div className="container-fluid">
							<div
								data-aos="zoom-in"
								data-aos-delay="900"
								data-aos-duration="600"
								data-aos-offset="600"
							>
								<Direction title="overview" />
							</div>
							<p
								data-aos="fade-right"
								data-aos-delay="1200"
								data-aos-duration="600"
								data-aos-offset="600"
								className="textJustify px-4 px-md-0"
							>
								Our Ready-Mix Concrete (RMX) business offer specialised products
								under the brands Artiste, InstaMix, XCon and Concreto and are
								proud contributors to the landmark projects like Lodha World
								One, Amritsar Entry Gate, and the Metros. We are a preferred
								partner for numerous developers, small contractors, builders,
								architects, government agencies and individuals, supplying
								efficient concrete solutions to improve the quality of
								construction.
							</p>
						</div>
					</div>

					<StandOutAristist temp_data={temp_data} />

					<div className="page_container my-5">
						<div className="container-fluid">
							<div className="row">
								{temp_data.page.franchaise_list.map((prev, i) => {
									const {
										franchaise_title,
										franchaise_subtitle,
										franchaise_img_title,
										franchaise_img_alt,
										franchaise_img,
										franchaise_cta,
									} = prev;
									return (
										<ProductCard
											franchaise_title={franchaise_title}
											franchaise_subtitle={franchaise_subtitle}
											franchaise_img_title={franchaise_img_title}
											franchaise_img_alt={franchaise_img_alt}
											franchaise_img={franchaise_img}
											franchaise_cta={franchaise_cta}
											temp_data={temp_data}
											ind={i}
										/>
									);
								})}
							</div>
						</div>
					</div>
					{/* BODY END */}

					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		productDetails: state.productDetailsRed.productDetails,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		productDetailsApi: function (page_url) {
			dispatch(productDetailsApi(page_url));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ConcreteAriste);
