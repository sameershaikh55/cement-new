import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import EnvironmentBody from "../components/EnvironmentBody";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

// IMPORTING REDUX
import { connect } from "react-redux";
import { environmentApi, environmentSearchApi } from "../redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const Enviroment = ({
	environment,
	environmentSearch,
	environmentApi,
	environmentSearchApi,
}) => {
	useEffect(() => {
		environmentApi();
	}, []);

	const [selectedYear, setSelectedYear] = useState();
	const [selectedMonth, setSelectedMonth] = useState();
	const [selectedPlant, setSelectedPlant] = useState();

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	if (Object.keys(environment).length) {
		var temp_data = { ...environment.data };
		temp_data.page = JSON.parse(temp_data.page);
		temp_data.env_month = JSON.parse(temp_data.env_month);
		temp_data.env_plants = JSON.parse(temp_data.env_plants);
		temp_data.env_report = JSON.parse(temp_data.env_report);
		temp_data.env_year = JSON.parse(temp_data.env_year);
		temp_data.page.img1 = JSON.parse(temp_data.page.img1);
		temp_data.page.section_dec = JSON.parse(temp_data.page.section_dec);
		temp_data.page.section_title = JSON.parse(temp_data.page.section_title);
		temp_data.page.our_commitment_img = JSON.parse(
			temp_data.page.our_commitment_img
		);
		temp_data.page.our_commitment_img_title = JSON.parse(
			temp_data.page.our_commitment_img_title
		);
		temp_data.page.our_commitment_img_alt = JSON.parse(
			temp_data.page.our_commitment_img_alt
		);

		if (Object.keys(environmentSearch).length) {
			// SEARCH DATA
			var search_data = { ...environmentSearch.data };
			search_data.env_report = JSON.parse(search_data.env_report);
		}
		// ERROR HANDLING AND SORTING (PARSE) END

		var uppSec = (
			<>
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
				/>
			</>
		);

		// COMPONENTS
		var EnvironmentBodyV = (
			<EnvironmentBody
				selectedYear={selectedYear}
				setSelectedYear={setSelectedYear}
				selectedMonth={selectedMonth}
				setSelectedMonth={setSelectedMonth}
				selectedPlant={selectedPlant}
				setSelectedPlant={setSelectedPlant}
				environmentSearchApi={environmentSearchApi}
				temp_data={temp_data}
				search_data={search_data}
			/>
		);
	} else {
	}

	return (
		<>
			{(Object.keys(environment).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					{uppSec}
					{/* BODY START */}
					<div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-10 col-md-12 mx-auto">
									<div
										data-aos="zoom-in-down"
										data-aos-delay="1200"
										data-aos-duration="500"
										className="mt-5"
									>
										{/* DIRECTION SECTION START */}
										<div className="d-flex justify-content-center align-items-center">
											<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
												<span
													className={`h6 mt-direction2Env text-uppercase`}
													dangerouslySetInnerHTML={{
														__html: temp_data.page.section_title[0],
													}}
												></span>
											</div>
										</div>
										{/* DIRECTION SECTION END */}
									</div>
									<p
										data-aos="fade-right"
										data-aos-delay="1200"
										data-aos-duration="500"
										className="textJustify"
										dangerouslySetInnerHTML={{
											__html: temp_data.page.section_dec[0],
										}}
									></p>
								</div>
							</div>
						</div>
					</div>
					{/* BODY END */}
					{EnvironmentBodyV}
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		environment: state.environmentRed.environment,
		environmentSearch: state.environmentRed.environmentSearch,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		environmentApi: function () {
			dispatch(environmentApi());
		},
		environmentSearchApi: function (
			selectedYear,
			selectedMonth,
			selectedPlant
		) {
			dispatch(
				environmentSearchApi(selectedYear, selectedMonth, selectedPlant)
			);
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Enviroment);
