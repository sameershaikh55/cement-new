import React from "react";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
// import saftyCard1 from "../assets/saftyCard1.png";
// import saftyCard2 from "../assets/saftyCard2.png";
// import saftyCard3 from "../assets/saftyCard3.png";

// IMPORTING ICONS
import { AiOutlineArrowDown } from "react-icons/ai";

const MediaSlider = ({ search_data, project_path }) => {
	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: true,
		responsive: [
			{
				breakpoint: 998,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 668,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					arrows: false,
				},
			},
		],
	};

	return (
		<div className="page_container mb-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto px-0 px-md-4">
						<div className="row">
							<div className="saftySlider col-12 mx-auto py-1">
								{search_data && search_data.media.length > 0 ? (
									<Slider {...settings}>
										{search_data.media.map((prev, i) => {
											return (
												<div
													key={i}
													data-aos="flip-left"
													data-aos-offset="400"
													data-aos-delay={`${i * 400}`}
													className="saftyCard"
												>
													<div className="innerSaftyCard d-flex flex-column justify-content-start">
														<img
															className="topBRounded w-100"
															src={`${project_path}${prev.listing_image}`}
															alt={prev.listing_image_alt}
														/>
														<div className="text_content p-3 d-flex flex-column justify-content-between">
															<h6
																className={`themeColorG text-uppercase ${
																	i !== 0 && "mb-4"
																}`}
															>
																{prev.title}
															</h6>
															<div>
																{/* <div className="desc small lh-sm">
																	{prev.description}
																</div> */}
																<a
																	href={`${project_path}${prev.file_pdf}`}
																	target="blank"
																>
																	<button className="d-flex justify-content-center align-items-center redBtn px-2 py-2 rounded-circle mt-2">
																		<AiOutlineArrowDown color="#fff" />
																	</button>
																</a>
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</Slider>
								) : (
									<div data-aos="fade-up" className="text-center fw-bold">
										Data not found
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaSlider;
