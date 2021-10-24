import React, { useState } from "react";
import { Link } from "react-scroll";
import CementSlider from "./CementSlider";

const ProductCard = ({
	franchaise_title,
	franchaise_subtitle,
	franchaise_img_title,
	franchaise_img_alt,
	franchaise_img,
	franchaise_cta,
	temp_data,
	ind,
}) => {
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const [slider_data, setSlider_data] = useState(false);

	const closeFunc = () => {
		setOpen(false);
		setOpen1(false);
	};

	const openFunc = (franchaise_title) => {
		Object.keys(temp_data.page.franchaise).find((key) => {
			if (key == franchaise_title) {
				setSlider_data(temp_data.page.franchaise[key]);
			}
		});
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
										src={temp_data.project_path + franchaise_img}
										alt={franchaise_img_alt}
										title={franchaise_img_title}
									/>
									<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
										<div>
											<h4
												dangerouslySetInnerHTML={{ __html: franchaise_title }}
												className="themeColorG"
											></h4>
											<p
												dangerouslySetInnerHTML={{
													__html: franchaise_subtitle,
												}}
												className="desc mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify"
											></p>
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
													onClick={() => openFunc(franchaise_title)}
													to={`opencen${ind}`}
													smooth={true}
													duration={600}
													spy={true}
													offset={-80}
												>
													<button
														dangerouslySetInnerHTML={{ __html: franchaise_cta }}
														className="greenBtn px-3 py-1 text-uppercase text-white"
													></button>
												</Link>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* FIRST START */}

					<div id={`opencen${ind}`}>
						{open && (
							<CementSlider slider_data={slider_data} temp_data={temp_data} />
						)}
					</div>
				</div>
			)) || (
				<div>
					<div id={`closecen${ind}`} className="col-12 mt-5 mt-md-0 mt-5">
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
												dangerouslySetInnerHTML={{ __html: franchaise_title }}
												className="rtlDirection themeColorG"
											></h4>
											<p
												dangerouslySetInnerHTML={{
													__html: franchaise_subtitle,
												}}
												className="desc mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify"
											></p>
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
													onClick={() => openFunc(franchaise_title)}
													to={`opencen${ind}`}
													smooth={true}
													duration={600}
													spy={true}
													offset={-80}
												>
													<button
														dangerouslySetInnerHTML={{ __html: franchaise_cta }}
														className="greenBtn px-3 py-1 text-uppercase text-white"
													></button>
												</Link>
											)}
										</div>
									</div>
									<img
										src={temp_data.project_path + franchaise_img}
										alt={franchaise_img_alt}
										title={franchaise_img_title}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* SECOND END */}
					<div id={`opencen${ind}`}>
						{open1 && (
							<CementSlider slider_data={slider_data} temp_data={temp_data} />
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
