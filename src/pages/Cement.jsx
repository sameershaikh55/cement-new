import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import Direction from "../components/Direction";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import StandOut from "../components/StandOut";
import Footer from "../components/Footer";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { productDetailsApi } from "../redux/index";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const Cement = ({ productDetails, productDetailsApi }) => {
	useEffect(() => {
		productDetailsApi("product-cement-portfolio");
	}, []);

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(productDetails).length) {
		var temp_data = { ...productDetails.data };
	}
	// ERROR HANDLING AND SORTING (PARSE) END

	return (
		<>
			{(!Object.keys(productDetails).length && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={temp_data.page.category.page_title}
						description={temp_data.page.category.meta_description}
						canonical={temp_data.page.category.canonical_rel}
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
							<div className="row">
								<p
									data-aos="fade-right"
									data-aos-delay="1200"
									data-aos-duration="600"
									data-aos-offset="600"
									className="col-12 col-lg-10 mx-auto onlyTextJustify px-4 px-md-0"
								>
									We have established a stronghold with innovative and
									best-in-class cement products by prioritizing the use of
									premium quality raw material. Our products have been awarded
									some of the highest regulatory ratings owing to our constants
									emphasis on delivering superior grade cement variants like{" "}
									<br className="d-none d-md-block" />{" "}
									<strong>
										Concreto, Duraguard, DoubleBull, PSC, Nirmax, Infracem{" "}
									</strong>
									and <strong>Procem.</strong>
								</p>
							</div>
						</div>
					</div>
					<StandOut />
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
			)}
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Cement);
