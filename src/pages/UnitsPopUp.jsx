import React, { Component } from "react";
import { ManufacturingUnits } from "../context/ManufacturingUnitsContext";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cross from "../assets/popUpCross.png";

class UnitsPopUp extends Component {
	render() {
		return (
			<ManufacturingUnits.Consumer>
				{(state) => {
					const units = state.units;
					let index = units.findIndex((el) => {
						let units = state.nameToUrl(el.name).toLowerCase();
						// document.body.classList.add("overflow-hidden");
						return this.props.match.params.units === units;
					});
					let prevUnits;
					if (index - 1 >= 0) {
						prevUnits = state.nameToUrl(units[index - 1].name);
					}
					let nextUnits;
					if (index + 1 < units.length) {
						nextUnits = state.nameToUrl(units[index + 1].name);
					}
					return (
						<div className="outer-div units bd">
							<div className="inner-div position-relative">
								<div className="mx-auto text-center d-flex justify-content-center w-100">
									<div className="d-flex align-items-center">
										<div className="leftArrow position-absolute">
											{prevUnits ? (
												<Link to={`/manufacturingUnits/${prevUnits}`}>
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
										<div className="text-center">
											<h5 className="mb-0">{units[index].name}</h5>
										</div>
										<div className="rightArrow position-absolute">
											{nextUnits ? (
												<Link to={`/manufacturingUnits/${nextUnits}`}>
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

								<div className="container-fluid mt-4">
									<div className="row">
										<div className="col-12 col-md-8 mx-auto">
											<img
												className="w-100 product"
												src={units[index].img}
												alt={units[index].name}
											/>
										</div>
									</div>
								</div>

								<div className="text-center mt-4 small">
									{units[index].desc}
								</div>

								<div className="crossIcon position-absolute">
									<Link to="/manufacturingUnits">
										<img src={cross} alt="cross" />
									</Link>
								</div>
							</div>
						</div>
					);
				}}
			</ManufacturingUnits.Consumer>
		);
	}
}

export default UnitsPopUp;
