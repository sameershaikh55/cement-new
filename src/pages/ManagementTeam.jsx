import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ManagementTeamBodyMobile from "../components/ManagementTeamBodyMobile";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { managementApi } from "../redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const ManagementTeam = ({ managementApi, managementTeam }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		managementApi();
	}, []);

	return (
		<>
			{Object.keys(managementTeam).length && (
				<div>
					<Seo
						title={managementTeam.management_team.page_title}
						description={managementTeam.management_team.meta_description}
						canonical={managementTeam.management_team.canonical_rel}
						robot={managementTeam.management_team.meta_robots}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={managementTeam.management_team.banner_title}
						img1={imgUrl + managementTeam.management_team.banner_img}
						img2={imgUrl + managementTeam.management_team.banner_img_mob}
						alt1={managementTeam.management_team.banner_img_alt}
						alt2={managementTeam.management_team.banner_img_alt}
					/>
					{/* FOR MOBILE START */}
					<ManagementTeamBodyMobile managementTeam={managementTeam} />
					{/* FOR MOBILE END */}
					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		managementTeam: state.managementRed.managementTeam,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		managementApi: function () {
			dispatch(managementApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ManagementTeam);
