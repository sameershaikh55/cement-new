import React from "react";

// IMPORTING IMAGES
import Direction from "./Direction";

const ApplicationAreas = ({ temp_page }) => {
	return (
		<div className="page_container">
			<div className="container-fluid">
				<div data-aos="zoom-in" data-aos-offset="500" data-aos-delay="400">
					<Direction title={temp_page.page.area_of_application_title} />
				</div>
				<div className="row">
					<h6
						data-aos="fade-up"
						data-aos-offset="800"
						data-aos-delay="1000"
						className="col-12 col-sm-11 col-md-10 col-lg-7 mx-auto text-center mt-2"
						dangerouslySetInnerHTML={{
							__html: temp_page.page.area_of_application_subtitle,
						}}
					></h6>
				</div>
				<div className="row justify-content-center mt-4">
					<div className="col-12 col-sm-10 col-lg-8 mx-auto">
						<div className="row justify-content-center">
							{temp_page.page.area_of_application_img.map((item, index) => {
								return (
									<div
										data-aos="zoom-in"
										data-aos-offset="800"
										data-aos-delay="1000"
										className="aresCard col-4 text-center mt-4"
									>
										<img
											width="45%"
											src={`${temp_page.project_path}${item}`}
											alt={temp_page.page.area_of_application_img_alt[index]}
										/>
										<h6
											dangerouslySetInnerHTML={{
												__html:
													temp_page.page.area_of_application_img_title[index],
											}}
											className="mt-3"
										></h6>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplicationAreas;
