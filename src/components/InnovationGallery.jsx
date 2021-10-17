import React from "react";

// IMPORTING SLIDER
import Slider from "react-slick";

// IMPORTING IMAGES
import { imgUrl } from "../redux/config";

const InnovationGallery = ({
	data: { gallery_imgs, gallery_imgs_alt, gallery_imgs_title },
}) => {
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
		<div className="page_container mt-2">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 mx-auto">
						<h4
							data-aos="zoom-in"
							data-aos-duration="600"
							data-aos-offset="500"
							className="text-center themeColor text-uppercase mt-5 mb-4"
						>
							g<span className="borderBottom border-3">aller</span>y
						</h4>

						<div className="row gx-0">
							<div className="col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1">
								<Slider {...settings}>
									{gallery_imgs.map((prev, i) => {
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
														alt={gallery_imgs_alt}
														title={gallery_imgs_title}
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
		</div>
	);
};

export default InnovationGallery;
