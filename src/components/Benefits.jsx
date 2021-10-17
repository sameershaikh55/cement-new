import React from "react";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";

const Benefits = ({ temp_page }) => {
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

	const sliderData = [
		{ img: benefit1, text: "makes concrete impenetrable" },
		{ img: benefit2, text: "prevents iron rods from rusting" },
		{ img: benefit3, text: "environment" },
		{ img: benefit1, text: "makes concrete impenetrable" },
		{ img: benefit2, text: "prevents iron rods from rusting" },
		{ img: benefit3, text: "environment" },
	];

	return (
		<div className="page_container">
			<div className="container-fluid mt-5">
				<div className="row">
					<h5
						data-aos="flip-down"
						data-aos-duration="800"
						data-aos-offset="500"
						data-aos-delay="400"
						className="text-center"
					>
						<span className="themeColor borderBottom pb-2 px-5">
							{temp_page.page.benifits_title}
						</span>
					</h5>
					<div className="row gx-0">
						<div className="col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1">
							<Slider {...settings}>
								{temp_page.page.benifits_img.map((prev, i) => {
									return (
										<div
											key={i}
											data-aos="flip-left"
											data-aos-offset="1200"
											data-aos-delay={`${i * 800}`}
											className="benefitCard position-relative"
										>
											<div className="imgContainer position-relative">
												<img
													src={`${temp_page.project_path}${prev}`}
													alt={temp_page.page.benifits_img_alt[i]}
												/>
												<div className="overlay position-absolute"></div>
											</div>
											<h5 className="position-absolute text-white text-center text-uppercase px-2">
												{temp_page.page.benifits_img_title[i]}
											</h5>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
