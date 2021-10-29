import React, { useEffect } from "react";

// IMPORTING IMAGES
// import bulb from "../assets/buld.png";
// import envBg from "../assets/enviBg.png";
// import water from "../assets/water.png";
import commitment1 from "../assets/commitment1.png";
import commitment2 from "../assets/commitment2.png";
import commitment3 from "../assets/commitment3.png";
import commitment4 from "../assets/commitment4.png";
import commitment5 from "../assets/commitment5.png";
import commitment6 from "../assets/commitment6.png";
import commitment7 from "../assets/commitment7.png";
import commitment8 from "../assets/commitment8.png";
import calenderIcon from "../assets/calenderIcon.png";
import factoryIcon from "../assets/factoryIcon.png";
import pdfIcon from "../assets/pdfIcon.png";
import { imgUrl } from "../redux/config";

// ICONS
import waterManagement from "../assets/water management icons.png";
import wasteManagement from "../assets/Green footprint icons.png";
import carbon from "../assets/carbon footprint icons.png";

const EnvironmentBody = ({
	temp_data,
	search_data,
	selectedYear,
	setSelectedYear,
	selectedMonth,
	setSelectedMonth,
	selectedPlant,
	setSelectedPlant,
	environmentSearchApi,
}) => {
	useEffect(() => {
		setSelectedYear(temp_data.env_year[0].id);
		setSelectedMonth(temp_data.env_month[0].id);
		setSelectedPlant(temp_data.env_plants[0].plant);
		environmentSearchApi(
			selectedYear || temp_data.env_year[0].id,
			selectedMonth || temp_data.env_month[0].id,
			selectedPlant || temp_data.env_plants[0].plant
		);
	}, []);

	const commitmentData = [
		{
			img: commitment1,
			desc: "Conduct our operations in full compliance with applicable national, state and local laws and regulations.",
		},
		{
			img: commitment2,
			desc: "Promote the efficient use of energy, water alternate fuels & raw materials.",
		},
		{
			img: commitment3,
			desc: "Reduction of waste thereby contributing to the conservation of natural resources.",
		},
		{
			img: commitment4,
			desc: "Strive to prevent pollution at the source through continual improvement programmes.",
		},
		{
			img: commitment5,
			desc: "Provide sufficient resources for implementation of Environment Management System (EMS) in all our operations to manage overall responsibilities and performance.",
		},
		{
			img: commitment6,
			desc: "Employ safe technologies and operating procedures to reduce exposure of our employees and our communities to Environmental, Health & Safety risks.",
		},
		{
			img: commitment7,
			desc: "Review environmental performances at the Board level along with noncompliances (if any) and ensure proper communication and implementation of Board decision.",
		},
		{
			img: commitment8,
			desc: "Communicate & disseminate this policy through induction, education and training to all stakeholders.",
		},
	];

	return (
		<div className="page_container mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 col-md-12 mx-auto">
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_title[1],
							}}
						></div>
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_dec[1],
							}}
						></div>

						{/* CARD SECTIONS START */}
						<div className="container-fluid my-5">
							<div className="row">
								<div className="col-12 col-sm-8 mx-auto">
									<div
										data-aos="fade-up"
										data-aos-delay="500"
										data-aos-duration="500"
										data-aos-offset="400"
									>
										<img
											className="w-100"
											src={imgUrl + temp_data.page.img1[0]}
											alt="bulb"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* CARD SECTIONS START */}

						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_title[2],
							}}
						></div>
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_dec[2],
							}}
						></div>

						{/* CARD SECTIONS START */}
						<div className="container-fluid my-5">
							<div className="row">
								<div className="col-12 col-sm-8 mx-auto">
									<div
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="500"
										className="w-100"
									>
										<img
											className="w-100"
											src={imgUrl + temp_data.page.img1[1]}
											alt="bulb"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* CARD SECTIONS START */}

						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_title[3],
							}}
						></div>
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_dec[3],
							}}
						></div>

						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_title[4],
							}}
						></div>
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_dec[4],
							}}
						></div>

						{/* CARD SECTIONS START */}
						<div className="container-fluid my-5">
							<div className="row">
								<div className="col-12 col-sm-8 mx-auto">
									<div
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="1000"
										className="w-100"
									>
										<img
											className="w-100"
											src={imgUrl + temp_data.page.img1[2]}
											alt="bulb"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* CARD SECTIONS START */}

						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_title[5],
							}}
						></div>
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.section_dec[5],
							}}
						></div>

						{/* CARD SECTIONS START */}
						<div className="container-fluid my-5">
							<div className="row">
								<div className="col-12 col-sm-8 mx-auto">
									<div
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-offset="500"
										data-aos-delay="1000"
										// className="bulbImgContainer"
										className="w-100"
									>
										<img
											className="w-100"
											src={imgUrl + temp_data.page.img1[3]}
											alt="bulb"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* CARD SECTIONS START */}

						<div
							data-aos="zoom-in"
							data-aos-duration="500"
							data-aos-offset="500"
							data-aos-delay="500"
						>
							{/* DIRECTION SECTION START */}
							<div className="d-flex justify-content-center align-items-center">
								<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
									<span
										dangerouslySetInnerHTML={{
											__html: temp_data.page.our_policy_title,
										}}
										className={`h6 mt-direction2Env text-uppercase`}
									></span>
								</div>
							</div>
							{/* DIRECTION SECTION END */}
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: temp_data.page.our_policy_section,
							}}
						></div>

						<div
							data-aos="zoom-in"
							data-aos-duration="500"
							data-aos-offset="500"
							data-aos-delay="500"
							className="mt-5"
						>
							{/* DIRECTION SECTION START */}
							<div className="d-flex justify-content-center align-items-center">
								<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
									<span
										dangerouslySetInnerHTML={{
											__html: temp_data.page.our_commitment_title,
										}}
										className={`h6 mt-direction2Env text-uppercase`}
									></span>
								</div>
							</div>
							{/* DIRECTION SECTION END */}
						</div>

						<div className="row">
							{temp_data.page.our_commitment_img.map((prev, i) => {
								return (
									<div
										data-aos="zoom-in"
										data-aos-duration="600"
										data-aos-offset="700"
										data-aos-delay={`${i * 200}`}
										key={i}
										className="col-6 col-md-4 col-lg-3 commitmentCard text-center"
									>
										<img src={imgUrl + prev} alt="icon" />
										<p>{temp_data.page.our_commitment_img_title[i]}</p>
									</div>
								);
							})}
							<div className="col-12 text-center mt-2">
								<a
									target="blank"
									href="https://nuvoco.in/wp-content/uploads/2019/01/Environment-Policy.pdf"
								>
									<button
										data-aos="zoom-in"
										data-aos-duration="600"
										data-aos-offset="700"
										className="f14 greenBtn downloadBtn py-1 text-uppercase text-white h5 fw-light rounded-pill mt-4"
										dangerouslySetInnerHTML={{
											__html: temp_data.page.download_button,
										}}
									></button>
								</a>
							</div>
						</div>

						<h4
							data-aos="fade-up"
							data-aos-duration="600"
							data-aos-offset="700"
							className="mt-5 text-center text-uppercase themeColor fw-bold"
						>
							Envir<span className="borderBottom">onment rep</span>orts
						</h4>

						<div className="d-flex flex-column flex-md-row mt-5">
							{/* YEAR START */}
							<div
								data-aos="fade-up"
								data-aos-duration="600"
								data-aos-offset="700"
								data-aos-delay="200"
								className="envInpContainer w-100"
							>
								<label className="fw-bold themeColorG" htmlFor="year">
									Year
								</label>
								<br />
								<div className="inp d-flex align-items-center px-2 rounded-2">
									<img src={calenderIcon} alt="calenderIcon" />
									{/* <h6 className="ms-2 mb-0">2020</h6> */}
									<select
										className="w-100 border-0 rounded-3 ps-2"
										style={{ backgroundColor: "#EEECED" }}
										name="year"
										id="year"
										onChange={(e) => setSelectedYear(e.target.value)}
									>
										{temp_data.env_year.map((item) => (
											<option value={item.id} key={item.id}>
												{item.year}
											</option>
										))}
									</select>
								</div>
							</div>
							{/* YEAR END */}

							{/* MONTH START */}
							<div
								data-aos="fade-up"
								data-aos-duration="600"
								data-aos-offset="700"
								data-aos-delay="400"
								className="envInpContainer w-100 ms-0 ms-md-4 mt-4 mt-md-0"
							>
								<label className="fw-bold themeColorG" htmlFor="march">
									Month
								</label>
								<br />
								<div className="inp d-flex align-items-center px-2 rounded-2">
									<img src={calenderIcon} alt="calenderIcon" />
									{/* <h6 className="ms-2 mb-0">March</h6> */}
									<select
										className="w-100 border-0 rounded-3 ps-2"
										style={{ backgroundColor: "#EEECED" }}
										name="year"
										id="year"
										onChange={(e) => setSelectedMonth(e.target.value)}
									>
										{temp_data.env_month.map((item) => (
											<option value={item.id} key={item.id}>
												{item.month}
											</option>
										))}
									</select>
								</div>
							</div>
							{/* MONTH END */}

							{/* PLANT START */}
							<div
								data-aos="fade-up"
								data-aos-duration="600"
								data-aos-offset="700"
								data-aos-delay="600"
								className="envInpContainer w-100 ms-0 ms-md-4 mt-4 mt-md-0"
							>
								<label className="fw-bold themeColorG" htmlFor="plant">
									Plant
								</label>
								<br />
								<div className="inp d-flex align-items-center px-2 rounded-2">
									<img src={factoryIcon} alt="factoryIcon" />
									{/* <h6 className="ms-2 mb-0">Arasmeta Cement Plant</h6> */}
									<select
										className="w-100 border-0 rounded-3 ps-2"
										style={{ backgroundColor: "#EEECED" }}
										name="year"
										id="year"
										onChange={(e) => setSelectedPlant(e.target.value)}
									>
										{temp_data.env_plants.map((item) => (
											<option value={item.plant} key={item.id}>
												{item.plant}
											</option>
										))}
									</select>
								</div>
							</div>
							{/* PLANT END */}
						</div>

						<div
							data-aos="zoom-in"
							data-aos-duration="600"
							data-aos-offset="500"
							className="text-center mt-4 pt-3"
						>
							<button
								className="greenBtn px-5 py-1 text-uppercase text-white h5 fw-light"
								onClick={() => {
									environmentSearchApi(
										selectedYear,
										selectedMonth,
										selectedPlant
									);
								}}
							>
								submit
							</button>
						</div>

						{/* PDF DOWNLOADS START */}
						<div className="page_container mb-5" style={{ marginTop: 25 }}>
							<div className="container-fluid">
								<div className="row">
									<div className="col-11 col-md-12 mx-auto">
										<div className="row justify-content-center">
											{search_data && search_data.env_report.length > 0 ? (
												search_data.env_report.map((item, i) => {
													let pdfName = item.report_pdf.split("/");

													return (
														<div
															data-aos="fade-up"
															data-aos-delay={`${i * 100}`}
															// data-aos-offset="600"
															key={i}
															className="col-md-3 mt-4"
														>
															<div className="d-flex justify-content-between align-items-center rounded-3 border border-1 border-aqua py-2 mt-3 mt-sm-0 px-3">
																<p className="elipses1 mb-0 small">
																	{pdfName[2]}
																</p>
																<a
																	href={`${search_data.project_path}${item.report_pdf}`}
																	target="blank"
																>
																	<img
																		style={{ width: "32px", height: "auto" }}
																		src={pdfIcon}
																		alt="pdfIcon"
																		// onClick = {()=> downPdf(`${envReportData.project_path}${item.report_pdf}`)}
																	/>
																</a>
															</div>
														</div>
													);
												})
											) : (
												<div
													data-aos="fade-up"
													className="text-center text-danger fw-bold"
												>
													Data not found
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* PDF DOWNLOADS END */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnvironmentBody;
