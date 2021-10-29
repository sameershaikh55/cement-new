import React from "react";

// IMPORTING SLIDER
import Slider from "react-slick";
import { imgUrl } from "../redux/config";

const CovidGallery = ({ data }) => {
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

	return (
		<div className="page_container">
			<div className="container-fluid mt-5 mb-3">
				<div className="row">
					<h5
						data-aos="flip-down"
						data-aos-duration="600"
						data-aos-offset="1000"
						data-aos-delay="400"
						className="text-center h3 text-uppercase themeColor"
					>
						G<span className="borderBottom pb-2">aller</span>y
					</h5>
					<div className="row gx-0">
						<div className="col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1">
							<Slider {...settings}>
								{data.gallery_imgs.map((prev, i) => {
									console.log(prev);
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
													src={imgUrl + prev}
													alt={data.gallery_img_alt[i]}
													title={data.gallery_img_title[i]}
												/>
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
	);
};

export default CovidGallery;
