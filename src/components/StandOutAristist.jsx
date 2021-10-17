import React from "react";

const StandOutAristist = ({ temp_data }) => {
	const { section2_title, section2_images, section2_subtitles } =
		temp_data.page.category;
	return (
		<div className="page_container mt-5">
			<div className="container-fluid">
				<div>
					{/* DIRECTION SECTION START */}
					<div className="d-flex justify-content-center align-items-center">
						<div
							data-aos="zoom-in"
							data-aos-delay="1800"
							data-aos-duration="600"
							data-aos-offset="300"
							className="directionBg stand text-white d-flex justify-content-center fw-bold"
						>
							<span className="h6 mt-1 text-uppercase px-5 text-center">
								{section2_title}
							</span>
						</div>
					</div>
					{/* DIRECTION SECTION END */}

					<div className="row justify-content-center standOutCont px-4 px-md-0">
						{section2_images.map((prev, ind) => {
							return (
								<div
									data-aos="zoom-in"
									data-aos-delay="2100"
									data-aos-duration="600"
									data-aos-offset="300"
									className="col-4 text-center px-0 px-sm-3"
								>
									<div className="row">
										<div className="col-10 col-md-5 mx-auto">
											<img
												src={temp_data.project_path + prev}
												alt="stand"
												className="w-100"
											/>
										</div>
									</div>
									<p className="lh-sm">{section2_subtitles[ind]}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default StandOutAristist;
