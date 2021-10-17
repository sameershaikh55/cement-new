// import React, { useState } from "react";

// // IMPORTING ANIMATIONS
// import Fade from "react-reveal/Fade";
// import { Link } from "react-router-dom";

// const ManufacturingUnitBody = () => {
// 	const [change, setChange] = useState(false);

// 	const data = [
// 		{
// 			city: "Haryana",
// 			name: "Bhiwani Cement Plant, Haryana",
// 			company: "Bhiwani Cement Plant",
// 			company2: "Nuvoco Vistas Corp. Ltd.",
// 			address1: "Village Chiriya, Tehsil: Charkhi Dadri,",
// 			address2: "Dist. Bhiwani Pincode: 127306, Haryana",
// 			phone: "01250 2819 02/03",
// 			link: "https://goo.gl/maps/QdKpDmS2vXCYWCcj8",
// 		},
// 		{
// 			city: "Jharkhand",
// 			name: "Jojobera Cement Plant, Jharkhand",
// 			company: "Jojobera Cement Plant",
// 			company2: "Nuvoco Vistas Corp. Ltd.",
// 			address1: " P.O: Rahargora, Jamshedpur - 831016",
// 			phone: "06572 2772 52/53",
// 			link: "https://goo.gl/maps/uSVdhmbMc6JZccNM6",
// 		},
// 		// {
// 		// 	city: "Karnataka",
// 		// 	company: "Gulbarga Plant",
// 		// 	company2: "Nuvoco Vistas Corp. Ltd.",
// 		// 	address1: "P.O: Raseda, Dist.: Balodabazar-Bhatapara",
// 		// 	address2: "Raipur-493332, Chhattisgarh",
// 		// 	phone: "09993 0119 92",
// 		// },
// 		{
// 			city: "Bihar",
// 			name: "Bhabua Cement Plant, Bihar",
// 			company: "Bhabua Cement Plant",
// 			company2: "NU Vista Limited",
// 			address1: "Bhabua Cement Works 1644, Mahmoodpur, Beriya Road, Karmansha,",
// 			address2: "Bhabua, Dist.: Kaimur, Bihar – 821105",
// 			link: "https://goo.gl/maps/FLDaqFYqZ4pFSndB8",
// 		},
// 		{
// 			city: "Odisha",
// 			name: "Jajpur Cement Plant, Odisha",
// 			company: "Jajpur Cement Plant",
// 			company2: "NU Vista Limited",
// 			address1: "Jajpur Cement Works",
// 			address2:
// 				"Kalinga Nagar Industrial Complex (KNIC), At/PO: Manitira, Tehsil - Danagadi,",
// 			address3: "Dist.: Jajpur, Odisha – 755026",
// 			link: "https://goo.gl/maps/nrPBdptdG2FHDifG9",
// 		},
// 	];

// 	const data2 = [
// 		{
// 			city: "Avichal",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"S No 286/3, Opp. Basil Infracon,",
// 				"Vaishnavdevi Circle to Tragad Undetrpass, SP Ringroad, Tragad,",
// 				"Ahmedabad - 382424",
// 			],
// 		},
// 		{
// 			city: "Baddi",
// 			state: "Himachal Pradesh",
// 			type: "Commercial",
// 			address: [
// 				"Khasra 459-462 , Opp.- Hotel Annapurna,",
// 				"Village- Malkumajra,, PO-Bhud ; Tahsil- Nalagarh Baddi,",
// 				"District: Solan-HP - 173205",
// 			],
// 			link: "https://maps.google.com/maps?cid=4635808007572265553",
// 		},
// 		{
// 			city: "Bahavnagar",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Survey No 312 Paiki 13 17,",
// 				"Plot No 14 to 21 And 3, Navagam, Bhavnagar,",
// 				"Gujarat - 364060",
// 			],
// 		},
// 		{
// 			city: "Bhubaneshwar",
// 			state: "Odisha",
// 			type: "Commercial",
// 			address: [
// 				"B.L. Auto Industries (P) Ltd.,",
// 				"Sector 2A, Zone- B, Mancheswar Industrial Estate.,",
// 				"Bhubaneswar – 751010",
// 			],
// 			link: "https://maps.google.com/maps?cid=2221014261834131364",
// 		},
// 		{
// 			city: "Dankuni",
// 			state: "West Bengal",
// 			type: "Commercial",
// 			address: [
// 				"NH 6 Kona More, P.O: Chamrail,",
// 				"P.S: Liluah, Mouza : Khalia, Howrah,",
// 				"West Bengal – 711114",
// 			],
// 			link: "https://maps.google.com/maps?cid=4346046883946019728",
// 		},
// 		{
// 			city: "Durgapur",
// 			state: "West Bengal",
// 			type: "Commercial",
// 			address: [
// 				"G/14, Mouza Baktarnagar,",
// 				"J.L Number 30.P.S – Raniganj. At Mangalpur Industrial Estate Raniganj",
// 				"West Bengal - 713321",
// 			],
// 			link: "https://maps.google.com/maps?cid=1304473766419156472",
// 		},
// 		{
// 			city: "Faridabad",
// 			state: "Haryana",
// 			type: "Commercial",
// 			address: [
// 				"14/4 Mile stone, Mathura Road, Faridabad,",
// 				"Haryana – 121003",
// 			],
// 			link: "https://maps.google.com/maps?cid=15098103804194661588",
// 		},
// 		{
// 			city: "Gurgaon",
// 			state: "Haryana",
// 			type: "Commercial",
// 			address: [
// 				"38 Milestone, Bherampur Road, Khandsa, Gurugram",
// 				"(Haryana) - 122004",
// 			],
// 			link: "https://goo.gl/maps/RFsoB5gQzucYnjmb7",
// 		},
// 		{
// 			city: "Harini",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Survey No.688/2, Opp.Darjipura,",
// 				"Airforce Gate, Near Kismat Kathyavadi, NH-8,",
// 				"Harni, Vadadara.",
// 			],
// 			link: "https://goo.gl/maps/3Q3x18c3nyrYcPxk9",
// 		},
// 		{
// 			city: "Haripar",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Survey No.42-1/2, Haripur Industrial Area,",
// 				"Opp.Motal the Village Resort,",
// 				"Kalawad Road, Rajkot",
// 			],
// 			link: "https://goo.gl/maps/7Agyit9udeAbgR23A",
// 		},
// 		{
// 			city: "Haripar",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Survey No : 55 / P 53, Thanisandra Main Road,",
// 				"Land Mark: Near Bellahalli",
// 				"Cross – 560064",
// 			],
// 			link: "https://maps.google.com/maps?cid=6648808131031256256",
// 		},
// 		{
// 			city: "Jeedimetla",
// 			state: "Telangana",
// 			type: "Commercial",
// 			address: [
// 				"Plot No. 8 & 9, Phase Iv, Ida Jeedimetla,",
// 				"Hyderabad – 500055",
// 			],
// 			link: "https://maps.google.com/maps?cid=16494037953585746825",
// 		},
// 		{
// 			city: "Jojobera",
// 			state: "Jharkhand",
// 			type: "Commercial",
// 			address: [
// 				"Jojobera Cement Plant PO - Rahargora ,",
// 				"Jamshedpure - East .Singhbhum,",
// 				"Jharkhand - 831016",
// 			],
// 		},
// 		{
// 			city: "Lucknow",
// 			state: "Uttar Pradesh",
// 			type: "Commercial",
// 			address: [
// 				"Mau,Khasra no 94,Old khasra no 1244/7,",
// 				"Tehsil-Mohanlalganj,",
// 				"Lucknow, 226301 (UP)",
// 			],
// 			link: "https://maps.google.com/maps?cid=13941264937154048735",
// 		},
// 		{
// 			city: "Ludhiana",
// 			state: "Punjab",
// 			type: "Commercial",
// 			address: ["Airport Road, Sahnewal,", "Ludhiana ( Punjab) – 141120"],
// 			link: "https://goo.gl/maps/SfKXsJE1D6Z17Hb19",
// 		},
// 		{
// 			city: "Mohali",
// 			state: "Punjab",
// 			type: "Commercial",
// 			address: ["Plot No B-34, industrial Area,", "Phase- 3 Mohali. - 160055"],
// 			link: "https://maps.google.com/maps?cid=8069574749506812431",
// 		},
// 		{
// 			city: "Mysore",
// 			state: "Karnataka",
// 			type: "Commercial",
// 			address: [
// 				"No. 43/5, Huyilalu Village,",
// 				"Yelavala Hobli, Hunsur Bypass Road,",
// 				"Mysore – 571130",
// 			],
// 			link: "https://goo.gl/maps/jjtTTnWyT2MyCYx26",
// 		},
// 		{
// 			city: "Nagpur",
// 			state: "Maharashtra",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Corp Ltd. Surve No. 78, Mihan,",
// 				"Mouza-Sondapar, Tah-Hingna,",
// 				"Nagpur - 441108",
// 			],
// 			link: "https://goo.gl/maps/5EXDnzZZ1nAnwpua6",
// 		},
// 		{
// 			city: "Naroda",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Plot No.41, Phase I, Naroda, G.I.D.C, Naroda,",
// 				"Opposite Mother Way Bridge Ahmedabad",
// 			],
// 			link: "https://goo.gl/maps/f5xWcqbQyHpigPys9",
// 		},
// 		{
// 			city: "Noida",
// 			state: "Uttar Pradesh",
// 			type: "Commercial",
// 			address: [
// 				"Plot no. 85-90, Industrial area,",
// 				"Toy city, Ecotech-III,",
// 				"Greater noida-201304 (UP)",
// 			],
// 			link: "https://maps.google.com/maps?cid=3622662561161030168",
// 		},
// 		{
// 			city: "Panchkula",
// 			state: "Haryana",
// 			type: "Commercial",
// 			address: ["plot no-101, Industrial Area Phase 1,", "Panchkula - 134113"],
// 			link: "https://maps.google.com/maps?cid=11931371956471744827",
// 		},
// 		{
// 			city: "Patencheru",
// 			state: "Telangana",
// 			type: "Commercial",
// 			address: [
// 				"SY.No.808,811,812, Plot No.10B,",
// 				"Phase-II, Ida Patancheru,",
// 				"Medak District. – 502319",
// 			],
// 			link: "https://maps.google.com/maps?cid=10882357346946821531",
// 		},
// 		{
// 			city: "Patna",
// 			state: "Bihar",
// 			type: "Commercial",
// 			address: [
// 				"Mustafapur, Tauzi No. 5276,Thana No. 36, Khata No. 188 and 180,",
// 				"Plot no. 769 and 770,PS: Shahpur,Danapur ,Khagul Road,",
// 				"Near St Karens School.Bihar PIN - 801503",
// 			],
// 			link: "https://maps.google.com/maps?cid=13516208059414185196",
// 		},
// 		{
// 			city: "Pune",
// 			state: "Maharashtra",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Corporation Ltd. Gate No. 23/1/6 Shivar wasti,",
// 				"Akemi business school roads,",
// 				"Near A B Brothers, Marunji, Pune (PIN- 411057)",
// 			],
// 			link: "https://goo.gl/maps/vjLCNA774PUqNdH5A",
// 		},
// 		{
// 			city: "Raipur",
// 			state: "Chattisgarh",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Corp. Ltd.C/O, Niraj Kemeliya Pvt Ltd,",
// 				"Khasra No - 467/1,3,4,5,6,7, Vill - Sherikhedi,",
// 				"Near Jindal Steel Plant Raipur, Chhattisgarh - 492101",
// 			],
// 			link: "https://maps.google.com/maps?cid=11987695409573043865",
// 		},
// 		{
// 			city: "Rajkot",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"C/o.Raghuvira Industries, Plot No. 3,",
// 				"Madhapar Ind.Area, Jamnagar Road,",
// 				"Distt. Rajkot",
// 			],
// 			link: "https://goo.gl/maps/zmHxDT7o4hCDGSUa6",
// 		},
// 		{
// 			city: "Ranchi",
// 			state: "Jharkhand",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Corp. Ltd., Vill.- Lal Khatanga,",
// 				"P.O.- Tipudana, P.S.- Hatia,",
// 				"Ranchi - 834003",
// 			],
// 			link: "https://maps.google.com/maps?cid=15773574969723205743",
// 		},
// 		{
// 			city: "Rudrapur",
// 			state: "Uttrakhand",
// 			type: "Commercial",
// 			address: [
// 				"Vill – Matkotla, Near Chhatarpur Behind – Ashok Leyland,",
// 				"P.O.- Tipudana, P.S.- Hatia,",
// 				"Ranchi - 834003",
// 			],
// 			link: "https://maps.google.com/maps?cid=15773574969723205743",
// 		},
// 		{
// 			city: "Runwal",
// 			state: "Maharashtra",
// 			type: "Commercial",
// 			address: [
// 				"Runwal Bliss Project, Crompton Greaves Compound,",
// 				"Station Road, Kanjurmarg (E),",
// 				"Mumbai – 400042",
// 			],
// 			link: "https://g.page/runwal-bliss---official-site?share",
// 		},
// 		{
// 			city: "Sanathal",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Plot No.C14, C15 & C16, Behind,Sanghi Cement Godown,",
// 				"Sarkhej-Sanand Rd, Vill.Ulariya,",
// 				"Tal.Sanand, Dist.Ahmedabad",
// 			],
// 			link: "https://maps.google.com/maps?cid=16563935997560771424",
// 		},
// 		{
// 			city: "Jaipur",
// 			state: "Rajasthan",
// 			type: "Commercial",
// 			address: [
// 				"PLOT NO. 782 & 783, VILLAGE RAMACHANDRAPURA, TALUK SANGANER,",
// 				"GONER ROAD, SITAPUR INDUSTRIAL ESTATE,",
// 				"JAIPUR- 302022",
// 			],
// 			link: "https://maps.google.com/maps?cid=8163612961709287578",
// 		},
// 		{
// 			city: "Sonepat",
// 			state: "Haryana",
// 			type: "Commercial",
// 			address: [
// 				"Gold Plus Road, Bahalgarh Chowk,",
// 				"Near Bharat Petrol Pump,",
// 				"Sonepat – Haryana – 131001",
// 			],
// 			link: "https://maps.google.com/maps?cid=6420217397206451636",
// 		},
// 		{
// 			city: "Surat",
// 			state: "Gujarat",
// 			type: "Commercial",
// 			address: [
// 				"Plot A-7/1, GIDC Ichhapore,",
// 				"BhatporeIndustrial Estate,",
// 				"Magadalla - Hajira Rd, Surat",
// 			],
// 			link: "https://maps.google.com/maps?cid=9473368759390748847",
// 		},
// 		{
// 			city: "Udaipur",
// 			state: "Rajasthan",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Corp Ltd.204 -A, Mewar industrial area,",
// 				"Road no. 11, near saloni weigh bridge, Madri,",
// 				"udaipur, rajasthan - 313003",
// 			],
// 			link: "https://maps.google.com/maps?cid=12810049017441093772",
// 		},
// 		{
// 			city: "Uppal",
// 			state: "Telangana",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Corp. Ltd.B-12/A, IDA Uppal,",
// 				"Hyderabad. – 500039",
// 			],
// 			link: "https://goo.gl/maps/NMdqkhdCgmGnVDeH8",
// 		},
// 		{
// 			city: "Vijayawada",
// 			state: "Andra Pradesh",
// 			type: "Commercial",
// 			address: [
// 				"Survey No. 1/1, Near Bus Stand, Mangalagiri,",
// 				"Dtdc Courier Vadesswaram Village,",
// 				"Guntur Dist.Vijayawada – 522502",
// 			],
// 			link: "https://maps.google.com/maps?cid=1557575919668682692",
// 		},
// 		{
// 			city: "Vizag",
// 			state: "Andra Pradesh",
// 			type: "Commercial",
// 			address: [
// 				"Plot No. 235, ‘D’ Block, Auto Nagar, Gajuwaka,",
// 				"Vizag – 530012",
// 			],
// 			link: "https://maps.google.com/maps?cid=17785357648315282200",
// 		},
// 		{
// 			city: "Whitefield",
// 			state: "Karnataka",
// 			type: "Commercial",
// 			address: [
// 				"NO.20A , VISVESHWARAIAH INDUSTRIAL AREA,",
// 				"MAHADEVAPURA , BANGALORE -560048",
// 			],
// 			link: "https://www.google.com/maps?cid=2554891309819291231",
// 		},
// 		{
// 			city: "Sarjapura",
// 			state: "Karnataka",
// 			type: "Commercial",
// 			address: [
// 				"SY. No .51/1,2 & 3, Sompura Gate, Sarjapura,",
// 				"Bangalore – 562125",
// 			],
// 			link: "https://goo.gl/maps/pZoFFgt3y1p61hkK7",
// 		},
// 		{
// 			city: "Hubli",
// 			state: "Karnataka",
// 			type: "Commercial",
// 			address: [
// 				"Plot No. 32, Kiadb Industrial Area, Rayapurahubli,",
// 				"Dist. Dharwad – 580009",
// 			],
// 			link: "https://maps.google.com/maps?cid=217634595485315748",
// 		},
// 		{
// 			city: "Jamshedpur",
// 			state: "Jharkhand",
// 			type: "Commercial",
// 			address: [
// 				"Tata Kandra Main Road, Vill-Pindrabera,",
// 				"Dist-Saraikeklaa, Kharswa,",
// 				"Jharkhand. – 832402",
// 			],
// 			link: "https://goo.gl/maps/Ym7JgCQBDYW1BGpHA",
// 		},
// 		{
// 			city: "Hatisala",
// 			state: "West Bengal",
// 			type: "Commercial",
// 			address: [
// 				"Nuvoco Vistas Crop. Ltd. C/O - ABKE Ready-Mix(P) LTD.",
// 				"AT/PO- Pithapukuria (Near Gabtala Bazaar)",
// 				"PS. Kashipur Dist - 24 Parganas South West Bengal - 700135",
// 				"Jharkhand. – 832402",
// 			],
// 			link: "https://goo.gl/maps/NYwhVheCcGDXVEbu8",
// 		},
// 		{
// 			city: "Pilerne",
// 			state: "Goa",
// 			type: "Commercial",
// 			address: [
// 				"No. 61A, Pilerne Industrial Estate,",
// 				"Pilerne, Bardez,",
// 				"North Goa – 403511",
// 			],
// 			link: "https://maps.google.com/maps?cid=15916130720858476861",
// 		},
// 		{
// 			city: "Vasco",
// 			state: "Goa",
// 			type: "Commercial",
// 			address: [
// 				"Plot No 23/26,Chowgule Industries Plots,",
// 				"Zurinagar Sancoale,",
// 				"South Goa – 403726",
// 			],
// 			link: "https://maps.google.com/maps?cid=6666609741862035420",
// 		},
// 		{
// 			city: "Project CIT JV-MM-I",
// 			state: "Maharashtra",
// 			type: "Project",
// 			address: [
// 				"CEC-Ltd-TPL Casting Yard, Anik Wadala Road,",
// 				"Near Mono Rail Depot,",
// 				"Wadala – (E) Mumbai – 400037",
// 			],
// 			link: "https://maps.google.com/maps?cid=6666609741862035420",
// 		},
// 		{
// 			city: "Oberoi Garden City",
// 			state: "Maharashtra",
// 			type: "Project",
// 			address: [
// 				"Oberoi Garden City goregaon,",
// 				"Mohan Gokhle Road, Goregaon (e),",
// 				"Mumbai- 400063",
// 			],
// 		},
// 		{
// 			city: "Oberoi Garden City",
// 			state: "Maharashtra",
// 			type: "Project",
// 			address: [
// 				"Oberoi Skycity Mall, Datta Pada Road,",
// 				"opp western express Highway, Boriwali East,",
// 				"Mumbai - 400066",
// 			],
// 		},
// 	];
// 	return (
// 		<div>
// 			<div className="page_container my-5">
// 				<div className="container-fluid">
// 					<div className="d-flex justify-content-center">
// 						<Fade delay={1000} right>
// 							<button
// 								onClick={() => setChange(false)}
// 								className={`${
// 									(!change && "greenBtn rounded-0 text-white px-3 py-1") ||
// 									"text-dark border-0 rounded-0 px-3 py-1"
// 								} me-3`}
// 							>
// 								Cement
// 							</button>
// 						</Fade>
// 						<Fade delay={1000} left>
// 							<button
// 								onClick={() => setChange(true)}
// 								className={`${
// 									(change && "greenBtn rounded-0 text-white px-3 py-1") ||
// 									"text-dark border-0 rounded-0 px-3 py-1"
// 								} me-3`}
// 							>
// 								Ready-Mix Concrete
// 							</button>
// 						</Fade>
// 					</div>

// 					{(change && (
// 						<div className="row">
// 							<div className="col-11 col-md-12 mx-auto">
// 								<div className="row">
// 									{data2.map((prev, i) => {
// 										const { city, state, type, address, link } = prev;
// 										return (
// 											<div
// 												key={i}
// 												data-aos="zoom-out"
// 												data-aos-duration="500"
// 												data-aos-offset="300"
// 												data-aos-delay="300"
// 												className="col-12 col-md-6 coorporateCard"
// 											>
// 												<div>
// 													<h5 className="fw-bold borderBottomG border-3 pb-2">
// 														{city}
// 													</h5>
// 													<div>
// 														<h6 className="fw-bold">{state}</h6>
// 														<h6 className="fw-bold">{type}</h6>
// 														<p className="mb-1">
// 															<strong>Address:</strong> {address[0]}
// 														</p>
// 														{address.map((prev, i) => {
// 															return (
// 																<p key={i} className="mb-2">
// 																	{i !== 0 && prev}
// 																</p>
// 															);
// 														})}
// 														<a target="blank" href={link}>
// 															<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 																Get Directions
// 															</button>
// 														</a>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															know more
// 														</button>
// 													</div>
// 												</div>
// 											</div>
// 										);
// 									})}
// 								</div>
// 							</div>
// 						</div>
// 					)) || (
// 						<div className="row">
// 							<div className="col-11 col-md-12 mx-auto">
// 								<div className="row">
// 									<div className="col-12 col-lg-6 mx-auto">
// 										<div
// 											data-aos="zoom-out"
// 											data-aos-duration="500"
// 											data-aos-offset="300"
// 											data-aos-delay="300"
// 											className="col-12 coorporateCard"
// 										>
// 											<div>
// 												<h5 className="fw-bold borderBottomG border-3 pb-2">
// 													Chhattisgarh
// 												</h5>
// 												<div>
// 													<h6 className="fw-bold">Arasmeta Cement Plant</h6>
// 													<h6 className="fw-bold">Nuvoco Vistas Corp. Ltd.</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> Gopalnagar, Dist.
// 														Janjgir-Champa
// 													</p>
// 													<p className="mb-1">Chattisgarh - 495 663</p>
// 													<p className="mb-2">
// 														<strong>Phone:</strong> 09893 4971 48/49
// 													</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/42XA29ve7rJPBuf9A"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Arasmeta Cement Plant, Chhattisgarh"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 												<br />
// 												<div>
// 													<h6 className="fw-bold">Sonadih Cement Plant</h6>
// 													<h6 className="fw-bold">Nuvoco Vistas Corp. Ltd.</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> P.O: Raseda, Dist.:
// 														Balodabazar-Bhatapara
// 													</p>
// 													<p className="mb-1">Raipur-493332, Chhattisgarh</p>
// 													<p className="mb-2">
// 														<strong>Phone:</strong> 09993 0119 92
// 													</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/nSVTm6XxPrDmFtVZ8"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Sonadih Cement Plant, Chhattisgarh"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 												<br />
// 												<div>
// 													<h6 className="fw-bold">Risda Cement Plant</h6>
// 													<h6 className="fw-bold">NU Vista Limited</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> Suhela Road, Risda, Dist.:
// 														Baloda Bazar,
// 													</p>
// 													<p className="mb-1">Chhattisgarh – 493332</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/gjQ91NWerkYzi3vj8"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Risda Cement Plant, Chhattisgarh"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>

// 										<div
// 											data-aos="zoom-out"
// 											data-aos-duration="500"
// 											data-aos-offset="300"
// 											data-aos-delay="300"
// 											className="col-12 coorporateCard"
// 										>
// 											<div>
// 												<h5 className="fw-bold borderBottomG border-3 pb-2">
// 													Rajasthan
// 												</h5>
// 												<div>
// 													<h6 className="fw-bold">Chittor Cement Plant</h6>
// 													<h6 className="fw-bold">Nuvoco Vistas Corp. Ltd.</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> Village: Bhawaliya, P. O:
// 														Arniya Joshi, Tehsil: Nimbahera, Dist. Chhittorgarh,
// 													</p>
// 													<p className="mb-1">Pincode: 312620, Rajasthan</p>
// 													<p className="mb-2">
// 														<strong>Phone:</strong> 01477 2251 21
// 													</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/rWQuuhFVz3kjGV5s7"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Chittorgarh Cement Plant, Rajasthan"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 												<br />
// 												<div>
// 													<h6 className="fw-bold">Nimbol Cement Plant</h6>
// 													<h6 className="fw-bold">Nuvoco Vistas Corp. Ltd.</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> Village & Post Nimbol,
// 													</p>
// 													<p className="mb-1">
// 														Tehsil – Jaitaran, Dist – Pali, Rajasthan – 306308
// 													</p>
// 													<p className="mb-2">
// 														<strong>Phone:</strong> 02939 2261 00
// 													</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/YP5ZzTx4F8Ak6swd6"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Nimbol Cement Plant, Rajasthan"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>

// 										<div
// 											data-aos="zoom-out"
// 											data-aos-duration="500"
// 											data-aos-offset="300"
// 											data-aos-delay="300"
// 											className="col-12 coorporateCard"
// 										>
// 											<div>
// 												<h5 className="fw-bold borderBottomG border-3 pb-2">
// 													West Bengal
// 												</h5>
// 												<div>
// 													<h6 className="fw-bold">Mejia Cement Plant</h6>
// 													<h6 className="fw-bold">Nuvoco Vistas Corp. Ltd.</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> Village Amdanga, P.O:Mtps
// 														(DVC)
// 													</p>
// 													<p className="mb-1">
// 														Dist. Bankura, Pincode - 722183, West Bengal
// 													</p>
// 													<p className="mb-2">
// 														<strong>Phone:</strong> 03214 2621 20
// 													</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/wpQsJMGv6NFD4KFp9"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Mejia Cement Plant, West Bengal"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 												<br />
// 												<div>
// 													<h6 className="fw-bold">Panagarh Cement Plant</h6>
// 													<h6 className="fw-bold">NU Vista Limited</h6>
// 													<p className="mb-1">
// 														<strong>Address:</strong> Panagarh Cement Works
// 													</p>
// 													<p className="mb-1">
// 														Plot No B5A, B6, B8 & B5B/A Panagarh Industrial Park
// 														of WBIDC
// 													</p>
// 													<p className="mb-1">
// 														Block: Aushgram II, Village: Kota
// 													</p>
// 													<p className="mb-1">
// 														Dist: Purba Bardhaman, West Bengal – 713148
// 													</p>
// 													<a
// 														target="blank"
// 														href="https://goo.gl/maps/UsQ4GqGTpc5xBNBk8"
// 													>
// 														<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Get Directions
// 														</button>
// 													</a>
// 													<Link
// 														to={`/manufacturingUnits/${"Panagarh Cement Plant, West Bengal"
// 															.split(" ")
// 															.join("_")
// 															.toLowerCase()}`}
// 													>
// 														<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 															Know more
// 														</button>
// 													</Link>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="col-12 col-lg-6 mx-auto">
// 										{data.map((prev, i) => {
// 											const {
// 												city,
// 												company,
// 												company2,
// 												address1,
// 												address2,
// 												phone,
// 												address3,
// 												name,
// 												link,
// 											} = prev;
// 											return (
// 												<div
// 													key={i}
// 													data-aos="zoom-out"
// 													data-aos-duration="500"
// 													data-aos-offset="300"
// 													data-aos-delay="300"
// 													className="col-12 coorporateCard"
// 												>
// 													<div>
// 														<h5 className="fw-bold borderBottomG border-3 pb-2">
// 															{city}
// 														</h5>
// 														<div>
// 															<h6 className="fw-bold">{company}</h6>
// 															<h6 className="fw-bold">{company2}</h6>
// 															<p className="mb-1">
// 																<strong>Address:</strong> {address1}
// 															</p>
// 															<p className="mb-1">{address2}</p>
// 															<p className="mb-1">{address3}</p>
// 															{(phone && (
// 																<p className="mb-2">
// 																	<strong>Phone:</strong> {phone}
// 																</p>
// 															)) ||
// 																""}
// 															<a target="blank" href={link}>
// 																<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 																	Get Directions
// 																</button>
// 															</a>
// 															{name && (
// 																<Link
// 																	to={`/manufacturingUnits/${name
// 																		.split(" ")
// 																		.join("_")
// 																		.toLowerCase()}`}
// 																>
// 																	<button className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
// 																		Know more
// 																	</button>
// 																</Link>
// 															)}
// 														</div>
// 													</div>
// 												</div>
// 											);
// 										})}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ManufacturingUnitBody;

import React, { useState } from "react";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";
import ManufacturingPopup from "./ManufacturingPopup";
import RmxPopup from "./RmxPopup";

const ManufacturingUnitBody = ({ manufacturing }) => {
	const [change, setChange] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [popUpData, setPopUpData] = useState({
		title: "",
		img: "",
		desc: "",
	});

	const handleClickOpen = (i, ind) => {
		setPopUpData({
			title:
				manufacturing.manufacturing_unit_cement[i].office_name !== null &&
				manufacturing.manufacturing_unit_cement[i].office_name[ind],
			img:
				manufacturing.manufacturing_unit_cement[i].know_more_image !== null &&
				manufacturing.manufacturing_unit_cement[i].know_more_image[ind],
			desc:
				manufacturing.manufacturing_unit_cement[i].know_more_description !==
					null &&
				manufacturing.manufacturing_unit_cement[i].know_more_description[ind],
		});

		if (
			manufacturing.manufacturing_unit_cement[i].office_name[0] !== null &&
			manufacturing.manufacturing_unit_cement[i].know_more_image[0] !== null &&
			manufacturing.manufacturing_unit_cement[i].know_more_description[0] !==
				null
		) {
			setOpen(true);
		}
	};

	return (
		<div>
			<ManufacturingPopup open={open} setOpen={setOpen} popUpData={popUpData} />

			<div className="page_container my-5">
				<div className="container-fluid">
					<div className="d-flex justify-content-center">
						<Fade delay={1000} right>
							<button
								onClick={() => setChange(false)}
								className={`${
									(!change && "greenBtn rounded-0 text-white px-3 py-1") ||
									"text-dark border-0 rounded-0 px-3 py-1"
								} me-3`}
							>
								Cement
							</button>
						</Fade>
						<Fade delay={1000} left>
							<button
								onClick={() => setChange(true)}
								className={`${
									(change && "greenBtn rounded-0 text-white px-3 py-1") ||
									"text-dark border-0 rounded-0 px-3 py-1"
								} me-3`}
							>
								Ready-Mix Concrete
							</button>
						</Fade>
					</div>

					{(change && (
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="row">
									{manufacturing.manufacturing_unit_ready_mix_concrete.map(
										(prev, i) => {
											return <RmxPopup prev={prev} />;
										}
									)}
								</div>
							</div>
						</div>
					)) || (
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<div className="row">
										{manufacturing.manufacturing_unit_cement.map((prev, i) => {
											const {
												state,
												office_name,
												company_name,
												office_address1,
												office_address2,
												office_address3,
												office_phone,
												office_direction,
											} = prev;

											return (
												<div
													key={i}
													data-aos="zoom-out"
													data-aos-duration="500"
													data-aos-offset="300"
													data-aos-delay="300"
													className="col-6 coorporateCard"
												>
													<div>
														<h5 className="fw-bold borderBottomG border-3 pb-2">
															{state}
														</h5>
														<div className="row gy-5">
															{office_name.map((prev, ind) => {
																return (
																	<div className="col-12" key={ind}>
																		<h6 className="fw-bold">{prev}</h6>
																		<h6 className="fw-bold">
																			{company_name[ind]}
																		</h6>
																		<p className="mb-1">
																			<strong>Address:</strong>{" "}
																			{office_address1[ind]}
																		</p>
																		<p className="mb-1">
																			{office_address2[ind]}
																		</p>
																		{office_address3[ind] !== null && (
																			<p className="mb-1">
																				{office_address3[ind]}
																			</p>
																		)}
																		{(office_phone[ind] !== null && (
																			<p className="mb-2">
																				<strong>Phone:</strong>{" "}
																				{office_phone[ind]}
																			</p>
																		)) ||
																			""}
																		<a
																			target="blank"
																			href={office_direction[ind]}
																		>
																			<button className="bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold">
																				Get Location
																			</button>
																		</a>
																		<button
																			onClick={() => handleClickOpen(i, ind)}
																			className="ms-3 bg-transparent border-top-0 border-start-0 border-end-0 border-2 border-black fw-bold"
																		>
																			Know more
																		</button>
																	</div>
																);
															})}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						) ||
						""}
				</div>
			</div>
		</div>
	);
};

export default ManufacturingUnitBody;
