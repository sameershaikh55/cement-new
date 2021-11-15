import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import MissionVissionBody from "../components/MissionVissionBody";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import banner from "../assets/missionBanner.png";
import bannerM from "../assets/missionBannerM.png";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { mvApi } from "../redux/missionVission/action";
import { imgUrl } from "../redux/config";
import Seo from "../components/Seo";

const MissionVission = ({ mv, mvApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		mvApi();
	}, []);

	return (
		<>
			{(Object.keys(mv).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={mv.vision_mission_values.meta_title}
						description={mv.vision_mission_values.meta_description}
						canonical={mv.vision_mission_values.canonical_rel}
						robot={mv.vision_mission_values.meta_robots}
					/>
					<Hero
						heading={mv.vision_mission_values.banner_img_title}
						img1={imgUrl + mv.vision_mission_values.banner_img}
						img2={imgUrl + mv.vision_mission_values.banner_img_mob}
						alt1={mv.vision_mission_values.banner_img_alt}
						alt2={mv.vision_mission_values.banner_img_alt}
					/>
					<MissionVissionBody data={mv} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		mv: state.mvRed.mv,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		mvApi: function () {
			dispatch(mvApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(MissionVission);
