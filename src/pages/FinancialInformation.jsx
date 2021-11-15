import React, { useEffect, useState } from "react";

// IMPORTING LOADER
import Loader from "../components/Loader.jsx";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import FinancialInfoBody from "../components/FinancialInfoBody";

// IMPORTING API'S
import { connect } from "react-redux";

import {
	financialInformationApi,
	financialInformationSearchApi,
} from "../redux/index";
import Seo from "../components/Seo.jsx";
import { imgUrl } from "../redux/config.jsx";

const FinancialInformation = ({
	financialInformationApi,
	financialInformationSearchApi,
	financialInformation,
	financialInformationSearch,
}) => {
	// CHANGE STATE
	const [selectedYear, setSelectedYear] = useState();
	const [selectedCategory, setSelectedCategory] = useState();

	useEffect(() => {
		financialInformationApi();
	}, []);

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	// ERROR HANDLING AND SORTING (PARSE) START
	if (Object.keys(financialInformation).length) {
		var temp_data = { ...financialInformation.data };
		temp_data.fin_cat = JSON.parse(temp_data.fin_cat);
		temp_data.fin_docs = JSON.parse(temp_data.fin_docs);
		temp_data.fin_month = JSON.parse(temp_data.fin_month);
		temp_data.fin_year = JSON.parse(temp_data.fin_year);
		temp_data.page = JSON.parse(temp_data.page);
		temp_data.page.credit_rating_order_by = JSON.parse(
			temp_data.page.credit_rating_order_by
		);
		temp_data.page.instruments = JSON.parse(temp_data.page.instruments);
		temp_data.page.rating = JSON.parse(temp_data.page.rating);
		temp_data.page.rating_agency = JSON.parse(temp_data.page.rating_agency);

		if (Object.keys(financialInformationSearch).length) {
			// SEARCH DATA
			var search_data = { ...financialInformationSearch.data };
			search_data.fin_docs = JSON.parse(search_data.fin_docs);
			search_data.fin_docs.map((item, index) => {
				item.pdfs = JSON.parse(item.pdfs);
				search_data.fin_docs[index].pdfs_title = search_data.fin_docs[index]
					.pdfs_title
					? JSON.parse(search_data.fin_docs[index].pdfs_title)
					: [];
			});
		}
		// ERROR HANDLING AND SORTING (PARSE) END
		var uppSec = (
			<>
				<Seo
					title={temp_data.page.page_title}
					description={temp_data.page.meta_description}
					canonical={temp_data.page.canonical_rel}
					robot={temp_data.page.meta_robots}
				/>
				<Hero
					heading={temp_data.page.banner_img_title}
					img1={imgUrl + temp_data.page.banner_img}
					img2={imgUrl + temp_data.page.banner_img_mob}
					alt1={temp_data.page.banner_img_alt}
					alt2={temp_data.page.banner_img_alt}
				/>
			</>
		);

		// COMPONENTS
		var FinancialInfoBodyV = (
			<FinancialInfoBody
				temp_data={temp_data}
				financialInformationSearchApi={financialInformationSearchApi}
				selectedYear={selectedYear}
				setSelectedYear={setSelectedYear}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				search_data={search_data}
				financialInformation={financialInformation}
			/>
		);
	} else {
	}

	return (
		<>
			{(!FinancialInfoBodyV && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					{uppSec}
					{FinancialInfoBodyV}
					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		financialInformation: state.financialInformationRed.financialInformation,
		financialInformationSearch:
			state.financialInformationRed.financialInformationSearch,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		financialInformationApi: function () {
			dispatch(financialInformationApi());
		},
		financialInformationSearchApi: function (category_id, year_id) {
			dispatch(financialInformationSearchApi(category_id, year_id));
		},
	};
};

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(FinancialInformation);
