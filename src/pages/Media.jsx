import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import MediaSearch from "../components/MediaSearch";
import Footer from "../components/Footer";
import MediaSlider from "../components/MediaSlider";

// IMPORTING LOADER
import Loader from "../components/Loader";

// IMPORTING IMAGES
import banner from "../assets/mediaBanner.png";
import bannerM from "../assets/mediaBannerM.png";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

// IMPORTING REDUX
import {
	mediaRelationApi,
	mediaRelationSearchApi,
} from "../redux/mediaRelations/action";
import { connect } from "react-redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const Media = ({
	mediaRelations,
	mediaRelationsSearch,
	mediaRelationApi,
	mediaRelationSearchApi,
}) => {
	useEffect(() => {
		mediaRelationApi();
	}, []);

	const [allCheack, setAllCheack] = useState(true);
	const [specificCheack, setSpecificCheack] = useState(false);
	const { isOpen, setIsOpen } = useHooks();
	const [selectedYear, setSelectedYear] = useState(1);
	const [selectedMonth, setSelectedMonth] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState(1);

	const [hamb, setHamb] = useState(true);

	const setAll = (e) => {
		setAllCheack(e.target.checked);
		setSpecificCheack(false);
		mediaRelationSearchApi(selectedCategory, "", "");
	};

	const setsetSpecificCheack = (e) => {
		setSpecificCheack(e.target.checked);
		setAllCheack(false);
		mediaRelationSearchApi(selectedCategory, 1, 1);
	};

	if (Object.keys(mediaRelations).length) {
		let temp_data = { ...mediaRelations.data };
		temp_data.media = JSON.parse(mediaRelations.data.media);
		temp_data.media_cat = JSON.parse(mediaRelations.data.media_cat);
		temp_data.media_month = JSON.parse(mediaRelations.data.media_month);
		temp_data.media_year = JSON.parse(mediaRelations.data.media_year);
		temp_data.page = JSON.parse(mediaRelations.data.page);

		if (Object.keys(mediaRelationsSearch).length) {
			// SEARCH DATA
			var search_data = { ...mediaRelationsSearch.data };
			search_data.media = JSON.parse(search_data.media);
		}

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

		var BodyV = (
			<div>
				<MediaSearch
					temp_data={temp_data}
					setAll={setAll}
					allCheack={allCheack}
					specificCheack={specificCheack}
					setsetSpecificCheack={setsetSpecificCheack}
					mediaRelationSearchApi={mediaRelationSearchApi}
					selectedYear={selectedYear}
					setSelectedYear={setSelectedYear}
					selectedMonth={selectedMonth}
					setSelectedMonth={setSelectedMonth}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					setSpecificCheack={setSpecificCheack}
					setAllCheack={setAllCheack}
				/>
				<MediaSlider
					search_data={search_data}
					project_path={
						Object.keys(mediaRelations).length && temp_data.project_path
					}
				/>
			</div>
		);
	}

	return (
		<>
			{(!BodyV && (
				<div className="loader">
					<Loader />
				</div>
			)) || (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					{uppSec}
					{BodyV}
					<Footer />
				</div>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		mediaRelations: state.mediaRelationsRed.mediaRelations,
		mediaRelationsSearch: state.mediaRelationsRed.mediaRelationsSearch,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		mediaRelationApi: function () {
			dispatch(mediaRelationApi());
		},
		mediaRelationSearchApi: function (category_id, year_id, month_id) {
			dispatch(mediaRelationSearchApi(category_id, year_id, month_id));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Media);
