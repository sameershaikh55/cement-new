import React from "react";

// IMPORTING SLIDER
import { Markup } from "interweave";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

SwiperCore.use([Navigation]);

const CsrSlider = ({ temp_data, project_path }) => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	return (
		<div className="page_container mt-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 col-md-12 mx-auto px-0 px-md-4">
						<div className="row">
							<div className="saftySlider position-relative csrSlider col-12 mx-auto py-1">
								<button
									className="border-0 bg-transparent prev_btn"
									ref={navigationPrevRef}
								>
									<RiArrowLeftSLine color="#42bb52" fontSize="3.2rem" />
								</button>
								<button
									className="border-0 bg-transparent next_btn"
									ref={navigationNextRef}
								>
									<IoIosArrowForward color="#42bb52" fontSize="3rem" />
								</button>

								<Swiper
									watchSlidesProgress={true}
									navigation={{
										prevEl: navigationPrevRef.current,
										nextEl: navigationNextRef.current,
									}}
									onInit={(swiper) => {
										swiper.params.navigation.prevEl = navigationPrevRef.current;
										swiper.params.navigation.nextEl = navigationNextRef.current;
										swiper.navigation.init();
										swiper.navigation.update();
									}}
									className="mySwiper"
									breakpoints={{
										// when window width is >= 640px
										992: {
											slidesPerView: 3,
										},
										// when window width is >= 768px
										768: {
											width: 768,
											slidesPerView: 2,
										},
									}}
								>
									{temp_data.map((prev, i) => {
										const { img, title, description } = prev;
										return (
											<SwiperSlide>
												<div
													key={i}
													data-aos="flip-left"
													data-aos-offset="600"
													data-aos-delay={`${i * 400}`}
													className="saftyCard"
												>
													<div className="innerSaftyCard">
														<img
															className="topBRounded w-100"
															src={project_path + img}
															alt=""
														/>
														<div className="innerText d-flex flex-column justify-content-between p-3">
															<h6
																className={`gradientColor text-uppercase ${
																	i !== 0 && ""
																}`}
															>
																{title}
															</h6>
															<div>
																<div className="desc small lh-sm">
																	<Markup content={`${description}`} />
																</div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										);
									})}
								</Swiper>

								{/* <Slider {...settings}>
									{temp_data.map((prev, i) => {
										const { img, title, description } = prev;

										return (
											<div
												key={i}
												data-aos="flip-left"
												data-aos-offset="600"
												data-aos-delay={`${i * 400}`}
												className="saftyCard"
											>
												<div className="innerSaftyCard">
													<img
														className="topBRounded w-100"
														src={project_path + img}
														alt=""
													/>
													<div className="innerText d-flex flex-column justify-content-between p-3">
														<h6
															className={`gradientColor text-uppercase ${
																i !== 0 && ""
															}`}
														>
															{title}
														</h6>
														<div>
															<div className="desc small lh-sm">
																<Markup content={`${description}`} />
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</Slider> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CsrSlider;
