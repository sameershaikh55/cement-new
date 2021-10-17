import React, { useState } from "react";
import { Link } from "react-scroll";
import { imgUrl } from "../redux/config";
import CovidDetails from "./CovidDetails";

const LandmarkCards = ({
	banner_img,
	under_head,
	banner_img_alt,
	banner_img_title,
	description,
	short_desc,
	title,
	ind,
}) => {
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);

	const closeFunc = () => {
		setOpen(false);
		setOpen1(false);
	};

	const openFunc = () => {
		setOpen(true);
		setOpen1(true);
	};
	return (
		<div key={ind}>
			{(ind % 2 === 0 && (
				<div>
					{/* FIRST START */}
					<div id={`closecen${ind}`} className="col-12 mt-5">
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
											<h4 className="themeColorG">{title}</h4>
											<span className="themeColorG small">{under_head}</span>
											<p className="desc mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
												{short_desc}
											</p>
										</div>
										<div>
											{(open && (
												<Link
													onClick={closeFunc}
													to={`closecen${ind}`}
													smooth={true}
													duration={600}
													spy={true}
													offset={-100}
												>
													<button className="redBtn px-3 py-1 text-uppercase text-white">
														Close
													</button>
												</Link>
											)) || (
												<Link
													onClick={() => openFunc()}
													to={`opencen${ind}`}
													smooth={true}
													duration={600}
													spy={true}
													offset={-80}
												>
													<button className="greenBtn px-3 py-1 text-uppercase text-white">
														view more
													</button>
												</Link>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* FIRST START */}

					{open1 && <CovidDetails t={title} d={description} />}
				</div>
			)) || (
				<div>
					<div
						id={`closecen${ind}`}
						className="col-12 mt-5 mt-md-0 mt-5"
					>
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
											<h4 className="rtlDirection themeColorG">{title}</h4>
											<div className="rtlDirection my-0 py-0">
												<span className="themeColorG borderBottomG pb-1 small">
													{under_head}
												</span>
											</div>
											<p className="desc mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
												{short_desc}
											</p>
										</div>
										<div className="text-end">
											{(open1 && (
												<Link
													onClick={closeFunc}
													to={`closecen${ind}`}
													smooth={true}
													duration={600}
													spy={true}
													offset={-100}
												>
													<button className="redBtn px-3 py-1 text-uppercase text-white">
														Close
													</button>
												</Link>
											)) || (
												<Link
													onClick={() => openFunc()}
													to={`opencen${ind}`}
													smooth={true}
													duration={600}
													spy={true}
													offset={-80}
												>
													<button className="greenBtn px-3 py-1 text-uppercase text-white">
														view more
													</button>
												</Link>
											)}
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

					{open1 && <CovidDetails t={title} d={description} />}
				</div>
			)}
		</div>
	);
};

export default LandmarkCards;
