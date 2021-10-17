import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Brouchers from "../components/Brouchers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Direction from "../components/Direction";
import BenefitsIstamax from "../components/BenefitsIstamax";
import Sidebar from "../components/Sidebar";
import ApplicationAreasIstamax from "../components/ApplicationAreasIstamax";

// IMPORTING IMAGES
import banner from "../assets/mbmBanner.jpg";
import bannerM from "../assets/mbmBannerM.jpg";
import mbmIstamaxProduct from "../assets/mbmIstamaxProduct.png";
import cementDVideoThumb from "../assets/cementDVideoThumb.png";

// IMPORTING ANIMATIONS
import { Fade } from "react-awesome-reveal";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const MbmIstamax = () => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".cementTagline");
			if (header !== null && window.scrollY > 400) {
				header.classList.add("downAnimation");
			}
		});
	}, []);

	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
			<Hero heading="Modern Building Materials" img1={banner} img2={bannerM} />
			{/* == PRODUCT START == */}
			<div className="page_container">
				<div className="container-fluid mt-5">
					{/* DIRECTION SECTION START */}
					<div data-aos="zoom-in" data-aos-offset="700" data-aos-delay="1200">
						<Direction title="instamix bondaid" />
					</div>
					{/* DIRECTION SECTION END */}
					<div className="row mt-3">
						<div className="col-md-10 col-lg-8 mx-auto text-center">
							<Fade triggerOnce delay={1500}>
								<img width="100%" src={mbmIstamaxProduct} alt="cement" />
							</Fade>
						</div>
					</div>
					<div>
						<div className="row mt-3">
							<p className="cementTagline col-md-10 col-lg-8 mx-auto text-center">
								InstaMix Bond-Aid is a premix high-quality mortar for joining
								and bonding of all types of substrate like AAC Blocks, Concrete
								Blocks, Hollow Blocks and Bricks. It requires addition of water
								before application to prepare the product for use.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* == PRODUCT END == */}
			<br />
			<br />
			<br />
			<ApplicationAreasIstamax />
			<br />
			<BenefitsIstamax />
			{/* VIDEO START */}
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<h5
							data-aos="flip-down"
							data-aos-duration="800"
							data-aos-offset="1000"
							data-aos-delay="400"
							className="text-center"
						>
							<span className="themeColor borderBottom pb-2 px-5 text-uppercase">
								Video
							</span>
						</h5>
						<div className="row gx-0">
							<div
								data-aos="flip-up"
								data-aos-duration="800"
								data-aos-offset="1000"
								data-aos-delay="400"
								className="col-11 col-sm-10 col-lg-8 mx-auto mx-auto px-3 px-sm-1 mt-4"
							>
								<img
									className="w-100"
									src={cementDVideoThumb}
									alt="cementDVideoThumb"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* VIDEO END */}
			<Brouchers />
			<Footer />
		</div>
	);
};

export default MbmIstamax;
