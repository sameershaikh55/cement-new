import React from "react";

// IMPORTING COMPONENTS
import Direction from "./Direction";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

// import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import { imgUrl } from "../redux/config";

const Feature = ({ data }) => {
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

	const features = [
		{
			icon: feature1,
			title: (
				<h5 className="title">
					Constr<span className="borderBottomG pb-1">uction S</span>tages
				</h5>
			),
			title2: (
				<h5 className="title">
					Construction <span className="borderBottomG pb-1">Stages</span>
				</h5>
			),
			desc: "Essential steps of home-building you need to know",
			btn: "view stages",
			l: "https://nuvocohomeassist.com/substructure/",
		},
		{
			icon: feature2,
			title: (
				<h5 className="title">
					Ho<span className="borderBottomG pb-1">use Pla</span>ns
				</h5>
			),
			desc: "Floor plans to inspire you while building your own abode",
			btn: "explore",
			l: "https://nuvocohomeassist.com/substructure/",
		},
		{
			icon: feature3,
			title: (
				<h5 className="title">
					Appli
					<span className="borderBottomG pb-1">cation Gu</span>
					ide
				</h5>
			),
			desc: "Nuvoco has a product designed to meet every requirement.",
			btn: "view more",
			l: "https://nuvocohomeassist.com/#ApplicationGuide",
		},
		{
			icon: feature3,
			title: (
				<h5 className="title">
					Ca<span className="borderBottomG pb-1">lculato</span>rs
				</h5>
			),
			desc: "How ‘Not’ to exceed the budget while building your home",
			btn: "view more",
			l: "https://nuvocohomeassist.com/calculators/",
		},
	];

	return (
		<div className="page_container mt-5">
			<div className="container-fluid">
				<div
					data-aos="zoom-in"
					data-aos-delay="1200"
					data-aos-duration="400"
					data-aos-offset="600"
				>
					<Direction title="Features" />
				</div>

				{/* FEATURE SLIDER START */}
				<div className="row">
					<div className="col-11 col-sm-10 mx-auto text-center">
						<Slider {...settings}>
							{data.features_order.map((prev, i) => {
								return (
									<Flip
										key={i}
										delay={
											(i === 0 && 1400) ||
											(i === 1 && 1700) ||
											(i === 2 && 2000) ||
											0
										}
										left
										cascade
									>
										<div className="px-2">
											<div className="featureCard bg-white shadow px-1 py-4 mt-2 mb-4">
												<div className="imgContainer d-flex justify-content-center mb-4">
													<img
														width="40%"
														src={imgUrl + data.features_img[i]}
														alt={data.features_img_title[i]}
														title={data.features_img_title[i]}
													/>
												</div>
												{data.features_img_title[i] ? (
													<div>
														<div
															className="d-none d-sm-block"
															dangerouslySetInnerHTML={{
																__html: data.features_img_title[i],
															}}
														></div>
													</div>
												) : (
													data.features_img_title[i]
												)}
												<p
													dangerouslySetInnerHTML={{
														__html: data.features_img_subtitle[i],
													}}
													className="my-4 px-1 px-md-3"
												></p>
												<a target="blank" href={data.features_url[i]}>
													<button
														dangerouslySetInnerHTML={{
															__html: data.features_img_cta[i],
														}}
														className="greenBtn text-white text-uppercase py-1"
													></button>
												</a>
											</div>
										</div>
									</Flip>
								);
							})}
						</Slider>
					</div>
				</div>
				{/* FEATURE SLIDER END */}
			</div>
		</div>
	);
};

export default Feature;
