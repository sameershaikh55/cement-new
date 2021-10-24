import React from "react";

const CoorporateBody = ({ corporateOffice: { corporate_offices } }) => {
	const data = [
		{
			title: "CORPORATE & REGISTERED OFFICE",
			city: "Mumbai",
			company: "Nuvoco Vistas Corp. Ltd.",
			address1: "Equinox Business Park (Peninsula Techno Park),",
			address2:
				"Tower-3, East Wing, 4th floor, Off Bandra-Kurla Complex, LBS Marg, Kurla (West),",
			address3: "Mumbai 400 070",
			phone: "(022) 6769 2595",
			l: "https://www.google.com/maps/search/Equinox+Business+Park,+Ambedkar+Nagar,+Kurla+West,+Kurla,+Mumbai,+Maharashtra+400070/@19.0708782,72.8740444,17z/data=!3m1!4b1",
		},
		{
			title: "Corporate office",
			city: "Kolkata",
			company: "NU Vista Limited (formerly Emami Cement Limited).",
			address1:
				"DLF IT Park 1, Tower C, 10th Floor, 08 Major Arterial Road, NewTown (Rajarhat), Kolkata - 700156 , ",
			address2: "West Bengal , India.",
			phone: "(033) 4092 3100",
			l: "https://www.google.com/maps/place/NU+Vista+Limited+-+Double+Bull+Cement+(Formerly+Emami+Cement+Ltd)/@22.5813598,88.4594243,17z/data=!3m1!4b1!4m5!3m4!1s0x3a027152c39322d9:0x37b2682f07e1e2d2!8m2!3d22.5813598!4d88.461613",
		},
		{
			title: "Registered office",
			city: "Mumbai",
			company: "NU Vista Limited (formerly Emami Cement Limited).",
			address1: "Equinox Business Park (Peninsula Techno Park),",
			address2:
				"Tower-3, East Wing, 4th floor, Off Bandra-Kurla Complex, LBS Marg, Kurla (West),",
			address3: "Mumbai 400 070",
			phone: "(022) 6769 2595",
			l: "https://goo.gl/maps/AWDXgdqcL1JD1XFUA",
		},
		{
			title: "Construction Development &  Innovation Center",
			city: "Mumbai",
			// email: "admin.cdic@nuvoco.in",
			company: "Nuvoco Vistas Corp. Ltd.",
			address1:
				"Unit No. 13, Compartment No. 42, Marol Co-operative Industrial Estate,",
			address2: "Sakinaka, Andheri (East), Mumbai-400059.",
			phone: "(91-22) 6141 0114",
			l: "https://goo.gl/maps/K7uPFEe85XYv5zFz9",
		},
		{
			title: "East Operations Office",
			city: "Kolkata",
			address1:
				"DLF IT Park-I, Tower C, 11th Floor, New Town, Rajarhat, Kolkata -700156",
			company: "Nuvoco Vistas Corp. Ltd.",
			phone: "(033) 4410 2100",
			l: "https://goo.gl/maps/eQXFxrHKtRCEJBuC7",
		},
		{
			title: "Shared Services Centre",
			city: "Kolkata",
			company: "Nuvoco Vistas Corp. Ltd.",
			address1:
				"DLF IT Park-I, Tower C, 10th Floor, New Town, Rajarhat, Kolkata -700156",
			phone: "(033) 4027 1700",
			l: "https://goo.gl/maps/eQXFxrHKtRCEJBuC7",
		},
		{
			title: "Northern Operations Office",
			city: "Haryana",
			company: "Nuvoco Vistas Corp. Ltd.",
			address1:
				"1st floor Batra House, Plot No. 52, Sector 32,Gurugram (Haryana) - 122001",
			phone: "(033) 4027 1700",
			l: "https://goo.gl/maps/yU7kzs6Y2hqBC7s7A",
		},
		{
			title: "GULBARGA OFFICE",
			city: "Karnataka",
			company: "Nuvoco Vistas Corp. Ltd.",
			address1: "Laxmi Nilaya, C/0.P.S Patil Balabatti,",
			address2:
				"H.No.1-949/24/1/124/12, Ground Floor,Opp: Fresh Mart, Dist.: Kalaburgi (Gulbarga),",
			address3: "Karnataka – 585102",
			phone: "(033) 4027 1700",
			l: "https://www.google.com/maps/place/17%C2%B018'29.7%22N+76%C2%B049'21.6%22E/@17.3082547,76.8226688,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d17.3082547!4d76.8226688",
		},
	];
	return (
		<div>
			<div className="page_container mb-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{corporate_offices.corporate_office_type_name.map((prev, i) => {
									return (
										<div
											data-aos="zoom-out"
											data-aos-duration="500"
											data-aos-offset="300"
											data-aos-delay={`${
												(i === 0 && 900) ||
												(i === 1 && 1000) ||
												(i === 2 && 1100) ||
												(i === 3 && 1200)
											}`}
											key={i}
											className="col-12 col-lg-6 px-4 coorporateCard"
										>
											<div className="mb-4 pb-2">
												<h5
													dangerouslySetInnerHTML={{
														__html:
															corporate_offices.corporate_office_type_name[i],
													}}
													className="text-center text-uppercase themeColor fw-bold mb-2 mb-lg-3"
												></h5>
												<div className="heading_underline"></div>
											</div>
											<div>
												<h5
													dangerouslySetInnerHTML={{
														__html: corporate_offices.office_location[i],
													}}
													className="fw-bold borderBottomG border-3 pb-2"
												></h5>
												<div>
													<h6
														dangerouslySetInnerHTML={{
															__html: corporate_offices.office_name[i],
														}}
														className="fw-bold"
													></h6>
													{/* {email && (
														<p className="mb-0">
															<span className="fw-bold">Email: </span>
															{email}
														</p>
													)} */}
													<p className="mb-1">
														<strong>Address:</strong>{" "}
														<span
															dangerouslySetInnerHTML={{
																__html: corporate_offices.office_address[i],
															}}
														></span>
													</p>
													<p
														dangerouslySetInnerHTML={{
															__html: corporate_offices.office_address1[i],
														}}
														className="mb-1"
													></p>
													<p
														dangerouslySetInnerHTML={{
															__html: corporate_offices.office_address2[i],
														}}
														className="mb-1"
													></p>
													<p className="mb-2">
														<strong>Phone:</strong>{" "}
														<span
															dangerouslySetInnerHTML={{
																__html: corporate_offices.office_phone[i],
															}}
														></span>
													</p>
													<a
														target="blank"
														href={corporate_offices.office_direction[i]}
													>
														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
															Get Directions
														</button>
													</a>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoorporateBody;
