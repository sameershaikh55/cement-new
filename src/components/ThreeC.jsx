import React from "react";

// IMPORTING COMPONENTS
import Direction from "./Direction";

// IMPORTING IMAGES
import { imgUrl } from "../redux/config";

const ThreeC = ({ data }) => {
	return (
		<div className="page_container mt-3 mb-5">
			<div className="container-fluid">
				<div
					data-aos="zoom-in"
					data-aos-delay="800"
					data-aos-duration="400"
					data-aos-offset="600"
				>
					<Direction title={data._3c_title} />
				</div>

				<div className="row mt-5">
					<div className="col-12 mx-auto">
						<div className="row">
							<div className="col-11 mx-auto">
								<img className="w-100" src={imgUrl + data._3c_image} alt="" />
							</div>
						</div>
						<div className="row">
							<div className="col-4 text-center">
								<a
									className="pe-5"
									target="blank"
									href={data._3c_cta_button_url[0]}
								>
									<button className="greenBtn px-4 text-uppercase text-white py-1">
										{data._3c_image_title[0]}
									</button>
								</a>{" "}
							</div>
							<div className="col-4 text-center">
								<a href={data._3c_cta_button_url[1]}>
									<button className="greenBtn px-4 text-uppercase text-white py-1">
										{data._3c_image_title[1]}
									</button>
								</a>{" "}
							</div>
							<div className="col-4 text-center">
								<a
									className="ps-4"
									target="blank"
									href={data._3c_cta_button_url[2]}
								>
									<button className="greenBtn px-4 text-uppercase text-white py-1">
										{data._3c_image_title[2]}
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreeC;
