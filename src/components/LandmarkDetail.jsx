import React from "react";
import triangleCut from "../assets/triangleCut.png";

const LandmarkDetail = ({ t, d }) => {
	return (
		<div
			data-aos="zoom-in"
			data-aos-delay="200"
			data-aos-duration="250"
			data-aos-offset="200"
			className="cementCenterSliderText landmarkDetail d-flex flex-column justify-content-center align-items-center h-100 text-center py-4 position-relative my-5"
		>
			<h3 className="themeColor fw-bold">{t}</h3>
			<p className="mb-0">{d}</p>

			{/* TRIANGLE START */}
			<div className="triangleCutCont position-absolute">
				<img src={triangleCut} alt="triangleCut" />
			</div>
		</div>
	);
};

export default LandmarkDetail;
