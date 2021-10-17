import React from "react";

// IMPORTING CONTEXT
import { Board } from "../context/BoardContext.jsx";

// IMPORTING LINK
import { Link } from "react-router-dom";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

const ManagementTeamBody = () => {
	return (
		<Board.Consumer>
			{(state) => {
				return (
					<div className="page_container my-5">
						<div className="container-fluid">
							<div className="d-flex justify-content-center">
								<Fade delay={1000} right>
									<button
										data-aos="fade-up"
										data-aos-offset="500"
										data-aos-delay="800"
										className="greenBtn rounded-0 text-white px-3 py-1"
									>
										Nuvoco Vistas Corp. Ltd.
									</button>
								</Fade>
								<Fade delay={1000} left>
									<button
										data-aos="fade-down"
										data-aos-offset="500"
										data-aos-delay="1200"
										className="text-dark border-0 rounded-0 px-3 py-1 ms-3"
									>
										NU Vista Limited
									</button>
								</Fade>
							</div>
							<div className="row">
								{state.boards.map((el, i) => {
									let title = state.nameToUrl(el.name);
									return (
										<div
											key={i}
											data-aos="flip-left"
											data-aos-offset="700"
											data-aos-delay={`${i * 200}`}
											className={`${
												(i === 0 && "col-8") || (i === 5 && "col-8") || "col-6"
											} col-md-4 text-center mt-5 mx-auto`}
										>
											<div className="w-75 mx-auto">
												<img className="w-100" src={el.img} alt={el.name} />
											</div>
											<h5 className="mb-0 themeColorG fw-bold">{el.name}</h5>
											<p className="small lh-sm">{el.role}</p>
											<Link
												to={`/managementTeam/${title}`}
												className="greenBtn px-4 text-white py-1 text-uppercase text-decoration-none"
											>
												view more
											</Link>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			}}
		</Board.Consumer>
	);
};

export default ManagementTeamBody;
