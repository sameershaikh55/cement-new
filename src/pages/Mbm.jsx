import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import Direction from "../components/Direction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CementSlider from "../components/CementSlider";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import StandOutAristist from "../components/StandOutAristist";
import { connect } from "react-redux";
import { productDetailsApi } from "../redux";
import ProductCard from "../components/ProductCard";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const Mbm = ({ productDetailsApi, productDetails }) => {
	useEffect(() => {
		productDetailsApi("product-modern-building-materials");
	}, []);

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	// const controls = useAnimation();

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
	}
	// ERROR HANDLING AND SORTING (PARSE) END

	return (
		<>
			{(Object.keys(productDetails).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					{/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} /> */}
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
								Our Modern Building Materials (MBM) offers a wide range of
								value-added products such as Construction Chemicals,
								Multipurpose Bonding and Waterproofing Agents, Wall Putty, Tile
								Adhesive, Ready Mix Dry Plaster and Cover Blocks under our Zero
								M and InstaMix brands. The product portfolio is popular in
								markets we are present and boast of specialized innovations that
								offer total waterproofing and protection from germs.
							</p>
						</div>
					</div>
					<StandOutAristist temp_data={temp_data} />
					{/* <StandOutMbm /> */}
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Mbm);
