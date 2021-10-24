import React, { useState, useEffect } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AwardsBody from "../components/AwardsBody";
import Seo from "../components/Seo";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { awardsApi } from "../redux";
import { imgUrl } from "../redux/config";

const Awards = ({ awards, awardsApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		awardsApi();
	}, []);

	return (
		<>
			<div>
				{(Object.keys(awards).length && (
					<>
						<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
						<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
						<Seo
							title={awards.award_detail.meta_title}
							description={awards.award_detail.meta_description}
							canonical={awards.award_detail.canonical_rel}
						/>
						<Hero
							heading={awards.award_detail.banner_img_title}
							img1={imgUrl + awards.award_detail.banner_img}
							img2={imgUrl + awards.award_detail.banner_img_mob}
							alt1={awards.award_detail.banner_img_alt}
							alt2={awards.award_detail.banner_img_alt}
						/>
					</>
				)) ||
					""}

				<AwardsBody data={awards} />
				<Footer />
			</div>
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		awards: state.awardsRed.awards,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		awardsApi: function () {
			dispatch(awardsApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Awards);
