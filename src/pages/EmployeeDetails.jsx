import React, { Component } from "react";
import { EmployeeTestimonial } from "../context/NuvocoLifeTestimonials.jsx";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cross from "../assets/popUpCross.png";

class EmployeeDetails extends Component {
	render() {
		return (
			<EmployeeTestimonial.Consumer>
				{(state) => {
					const employee = state.EmployeeTestimonials;
					let index = employee.findIndex((el) => {
						let employee = state.nameToUrl(el.name).toLowerCase();
						// document.body.classList.add("overflow-hidden");
						return this.props.match.params.employee === employee;
					});
					let prevEmployee;
					if (index - 1 >= 0) {
						prevEmployee = state.nameToUrl(employee[index - 1].name);
					}
					let nextEmployee;
					if (index + 1 < employee.length) {
						nextEmployee = state.nameToUrl(employee[index + 1].name);
					}
					return (
						<div className="outer-div employeePop-up">
							<div className="inner-div position-relative">
								<div className="mx-auto text-center d-flex justify-content-center w-100 pt-2">
									<div className="d-flex align-items-center">
										<div className="leftArrow position-absolute">
											{prevEmployee ? (
												<Link to={`/nuvoco_life/${prevEmployee}`}>
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
											<h5 className="mb-0 text-uppercase">
												{employee[index].name}
											</h5>
											{/* <p className="mb-0 small">{employee[index].role}</p> */}
										</div>
										<div className="rightArrow position-absolute">
											{nextEmployee ? (
												<Link to={`/nuvoco_life/${nextEmployee}`}>
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
									<div className="mt-3 col-5 fw-bold">Business :</div>
									<div className="mt-3 col-7">RMX</div>
									<div className="mt-3 col-5 fw-bold">Job Description :</div>
									<div className="mt-3 col-7">
										Achieving Sales & Collection Target Generating solution
										based Sales for BVAP Driving SFE, & Policy effectively
										Increase market share, Achieving Revenue target for
										Profitably, Achieve IBP process accuracy
									</div>
									<div className="mt-3 col-5 fw-bold">Location :</div>
									<div className="mt-3 col-7">Chattisgarh, Jharkhand</div>
									<div className="mt-3 col-5 fw-bold">
										Experience required :
									</div>
									<div className="mt-3 col-7">5-10 Years</div>
									<div className="mt-3 col-5 fw-bold">Min. Educational :</div>
									<div className="mt-3 col-7"></div>
									<div className="mt-3 col-5 fw-bold">Qualification req :</div>
									<div className="mt-3 col-7">BE (Civil)</div>
									<div className="mt-3 col-12 text-center mt-4">
										<button className="text-uppercase px-5 py-2 greenBtn text-white">
											apply
										</button>
									</div>
								</div>

								<div className="crossIcon position-absolute">
									<Link to="/nuvoco_life">
										<img src={cross} alt="cross" />
									</Link>
								</div>
							</div>
						</div>
					);
				}}
			</EmployeeTestimonial.Consumer>
		);
	}
}

export default EmployeeDetails;
