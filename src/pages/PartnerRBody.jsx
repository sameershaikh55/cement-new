import React from "react";
import { Link } from "react-router-dom";

const PartnerRBody = ({ temp_data, ind, project_path }) => {
	const {
		listing_short_desc,
		partner_logo,
		partner_logo_alt,
		partner_logo_title,
		page_url,
	} = temp_data;

	return (
		<div key={ind}>
			{(ind % 2 === 0 && (
				<div className="col-12">
					{/* FIRST START */}
					<div className="row mt-5">
						<div
							data-aos="fade-right"
							data-aos-delay="300"
							data-aos-duration="600"
							data-aos-offset="600"
							className="col-12 col-sm-10 col-md-8 col-lg-6"
						>
							<div className="cementCard align-items-center">
								<img
									src={project_path + partner_logo}
									alt={partner_logo_alt}
									title={partner_logo_title}
								/>
								<div className="ms-2 ms-sm-4">
									<div>
										<p
											dangerouslySetInnerHTML={{ __html: listing_short_desc }}
											className="onlyTextJustify fiveLineElipses mb-3 mb-md-5"
										></p>
									</div>
									<div>
										<Link to={`/partnerRelations2/${page_url}`}>
											<button className="greenBtn px-3 py-1 text-uppercase text-white">
												view more
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* FIRST START */}
				</div>
			)) || (
				<div className="col-12 mt-5 mt-md-0">
					{/* SECOND START */}
					<div className="row">
						<div
							data-aos="fade-left"
							data-aos-delay="300"
							data-aos-duration="600"
							data-aos-offset="600"
							className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
						>
							<div className="cementCard align-items-center">
								<div className="me-2 me-sm-4">
									<div>
										<p
											dangerouslySetInnerHTML={{ __html: listing_short_desc }}
											className="rtlDirection onlyTextJustify fiveLineElipses mb-3 mb-md-5"
										></p>
									</div>
									<div className="rtlDirection">
										<Link to={`/partnerRelations2/${page_url}`}>
											<button className="greenBtn px-3 py-1 text-uppercase text-white">
												view more
											</button>
										</Link>
									</div>
								</div>
								<img
									src={project_path + partner_logo}
									alt={partner_logo_alt}
									title={partner_logo_title}
								/>
							</div>
						</div>
					</div>
					{/* SECOND END */}
				</div>
			)}
		</div>
	);
};

export default PartnerRBody;
