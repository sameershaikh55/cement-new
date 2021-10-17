import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { imgUrl } from "../redux/config";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { boardCommitteeApi } from "../redux";
import Seo from "../components/Seo";

const BoardComitee = ({ boardCommittee, boardCommitteeApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);
	const [change, setChange] = useState(0);

	useEffect(() => {
		boardCommitteeApi();
	}, []);

	const tabs = [
		"Audit",
		"Stakeholders’ Relationship",
		"Nomination & Remuneration",
		"Corporate Social Responsibility",
	];

	return (
		<>
			{(Object.keys(boardCommittee).length && (
				<div>
					<Seo
						title={boardCommittee.data.board_of_committe.page_title}
						description={boardCommittee.data.board_of_committe.meta_description}
						canonical={boardCommittee.data.board_of_committe.canonical_rel}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={boardCommittee.data.board_of_committe.banner_img_title}
						img1={imgUrl + boardCommittee.data.board_of_committe.banner_img}
						img2={imgUrl + boardCommittee.data.board_of_committe.banner_img_mob}
						alt1={boardCommittee.data.board_of_committe.banner_img_alt}
						alt2={boardCommittee.data.board_of_committe.banner_img_alt}
					/>
					{/* BODY START */}
					<div className="page_container my-5">
						<div className="container-fluid">
							<div className="d-flex flex-wrap justify-content-center upperNavComittee">
								{tabs.map((prev, i) => {
									return (
										<Fade delay={1000} left>
											<button
												onClick={() => setChange(i)}
												className={`${
													(change === i &&
														"themeGBG border-0 py-1 px-4 mt-2 text-white") ||
													"border-0 py-1 px-4 mt-2"
												} me-1`}
											>
												{prev}
											</button>
										</Fade>
									);
								})}
							</div>

							{change === 0 && (
								<div className="row mt-3">
									<div className="col-12 col-md-10 col-lg-8 mx-auto">
										<div className="row gx-5 gy-5">
											{boardCommittee.data.board_of_committe_detail[0].Audit.map(
												(prev, i) => {
													const { person_designation, person_name } = prev;
													return (
														<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
															<Zoom key={i} left>
																<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
																	<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
																		{person_designation}
																	</div>
																	<div className="py-1 fw-bold text-white text-uppercase greenUpp">
																		{person_name}
																	</div>
																</div>
															</Zoom>
														</div>
													);
												}
											)}
										</div>
									</div>
								</div>
							)}

							{change === 1 && (
								<div className="row mt-3">
									<div className="col-12 col-md-10 col-lg-8 mx-auto">
										<div className="row gx-5 gy-5">
											{boardCommittee.data.board_of_committe_detail[0].Audit.map(
												(prev, i) => {
													const { person_designation, person_name } = prev;
													return (
														<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
															<Zoom key={i} left>
																<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
																	<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
																		{person_designation}
																	</div>
																	<div className="py-1 fw-bold text-white text-uppercase greenUpp">
																		{person_name}
																	</div>
																</div>
															</Zoom>
														</div>
													);
												}
											)}
										</div>
									</div>
								</div>
							)}

							{change === 2 && (
								<div className="row mt-3">
									<div className="col-12 col-md-10 col-lg-8 mx-auto">
										<div className="row gx-5 gy-5">
											{boardCommittee.data.board_of_committe_detail[0].Audit.map(
												(prev, i) => {
													const { person_designation, person_name } = prev;
													return (
														<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
															<Zoom key={i} left>
																<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
																	<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
																		{person_designation}
																	</div>
																	<div className="py-1 fw-bold text-white text-uppercase greenUpp">
																		{person_name}
																	</div>
																</div>
															</Zoom>
														</div>
													);
												}
											)}
										</div>
									</div>
								</div>
							)}

							{change === 3 && (
								<div className="row mt-3">
									<div className="col-12 col-md-10 col-lg-8 mx-auto">
										<div className="row gx-5 gy-5">
											{boardCommittee.data.board_of_committe_detail[3].Corporate_Social_Responsibility.map(
												(prev, i) => {
													const { person_designation, person_name } = prev;
													return (
														<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
															<Zoom key={i} left>
																<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
																	<div
																		className={`${
																			prev === "" && "jaya"
																		} pb-2 w-100 rounded lightDown d-flex justify-content-center`}
																	>
																		{person_designation}
																	</div>
																	<div className="py-1 fw-bold text-white text-uppercase greenUpp">
																		{person_name}
																	</div>
																</div>
															</Zoom>
														</div>
													);
												}
											)}
										</div>
									</div>
								</div>
							)}

							{change === 4 && (
								<div className="row mt-5">
									<div className="col-12 col-md-10 col-lg-8 mx-auto">
										<div className="row gx-5 gy-5">
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Chairman and Non-Executive&nbsp;
															<span className="d-none d-md-block">
																{" "}
																Director
															</span>
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mr. Kaushikbhai Patel
														</div>
													</div>
												</Zoom>
											</div>
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Independent Director
															{/* <span className="d-none d-md-block"> Director</span> */}
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mrs. Bhavna Doshi{" "}
														</div>
													</div>
												</Zoom>
											</div>
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="jaya pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Managing Director
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mr. Jayakumar Krishnaswamy
														</div>
													</div>
												</Zoom>
											</div>
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Chief Financial Officer
															{/* <span className="d-none d-md-block"> Director</span> */}
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mr. Maneesh Agrawal
														</div>
													</div>
												</Zoom>
											</div>
										</div>
									</div>
								</div>
							)}

							{change === 5 && (
								<div className="row mt-5">
									<div className="col-12 col-md-10 col-lg-8 mx-auto">
										<div className="row gx-5 gy-5">
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Chairperson
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mr. Vivek Chawla
														</div>
													</div>
												</Zoom>
											</div>
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="jaya pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Member
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mr. Jayakumar Krishnaswamy
														</div>
													</div>
												</Zoom>
											</div>
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Member
															{/* <span className="d-none d-md-block"> Director</span> */}
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mr. Manan Nutanbhai Shah
														</div>
													</div>
												</Zoom>
											</div>
											<div className="col-7 col-md-6 firstCommitte mx-auto text-center">
												<Zoom left>
													<div className="commiteeCard text-uppercase d-flex justify-content-center align-items-center position-relative">
														<div className="pb-2 w-100 rounded lightDown d-flex justify-content-center">
															Member
															{/* <span className="d-none d-md-block"> Director</span> */}
														</div>
														<div className="py-1 fw-bold text-white text-uppercase greenUpp">
															Mrs. Shruta Sanghavi
														</div>
													</div>
												</Zoom>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<Footer />
				</div>
			)) ||
				""}
			{/* BODY END */}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		boardCommittee: state.boardCommitteeRed.boardCommittee,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		boardCommitteeApi: function () {
			dispatch(boardCommitteeApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BoardComitee);
