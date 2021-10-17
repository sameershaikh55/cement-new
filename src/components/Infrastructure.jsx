import React from "react";

import { imgUrl } from "../redux/config";
import inovationImgM from "../assets/inovationImg2M.png";

const Infrastructure = ({
	data: { section3_img, section3, section3_img_alt, section3_img_title },
}) => {
	return (
		<div className="page_container mt-2">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<h4
							data-aos="zoom-in"
							data-aos-delay="1000"
							data-aos-duration="600"
							data-aos-offset="400"
							className="text-center themeColor text-uppercase my-5"
						>
							inf
							<span className="borderBottom border-3">rastruct</span>
							ure
						</h4>
						<div dangerouslySetInnerHTML={{ __html: section3 }}></div>
						<div className="row mt-4">
							<div className="col-12 col-md-12 mx-auto">
								<div className="d-none d-md-block col-12">
									<img
										data-aos="zoom-in"
										data-aos-delay="1000"
										data-aos-duration="600"
										data-aos-offset="400"
										className="w-100"
										src={imgUrl + section3_img}
										alt={section3_img_alt}
										title={section3_img_title}
									/>
								</div>
								<div className="d-block d-md-none col-12">
									<img
										data-aos="zoom-in"
										data-aos-delay="1000"
										data-aos-duration="600"
										data-aos-offset="400"
										className="w-100"
										src={inovationImgM}
										alt={section3_img_alt}
										title={section3_img_title}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Infrastructure;
