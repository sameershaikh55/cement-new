import React, { useEffect } from "react";

// IMPORTING IMAGES
import selectIcon from "../assets/selectIcon.png";
import pdfIcon from "../assets/pdfIcon.png";
import calenderIcon from "../assets/calenderIcon.png";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

const FinancialInfoBody = ({
	temp_data,
	search_data,
	financialInformationSearchApi,
	selectedYear,
	setSelectedYear,
	selectedCategory,
	setSelectedCategory,
	financialInformation,
}) => {
	// const [pdfLoader, setPdfLoader] = useState(true);

	useEffect(() => {
		setSelectedYear(temp_data.fin_year[0].id);
		setSelectedCategory(temp_data.fin_cat[0].id);
		financialInformationSearchApi(
			selectedCategory || temp_data.fin_cat[0].id,
			selectedYear || temp_data.fin_year[0].id
		);
	}, []);

	if (Object.keys(financialInformation).length) {
		var ratingTable = (
			<div className="page_container">
				<div className="container-fluid">
					<div className="col-11 col-md-9 mx-auto">
						<h4
							data-aos="fade-up"
							data-aos-delay="400"
							className="text-center text-uppercase themeColor fw-bold"
						>
							C<span className="borderBottom">REDIT RATIN</span>G
						</h4>

						<div
							data-aos="zoom-in"
							data-aos-delay="600"
							className="table_container my-5"
						>
							<table>
								<tr>
									<th>Instrument</th>
									<th>Rating Agency</th>
									<th>Rating</th>
								</tr>
								{financialInformation.data.credit_rating.map((prev, i) => {
									return (
										<tr key={i}>
											<td>{prev.instruments}</td>
											<td>
												{prev.rating_agency.map((prev2, i2) => {
													return (
														<>
															<div
																className={`${
																	prev.rating.length !== i2 + 1 &&
																	"border-bottom border-1 border-dark"
																} py-1`}
															>
																{prev2}
															</div>
														</>
													);
												})}
											</td>
											<td>
												{prev.rating.map((prev2, i2) => {
													return (
														<>
															<div
																className={`${
																	prev.rating.length !== i2 + 1 &&
																	"border-bottom border-1 border-dark"
																} py-1`}
															>
																{prev2}
															</div>
														</>
													);
												})}
											</td>
										</tr>
									);
								})}
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="page_container mb-4 mt-5 mb-md-5 mt-md-5">
				<div className="container-fluid">
					<div className="d-flex justify-content-center flex-wrap">
						{temp_data.fin_cat.map((item, index) => (
							<Fade left key={index}>
								<button
									onClick={() => {
										setSelectedCategory(item.id);
										financialInformationSearchApi(
											item.id,
											temp_data.fin_year[0].item
										);
									}}
									className={`${
										(item.id === selectedCategory &&
											"themeGBG border-0 py-1 px-4 mt-2 text-white") ||
										"border-0 py-1 px-4 mt-2"
									} me-3`}
								>
									{item.category}
								</button>
							</Fade>
						))}
					</div>
				</div>
			</div>

			{}

			{selectedCategory === 2 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-3 mb-md-5 pb-0 pb-md-3">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-sm-9 col-md-7 mx-auto">
									<div className="row">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-md-8"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.fin_year.map((item) => (
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
											className="col-md-4 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												financialInformationSearchApi(
													selectedCategory,
													selectedYear
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
					<div className="page_container mb-5">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row justify-content-center">
										{
											//LOOP 1
											search_data && search_data.fin_docs.length > 0 ? (
												search_data.fin_docs.map((prev1, i1) => {
													return (
														//LOOP 2
														prev1.pdfs.map((prev, i) => {
															return (
																<div
																	data-aos="fade-up"
																	data-aos-delay={`${i * 100}`}
																	key={i}
																	className="col-md-3 mt-4"
																>
																	<div className="d-flex justify-content-between align-items-center rounded-3 border border-1 border-aqua py-2 mt-3 mt-sm-0 px-3">
																		<p className="elipses1 mb-0 small pe-5">
																			{prev1.pdfs_title ? (
																				prev1.pdfs_title.length > 0 ? (
																					<div
																						dangerouslySetInnerHTML={{
																							__html: prev1.pdfs_title[i],
																						}}
																					/>
																				) : (
																					"pdf document"
																				)
																			) : (
																				"pdf document"
																			)}
																		</p>
																		<a
																			href={`${search_data.project_path}${prev}`}
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
					{/* PDF DOWNLOADS END */}

					{/* FINANCIAL TABLE START */}
					{ratingTable}
					{/* FINANCIAL TABLE END */}
				</>
			)}
			{/* FINANCIAL TABLE END */}

			{selectedCategory === 3 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-3 mb-md-5 pb-0 pb-md-3">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-sm-9 col-md-7 mx-auto">
									<div className="row">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-md-8"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.fin_year.map((item) => (
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
											className="col-md-4 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												financialInformationSearchApi(
													selectedCategory,
													selectedYear
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
					<div className="page_container mb-5">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row justify-content-center">
										{
											//LOOP 1
											search_data && search_data.fin_docs.length > 0 ? (
												search_data.fin_docs.map((prev1, i1) => {
													return (
														//LOOP 2
														prev1.pdfs.map((prev, i) => {
															let name = prev.split("/");
															return (
																<div
																	data-aos="fade-up"
																	data-aos-delay={`${i * 100}`}
																	key={i}
																	className="col-md-3 mt-4"
																>
																	<div className="d-flex justify-content-between align-items-center rounded-3 border border-1 border-aqua py-2 mt-3 mt-sm-0 px-3">
																		<p className="elipses1 mb-0 small pe-5">
																			{prev1.pdfs_title ? (
																				prev1.pdfs_title.length > 0 ? (
																					<div
																						dangerouslySetInnerHTML={{
																							__html: name[3],
																						}}
																					/>
																				) : (
																					"pdf document"
																				)
																			) : (
																				"pdf document"
																			)}
																		</p>
																		<a
																			href={`${search_data.project_path}${prev}`}
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
					{/* PDF DOWNLOADS END */}

					{/* FINANCIAL TABLE START */}
					{ratingTable}
					{/* FINANCIAL TABLE END */}
				</>
			)}
			{/* FINANCIAL TABLE END */}

			{selectedCategory === 4 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-3 mb-md-5 pb-0 pb-md-3">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-sm-9 col-md-7 mx-auto">
									<div className="row">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-md-8"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.fin_year.map((item) => (
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
											className="col-md-4 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												financialInformationSearchApi(
													selectedCategory,
													selectedYear
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
					<div className="page_container mb-5">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row justify-content-center">
										{
											//LOOP 1
											search_data && search_data.fin_docs.length > 0 ? (
												search_data.fin_docs.map((prev1, i1) => {
													return (
														//LOOP 2
														prev1.pdfs.map((prev, i) => {
															return (
																<div
																	data-aos="fade-up"
																	data-aos-delay={`${i * 100}`}
																	key={i}
																	className="col-md-3 mt-4"
																>
																	<div className="d-flex justify-content-between align-items-center rounded-3 border border-1 border-aqua py-2 mt-3 mt-sm-0 px-3">
																		<p className="elipses1 mb-0 small pe-5">
																			{prev1.pdfs_title ? (
																				prev1.pdfs_title.length > 0 ? (
																					<div
																						dangerouslySetInnerHTML={{
																							__html: prev1.pdfs_title[i],
																						}}
																					/>
																				) : (
																					"pdf document"
																				)
																			) : (
																				"pdf document"
																			)}
																		</p>
																		<a
																			href={`${search_data.project_path}${prev}`}
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
					{/* PDF DOWNLOADS END */}

					{/* FINANCIAL TABLE START */}
					{ratingTable}
					{/* FINANCIAL TABLE END */}
				</>
			)}

			{selectedCategory === 6 && (
				<>
					{/* GOOD PRACTICES START */}
					<div className="page_container mb-3 mb-md-5 pb-0 pb-md-3">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-sm-9 col-md-7 mx-auto">
									<div className="row">
										<div
											data-aos="fade-up"
											data-aos-delay="100"
											className="col-md-8"
										>
											<div>
												<div className="w-100 contactField">
													<label className="fw-bold themeColorG" htmlFor="year">
														Year
													</label>
													<br />
													<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
														<select
															className="w-100 border-0 rounded-3"
															onChange={(e) => setSelectedYear(e.target.value)}
														>
															{temp_data.fin_year.map((item) => (
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
											className="col-md-4 align-self-end mb-2 mt-3 mt-md-0 text-center"
											onClick={() => {
												financialInformationSearchApi(
													selectedCategory,
													selectedYear
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
					<div className="page_container mb-5">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row justify-content-center">
										{
											//LOOP 1
											search_data && search_data.fin_docs.length > 0 ? (
												search_data.fin_docs.map((prev1, i1) => {
													return (
														//LOOP 2
														prev1.pdfs.map((prev, i) => {
															return (
																<div
																	data-aos="fade-up"
																	data-aos-delay={`${i * 100}`}
																	key={i}
																	className="col-md-3 mt-4"
																>
																	<div className="d-flex justify-content-between align-items-center rounded-3 border border-1 border-aqua py-2 mt-3 mt-sm-0 px-3">
																		<p className="elipses1 mb-0 small pe-5">
																			{prev1.pdfs_title ? (
																				prev1.pdfs_title.length > 0 ? (
																					<div
																						dangerouslySetInnerHTML={{
																							__html: prev1.pdfs_title[i],
																						}}
																					/>
																				) : (
																					"pdf document"
																				)
																			) : (
																				"pdf document"
																			)}
																		</p>
																		<a
																			href={`${search_data.project_path}${prev}`}
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
					{/* PDF DOWNLOADS END */}

					{/* FINANCIAL TABLE START */}
					{ratingTable}
					{/* FINANCIAL TABLE END */}
				</>
			)}
			{/* FINANCIAL TABLE END */}
		</>
	);
};

export default FinancialInfoBody;
