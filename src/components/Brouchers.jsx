import React from "react";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

const Brouchers = ({ temp_page }) => {
	return (
		<div className="page_container">
			<div className="container-fluid my-5">
				<Fade bottom>
					<h5 className="text-center d-flex flex-column">
						<span
							className="themeColor mb-3"
							dangerouslySetInnerHTML={{
								__html: temp_page.page.product_broucher_title,
							}}
						></span>
						<span className="heading_underline"></span>
					</h5>
				</Fade>
				<div className="row mt-4">
					<div className="col-12 col-sm-8 mx-auto">
						<div className="row gy-4 justify-content-center">
							{temp_page.page.broucher_langage.map((item, index) => (
								<div key={index} className="col-4">
									<a
										href={`${temp_page.project_path}${temp_page.page.broucher_langage_file[index]}`}
										target="blank"
										className="greenBtn border-0 py-2 h5 mb-0 text-white w-100 text-uppercase"
									>
										<Fade bottom>
											<button className="greenBtn border-0 h5 mb-0 text-white w-100 text-uppercase">
												<span dangerouslySetInnerHTML={{ __html: item }}></span>
											</button>
										</Fade>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brouchers;
