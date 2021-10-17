import React from "react";
import Health_and_Safety_Policy from "../assets/Health_and_Safety_Policy.pdf";
import { imgUrl } from "../redux/config";

const OurComitment = ({ temp_data }) => {
	return (
		<div className="page_container2 mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 col-md-12 mx-auto">
						<div
							data-aos="zoom-in"
							data-aos-delay="400"
							data-aos-duration="400"
							data-aos-offset="600"
							className="mt-3"
						>
							{/* DIRECTION SECTION START */}
							<div className="d-flex justify-content-center align-items-center">
								<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
									<span className={`h6 mt-direction2Env text-uppercase`}>
										{temp_data.page.section3_title}
									</span>
								</div>
							</div>
							{/* DIRECTION SECTION END */}
						</div>
						<div className="row">
							{temp_data.page.section3_imgs.map((prev, i) => {
								return (
									<div
										data-aos="zoom-in"
										data-aos-delay={`${i * 200}`}
										data-aos-duration="600"
										data-aos-offset="700"
										key={i}
										className="col-6 col-md-4 text-center mt-3"
									>
										<div className="row">
											<div className="col-12 col-md-10 mx-auto">
												<img width="50%" src={imgUrl + prev} alt="icon" />
												<p className="small">
													{temp_data.page.section3_imgs_titles[i]}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<p className="small mt-3 text-center">
							All these initiatives together ensure a safe and enriching work
							milieu.
						</p>

						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="400"
							data-aos-offset="600"
							className="text-center mt-3"
						>
							<a target="blank" href={Health_and_Safety_Policy}>
								<button className="greenBtn px-4 py-2 text-white text-uppercase h6 mb-0">
									Download
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurComitment;
