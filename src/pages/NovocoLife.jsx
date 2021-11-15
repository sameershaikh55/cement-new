import React, { useState, useEffect } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import EmployeTestimonials from "../components/EmployeTestimonials";

// IMPORTING IMAGES
import banner from "../assets/lifeInNBanner.jpg";
import bannerM from "../assets/lifeInNBannerM.jpg";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import WhyNuvoco from "../components/WhyNuvoco";
// import SubmitResume from "../components/SubmitResume";
import SubmitResume from "../components/SubmitResume";

// IMPORTING API'S
import { connect } from "react-redux";
import { careerApi } from "../redux/index";
import { imgUrl } from "../redux/config";

const NovocoLife = ({ career, careerApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		careerApi();
	}, []);

	return (
		<>
			{(Object.keys(career).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={career.LifeAtNuvoco.meta_title}
						description={career.LifeAtNuvoco.meta_description}
						canonical={career.LifeAtNuvoco.canonical_rel}
						robot={career.LifeAtNuvoco.meta_robots}
					/>
					<Hero
						heading={career.LifeAtNuvoco.banner_img_title}
						img1={imgUrl + career.LifeAtNuvoco.banner_img}
						img2={imgUrl + career.LifeAtNuvoco.banner_img_mob}
						alt1={career.LifeAtNuvoco.banner_img_alt}
						alt2={career.LifeAtNuvoco.banner_img_alt}
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
								{/* DIRECTION SECTION START */}
								<div className="d-flex justify-content-center align-items-center">
									<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
										<span
											dangerouslySetInnerHTML={{
												__html: career.LifeAtNuvoco.section1_title,
											}}
											className={`h6 mt-direction2Env text-uppercase`}
										></span>
									</div>
								</div>
								{/* DIRECTION SECTION END */}
							</div>
							<div className="row">
								<div
									dangerouslySetInnerHTML={{
										__html: career.LifeAtNuvoco.section1,
									}}
									className="col-11 col-md-12 mx-auto"
								></div>
							</div>
						</div>
					</div>
					{/* BODY END */}

					<WhyNuvoco data={career} />
					{/* <EmployeTestimonials data={career} /> */}
					<SubmitResume />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		career: state.careerRed.career,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		careerApi: function () {
			dispatch(careerApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(NovocoLife);
