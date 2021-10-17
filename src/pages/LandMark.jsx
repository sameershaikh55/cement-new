import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import LandMarkBody from "../components/LandMarkBody";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { landmarkApi } from "../redux";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const LandMark = ({ landmark, landmarkApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		landmarkApi();
	}, []);

	return (
		<>
			{(Object.keys(landmark).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={landmark.landmark_page_list.page_title}
						description={landmark.landmark_page_list.meta_description}
						canonical={landmark.landmark_page_list.canonical_rel}
					/>
					<Hero
						heading={landmark.landmark_page_list.landmark_title}
						img1={imgUrl + landmark.landmark_page_list.landmark_proj_banner}
						img2={imgUrl + landmark.landmark_page_list.banner_img_mob}
						alt1={landmark.landmark_page_list.landmark_proj_banner_alt}
						alt2={landmark.landmark_page_list.landmark_proj_banner_alt}
					/>
					<LandMarkBody data={landmark} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		landmark: state.landmarkRed.landmark,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		landmarkApi: function () {
			dispatch(landmarkApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(LandMark);
