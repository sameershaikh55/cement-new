import React from "react";

// IMPORTS
import vissionImg from "../assets/vissionImg.png";
import vissionImg2 from "../assets/vissionImg2.png";
import valueImg from "../assets/valueImg.png";
import valueImg2 from "../assets/valueImg2.png";
import { imgUrl } from "../redux/config";

const MissionVissionBody = ({ data: { vision_mission_values } }) => {
	return (
		<div className="page_container my-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						{/* DIRECTION SECTION START */}
						<div className="d-flex justify-content-center align-items-center">
							<div
								data-aos="zoom-in"
								data-aos-delay="1200"
								data-aos-duration="400"
								className="directionBgEnv text-white d-flex justify-content-center fw-bold"
							>
								<span
									style={{ marginTop: "15px" }}
									className={`h6 mt-direction2Env text-uppercase`}
									dangerouslySetInnerHTML={{
										__html: vision_mission_values.vision_text,
									}}
								></span>
							</div>
						</div>
						{/* DIRECTION SECTION END */}

						<div className="row">
							<div
								data-aos="zoom-in"
								data-aos-delay="1400"
								data-aos-duration="400"
								className="col-5 col-md-3 mx-auto"
							>
								<img
									className="w-100"
									src={imgUrl + vision_mission_values.vision_img}
									alt="vissionImg"
								/>
							</div>
							<div className="col-7 col-md-12 align-self-center">
								<h1
									data-aos="fade-right"
									data-aos-delay="1600"
									data-aos-duration="400"
									className="missionVissionText text-end text-md-center fw-bold"
									dangerouslySetInnerHTML={{
										__html: vision_mission_values.vision_title,
									}}
								></h1>
							</div>
						</div>

						{/* DIRECTION SECTION START */}
						<div className="d-flex justify-content-center align-items-center mt-5">
							<div
								data-aos="zoom-in"
								data-aos-duration="400"
								data-aos-offset="600"
								className="directionBgEnv text-white d-flex justify-content-center fw-bold"
							>
								<span
									style={{ marginTop: "15px" }}
									className={`h6 mt-direction2Env text-uppercase`}
									dangerouslySetInnerHTML={{
										__html: vision_mission_values.mission_text,
									}}
								></span>
							</div>
						</div>
						{/* DIRECTION SECTION END */}

						<div className="row">
							<div
								data-aos="zoom-in"
								data-aos-duration="400"
								data-aos-delay="500"
								data-aos-offset="500"
								className="col-5 col-md-3 mx-auto order-1 order-md-0"
							>
								<img
									className="w-100"
									src={imgUrl + vision_mission_values.mission_img}
									alt="vissionImg"
								/>
							</div>
							<h1
								data-aos="fade-right"
								data-aos-duration="400"
								data-aos-delay="800"
								data-aos-offset="500"
								className="missionVissionText col-7 col-md-10 mx-auto text-start text-md-center align-self-center fw-bold order-md-1"
								dangerouslySetInnerHTML={{
									__html: vision_mission_values.mission_title,
								}}
							></h1>
						</div>

						{/* DIRECTION SECTION START */}
						<div className="d-flex justify-content-center align-items-center mt-5">
							<div
								data-aos="zoom-in"
								data-aos-delay="800"
								data-aos-duration="400"
								data-aos-offset="600"
								className="directionBgEnv text-white d-flex justify-content-center fw-bold"
							>
								<span
									style={{ marginTop: "15px" }}
									className={`h6 mt-direction2Env text-uppercase`}
									dangerouslySetInnerHTML={{
										__html: vision_mission_values.values_text,
									}}
								></span>
							</div>
						</div>
						{/* DIRECTION SECTION END */}

						<div className="row mt-4">
							<div className="col-12 d-none d-md-block">
								<img
									data-aos="zoom-in"
									data-aos-delay="800"
									data-aos-duration="400"
									data-aos-offset="600"
									className="w-100"
									src={imgUrl + vision_mission_values.values_img[0]}
									alt="vissionImg"
								/>
							</div>
							<div className="col-12 d-block d-md-none">
								<img
									data-aos="zoom-in"
									data-aos-delay="800"
									data-aos-duration="400"
									data-aos-offset="600"
									className="w-100"
									src={valueImg2}
									alt="vissionImg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MissionVissionBody;
