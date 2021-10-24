import React, { Component } from "react";
import { NuvocoLifeContext } from "../context/NuvocoLifeContext.jsx";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cross from "../assets/popUpCross.png";

class WhyNuvocoDetail extends Component {
	render() {
		return (
			<NuvocoLifeContext.Consumer>
				{(state) => {
					const nuvocoLife = state.nuvocoLife;
					let index = nuvocoLife.findIndex((el) => {
						let nuvocoLife = state.nameToUrl(el.name).toLowerCase();
						// document.body.classList.add("overflow-hidden");
						return this.props.match.params.nuvocoLife === nuvocoLife;
					});
					let prevNuvocoLife;
					if (index - 1 >= 0) {
						prevNuvocoLife = state.nameToUrl(nuvocoLife[index - 1].name);
					}
					let nextNuvocoLife;
					if (index + 1 < nuvocoLife.length) {
						nextNuvocoLife = state.nameToUrl(nuvocoLife[index + 1].name);
					}
					return (
						<div className="outer-div employeePop-up">
							<div className="inner-div position-relative">
								<div className="mx-auto text-center d-flex justify-content-center w-100 pt-2">
									<div className="d-flex align-items-center">
										<div className="leftArrow position-absolute">
											{prevNuvocoLife ? (
												<Link to={`/nuvoco_life2/${prevNuvocoLife}`}>
													<IoIosArrowBack
														className="arrows back-arrow black-text"
														fontSize="2.5rem"
														color="#42bb52"
													/>
												</Link>
											) : (
												``
											)}
										</div>
										<div className="text-center mt-1">
											<h5
												dangerouslySetInnerHTML={{
													__html: nuvocoLife[index].name,
												}}
												className="mb-0 text-uppercase"
											></h5>
											{/* <p className="mb-0 small">{employee[index].role}</p> */}
										</div>
										<div className="rightArrow position-absolute">
											{nextNuvocoLife ? (
												<Link to={`/nuvoco_life2/${nextNuvocoLife}`}>
													<IoIosArrowForward
														className="arrows next-arrow black-text"
														fontSize="2.5rem"
														color="#42bb52"
													/>
												</Link>
											) : (
												``
											)}
										</div>
									</div>
								</div>
								<div className="row mt-4">
									<p
										dangerouslySetInnerHTML={{ __html: nuvocoLife[index].desc }}
									></p>
								</div>

								<div className="crossIcon position-absolute">
									<Link to="/nuvoco_life2">
										<img src={cross} alt="cross" />
									</Link>
								</div>
							</div>
						</div>
					);
				}}
			</NuvocoLifeContext.Consumer>
		);
	}
}

export default WhyNuvocoDetail;
