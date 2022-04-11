import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

import calenderIcon from "../assets/calenderIcon.png";
import pdfIcon from "../assets/pdfIcon.png";
import searchIcon from "../assets/searchIcon.png";
import selectIcon from "../assets/selectIcon.png";

const CorporateBody = ({
	temp_data,
	corporateGovernanceSearchApi,
	selectedYear,
	setSelectedYear,
	selectedCategory,
	setSelectedCategory,
	selectedMeeting,
	setSelectedMeeting,
	selectedPolicie,
	setSelectedPolicie,
	search_data,
}) => {
	const [pdfLoader, setPdfLoader] = useState(true);

	useEffect(() => {
		if (selectedCategory == 1) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (selectedCategory == 2) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (selectedCategory == 3) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				selectedMeeting || temp_data.corp_meet[0].id,
				""
			);
		} else if (selectedCategory == 4) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (selectedCategory == 5) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				"",
				"",
				selectedPolicie || temp_data.corp_policy[0].id
			);
		} else if (selectedCategory == 6) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (selectedCategory == 7) {
			corporateGovernanceSearchApi(
				selectedCategory || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		}
	}, []);

	const handleCategory = (id) => {
		setSelectedCategory(id);
		setPdfLoader(false);

		setTimeout(() => {
			setPdfLoader(true);
		}, 800);

		if (id == 1) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (id == 2) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (id == 3) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				selectedMeeting || temp_data.corp_meet[0].id,
				""
			);
		} else if (id == 4) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (id == 5) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				"",
				"",
				selectedPolicie || temp_data.corp_policy[0].id
			);
		} else if (id == 6) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		} else if (id == 7) {
			corporateGovernanceSearchApi(
				id || temp_data.corp_cat[0].id,
				selectedYear || temp_data.corp_year[0].id,
				"",
				""
			);
		}
	};

	let pdfDownload = (!pdfLoader && (
		<div
			data-aos="fade-up"
			data-aos-delay="100"
			className="d-flex justify-content-center mb-5"
		>
			<Loader />
		</div>
	)) || (
		<div className="page_container mb-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<div className="row justify-content-center">
							{
								//LOOP 1
								search_data && search_data.length > 0 ? (
									search_data.map((prev1, i1) => {
										return (
											//LOOP 2
											prev1.pdfs.map((prev, i) => {
												return (
													<div
														data-aos="fade-up"
														data-aos-delay={`${i * 100}`}
														key={i}
														className="col-md-3 mt-3"
													>
														<div className="d-flex justify-content-between align-items-center rounded-3 border border-1 border-aqua py-2 mt-3 mt-sm-0 px-3">
															<p className="elipses1 mb-0 small">
																<div
																	dangerouslySetInnerHTML={{
																		__html: prev1.pdfs_title[i]
																			? prev1.pdfs_title[i]
																			: "pdf document",
																	}}
																/>
															</p>
															<a
																href={`${temp_data.project_path}${prev}`}
																target="blank"
															>
																<img
																	style={{
																		width: "32px",
																		height: "auto",
																	}}
																	src={pdfIcon}
																	alt="pdfIcon"
																/>
															</a>
														</div>
													</div>
												);
											})
											//LOOP 2 END
										);
									}) //LOOP 1 END
								) : (
									<div data-aos="fade-up" className="text-center fw-bold">
										Data not found
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div>
			{/* BODY START */}
			<div className="page_container my-5">
				<div className="container-fluid">
					<div className="d-flex justify-content-center flex-wrap">
						{temp_data.corp_cat.map((item, index) => (
							<Fade delay={1000} left>
								<button
									onClick={() => handleCategory(item.id)}
									className={`${
										(item.id === selectedCategory &&
											"themeGBG border-0 py-1 px-4 mt-2 text-white") ||
										"border-0 py-1 px-4 mt-2"
									} me-3`}
									dangerouslySetInnerHTML={{ __html: item.category }}
								></button>
							</Fade>
						))}
					</div>
				</div>
			</div>

			{selectedCategory === 1 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.corp_year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedYear === item.id}
																	dangerouslySetInnerHTML={{
																		__html: item.year,
																	}}
																></option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="1400"
											className="col-12 col-md-2 align-self-end mb-2 mt-4 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													selectedYear,
													"",
													""
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{selectedCategory === 2 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.corp_year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedYear === item.id}
																>
																	{item.year}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="300"
											className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													selectedYear,
													"",
													""
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{selectedCategory === 3 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.corp_year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedYear === item.id}
																>
																	{item.year}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="200"
											className="col-12 col-md-5 mt-2 mt-md-0"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Choose
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) =>
																setSelectedMeeting(e.target.value)
															}
														>
															{temp_data.corp_meet.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedMeeting === item.id}
																>
																	{item.board_meeting}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={searchIcon}
															alt="searchIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="300"
											className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													selectedYear,
													selectedMeeting,
													""
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{selectedCategory === 4 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.corp_year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedYear === item.id}
																>
																	{item.year}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="300"
											className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													selectedYear,
													"",
													""
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{selectedCategory === 5 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Policies
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) =>
																setSelectedPolicie(e.target.value)
															}
														>
															{temp_data.corp_policy.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedPolicie === item.id}
																>
																	{item.policie}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="300"
											className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													"",
													"",
													selectedPolicie
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{selectedCategory === 6 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
														{/* Policies */}
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.corp_year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedYear === item.id}
																>
																	{item.year}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
													{/* <div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) =>
																setSelectedPolicie(e.target.value)
															}
														>
															{temp_data.corp_policy.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedPolicie === item.id}
																>
																	{item.policie}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div> */}
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="300"
											className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													selectedYear,
													"",
													""
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{selectedCategory === 7 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-4 mb-md-5 pb-0 pb-md-2">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-10 mx-auto">
									<div className="row justify-content-center">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-12 col-md-5"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
														{/* Policies */}
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.corp_year.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedYear === item.id}
																>
																	{item.year}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div>
													{/* <div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3 pe-5"
															onChange={(e) =>
																setSelectedPolicie(e.target.value)
															}
														>
															{temp_data.corp_policy.map((item) => (
																<option
																	value={item.id}
																	key={item.id}
																	selected={selectedPolicie === item.id}
																>
																	{item.policie}
																</option>
															))}
														</select>
														<img
															className="contactIcon"
															src={calenderIcon}
															alt="calenderIcon"
														/>
														<img
															style={{ width: "18px", height: "auto" }}
															className="position-absolute end-0 me-2"
															src={selectIcon}
															alt="selectIcon"
														/>
													</div> */}
												</div>
											</div>
										</div>
										<div
											data-aos="fade-up"
											data-aos-delay="300"
											className="col-12 col-md-2 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												corporateGovernanceSearchApi(
													selectedCategory,
													selectedYear,
													"",
													""
												);
											}}
										>
											<button className="greenBtn text-white px-5 py-2 text-uppercase">
												submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* GOOD PRACTICES END */}

					{/* PDF DOWNLOADS START */}
					{pdfDownload}
					{/* PDF DOWNLOADS END */}
				</>
			)}

			{/* BODY END */}
		</div>
	);
};

export default CorporateBody;
