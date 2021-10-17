import React from "react";

import { imgUrl } from "../redux/config";
import inovationImgM from "../assets/inovationImgM.png";

const InnovationCenterC = ({
	data: { section2_title, section2_img, section2 },
}) => {
	return (
		<div className="page_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<h4
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-offset="400"
							className="text-center themeColor text-uppercase my-5"
						>
							innov
							<span className="borderBottom border-3">ation pr</span>
							ocess
						</h4>
						<div dangerouslySetInnerHTML={{ __html: section2 }}></div>
						<div className="row mt-4">
							<div className="d-none d-md-block col-12">
								<img
									data-aos="fade-right"
									data-aos-delay="600"
									data-aos-offset="400"
									data-aos-duration="600"
									className="w-100"
									src={imgUrl + section2_img}
									alt={section2_title}
								/>
							</div>
							<div className="d-block d-md-none col-12">
								<div className="row">
									<div className="col-11 mx-auto">
										<img
											data-aos="fade-right"
											data-aos-delay="600"
											data-aos-offset="400"
											data-aos-duration="600"
											className="w-100"
											src={inovationImgM}
											alt={section2_title}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InnovationCenterC;
