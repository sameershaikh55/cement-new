import React, { useState } from "react";

// IMPORTING IMAGES
import CovidCards from "./CovidCards";

const CovidBody = ({
	data: {
		covid_initiative_for_employees,
		covid_initiative_for_external_stakeholders,
	},
}) => {
	return (
		<div className="page_container my-5">
			<div className="container-fluid">
				<h5
					data-aos="zoom-in"
					data-aos-delay="1200"
					data-aos-duration="400"
					className="text-center themeColor mb-5"
				>
					F<span className="borderBottom pb-2">OR EMPLOYE</span>
					ES
				</h5>

				<div className="page_container my-5">
					<div className="container-fluid">
						<div className="row">
							{covid_initiative_for_employees.map((prev, i) => {
								const {
									banner_img,
									banner_img_alt,
									banner_img_title,
									description,
									short_desc,
									title,
								} = prev;
								return (
									<CovidCards
										banner_img={banner_img}
										banner_img_alt={banner_img_alt}
										banner_img_title={banner_img_title}
										description={description}
										short_desc={short_desc}
										title={title}
										temp_data={covid_initiative_for_employees}
										ind={i}
									/>
								);
							})}
						</div>
					</div>
				</div>

				<div className="page_container my-5">
					<h5
						data-aos="zoom-in"
						data-aos-delay="1200"
						data-aos-duration="400"
						className="text-center themeColor mb-5"
					>
						FOR E<span className="borderBottom pb-2">XTERNAL STAKEHOL</span>
						DERS
					</h5>
					<div className="container-fluid">
						<div className="row">
							{covid_initiative_for_external_stakeholders.map((prev, i) => {
								const {
									banner_img,
									banner_img_alt,
									banner_img_title,
									description,
									short_desc,
									title,
								} = prev;
								return (
									<CovidCards
										banner_img={banner_img}
										banner_img_alt={banner_img_alt}
										banner_img_title={banner_img_title}
										description={description}
										short_desc={short_desc}
										title={title}
										temp_data={covid_initiative_for_employees}
										ind={i}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CovidBody;

// <div className="row">

// {/* FIRST START */}
// <div id="closeOne" className="col-12">
// 	<div className="row">
// 		<div
// 			data-aos="fade-right"
// 			data-aos-delay="200"
// 			data-aos-duration="500"
// 			data-aos-offset="500"
// 			className="col-12 col-sm-10 col-md-8 col-lg-6"
// 		>
// 			<div className="cementCard">
// 				<img src={cementCard1} alt="cardImage" />
// 				<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
// 					<div>
// 						<h4 className="themeColorG">
// 							Emergency Response{" "}
// 							<span className="borderBottomG pb-0 pb-sm-1">
// 								Proce
// 							</span>
// 							dure
// 						</h4>
// 						<p className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 							Implemented a process at the beginning of first lockdown
// 							where we daily tracked the wellbeing of the employees
// 							and their family members across locations offering a
// 							sense of comfort
// 						</p>
// 					</div>
// 					<div>
// 						{(one && (
// 							<Link
// 								onClick={() => setOne(false)}
// 								to="closeOne"
// 								smooth={true}
// 								duration={600}
// 								spy={true}
// 								offset={-80}
// 							>
// 								<button className="redBtn px-3 py-1 text-uppercase text-white">
// 									Close
// 								</button>
// 							</Link>
// 						)) || (
// 							<Link
// 								onClick={() => setOne(true)}
// 								to="openOne"
// 								smooth={true}
// 								duration={600}
// 								spy={true}
// 								offset={-400}
// 							>
// 								<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 									view more
// 								</button>
// 							</Link>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// {/* FIRST START */}
// <div id="openOne"></div>
// {one && (
// 	<CovidDetails
// 		t="Emergency Response Procedure"
// 		d="Implemented a process at the beginning of first lockdown where we daily tracked the wellbeing of the employees and their family members across locations offering a sense of comfort, required knowledge and assistance to our people."
// 	/>
// )}
// {/* SECOND START */}
// <div id="closeTwo" className="col-12 mt-5 mt-md-0">
// 	<div className="row">
// 		<div
// 			data-aos="fade-left"
// 			data-aos-delay="200"
// 			data-aos-duration="500"
// 			data-aos-offset="500"
// 			className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
// 		>
// 			<div className="cementCard">
// 				<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
// 					<div>
// 						<h4 className="rtlDirection themeColorG">
// 							Mediclaim P
// 							<span className="borderBottomG pb-0 pb-sm-2">
// 								olicy{" "}
// 							</span>
// 						</h4>
// 						<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 							Provided top-up equivalent to individual base sums of
// 							the Mediclaim policy, including expenses for the
// 							treatment of COVID-19. Additionally, online sessions
// 							were conducted to educate employees on the infection
// 							related risks and the insurance process in cases
// 						</p>
// 					</div>
// 					<div className="text-end">
// 						{(two && (
// 							<Link
// 								onClick={() => setTwo(false)}
// 								to="closeTwo"
// 								smooth={true}
// 								duration={600}
// 								spy={true}
// 								offset={-80}
// 							>
// 								<button className="redBtn px-3 py-1 text-uppercase text-white">
// 									Close
// 								</button>
// 							</Link>
// 						)) || (
// 							<Link
// 								onClick={() => setTwo(true)}
// 								to="openTwo"
// 								smooth={true}
// 								duration={600}
// 								spy={true}
// 								offset={-400}
// 							>
// 								<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 									view more
// 								</button>
// 							</Link>
// 						)}
// 					</div>
// 				</div>
// 				<img src={cementCard2} alt="cardImage" />
// 			</div>
// 		</div>
// 	</div>
// </div>
// {/* SECOND END */}
// <div id="openTwo"></div>
// {two && (
// 	<CovidDetails
// 		t="Surakshit Bharat (Safety)"
// 		d="Keeping safety at the heart of all that we do, through this initiative, we are able to build awareness on safety (on the road and at home) and endeavours to stimulate behavioural change in the communities living in the close proximity of our operating units. We also extend support towards building a safer world while addressing issues like waste management in the villages and promoting the ban of single-use plastic while showcasing its harmful effects on the environment."
// 	/>
// )}
// </div>

// 	{/* THIRD START */}
// 	<div id="closeThree" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-right"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6"
// 			>
// 				<div className="cementCard">
// 					<img src={cementCard3} alt="cardImage" />
// 					<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
// 						<div>
// 							<h4 className="themeColorG">
// 								Maintain Mental and{" "}
// 								<span className="borderBottomG pb-0 pb-sm-1">Phys</span>
// 								ical Health
// 							</h4>
// 							<p className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Several programmes were organized to address employee’s
// 								physical and mental health like Daily fitness regime,
// 								Online healing course, etc
// 							</p>
// 						</div>
// 						<div>
// 							{(three && (
// 								<Link
// 									onClick={() => setThree(false)}
// 									to="closeThree"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setThree(true)}
// 									to="openThree"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* THIRD END */}
// 	<div id="openThree"></div>
// 	{three && (
// 		<CovidDetails
// 			t="Maintain Mental and Physical Health"
// 			d="Several programmes were organized to address employee’s physical and mental health like Daily fitness regime, Online healing course, etc."
// 		/>
// 	)}
// 	{/* FOURTH START */}
// 	<div id="closeFour" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-left"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
// 			>
// 				<div className="cementCard">
// 					<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
// 						<div>
// 							<h4 className="rtlDirection themeColorG">
// 								Measures to prevent the spread of COV
// 								<span className="borderBottomG pb-0 pb-sm-2">
// 									ID-19
// 								</span>
// 							</h4>
// 							<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Posters and signage were placed across locations
// 								providing guidelines on preventive measures,
// 								precautionary measures, and basic hygiene, restarting
// 								operations at plants, sales offices, warehouses, and
// 								offices. To further reiterate the message, timely audio
// 								announcements were made.
// 							</p>
// 						</div>
// 						<div className="text-end">
// 							{(four && (
// 								<Link
// 									onClick={() => setFour(false)}
// 									to="closeFour"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setFour(true)}
// 									to="openFour"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 					<img src={cementCard4} alt="cardImage" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* FOURTH END */}
// 	<div id="openFour"></div>
// 	{four && (
// 		<CovidDetails
// 			four
// 			t="Measures to prevent the spread of COVID-19"
// 			e={
// 				<ol className="text-left">
// 					<li>
// 						Posters and signage were placed across locations providing
// 						guidelines on preventive measures, precautionary measures,
// 						and basic hygiene, restarting operations at plants, sales
// 						offices, warehouses, and offices. To further reiterate the
// 						message, timely audio announcements were made.
// 					</li>
// 					<li>
// 						Regular Sanitization of Cement trucks, Wagons and Mobile
// 						equipment in every shift.
// 					</li>
// 					<li>
// 						Dedicated Isolation rooms maintained for those diagnosed
// 						with COVID19 symptoms.
// 					</li>
// 					<li>
// 						24x7 Medical Service offered by the plant-based Occupational
// 						Health Centres (OHC) providing various medical services and
// 						educating employees and their families about the Dos and
// 						Don’ts to mitigate risk.
// 					</li>
// 					<li>
// 						Fogging-cum-sanitization device developed in-house, helped
// 						in sanitization of staff colony, market area, post office,
// 						bank, etc.
// 					</li>
// 					<li>
// 						Foot-operated washbasin developed in-house, helped curb the
// 						spread of the virus by enabling people to avoid handling
// 						taps or soap dispensers.
// 					</li>
// 				</ol>
// 			}
// 		/>
// 	)}
// 	{/* FIFTH START */}
// 	<div id="closeFifth" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-right"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6"
// 			>
// 				<div className="cementCard">
// 					<img src={cementCard5} alt="cardImage" />
// 					<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
// 						<div>
// 							<h4 className="themeColorG">
// 								Reward and Recognition <br />
// 								<span className="borderBottomG pb-0 pb-sm-1">
// 									for C
// 								</span>
// 								ovid warriors
// 							</h4>
// 							<p className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								(Safety, Security and cleaning staff)
// 							</p>
// 						</div>
// 						<div>
// 							{(fifth && (
// 								<Link
// 									onClick={() => setFifth(false)}
// 									to="closeFifth"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setFifth(true)}
// 									to="openFifth"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* FIFTH END */}
// 	<div id="openFifth"></div>
// 	{fifth && (
// 		<CovidDetails
// 			t="Reward and Recognition for Covid warriors"
// 			d="(Safety, Security and cleaning staff)"
// 		/>
// 	)}
// 	{/* SIXTH START */}
// 	<div id="closeSixth" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-left"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
// 			>
// 				<div className="cementCard">
// 					<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
// 						<div>
// 							<h4 className="rtlDirection themeColorG">
// 								Serving food and emp
// 								<span className="borderBottomG pb-0 pb-sm-2">athy</span>
// 							</h4>
// 							<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Group of volunteers from the plants delivered essential
// 								and food items to the colony residents. Also, cleaned
// 								the surrounding areas and ensure they are safe to use.
// 							</p>
// 						</div>
// 						<div className="text-end">
// 							{(sixth && (
// 								<Link
// 									onClick={() => setSixth(false)}
// 									to="closeSixth"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setSixth(true)}
// 									to="openSixth"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 					<img src={cementCard6} alt="cardImage" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* SIXTH END */}
// 	<div id="openSixth"></div>
// 	{sixth && (
// 		<CovidDetails
// 			t="Serving food and empathy"
// 			d="Group of volunteers from the plants delivered essential and food items to the colony residents. Also, cleaned the surrounding areas and ensure they are safe to use."
// 		/>
// 	)}
// 	{/* SEVENTH START */}
// 	<div id="closeSeventh" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-right"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6"
// 			>
// 				<div className="cementCard">
// 					<img src={cementCard7} alt="cardImage" />
// 					<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
// 						<div>
// 							<h4 className="themeColorG">
// 								<span className="borderBottomG pb-0 pb-sm-1">Tech</span>
// 								nical Trainings
// 							</h4>
// 							<p className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								We organized Total Productive Maintenance (TPM) and
// 								technical training sessions through our in-house experts
// 								for the plant officers; Nuvoco’s vendors, too, shared
// 								their expertise through video conferences and helped
// 								impart skills training in the plants.
// 							</p>
// 						</div>
// 						<div>
// 							{(seventh && (
// 								<Link
// 									onClick={() => setSeventh(false)}
// 									to="closeSeventh"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setSeventh(true)}
// 									to="openSeventh"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* SEVENTH END */}
// 	<div id="openSeventh"></div>
// 	{seventh && (
// 		<CovidDetails
// 			t="Technical Trainings"
// 			d="We organized Total Productive Maintenance (TPM) and technical training sessions through our in-house experts for the plant officers; Nuvoco’s vendors, too, shared their expertise through video conferences and helped impart skills training in the plants."
// 		/>
// 	)}
// 	{/* SIXTH START */}
// 	<div id="closeEight" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-left"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
// 			>
// 				<div className="cementCard">
// 					<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
// 						<div>
// 							<h4 className="rtlDirection themeColorG">
// 								Employee Engage
// 								<span className="borderBottomG pb-0 pb-sm-2">ment</span>
// 							</h4>
// 							<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Hum Sath Sath Hain - drawing, singing and story writing
// 								competition for employees and family members
// 							</p>
// 						</div>
// 						<div className="text-end">
// 							{(eight && (
// 								<Link
// 									onClick={() => setEight(false)}
// 									to="closeEight"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setEight(true)}
// 									to="openEight"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 					<img src={cementCard8} alt="cardImage" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* SIXTH END */}
// 	<div id="openEight"></div>
// 	{eight && (
// 		<CovidDetails
// 			eight
// 			t="Employee Engagement"
// 			e={
// 				<ol className="text-left">
// 					<li>
// 						<span className="fw-bold">Hum Sath Sath Hain</span>-
// 						drawing, singing and story writing competition for employees
// 						and family members.
// 					</li>
// 					<li>
// 						<span className="fw-bold">Jab We Met</span>- a series of
// 						informal online sessions with office colleagues, providing
// 						an opportunity to interact and express support and empathy
// 						towards each other.
// 					</li>
// 					<li>
// 						<span className="fw-bold">Master Class Series –</span>
// 					</li>
// 					<li>
// 						<span className="fw-bold">One Hour Learning Platform </span>
// 						- E-Learning is something that we pursued in a big way. We
// 						offered employees One Hour Learning platform, which offered
// 						multitude of courses on Functional, Behavioural and
// 						Leadership skills and self-paced courses on edX that is
// 						founded by Harvard and MIT and regarded as the world’s
// 						leading e-learning platform.
// 					</li>
// 				</ol>
// 			}
// 		/>
// 	)}
// 	<h5 className="text-center d-flex flex-column my-5">
// 		<span className="themeColor mb-2 text-uppercase">
// 			For External stakeholders
// 		</span>
// 		<span className="heading_underline"></span>
// 	</h5>
// 	{/* FIFTH START */}
// 	<div id="closeNinth" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-right"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6"
// 			>
// 				<div className="cementCard">
// 					<img src={cementCard9} alt="cardImage" />
// 					<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
// 						<div>
// 							<h4 className="themeColorG">
// 								Support to Channel Partners{" "}
// 								<span className="borderBottomG pb-0 pb-sm-1">
// 									and L
// 								</span>
// 								ocal Communities
// 							</h4>
// 							<p className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Employees contributed a day’s salary to support the
// 								channel partners (dealers and sub-dealers) and the local
// 								communities by producing and distributing facemasks,
// 								food packets, and other essential services.
// 							</p>
// 						</div>
// 						<div>
// 							{(ninth && (
// 								<Link
// 									onClick={() => setNinth(false)}
// 									to="closeNinth"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setNinth(true)}
// 									to="openNinth"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* FIFTH END */}

// 	<div id="openNinth"></div>
// 	{ninth && (
// 		<CovidDetails
// 			ninth
// 			t="Support to Channel Partners and local communities"
// 			e={
// 				<ol className="text-left">
// 					<li>
// 						Employees contributed a day’s salary to support the channel
// 						partners (dealers and sub-dealers) and the local communities
// 						by producing and distributing facemasks, food packets, and
// 						other essential services.
// 					</li>
// 					<li>
// 						Worked with Local Self Help Groups to extend assistance for
// 						the needy.
// 					</li>
// 					<li>
// 						<span className="fw-bold">Distributed</span> approximately
// 						12,000 Safety Kits [N95 mask, cotton mask, face shield and
// 						temperature scanners] in the East and North markets and to
// 						the local district administration across locations.
// 					</li>
// 					<li>
// 						<span className="fw-bold">Installed 750+</span>
// 						foot-operated{" "}
// 						<span className="fw-bold"> Hand wash stations </span>{" "}
// 						[developed in-house] at public places in Jharkhand, Bengal
// 						and Chhattisgarh markets.
// 					</li>
// 				</ol>
// 			}
// 		/>
// 	)}

// 	{/* SIXTH START */}
// 	<div id="closeTen" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-left"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
// 			>
// 				<div className="cementCard">
// 					<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
// 						<div>
// 							<h4 className="rtlDirection themeColorG">
// 								Support to Government Hos
// 								<span className="borderBottomG pb-0 pb-sm-2">
// 									pital
// 								</span>
// 							</h4>
// 							<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Installed a ventilator machine at the government
// 								hospital in Janjgir Champa district of Chhattisgarh.
// 							</p>
// 						</div>
// 						<div className="text-end">
// 							{(ten && (
// 								<Link
// 									onClick={() => setTen(false)}
// 									to="closeTen"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setTen(true)}
// 									to="openTen"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 					<img src={cementCard10} alt="cardImage" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* SIXTH END */}

// 	<div id="openTen"></div>
// 	{ten && (
// 		<CovidDetails
// 			t="Support to Government Hospital"
// 			d="Installed a ventilator machine at the government hospital in Janjgir Champa district of Chhattisgarh."
// 		/>
// 	)}

// 	{/* SEVENTH START */}
// 	<div id="closeEleventh" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-right"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6"
// 			>
// 				<div className="cementCard">
// 					<img src={cementCard11} alt="cardImage" />
// 					<div className="d-flex flex-column justify-content-between ms-2 ms-sm-4">
// 						<div>
// 							<h4 className="themeColorG">
// 								Support to Local{" "}
// 								<span className="borderBottomG pb-0 pb-sm-1">
// 									Traff
// 								</span>
// 								ic Police
// 							</h4>
// 							<p className="mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								We organized Total Productive Maintenance (TPM) and
// 								technical training sessions through our in-house experts
// 								their expertise through video conferences and helped
// 							</p>
// 						</div>
// 						<div>
// 							{(eleventh && (
// 								<Link
// 									onClick={() => setEleventh(false)}
// 									to="closeEleventh"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setEleventh(true)}
// 									to="openEleventh"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* SEVENTH END */}

// 	<div id="openEleventh"></div>
// 	{eleventh && (
// 		<CovidDetails
// 			t="Support to Local Traffic Police"
// 			d="Distributed Masks, food packets, groceries, and stoppers to support local traffic police."
// 		/>
// 	)}

// 	{/* SIXTH START */}
// 	<div id="closeTwelve" className="col-12 mt-5 mt-md-0">
// 		<div className="row">
// 			<div
// 				data-aos="fade-left"
// 				data-aos-delay="200"
// 				data-aos-duration="500"
// 				data-aos-offset="500"
// 				className="col-12 col-sm-10 col-md-8 col-lg-6 ms-auto"
// 			>
// 				<div className="cementCard">
// 					<div className="d-flex flex-column justify-content-between me-2 me-sm-4">
// 						<div>
// 							<h4 className="rtlDirection themeColorG">
// 								Stakeholders Engage
// 								<span className="borderBottomG pb-0 pb-sm-2">ment</span>
// 							</h4>
// 							<p className="rtlDirection mb-0 mb-sm-2 mt-2 mt-sm-4 onlyTextJustify">
// 								Nuvoco Knowledge Series - sharing Best Construction
// 								Practices via Facebook Live [reached more than 6
// 								million, over 3 million views, and in excess of 16,000
// 								hours of watch time].
// 							</p>
// 						</div>
// 						<div className="text-end">
// 							{(twelve && (
// 								<Link
// 									onClick={() => setTwelve(false)}
// 									to="closeTwelve"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-80}
// 								>
// 									<button className="redBtn px-3 py-1 text-uppercase text-white">
// 										Close
// 									</button>
// 								</Link>
// 							)) || (
// 								<Link
// 									onClick={() => setTwelve(true)}
// 									to="openTwelve"
// 									smooth={true}
// 									duration={600}
// 									spy={true}
// 									offset={-400}
// 								>
// 									<button className="greenBtn px-3 py-1 text-uppercase text-white">
// 										view more
// 									</button>
// 								</Link>
// 							)}
// 						</div>
// 					</div>
// 					<img src={cementCard12} alt="cardImage" />
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	{/* SIXTH END */}

// 	<div id="openTwelve"></div>
// 	{twelve && (
// 		<CovidDetails
// 			t="Stakeholders Engagement"
// 			e={
// 				<ol className="text-left">
// 					<li>
// 						Nuvoco Knowledge Series - sharing Best Construction
// 						Practices via Facebook Live [reached more than 6 million,
// 						over 3 million views, and in excess of 16,000 hours of watch
// 						time].
// 					</li>
// 					<li>
// 						Video chats with customers - sharing emerging trends and how
// 						Nuvoco’s offering for local market requirements.
// 					</li>
// 					<li>
// 						Social Media Contests - #LearnWinLeadContest [engaged and
// 						educated stakeholders on Nuvoco’s product portfolio],
// 						favourite corner of the house, sharing best practices to
// 						avoid covid, etc
// 					</li>
// 				</ol>
// 			}
// 		/>
// 	)}
// </div>
