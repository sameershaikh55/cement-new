import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CDIC from "../components/CDIC";
import Infrastructure from "../components/Infrastructure";
import InnovationCenterC from "../components/InnovationCenter";
import InnovationGallery from "../components/InnovationGallery";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { innovationCentreApi } from "../redux";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const InnovationCenter = ({ innovationCentre, innovationCentreApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		innovationCentreApi();
	}, []);

	return (
		<>
			{(Object.keys(innovationCentre).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={innovationCentre.innovation_center.meta_title}
						description={innovationCentre.innovation_center.meta_description}
						canonical={innovationCentre.innovation_center.canonical_rel}
					/>
					<Hero
						heading={innovationCentre.innovation_center.banner_img_title}
						img1={imgUrl + innovationCentre.innovation_center.banner_img}
						img2={imgUrl + innovationCentre.innovation_center.banner_img_mob}
						alt1={innovationCentre.innovation_center.banner_img_alt}
						alt2={innovationCentre.innovation_center.banner_img_alt}
					/>{" "}
					<CDIC data={innovationCentre.innovation_center} />
					<InnovationCenterC data={innovationCentre.innovation_center} />
					<Infrastructure data={innovationCentre.innovation_center} />
					<InnovationGallery data={innovationCentre.innovation_center} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		innovationCentre: state.innovationCentreRed.innovationCentre,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		innovationCentreApi: function () {
			dispatch(innovationCentreApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(InnovationCenter);
