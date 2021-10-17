import React, { useState } from "react";
import selectIcon from "../assets/selectIcon.png";
import { useForm } from "react-hook-form";
import { API_URL } from "../redux/config";
import swal from "sweetalert";
import axios from "axios";

const SubmitResume = () => {
	const [formPart, setFormPart] = useState(1);
	const [formPartV1, setFormPartV1] = useState(false);
	const [formPartV1Set, setFormPartV1Set] = useState("No");
	const [formPartV2, setFormPartV2] = useState(false);
	const [formPartV2Set, setFormPartV2Set] = useState("Fresher");
	const [haveApplied, setHaveApplied] = useState("No");
	const [sufferState, setSufferState] = useState("No");
	const [uploadedCv, setUploadedCv] = useState();
	const [sendData, setSendData] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const contactData1 = [
		{ label: "Full Name*", name: "full_name" },
		{ label: "Mobile Number*", name: "mobile_number" },
		{ label: "Email Id*", name: "email" },
		{ label: "Present Address", name: "present_address" },
		{ label: "Permanent Address*", name: "permanent_address" },
		{ label: "Languages Known*", name: "languages_known" },
	];

	const contactData2 = [
		{ label: "Your Industry*", name: "your_industry" },
		{ label: "Profile Synopsis*", name: "profile_synopsis" },
		{
			label: "Have you applied to Nuvoco Vistas Corp Ltd.before (Yes/No)*",
			name: "have_you_applied_before",
		},
		{
			label:
				"Any relatives/friends currently employed in Nuvoco Vistas Corp Ltd?  (Yes/No)*",
			name: "currently_employed",
		},
	];

	const contactData3 = [
		{
			label: "Do you suffer from any health or physical ailment? (Yes/No)*",
			name: "suffer_from_any_health",
		},
		{
			label:
				"State any serious illness/hospitalization you have had during the last 3 years*",
			name: "any_serious_illness",
		},
		{
			label: "Do you use Spectacles? If so give details:*",
			name: "do_you_use_spectacles",
		},
	];

	const contactData4 = [
		{
			label: "Educational Qualifications (From 10th Standard to most recent)*",
			name: "education_last_educational_qualifiactions",
		},
		{
			label: "Technical courses details (if any)*",
			name: "education_technical_course",
		},
		{
			label: "Last Technical Qualification*",
			name: "education_technical_qualifications",
		},
	];

	const contactData5 = [
		{ label: "Area of Interest*", name: "area_of_interest" },
		{ label: "Type Fresher/Professional*", name: "type_fp" },
	];

	const contactData6 = [
		{ label: "Name*", name: "relative_name" },
		{ label: "Designation*", name: "relative_designation" },
		{ label: "location*", name: "relative_location" },
	];

	const contactData7 = [
		{
			label: "Educational Qualifications (From 10th Standard to most recent)*",
			name: "educational_qualification",
		},
		{ label: "Technical courses details (if any)*", name: "techincal_courses" },
	];

	const contactData8 = [
		{ label: "Current Employer*", name: "current_employer" },
		{ label: "Current Designation*", name: "current_designation" },
		{ label: "Duration in current job*", name: "duration_current_job" },
		{ label: "Gross Monthly Pay (in INR)", name: "gross_monthly_pay" },
		{ label: "Notice Period duration*", name: "notice_period_duration" },
		{
			label: "Last Educational Qualification*",
			name: "last_educational_qualification",
		},
		{
			label: "Last Technical Qualification*",
			name: "last_technical_qualification",
		},
		{ label: "Upload Current CV*", name: "upload_cv" },
	];

	const handleChange1 = (e, i) => {
		if (i === 3) {
			setFormPartV1Set(e.target.value);

			if (e.target.value === "Yes") {
				setFormPartV1(true);
			} else {
				setFormPartV1(false);
			}
		} else if (i === 2) {
			setHaveApplied(e.target.value);
		}
	};
	const handleChange2 = (e, i) => {
		setFormPartV2Set(e.target.value);

		if (e.target.value === "Fresher") {
			setFormPartV2(false);
		} else {
			setFormPartV2(true);
		}
	};

	const handleCV = (e) => {
		// console.log(e.target.files[0]);
		setUploadedCv(e.target.files[0]);
	};

	const onSubmit = (data) => {
		// console.log(data);
		setFormPart(formPart + 1);
		setSendData([...sendData, data]);

		if (formPart === 4) {
			setFormPart(1);
			let data1 = sendData[0];
			let data2 = sendData[1];
			let data3 = sendData[2];
			// console.log(data1, "data1");
			// console.log(data2, "data2");
			// console.log(data3, "data3");

			// console.log(uploadedCv, "uploadedCv");
			// console.log(sendData);

			var formData = new FormData();
			// formData.append("full_name", "data1.full_name");

			formData.append("full_name", data3.full_name);
			formData.append("mobile_number", data3.mobile_number);
			formData.append("email", data3.email);
			formData.append("present_address", data3.present_address);
			formData.append("permanent_address", data3.permanent_address);
			formData.append("languages_known", data3.languages_known);
			formData.append("your_industry", data3.your_industry);
			formData.append("profile_synopsis", data3.profile_synopsis);
			formData.append("have_you_applied_before", haveApplied);
			formData.append("any_relative", formPartV1Set);
			formData.append("relative_name", data3.relative_name || "");
			formData.append("relative_designation", data3.relative_designation || "");
			formData.append("relative_location", data3.relative_location || "");
			formData.append("area_of_interest", data3.area_of_interest);
			formData.append("type_fp", formPartV2Set);
			formData.append(
				"educational_qaulifications",
				data3.educational_qaulifications || ""
			);
			formData.append(
				"technical_courses_details",
				data3.technical_courses_details || ""
			);
			formData.append("current_employer", data3.current_employer || "");
			formData.append("current_designation", data3.current_designation || "");
			formData.append("duration_current_job", data3.duration_current_job || "");
			formData.append("gross_monthly_pay", data3.gross_monthly_pay || "");
			formData.append(
				"notice_period_duration",
				data3.notice_period_duration || ""
			);
			formData.append(
				"last_educational_qualification",
				data3.last_educational_qualification || ""
			);
			formData.append(
				"last_technical_qualification",
				data3.last_technical_qualification || ""
			);
			formData.append("upload_cv", uploadedCv || "");
			formData.append("suffer_from_any_health", sufferState || "");
			formData.append("any_serious_illness", data3.any_serious_illness || "");
			formData.append(
				"do_you_use_spectacles",
				data3.do_you_use_spectacles || ""
			);
			formData.append(
				"education_last_educational_qualifiactions",
				data.education_last_educational_qualifiactions || ""
			);
			formData.append(
				"education_technical_course",
				data.education_technical_course || ""
			);
			formData.append(
				"education_technical_qualifications",
				data.education_technical_qualifications || ""
			);

			// console.log(formData, "formData");

			// POST API FOR DATA SENDING
			// POST request using fetch with set headers
			axios({
				method: "POST",
				url: `${API_URL}/CareerFormSubmit`,
				data: formData,
			}).then((response) => {
				if (response.status === 200) {
					swal("", "Thank you. We have received your details", "success");
				} else {
					swal("Oops!", "Something went wrong!", "error");
				}
			});
		}

		if (formPart === 4) {
			reset();
		}
	};

	// const [file, setFile] = useState();

	// const handleChange = (e) => {
	// 	let reader = new FileReader();
	// 	reader.onloadend = () => {
	// 		setFile("file", reader.result);
	// 	};
	// 	reader.readAsDataURL(e.currentTarget.files[0]);

	// 	console.log(reader);
	// 	setFile(e.target.files[0]);
	// };

	// const submitForm = (e) => {
	// 	e.preventDefault();
	// 	console.log(file);
	// 	let formData = new FormData();
	// 	formData.append("files", formData);
	// 	console.log(formData);
	// };

	return (
		<div className="page_container my-5 pt-3">
			{/* <form onSubmit={submitForm} enctype="multipart/form-data">
				<input type="file" name="file" onChange={handleChange} />
				<button type="submit">submit</button>
			</form> */}

			<div className="container-fluid">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="row"
					enctype="multipart/form-data"
				>
					<div className="col-11 col-md-12 mx-auto">
						{/* DIRECTION SECTION START */}
						<div
							data-aos="zoom-in"
							data-aos-delay="1200"
							data-aos-duration="600"
							data-aos-offset="500"
							className="d-flex justify-content-center align-items-center"
						>
							<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
								<span className={`h6 mt-direction2Env text-uppercase`}>
									SUBMIT A RESUME
								</span>
							</div>
						</div>
						{/* DIRECTION SECTION END */}

						<div className="row">
							<div className="col-12 mb-3">
								<h6 className="text-center">
									Please fill up the form & we shall get back to you.
								</h6>
							</div>
							<div className="col-12 col-md-11 mx-auto">
								<h6 className="fw-bold">
									{(formPart === 1 && "Personal Information") ||
										(formPart === 2 && "Profile Synopsis") ||
										(formPart === 3 && "Medical History") ||
										(formPart === 4 && "Education")}
								</h6>
								<div className="row align-items-end">
									{formPart === 1 &&
										contactData1.map((prev, i) => {
											return (
												<div
													key={i}
													data-aos="fade-up"
													data-aos-duration="600"
													data-aos-delay={`${i * 300}`}
													className="col-md-6 mt-4 contactField withoutIcon"
												>
													<label className="fw-bold themeColorG" htmlFor="year">
														{prev.label}
													</label>
													<br />
													<div className="inp w-100 position-relative d-flex align-items-center rounded-2">
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
																(prev.name === "mobile_number" && "number") ||
																"text"
															}`}
															placeholder={`${prev.label.replace("*", "")}`}
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
											);
										})}
									{formPart === 2 && (
										<>
											{contactData2.map((prev, i) => {
												return (
													<>
														{(prev.label.indexOf("Yes/No") > 0 && (
															<div
																data-aos="fade-up"
																data-aos-duration="600"
																data-aos-delay={`${i * 300}`}
																className="col-md-6 mt-4 contactField withoutIcon"
															>
																<label
																	className="fw-bold themeColorG"
																	htmlFor="State"
																>
																	{prev.label}
																</label>
																<br />
																<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																	<select
																		onChange={(e) => handleChange1(e, i)}
																		value={
																			(i === 2 && haveApplied) ||
																			(i === 3 && formPartV1Set)
																		}
																		className="w-100 border-0 rounded-3"
																		name="state"
																		id="state"
																	>
																		<option value="No">No</option>
																		<option value="Yes">Yes</option>
																	</select>
																	<img
																		className="selectIcon"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
															</div>
														)) || (
															<div
																key={i}
																data-aos="fade-up"
																data-aos-duration="600"
																data-aos-delay={`${i * 300}`}
																className="col-md-6 mt-4 contactField withoutIcon"
															>
																<label
																	className="fw-bold themeColorG"
																	htmlFor="year"
																>
																	{prev.label}
																</label>
																<br />
																<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																	<input
																		{...register(prev.name.replace("*", ""), {
																			required: true,
																		})}
																		className="w-100 border-0 rounded-3"
																		type="text"
																		placeholder={`${prev.label.replace(
																			"*",
																			""
																		)}`}
																	/>
																	<div
																		style={{ bottom: "-40%" }}
																		className="position-absolute end-0 text-danger small"
																	>
																		{errors[prev.name.replace("*", "")] &&
																			errors[prev.name.replace("*", "")]
																				.type === "required" &&
																			"Required*"}
																	</div>
																</div>
															</div>
														)}
													</>
												);
											})}

											{formPartV1 &&
												contactData6.map((prev, i) => {
													return (
														<div
															key={i}
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay={`${i * 300}`}
															className="col-md-6 mt-4 contactField withoutIcon"
														>
															<label
																className="fw-bold themeColorG"
																htmlFor="year"
															>
																{prev.label}
															</label>
															<br />
															<div className="inp w-100 d-flex align-items-center rounded-2">
																<input
																	{...register(prev.name.replace("*", ""), {
																		required: true,
																	})}
																	className="w-100 border-0 rounded-3"
																	type="text"
																	placeholder={`${prev.label.replace("*", "")}`}
																/>
																<div
																	style={{ bottom: "-30%", right: "2%" }}
																	className="position-absolute text-danger small"
																>
																	{errors[prev.name.replace("*", "")] &&
																		errors[prev.name.replace("*", "")].type ===
																			"required" &&
																		"Required*"}
																</div>
															</div>
														</div>
													);
												})}

											{contactData5.map((prev, i) => {
												return (
													<>
														{(prev.label === "Type Fresher/Professional*" && (
															<div
																data-aos="fade-up"
																data-aos-duration="600"
																data-aos-delay={`${i * 300}`}
																className="col-md-6 mt-4 contactField withoutIcon"
															>
																<label
																	className="fw-bold themeColorG"
																	htmlFor="State"
																>
																	{prev.label}
																</label>
																<br />
																<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																	<select
																		onChange={(e) => handleChange2(e, i)}
																		className="w-100 border-0 rounded-3"
																		value={formPartV2Set}
																		name="state"
																		id="state"
																	>
																		<option value="Fresher">Fresher</option>
																		<option value="Professional">
																			Professional
																		</option>
																	</select>
																	<img
																		className="selectIcon"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
															</div>
														)) || (
															<div
																key={i}
																data-aos="fade-up"
																data-aos-duration="600"
																data-aos-delay={`${i * 300}`}
																className="col-md-6 mt-4 contactField withoutIcon"
															>
																<label
																	className="fw-bold themeColorG"
																	htmlFor="year"
																>
																	{prev.label}
																</label>
																<br />
																<div className="inp w-100 d-flex align-items-center rounded-2">
																	<input
																		{...register(prev.name.replace("*", ""), {
																			required: true,
																		})}
																		className="w-100 border-0 rounded-3"
																		type="text"
																		placeholder={`${prev.label.replace(
																			"*",
																			""
																		)}`}
																	/>
																	<div
																		style={{ bottom: "-30%", right: "2%" }}
																		className="position-absolute text-danger small"
																	>
																		{errors[prev.name.replace("*", "")] &&
																			errors[prev.name.replace("*", "")]
																				.type === "required" &&
																			"Required*"}
																	</div>
																</div>
															</div>
														)}
													</>
												);
											})}

											{(!formPartV2 &&
												contactData7.map((prev, i) => {
													return (
														<div
															key={i}
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay={`${i * 300}`}
															className="col-md-6 mt-4 contactField withoutIcon"
														>
															<label
																className="fw-bold themeColorG"
																htmlFor="year"
															>
																{prev.label}
															</label>
															<br />
															<div className="inp w-100 d-flex align-items-center rounded-2">
																<input
																	{...register(prev.name.replace("*", ""), {
																		required: true,
																	})}
																	className="w-100 border-0 rounded-3"
																	type="text"
																	placeholder={`${prev.label.replace("*", "")}`}
																/>
																<div
																	style={{ bottom: "-30%", right: "2%" }}
																	className="position-absolute text-danger small"
																>
																	{errors[prev.name.replace("*", "")] &&
																		errors[prev.name.replace("*", "")].type ===
																			"required" &&
																		"Required*"}
																</div>
															</div>
														</div>
													);
												})) ||
												contactData8.map((prev, i) => {
													return (
														<>
															{(prev.name === "upload_cv" && (
																<div
																	key={i}
																	data-aos="fade-up"
																	data-aos-duration="600"
																	data-aos-delay={`${i * 300}`}
																	className="col-md-6 mt-4 contactField withoutIcon"
																>
																	<label
																		className="fw-bold themeColorG"
																		htmlFor="year"
																	>
																		{prev.label}
																	</label>
																	<br />
																	<div className="inp w-100 d-flex align-items-center rounded-2">
																		<input
																			onChange={handleCV}
																			// {...register(prev.name.replace("*", ""), {
																			// 	required: true,
																			// })}
																			style={{
																				padding:
																					prev.label === "Upload Current CV" &&
																					"0.55rem",
																			}}
																			className="w-100 border-0 rounded-3"
																			type="file"
																			name="file_upload"
																			placeholder={`${prev.label.replace(
																				"*",
																				""
																			)}`}
																		/>
																		<div
																			style={{ bottom: "-30%", right: "2%" }}
																			className="position-absolute text-danger small"
																		>
																			{errors[prev.name.replace("*", "")] &&
																				errors[prev.name.replace("*", "")]
																					.type === "required" &&
																				"Required*"}
																		</div>{" "}
																	</div>
																</div>
															)) || (
																<div
																	key={i}
																	data-aos="fade-up"
																	data-aos-duration="600"
																	data-aos-delay={`${i * 300}`}
																	className="col-md-6 mt-4 contactField withoutIcon"
																>
																	<label
																		className="fw-bold themeColorG"
																		htmlFor="year"
																	>
																		{prev.label}
																	</label>
																	<br />
																	<div className="inp w-100 d-flex align-items-center rounded-2">
																		<input
																			{...register(prev.name.replace("*", ""), {
																				required: true,
																			})}
																			style={{
																				padding:
																					prev.label === "Upload Current CV" &&
																					"0.55rem",
																			}}
																			className="w-100 border-0 rounded-3"
																			type="text"
																			placeholder={`${prev.label.replace(
																				"*",
																				""
																			)}`}
																		/>
																		<div
																			style={{ bottom: "-30%", right: "2%" }}
																			className="position-absolute text-danger small"
																		>
																			{errors[prev.name.replace("*", "")] &&
																				errors[prev.name.replace("*", "")]
																					.type === "required" &&
																				"Required*"}
																		</div>{" "}
																	</div>
																</div>
															)}
														</>
													);
												})}
										</>
									)}

									{formPart === 3 &&
										contactData3.map((prev, i) => {
											return (
												<>
													{(prev.label.indexOf("Yes/No") > 0 && (
														<div
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay={`${i * 300}`}
															className="col-md-6 mt-4 contactField withoutIcon"
														>
															<label
																className="fw-bold themeColorG"
																htmlFor="State"
															>
																{prev.label}
															</label>
															<br />
															<div className="inp position-relative w-100 d-flex align-items-center rounded-2">
																<select
																	onChange={(e) =>
																		setSufferState(e.target.value)
																	}
																	className="w-100 border-0 rounded-3"
																	value={sufferState}
																	name="state"
																	id="state"
																>
																	<option value="No">No</option>
																	<option value="Yes">Yes</option>
																</select>
																<img
																	className="selectIcon"
																	src={selectIcon}
																	alt="selectIcon"
																/>
															</div>
														</div>
													)) || (
														<div
															key={i}
															data-aos="fade-up"
															data-aos-duration="600"
															data-aos-delay={`${i * 300}`}
															className="col-md-6 mt-4 contactField withoutIcon"
														>
															<label
																className="fw-bold themeColorG"
																htmlFor="year"
															>
																{prev.label}
															</label>
															<br />
															<div className="inp w-100 position-relative d-flex align-items-center rounded-2">
																<input
																	{...register(prev.name.replace("*", ""), {
																		required: true,
																	})}
																	className="w-100 border-0 rounded-3 pe-3"
																	type="text"
																	placeholder={prev.label.replace("*", "")}
																/>
																<div
																	style={{ bottom: "-42%" }}
																	className="position-absolute end-0 text-danger small"
																>
																	{errors[prev.name.replace("*", "")] &&
																		errors[prev.name.replace("*", "")].type ===
																			"required" &&
																		"Required*"}
																</div>
															</div>
														</div>
													)}
												</>
											);
										})}

									{formPart === 4 &&
										contactData4.map((prev, i) => {
											return (
												<div
													key={i}
													data-aos="fade-up"
													data-aos-duration="600"
													data-aos-delay={`${i * 300}`}
													className="col-md-6 mt-4 contactField withoutIcon"
												>
													<label className="fw-bold themeColorG" htmlFor="year">
														{prev.label}
													</label>
													<br />
													<div className="inp w-100 position-relative d-flex align-items-center rounded-2">
														<input
															{...register(prev.name.replace("*", ""), {
																required: true,
															})}
															className="w-100 border-0 rounded-3"
															type="text"
															placeholder={prev.label.replace("*", "")}
														/>
														<div
															style={{ bottom: "-42%" }}
															className="position-absolute end-0 text-danger small"
														>
															{errors[prev.name.replace("*", "")] &&
																errors[prev.name.replace("*", "")].type ===
																	"required" &&
																"Required*"}
														</div>
													</div>
												</div>
											);
										})}
								</div>
							</div>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="1300"
							data-aos-duration="1000"
							data-aos-offset="200"
							className="mb-2 mt-5 text-center d-flex justify-content-center"
						>
							{formPart >= 2 && (
								<div
									onClick={() => setFormPart(formPart - 1)}
									className="w136 greenBtn text-white py-1 text-uppercase me-2 pointer"
								>
									Back
								</div>
							)}
							<button
								type="submit"
								className="w136 greenBtn text-white py-1 text-uppercase"
							>
								{(formPart === 4 && "Submit") || "Next"}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SubmitResume;

// full_name: data1.full_name,
// mobile_number: data1.mobile_number,
// email: data1.email,
// present_address: data1.present_address,
// permanent_address: data1.permanent_address,
// languages_known: data1.languages_known,
// your_industry: data2.your_industry,
// profile_synopsis: data2.profile_synopsis,
// have_you_applied_before: haveApplied,
// any_relative: formPartV1Set,
// relative_name: data2.relative_name || "",
// relative_designation: data2.relative_designation || "",
// relative_location: data2.relative_location || "",
// area_of_interest: data2.area_of_interest,
// type_fp: formPartV2Set,
// educational_qaulifications: data2.educational_qaulifications || "",
// technical_courses_details: data2.technical_courses_details || "",
// current_employer: data3.current_employer || "",
// current_designation: data3.current_designation || "",
// duration_current_job: data3.duration_current_job || "",
// gross_monthly_pay: data3.gross_monthly_pay || "",
// notice_period_duration: data3.notice_period_duration || "",
// last_educational_qualification:
// 	data3.last_educational_qualification || "",
// last_technical_qualification:
// 	data3.last_technical_qualification || "",
// upload_cv: uploadedCv || "",
// suffer_from_any_health: sufferState,
// any_serious_illness: data3.any_serious_illness,
// do_you_use_spectacles: data3.do_you_use_spectacles,
// education_last_educational_qualifiactions:
// 	data.education_last_educational_qualifiactions,
// education_technical_course: data.education_technical_course,
// education_technical_qualifications:
// 	data.education_technical_qualifications,
