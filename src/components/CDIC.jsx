import React from "react";

// IMPORTS
import { imgUrl } from "../redux/config";

const CDIC = ({ data: { section1_img, section1_title, section1 } }) => {
	return (
		<div className="page_container mt-4">
			<div className="container-fluid">
				<div
					data-aos="fade"
					data-aos-delay="800"
					data-aos-duration="600"
					data-aos-offset="600"
					className="healthLogo text-center"
				>
					<img src={imgUrl + section1_img} alt={section1_title} />
					<div className="innovationUnderIcon text-uppercase fw-bold text-secondary">
						construction developement <br /> & constructuon center
					</div>
				</div>

				{/* DIRECTION SECTION START */}
				<div
					data-aos="zoom-in"
					data-aos-delay="1000"
					data-aos-duration="600"
					data-aos-offset="400"
				>
					<div className="d-flex justify-content-center align-items-center mt-3">
						<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
							<span className={`h6 mt-direction2Env text-uppercase`}>
								{section1_title}
							</span>
						</div>
					</div>
				</div>
				{/* DIRECTION SECTION END */}

				<div dangerouslySetInnerHTML={{ __html: section1 }}></div>
			</div>
		</div>
	);
};

export default CDIC;
