import React, { useState } from "react";

// IMPORTING COMPONENTS
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../hooks/useHooks";

// IMPORTING IMAGES
import banner from "../assets/manufacturingUnitBanner.png";
import bannerM from "../assets/manufacturingUnitBannerM.png";

const Disclaimer = () => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
			<Hero heading="Disclaimer" img1={banner} img2={bannerM} />

			{/* DISCLAIMER BODY START */}
			<div className="page_container py-5 my-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-10 mx-auto">
							<p className="lh-lg">
								This website (hereafter this “Website”) is made available by
								Nuvoco Vistas Corp Ltd, a company incorporated in India under
								the laws of India (hereafter “NVCL”). While NVCL endeavors to
								ensure that the contents of the Website are accurate and
								reliable, NVCL makes no representations about the suitability of
								the information and services contained or obtained through this
								Website for any purpose, or the results that may be obtained
								from using this Website. All such information is provided “as
								is” without warranty of any kind. NVCL does not make any
								representation or warranty with respect to the veracity or the
								completeness of the information available on the Website and
								assumes no liability or responsibility for any omissions or
								errors in the information available on the Website.
							</p>
							<p className="lh-lg mt-5">
								In no event shall NVCL and/or its affiliates be liable for any
								direct, indirect, punitive, incidental, special or consequential
								damages arising out of or in any way connected with the use of
								this Website, or for any information or services obtained
								through this Website, or otherwise arising out of the use of
								this Website, whether based on contract, tort, strict liability
								or otherwise, even if NVCL or any of its affiliates has been
								advised of the possibility of damages.This Website may contain
								forward-looking statements about NVCL and/or NVCL’s financial
								and operating performance, business plans and prospects, in-line
								products and product development that involve substantial risks
								and uncertainties. Actual results could differ materially from
								the expectations and projections set forth in those statements.
								NVCL undertakes no obligation to publicly update or revise any
								forward-looking statements.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* DISCLAIMER BODY END */}

			<Footer />
		</div>
	);
};

export default Disclaimer;
