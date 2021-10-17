import React from "react";

// IMPORTING ARROW
import arrow from "../assets/downArrow.png";

// IMPORTING ANIMATIONS
import BounceR from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const Hero = ({ heading, img1, img2, home, alt1, alt2 }) => {
	return (
		<>
			{/* == BANNER START == */}
			<div className="underHeader">
				<div className="position-relative">
					<div className="d-none d-md-block dBannerCont">
						<img src={img1} alt={alt1} />
					</div>
					<div className="d-block d-md-none">
						<img width="100%" src={img2} alt={alt2} />
					</div>
					<div className="pageHeaderText">
						<BounceR right>
							<h1
								className={`${
									home && "w-100 homeBannerText"
								} text-white text-center text-uppercase fw-bold px-md-0`}
							>
								{heading}
							</h1>
						</BounceR>
					</div>
					<div className="downArrow">
						<Fade delay={800} bottom>
							<img src={arrow} alt="arrow" />
						</Fade>
					</div>
				</div>
			</div>
			{/* == BANNER END == */}
		</>
	);
};

export default Hero;
