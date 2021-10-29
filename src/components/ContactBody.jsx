import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../redux/config";
import swal from "sweetalert";
import axios from "axios";

// IMPORTING IMAGES
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import contact4 from "../assets/contact4.png";
import contact5 from "../assets/contact5.png";
import contact6 from "../assets/contact6.png";
import selectIcon from "../assets/selectIcon.png";
import instaIcon from "../assets/instaIcon.png";

// IMPORTING ICONS
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const ContactBody = ({ data }) => {
	const [nextTab, setNextTab] = useState(true);

	const contactData = [
		{ label: "Full Name*", img: contact1, name: "full_name" },
		{ label: "Email Id*", img: contact2, name: "email" },
		{ label: "Phone Number*", img: contact3, name: "phone_number" },
		{ label: "State*", img: contact4, name: "state" },
		{ label: "District*", img: contact5, name: "district" },
		{ label: "Pin Code*", img: contact6, name: "pin_code" },
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		setNextTab(false);

		if (nextTab === false) {
			const {
				district,
				email,
				full_name,
				message,
				phone_number,
				pin_code,
				product_details,
				products,
				state,
			} = data;

			setNextTab(true);

			// POST API FOR DATA SENDING
			// POST request using fetch with set headers
			axios
				.post(API_URL + "/ContactFormSubmit", {
					full_name: full_name,
					email: email,
					phone_number: phone_number,
					state: state,
					district: district,
					pin_code: pin_code,
					products: products,
					product_details: product_details,
					message: message,
				})
				.then((response) => {
					if (response.status === 200) {
						swal(
							"Good job!",
							"Thank you. We have received your details",
							"success"
						);
					} else {
						swal("Oops!", "Something went wrong!", "error");
					}
				});
		}

		if (!nextTab) {
			reset();
		}
	};
	console.log(data);
	return (
		<div className="page_container my-4 my-sm-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<div className="row">
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="col-11 col-md-12 mx-auto"
							>
								{(nextTab && (
									<div className="row">
										{contactData.map((prev, i) => {
											const { label, img } = prev;
											return (
												<div className="col-md-6 mt-4">
													{(label !== "State*" && (
														<div
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay="1000"
															className="w-100 contactField"
														>
															<label
																className="fw-bold themeColorG"
																htmlFor="year"
																dangerouslySetInnerHTML={{ __html: label }}
															></label>
															<br />
															<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																<input
																	{...register(prev.name.replace("*", ""), {
																		required: true,
																		pattern:
																			(prev.name === "email" &&
																				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ||
																			"",
																	})}
																	className="w-100 border-0 rounded-3"
																	type={`${
																		(prev.name === "phone_number" &&
																			"number") ||
																		(prev.name === "pin_code" && "number") ||
																		"text"
																	}`}
																	placeholder={`${prev.label.replace("*", "")}`}
																/>
																<img
																	className="contactIcon"
																	src={img}
																	alt={label}
																/>
																<div
																	style={{ bottom: "-40%" }}
																	className="position-absolute end-0 text-danger small"
																>
																	{errors[prev.name.replace("*", "")] &&
																		errors[prev.name.replace("*", "")].type ===
																			"required" &&
																		"Required*"}
																	{errors[prev.name.replace("*", "")] &&
																		errors[prev.name.replace("*", "")].type ===
																			"pattern" &&
																		"Invalid Email*"}
																</div>
															</div>
														</div>
													)) || (
														<div
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay="1000"
															className="contactField"
														>
															<label
																className="fw-bold themeColorG"
																htmlFor="State"
															>
																State*
															</label>
															<br />
															<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																<select
																	className="w-100 border-0 rounded-3"
																	{...register("state")}
																>
																	<option value="Andhra Pradesh">
																		Andhra Pradesh
																	</option>
																	<option value="Andaman and Nicobar Islands">
																		Andaman and Nicobar Islands
																	</option>
																	<option value="Arunachal Pradesh">
																		Arunachal Pradesh
																	</option>
																	<option value="Assam">Assam</option>
																	<option value="Bihar">Bihar</option>
																	<option value="Chandigarh">Chandigarh</option>
																	<option value="Chhattisgarh">
																		Chhattisgarh
																	</option>
																	<option value="Dadar and Nagar Haveli">
																		Dadar and Nagar Haveli
																	</option>
																	<option value="Daman and Diu">
																		Daman and Diu
																	</option>
																	<option value="Delhi">Delhi</option>
																	<option value="Lakshadweep">
																		Lakshadweep
																	</option>
																	<option value="Puducherry">Puducherry</option>
																	<option value="Goa">Goa</option>
																	<option value="Gujarat">Gujarat</option>
																	<option value="Haryana">Haryana</option>
																	<option value="Himachal Pradesh">
																		Himachal Pradesh
																	</option>
																	<option value="Jammu and Kashmir">
																		Jammu and Kashmir
																	</option>
																	<option value="Jharkhand">Jharkhand</option>
																	<option value="Karnataka">Karnataka</option>
																	<option value="Kerala">Kerala</option>
																	<option value="Madhya Pradesh">
																		Madhya Pradesh
																	</option>
																	<option value="Maharashtra">
																		Maharashtra
																	</option>
																	<option value="Manipur">Manipur</option>
																	<option value="Meghalaya">Meghalaya</option>
																	<option value="Mizoram">Mizoram</option>
																	<option value="Nagaland">Nagaland</option>
																	<option value="Odisha">Odisha</option>
																	<option value="Punjab">Punjab</option>
																	<option value="Rajasthan">Rajasthan</option>
																	<option value="Sikkim">Sikkim</option>
																	<option value="Tamil Nadu">Tamil Nadu</option>
																	<option value="Telangana">Telangana</option>
																	<option value="Tripura">Tripura</option>
																	<option value="Uttar Pradesh">
																		Uttar Pradesh
																	</option>
																	<option value="Uttarakhand">
																		Uttarakhand
																	</option>
																	<option value="West Bengal">
																		West Bengal
																	</option>
																</select>
																<img
																	className="selectIcon"
																	src={selectIcon}
																	alt="selectIcon"
																/>
																<img className="contactIcon" src={img} alt="contactIcon" />
															</div>
														</div>
													)}
												</div>
											);
										})}
										<div className="text-center mt-4">
											<button
												data-aos="zoom-in"
												data-aos-duration="600"
												data-aos-offset="400"
												data-aos-delay="1300"
												className="greenBtn px-5 py-1 text-uppercase text-white"
											>
												Next
											</button>
										</div>
									</div>
								)) || (
									<div className="row">
										<div className="col-md-6 mt-4">
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="100"
												className="contactField"
											>
												<label className="fw-bold themeColorG" htmlFor="State">
													Products*
												</label>
												<br />
												<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
													<select
														className="w-100 border-0 rounded-3"
														{...register("products")}
													>
														<option value="Cement">Cement</option>
														<option value="Concrete">Concrete</option>
														<option value="MBM">MBM</option>
														<option value="Corporate">Corporate</option>
													</select>
													<img
														className="selectIcon"
														src={selectIcon}
														alt="selectIcon"
													/>
													<img className="contactIcon" src={contact4} alt="contactIcon" />
												</div>
											</div>
										</div>
										<div className="col-md-6 mt-4">
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="100"
												className="contactField"
											>
												<label className="fw-bold themeColorG" htmlFor="State">
													Product Details*
												</label>
												<br />
												<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
													<select
														className="w-100 border-0 rounded-3"
														{...register("product_details")}
													>
														<option value="Purchase">Purchase</option>
														<option value="Dealership">Dealership</option>
														<option value="CFA">CFA</option>
														<option value="Non Trade">Non Trade</option>
														<option value="Business Proposal">
															Business Proposal
														</option>
														<option value="Others">Others</option>
													</select>
													<img
														className="selectIcon"
														src={selectIcon}
														alt="selectIcon"
													/>
													<img className="contactIcon" src={contact4} alt="contactIcon" />
												</div>
											</div>
										</div>
										<div className="col-md-12 mt-4">
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-delay="100"
												className="contactField"
											>
												<label className="fw-bold themeColorG" htmlFor="State">
													Message*
												</label>
												<br />
												<textarea
													{...register("message")}
													className="w-100 rounded-3 p-2 contactTextArea"
													cols="30"
													rows="6"
												></textarea>
											</div>
										</div>

										<div className="text-center mt-4 d-flex justify-content-center">
											<div
												onClick={() => setNextTab(true)}
												className="greenBtn px-5 py-1 text-uppercase text-white me-2"
											>
												Back
											</div>
											<button
												data-aos="zoom-in"
												data-aos-duration="600"
												data-aos-offset="50"
												data-aos-delay="100"
												type="submit"
												className="greenBtn px-5 py-1 text-uppercase text-white"
											>
												Submit
											</button>
										</div>
									</div>
								)}
							</form>
						</div>

						<div className="row mt-5">
							{data.map((prev, i) => {
								return (
									<div key={i} className="col-12 col-md-6">
										<h5
											data-aos="fade"
											data-aos-duration="600"
											data-aos-offset="400"
											className="w-100 borderBottomG border-4 pb-2"
											dangerouslySetInnerHTML={{ __html: prev.company }}
										></h5>
										<div
											data-aos="fade-right"
											data-aos-duration="600"
											data-aos-offset="400"
											data-aos-delay="600"
										>
											<h6
												dangerouslySetInnerHTML={{
													__html: prev.reg_offc_title[i],
												}}
											></h6>
											<div>
												<div>
													<strong>Address:</strong>{" "}
													<span
														dangerouslySetInnerHTML={{
															__html: prev.reg_offc_address[i],
														}}
													></span>
												</div>
												<span
													dangerouslySetInnerHTML={{
														__html: prev.reg_offc_address1[i],
													}}
												></span>
											</div>
											{prev.reg_offc_contact[i] && (
												<div className="d-flex">
													<strong>Contact:</strong>
													<p
														dangerouslySetInnerHTML={{
															__html: prev.reg_offc_contact[i],
														}}
														className="ms-2 mb-0"
													></p>
												</div>
											)}
											{prev.reg_offc_tollfree[i] && (
												<div className="d-flex">
													<strong>Toll-Free Number:</strong>
													<p
														dangerouslySetInnerHTML={{
															__html: prev.reg_offc_tollfree[i],
														}}
														className="ms-2 mb-0"
													></p>
												</div>
											)}
										</div>
										<h6
											data-aos="fade-left"
											data-aos-duration="600"
											data-aos-offset="400"
											data-aos-delay="600"
											className="fw-bold mt-3"
										>
											<a
												className="text-decoration-none text-dark"
												target="blank"
												href={prev.reg_offc_direction[i]}
											>
												<span className="border-bottom border-2 border-dark">
													Get Directions
												</span>
											</a>
										</h6>

										{prev.office_order_by.length > 1 && (
											<>
												<div
													data-aos="fade-left"
													data-aos-duration="600"
													data-aos-offset="400"
													data-aos-delay="600"
													className="mt-5"
												>
													<h6
														dangerouslySetInnerHTML={{
															__html: prev.reg_offc_title[i],
														}}
													></h6>
													<div>
														<div>
															<strong>Address:</strong>{" "}
															<span
																dangerouslySetInnerHTML={{
																	__html: prev.reg_offc_address[i],
																}}
															></span>
														</div>
													</div>
													<div className="d-flex">
														<strong>Contact:</strong>
														<p
															dangerouslySetInnerHTML={{
																__html: prev.reg_offc_contact[i],
															}}
															className="ms-2 mb-0"
														></p>
													</div>
													{prev.reg_offc_tollfree[i] && (
														<div className="d-flex">
															<strong>Toll-Free Number:</strong>
															<p
																dangerouslySetInnerHTML={{
																	__html: prev.reg_offc_tollfree[i],
																}}
																className="ms-2 mb-0"
															></p>
														</div>
													)}
													<div className="d-flex">
														<strong>E-mail:</strong>
														<p
															dangerouslySetInnerHTML={{
																__html: prev.email[i],
															}}
															className="ms-2 mb-0"
														></p>
													</div>
												</div>
												<h6 className="fw-bold mt-3">
													<a
														className="text-decoration-none text-dark"
														target="blank"
														href={prev.reg_offc_direction[i]}
													>
														<span className="border-bottom border-2 border-dark">
															Get Directions
														</span>
													</a>
												</h6>
											</>
										)}
										<div className="shareIconContainer d-flex mt-3">
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-offset="400"
												data-aos-delay="600"
											>
												<a target="blank" href={prev.company_fb}>
													<FaFacebookF className="icon" color="#3e5c9a" />
												</a>
											</div>
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-offset="400"
												data-aos-delay="800"
											>
												<a target="blank" href={prev.company_twitter}>
													<FaTwitter className="icon ms-3" color="#29a9e1" />
												</a>
											</div>
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-offset="400"
												data-aos-delay="1000"
											>
												<a target="blank" href={prev.company_linkdin}>
													<FaLinkedin className="icon ms-3" color="#117bb8" />
												</a>
											</div>
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-offset="400"
												data-aos-delay="1200"
											>
												<a target="blank" href={prev.company_insta}>
													<img
														src={instaIcon}
														alt="instaIcon"
														className="instaIcon ms-3"
													/>
												</a>
											</div>
											<div
												data-aos="fade-up"
												data-aos-duration="600"
												data-aos-offset="400"
												data-aos-delay="1400"
											>
												<a target="blank" href={prev.company_youtube}>
													<AiFillYoutube
														className="icon ms-3"
														color="#c3271a"
													/>
												</a>
											</div>
										</div>
									</div>
								);
							})}

							{/* <div className="col-12 col-md-6 mt-5 mt-md-0">
								<h5
									data-aos="fade"
									data-aos-duration="600"
									data-aos-offset="400"
									className="w-100 borderBottomG border-4 pb-2"
								>
									NU Vista Limited (formerly Emami Cement Limited)
								</h5>
								<div
									data-aos="fade-left"
									data-aos-duration="600"
									data-aos-offset="400"
									data-aos-delay="600"
								>
									<h6>Registered Office</h6>
									<div>
										<div>
											<strong>Address:</strong> Equinox Business Park, Tower-3,
											East Wing, 4th floor, Off Bandra-Kurla Complex, LBS Marg,
											Kurla (West), Mumbai 400070
										</div>
									</div>
									<a
										target="blank"
										href="https://www.google.com/maps/search/Equinox+Business+Park,+Ambedkar+Nagar,+Kurla+West,+Kurla,+Mumbai,+Maharashtra+400070/@19.0708782,72.8740444,17z/data=!3m1!4b1"
										className="text-decoration-none text-dark"
									>
										<h6
											data-aos="fade-right"
											data-aos-duration="600"
											data-aos-offset="400"
											data-aos-delay="600"
											className="fw-bold mt-2 mb-5"
										>
											<span className="border-bottom border-2 border-dark">
												Get Directions
											</span>
										</h6>
									</a>
								</div>

								<div
									data-aos="fade-left"
									data-aos-duration="600"
									data-aos-offset="400"
									data-aos-delay="600"
								>
									<h6>Corporate Office</h6>
									<div>
										<div>
											<strong>Address:</strong> DLF IT Park, Tower C, 10th
											Floor, Premise no. 08, Major Arterial Road, Block-AF, New
											Town, Kolkata – 700156
										</div>
									</div>
									<div className="d-flex">
										<strong>Contact:</strong>
										<p className="ms-2 mb-0">+91 (0) 33 4092 3100</p>
									</div>
									<div className="d-flex">
										<strong>Toll-Free Number:</strong>
										<p className="ms-2 mb-0">1800 1022 008</p>
									</div>
									<div className="d-flex">
										<strong>E-mail:</strong>
										<p className="ms-2 mb-0">
											customer.care@doublebullcement.com
										</p>
									</div>
								</div>
								<h6 className="fw-bold mt-3">
									<a
										className="text-decoration-none text-dark"
										target="blank"
										href="https://www.google.com/maps/place/NU+Vista+Limited+-+Double+Bull+Cement+(Formerly+Emami+Cement+Ltd)/@22.5813598,88.4594243,17z/data=!3m1!4b1!4m5!3m4!1s0x3a027152c39322d9:0x37b2682f07e1e2d2!8m2!3d22.5813598!4d88.461613"
									>
										<span className="border-bottom border-2 border-dark">
											Get Directions
										</span>
									</a>
								</h6>
								<div className="shareIconContainer d-flex mt-3">
									<div
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-offset="400"
										data-aos-delay="600"
									>
										<a
											target="blank"
											href="https://www.facebook.com/doublebullcement"
										>
											<FaFacebookF className="icon" color="#3e5c9a" />
										</a>
									</div>
									<div
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-offset="400"
										data-aos-delay="800"
									>
										<a target="blank" href="https://twitter.com/nuvocovistas">
											<FaTwitter className="icon ms-3" color="#29a9e1" />
										</a>
									</div>
									<div
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-offset="400"
										data-aos-delay="1000"
									>
										<a
											target="blank"
											href="https://in.linkedin.com/company/nuvocovistas"
										>
											<FaLinkedin className="icon ms-3" color="#117bb8" />
										</a>
									</div>
									<div
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-offset="400"
										data-aos-delay="1200"
									>
										<a
											target="blank"
											href="https://www.instagram.com/nuvocovistasofficial"
										>
											<img
												src={instaIcon}
												alt="instaIcon"
												className="instaIcon ms-3"
											/>
										</a>
									</div>
									<div
										data-aos="fade-up"
										data-aos-duration="600"
										data-aos-offset="400"
										data-aos-delay="1400"
									>
										<a
											target="blank"
											href="https://www.youtube.com/NuvocoVistasCorpLtd"
										>
											<AiFillYoutube className="icon ms-3" color="#c3271a" />
										</a>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBody;
