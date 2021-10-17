import React from "react";
import triangleCut from "../assets/triangleCut.png";

const CovidDetails = ({ t, d, four, eight, ninth, e }) => {
	return (
		<div
			data-aos="zoom-in"
			data-aos-delay="200"
			data-aos-duration="250"
			data-aos-offset="200"
			className="cementCenterSliderText landmarkDetail d-flex flex-column justify-content-center align-items-center h-100 py-4 position-relative my-5"
		>
			<h3 className="themeColor fw-bold">{t}</h3>
			<div className="row">
				<div
					className="col-12 allTextJustify col-md-10 mx-auto"
					dangerouslySetInnerHTML={{ __html: d }}
				></div>
				<div className="col-11 col-md-10 mx-auto">{e}</div>
			</div>

			{/* TRIANGLE START */}
			<div
				style={{
					top: (four && "-10%") || (eight && "-10%") || (ninth && "-8%"),
				}}
				className="triangleCutCont position-absolute"
			>
				<img src={triangleCut} alt="triangleCut" />
			</div>
		</div>
	);
};

export default CovidDetails;
