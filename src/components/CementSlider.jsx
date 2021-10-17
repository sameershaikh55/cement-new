import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
// import cementDuragaurd from "../assets/instaMixProduct.png";
import triangleCut from "../assets/triangleCut.png";

const CementSlider = ({ slider_data, temp_data }) => {
	let slider_data2 = [
		...slider_data,
		...slider_data,
		...slider_data,
		...slider_data,
		...slider_data,
		...slider_data,
	];

	const [slideInd, setSlideInd] = useState();

	var settings = {
		centerMode: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		centerPadding: 0,
		afterChange: function (e) {
			setSlideInd(e);
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className="page_container mb-5">
			<div className="container-fluid">
				<div className="row">
					<div
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="250"
						data-aos-offset="400"
						className="instamaxProductSlider col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1"
					>
						<Slider {...settings}>
							{slider_data2.map((prev, i) => {
								const { img_alt, img, img_title } = prev;
								return (
									<div key={i}>
										<img
											src={temp_data.project_path + img}
											alt={img_alt}
											title={img_title}
										/>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
			{/* UNDER TEXT START */}

			<div
				// data-aos="zoom-in"
				// data-aos-delay="200"
				// data-aos-duration="250"
				// data-aos-offset="200"
				className="cementCenterSliderText text-center py-4 position-relative"
			>
				<h3 className="themeColor fw-bold">
					{slider_data2[(slideInd && slideInd) || 0].product_title}
				</h3>
				<p>
					{slider_data2[(slideInd && slideInd) || 0].img_desc ||
						slider_data2[0].img_desc}
				</p>

				<Link to={`/${slider_data2[(slideInd && slideInd) || 0].page_url}`}>
					<button className="greenBtn px-4 py-1 text-uppercase text-white">
						know more
					</button>
				</Link>

				{/* TRIANGLE START */}
				<div className="triangleCutCont position-absolute">
					<img src={triangleCut} alt="triangleCut" />
				</div>
				{/* TRIANGLE END */}
			</div>

			{/* UNDER TEXT END */}
		</div>
	);
};

export default CementSlider;
