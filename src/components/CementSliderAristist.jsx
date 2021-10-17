import React, { useState } from "react";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
import cementDuragaurd from "../assets/arististSlider.png";
import triangleCut from "../assets/triangleCut.png";

const CementSliderAristist = () => {
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

	const sliderData = [
		cementDuragaurd,
		cementDuragaurd,
		cementDuragaurd,
		cementDuragaurd,
		cementDuragaurd,
		cementDuragaurd,
	];

	return (
		<div className="page_container mb-5">
			<div className="container-fluid">
				<div className="row">
					<div
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="200"
						data-aos-offset="200"
						className="arististProductSlider col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1"
					>
						<Slider {...settings}>
							{sliderData.map((prev, i) => {
								return (
									<div key={i}>
										<img src={prev} alt="" />
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
			{/* UNDER TEXT START */}
			<div
				data-aos="zoom-in"
				data-aos-delay="180"
				data-aos-duration="300"
				data-aos-offset="200"
				className="cementCenterSliderText text-center py-4 position-relative"
			>
				<h3 className="themeColor fw-bold">
					INSTAMIX BOND AID Slide Number {slideInd}
				</h3>
				<p>
					InstaMix Bond-Aid is a premix high-quality mortar <br /> for joining
					and bonding of all types of substrate like AAC Blocks, Concrete
					Blocks, Hollow Blocks and Bricks.{" "}
				</p>
				<button className="greenBtn px-4 py-1 text-uppercase text-white">
					know more
				</button>

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

export default CementSliderAristist;
