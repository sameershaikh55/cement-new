import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import EmployeTestimonials from "../components/EmployeTestimonials";

// IMPORTING IMAGES
import banner from "../assets/lifeInNBanner.jpg";
import bannerM from "../assets/lifeInNBannerM.jpg";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import WhyNuvoco from "../components/WhyNuvoco";
// import SubmitResume from "../components/SubmitResume";
import SubmitResume from "../components/SubmitResume";

const NovocoLife = () => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
			<Hero heading="CAREERS" img1={banner} img2={bannerM} />

			{/* BODY START */}
			<div className="page_container mt-5">
				<div className="container-fluid">
					<div
						data-aos="zoom-in"
						data-aos-delay="900"
						data-aos-duration="600"
						data-aos-offset="600"
					>
						{/* DIRECTION SECTION START */}
						<div className="d-flex justify-content-center align-items-center">
							<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
								<span className={`h6 mt-direction2Env text-uppercase`}>
									overview
								</span>
							</div>
						</div>
						{/* DIRECTION SECTION END */}
					</div>
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<p
								data-aos="fade-right"
								data-aos-delay="1200"
								data-aos-duration="600"
								data-aos-offset="600"
								className="textJustify"
							>
								Nuvoco is the fifth-largest player in India and the largest
								cement company in East India, in terms of capacity, following
								the acquisition of NU Vista Limited (formerly Emami Cement
								Limited); with a consolidated capacity of 22.32 MMTPA. We have
								11 Cement Plants in the states of West Bengal, Bihar, Odisha,
								Chhattisgarh, Jharkhand, Rajasthan and Haryana and approximately
								50 Ready-Mix Concrete Plants across India.
							</p>
							<p
								data-aos="fade-left"
								data-aos-delay="1500"
								data-aos-duration="600"
								data-aos-offset="400"
								className="textJustify"
							>
								Being the performance driven and fast growing organisation,
								Nuvoco has highly motivated and dynamic team comprising of more
								than 3,500 employees. At Nuvoco, we offer ample career
								opportunities across functions and embraces cultural diversity
								to build strong teams working in highly conducive and
								sustainable environment.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* BODY END */}

			<WhyNuvoco />
			{/* <EmployeTestimonials /> */}
			<SubmitResume />
			<Footer />
		</div>
	);
};

export default NovocoLife;
