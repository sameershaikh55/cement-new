import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ManufacturingUnitBody from "../components/ManufacturingUnitBody";

// IMPORTING IMAGES
import { imgUrl } from "../redux/config";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { manufacturingApi } from "../redux";
import Seo from "../components/Seo";

const ManufacturingUnits = ({ manufacturing, manufacturingApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		manufacturingApi();
	}, []);

	return (
		<>
			{(Object.keys(manufacturing).length && (
				<div>
					<Seo
						title={manufacturing.manufacturing_detail.page_title}
						description={manufacturing.manufacturing_detail.meta_description}
						canonical={manufacturing.manufacturing_detail.canonical_rel}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={manufacturing.manufacturing_detail.banner_img_title}
						img1={imgUrl + manufacturing.manufacturing_detail.banner_img}
						img2={imgUrl + manufacturing.manufacturing_detail.banner_img_mob}
						alt1={manufacturing.manufacturing_detail.banner_img_alt}
						alt2={manufacturing.manufacturing_detail.banner_img_alt}
					/>
					<ManufacturingUnitBody manufacturing={manufacturing} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		manufacturing: state.manufacturingRed.manufacturing,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		manufacturingApi: function () {
			dispatch(manufacturingApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ManufacturingUnits);
