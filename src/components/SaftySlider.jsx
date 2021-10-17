import React, { useState } from "react";

// IMPORTING SLIDER
import Slider from "react-slick";
import { Markup } from "interweave";

// IMPORTING ICONS
import { AiOutlineArrowDown } from "react-icons/ai";

const SaftySlider = ({ temp_data, project_path }) => {
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
					infinite: true,
				},
			},
		],
	};

	return (
		<div className="page_container mt-2">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-sm-10 col-md-12 mx-auto px-0 px-md-4">
						<div className="row">
							<div className="saftySlider col-11 col-md-12 mx-auto py-1">
								<Slider {...settings}>
									{temp_data.map((prev, i) => {
										const {
											good_practices_img,
											good_practice_title,
											good_practices_desc,
											good_practices_file,
										} = prev;

										return (
											<div
												key={i}
												data-aos="flip-left"
												data-aos-offset="600"
												data-aos-delay={`${i * 400}`}
												className="saftyCard"
											>
												<div className="innerSaftyCard safety">
													<img
														className="topBRounded w-100"
														src={project_path + good_practices_img}
														alt=""
													/>
													<div className="innerText d-flex flex-column justify-content-between p-3">
														<h6
															className={`gradientColor text-uppercase ${
																i !== 0 && ""
															}`}
														>
															{good_practice_title}
														</h6>
														<div>
															<div className="desc small lh-sm">
																<Markup content={`${good_practices_desc}`} />
															</div>
															<a
																target="blank"
																href={project_path + good_practices_file}
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SaftySlider;
