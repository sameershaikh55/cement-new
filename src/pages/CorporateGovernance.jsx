import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import banner from "../assets/governanceBanner.png";
import bannerM from "../assets/governanceBannerM.png";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { corporateGovernanceApi, corporateGovernanceSearchApi } from "../redux";
import { connect } from "react-redux";
import CorporateBody from "../components/CorporateBody";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const CorporateGovernance = ({
	corporateGovernance,
	corporateGovernanceSearch,
	corporateGovernanceApi,
	corporateGovernanceSearchApi,
}) => {
	useEffect(() => {
		corporateGovernanceApi();
	}, []);

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState(1);
	const [selectedYear, setSelectedYear] = useState(1);
	const [selectedMeeting, setSelectedMeeting] = useState(1);
	const [selectedPolicie, setSelectedPolicie] = useState(1);

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(corporateGovernance).length) {
		var temp_data = { ...corporateGovernance.data };
		temp_data.corp_cat = JSON.parse(temp_data.corp_cat);
		temp_data.corp_doc = JSON.parse(temp_data.corp_doc);
		temp_data.corp_meet = JSON.parse(temp_data.corp_meet);
		temp_data.corp_month = JSON.parse(temp_data.corp_month);
		temp_data.corp_policy = JSON.parse(temp_data.corp_policy);
		temp_data.corp_year = JSON.parse(temp_data.corp_year);
		temp_data.page = JSON.parse(temp_data.page);
		// SEARCH DATA
		var search_data = [];
		if (Object.keys(corporateGovernanceSearch).length) {
			search_data = { ...corporateGovernanceSearch.data };
			search_data = JSON.parse(search_data.corp_doc);
			search_data.map((item, index) => {
				item.pdfs = JSON.parse(item.pdfs);
				item.pdfs_title = JSON.parse(item.pdfs_title);
			});
		}

		// COMPONENTS
		var CorporateBodyV = (
			<CorporateBody
				temp_data={temp_data}
				corporateGovernanceApi={corporateGovernanceApi}
				corporateGovernanceSearchApi={corporateGovernanceSearchApi}
				selectedYear={selectedYear}
				setSelectedYear={setSelectedYear}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				selectedMeeting={selectedMeeting}
				setSelectedMeeting={setSelectedMeeting}
				selectedPolicie={selectedPolicie}
				setSelectedPolicie={setSelectedPolicie}
				search_data={search_data}
			/>
		);
	} else {
	}
	// ERROR HANDLING AND SORTING (PARSE) END

	return (
		<>
			{(!CorporateBodyV && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={temp_data.page.page_title}
						description={temp_data.page.meta_description}
						canonical={temp_data.page.canonical_rel}
					/>
					<Hero
						heading={temp_data.page.banner_img_title}
						img1={imgUrl + temp_data.page.banner_img}
						img2={imgUrl + temp_data.page.banner_img_mob}
						alt1={temp_data.page.banner_img_alt}
						alt2={temp_data.page.banner_img_alt}
					/>{" "}
					{CorporateBodyV}
					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		corporateGovernance: state.corporateGovernanceRed.corporateGovernance,
		corporateGovernanceSearch:
			state.corporateGovernanceRed.corporateGovernanceSearch,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		corporateGovernanceApi: function () {
			dispatch(corporateGovernanceApi());
		},
		corporateGovernanceSearchApi: function (
			category_id,
			year_id,
			meeting_id,
			policies_id
		) {
			dispatch(
				corporateGovernanceSearchApi(
					category_id,
					year_id,
					meeting_id,
					policies_id
				)
			);
		},
	};
};

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(CorporateGovernance);
