import React from "react";

// IMPORTING IMAGES
import standI1 from "../assets/standI1.png";
import standI2 from "../assets/standI2.png";
import standI3 from "../assets/standI3.png";

const StandOut = () => {
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
								What makes us stand out?
							</span>
						</div>
					</div>
					{/* DIRECTION SECTION END */}

					<div className="row standOutCont px-4 px-md-0">
						<div
							data-aos="zoom-in"
							data-aos-delay="2100"
							data-aos-duration="600"
							data-aos-offset="300"
							className="col-4 text-center px-0 px-sm-3"
						>
							<div className="row">
								<div className="col-10 col-md-5 mx-auto">
									<img src={standI1} alt="stand" className="w-100" />
								</div>
							</div>
							<p className="lh-sm">
								Innovations from our <br className="d-none d-md-block" /> world
								class experts
							</p>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-delay="2300"
							data-aos-duration="600"
							data-aos-offset="300"
							className="col-4 text-center px-0 px-sm-3"
						>
							<div className="row">
								<div className="col-10 col-md-5 mx-auto">
									<img src={standI2} alt="stand" className="w-100" />
								</div>
							</div>
							<p className="lh-sm">Best BIS standards rating</p>
						</div>
						<div
							data-aos="zoom-in"
							data-aos-delay="2600"
							data-aos-duration="600"
							data-aos-offset="300"
							className="col-4 text-center px-0 px-sm-3"
						>
							<div className="row">
								<div className="col-10 col-md-5 mx-auto">
									<img src={standI3} alt="stand" className="w-100" />
								</div>
							</div>
							<p className="lh-sm">
								Use of premium quality <br className="d-none d-md-block" /> raw
								material
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StandOut;
