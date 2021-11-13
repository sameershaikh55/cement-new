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
	const [change, setChange] = useState("Audit");

	useEffect(() => {
		boardCommitteeApi();
	}, []);

	const tabs = [];

	if (Object.keys(boardCommittee).length) {
		boardCommittee.data.board_of_committe_detail.map((prev, i) => {
			tabs.push(Object.keys(prev));
		});
	}

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
												onClick={() => setChange(prev[0])}
												className={`${
													(change === prev[0] &&
														"themeGBG border-0 py-1 px-4 mt-2 text-white") ||
													"border-0 py-1 px-4 mt-2"
												} me-1`}
											>
												{prev[0].replaceAll("_", " ")}
											</button>
										</Fade>
									);
								})}
							</div>

							<div className="row mt-3">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row gx-5 gy-5">
										{boardCommittee.data.board_of_committe_detail.map(
											(prev, i) => {
												return (
													<>
														{prev[change] !== undefined &&
															prev[change].map((prev2, i) => {
																const { person_designation, person_name } =
																	prev2;
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
															})}
													</>
												);
											}
										)}
									</div>
								</div>
							</div>
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
