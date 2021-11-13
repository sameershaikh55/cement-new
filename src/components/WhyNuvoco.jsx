import React from "react";

// IMPORTING CONTEXT
import { NuvocoLifeContext } from "../context/NuvocoLifeContext.jsx";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
// import lifeCard1 from "../assets/lifeCard1.png";
// import lifeCard2 from "../assets/lifeCard2.png";
// import lifeCard3 from "../assets/lifeCard3.png";
import { Link } from "react-router-dom";
import { imgUrl } from "../redux/config.jsx";

const WhyNuvoco = ({ data }) => {
	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	// const sliderData = [
	// 	{ img: lifeCard1, text: "Rewards and Recognitions" },
	// 	{ img: lifeCard2, text: "Learning and Development" },
	// 	{ img: lifeCard3, text: "Internal Job Postings (IJP)" },
	// 	{ img: lifeCard1, text: "Rewards and Recognitions" },
	// ];

	return (
		<NuvocoLifeContext.Consumer>
			{(state) => {
				return (
					<div className="page_container mt-5">
						<div className="container-fluid">
							<div
								data-aos="zoom-in"
								data-aos-delay="1800"
								data-aos-duration="600"
								data-aos-offset="400"
							>
								{/* DIRECTION SECTION START */}
								<div className="d-flex justify-content-center align-items-center">
									<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
										<span
											dangerouslySetInnerHTML={{
												__html: data.LifeAtNuvoco.section2_title,
											}}
											className={`h6 mt-direction2Env text-uppercase`}
										></span>
									</div>
								</div>
								{/* DIRECTION SECTION END */}

								<div
									data-aos="fade-left"
									data-aos-delay="1500"
									data-aos-duration="600"
									data-aos-offset="400"
									className="textJustify"
									dangerouslySetInnerHTML={{
										__html: data.LifeAtNuvoco.section2_desc,
									}}
								></div>
							</div>
							<div className="row gx-0">
								<div className="col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1">
									<Slider {...settings}>
										{state.nuvocoLife.map((el, i) => {
											let title = state.nameToUrl(state.nuvocoLife[i].name);
											return (
												<Link
													to={`/nuvoco_life2/${title}`}
													className="text-decoration-none"
												>
													<div
														key={i}
														data-aos="flip-left"
														data-aos-offset="600"
														data-aos-delay={`${i * 600}`}
														className="benefitCard position-relative"
													>
														<div className="imgContainer position-relative">
															<img
																src={
																	imgUrl + data.LifeAtNuvoco.why_choose_img[i]
																}
																alt={data.LifeAtNuvoco.why_choose_title[i]}
															/>
															<div className="overlay position-absolute"></div>
														</div>
														<h5
															dangerouslySetInnerHTML={{
																__html: data.LifeAtNuvoco.why_choose_title[i],
															}}
															className="position-absolute text-white text-center text-uppercase px-2"
														></h5>
													</div>
												</Link>
											);
										})}
									</Slider>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</NuvocoLifeContext.Consumer>
	);
};

export default WhyNuvoco;
