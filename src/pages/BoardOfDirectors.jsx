import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BodBodyUpdated from "../components/BodBodyUpdated";
import { imgUrl } from "../redux/config";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
// import BODList from "../components/BODList";
import { connect } from "react-redux";
import { boardDirectorsApi } from "../redux";
import Seo from "../components/Seo";

const BoardOfDirectors = ({ boardDirectors, boardDirectorsApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		boardDirectorsApi();
	}, []);

	return (
		<>
			{(Object.keys(boardDirectors).length && (
				<div>
					<Seo
						title={boardDirectors.data.board_of_director.page_title}
						description={boardDirectors.data.board_of_director.meta_description}
						canonical={boardDirectors.data.board_of_director.canonical_rel}
						robot={boardDirectors.data.board_of_director.meta_robots}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={boardDirectors.data.board_of_director.banner_img_title}
						img1={imgUrl + boardDirectors.data.board_of_director.banner_img}
						img2={imgUrl + boardDirectors.data.board_of_director.banner_img_mob}
						alt1={boardDirectors.data.board_of_director.banner_img_alt}
						alt2={boardDirectors.data.board_of_director.banner_img_alt}
					/>
					{/* BOD BODY START */}
					<BodBodyUpdated boardDirectors={boardDirectors} />
					{/* BOD BODY END */}
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		boardDirectors: state.boardDirectorsRed.boardDirectors,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		boardDirectorsApi: function () {
			dispatch(boardDirectorsApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BoardOfDirectors);
