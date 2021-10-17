import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CoorporateBody from "../components/CoorporateBody";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { corporateOfficeApi } from "../redux";
import { connect } from "react-redux";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const CoorporateOffice = ({ corporateOffice, corporateOfficeApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		corporateOfficeApi();
	}, []);

	return (
		<>
			{(Object.keys(corporateOffice).length && (
				<div>
					<Seo
						title={corporateOffice.corporate_offices.page_title}
						description={corporateOffice.corporate_offices.meta_description}
						canonical={corporateOffice.corporate_offices.canonical_rel}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={corporateOffice.corporate_offices.banner_img_title}
						img1={imgUrl + corporateOffice.corporate_offices.banner_img}
						img2={imgUrl + corporateOffice.corporate_offices.banner_img_mob}
						alt1={corporateOffice.corporate_offices.banner_img_alt}
						alt2={corporateOffice.corporate_offices.banner_img_alt}
					/>
					<CoorporateBody corporateOffice={corporateOffice} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		corporateOffice: state.corporateOfficeRed.corporateOffice,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		corporateOfficeApi: function () {
			dispatch(corporateOfficeApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(CoorporateOffice);
