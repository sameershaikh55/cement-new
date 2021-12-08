import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../redux/config";

const SustainabilityCard = ({
	banner_img,
	banner_img_alt,
	banner_img_title,
	short_desc,
	title,
	ind,
	urlLink,
}) => {
	return (
		<div key={ind}>
			{(ind % 2 === 0 && (
				<div>
					{/* FIRST START */}
					<div className="col-12 mt-5">
						<div className="row">
							<div
								data-aos="fade-right"
								data-aos-delay="300"
								data-aos-duration="600"
								data-aos-offset="600"
								className="col-12 col-sm-10 col-md-8 col-lg-6"
							>
								<div className="cementCard">
									<img
										src={imgUrl + banner_img}
										alt={banner_img_alt}
										title={banner_img_title}
									/>
									<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
										<div>
											<h4
												dangerouslySetInnerHTML={{ __html: title }}
												className="themeColorG"
											></h4>
											<p
												dangerouslySetInnerHTML={{ __html: short_desc }}
												className="desc mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify"
											></p>
										</div>
										<div>
											<Link to={"/" + urlLink}>
												<button className="greenBtn px-3 py-1 text-uppercase text-white">
													view more
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* FIRST START */}
				</div>
			)) || (
				<div>
					<div className="col-12 mt-5 mt-md-0 mt-5">
						{/* SECOND START */}
						<div className="row">
							<div
								data-aos="fade-left"
								data-aos-delay="300"
								data-aos-duration="600"
								data-aos-offset="600"
								className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
							>
								<div className="cementCard">
									<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
										<div>
											<h4
												dangerouslySetInnerHTML={{ __html: title }}
												className="rtlDirection themeColorG"
											></h4>
											<p
												dangerouslySetInnerHTML={{ __html: short_desc }}
												className="desc mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify"
											></p>
										</div>
										<div className="text-end">
											<Link to={"/" + urlLink}>
												<button className="greenBtn px-3 py-1 text-uppercase text-white">
													view more
												</button>
											</Link>
										</div>
									</div>
									<img
										src={imgUrl + banner_img}
										alt={banner_img_alt}
										title={banner_img_title}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* SECOND END */}
				</div>
			)}
		</div>
	);
};

export default SustainabilityCard;
