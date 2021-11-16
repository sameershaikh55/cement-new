import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import BlogBody from "../components/BlogBody";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import { connect } from "react-redux";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { blogSingleApi } from "../redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";
import { useParams } from "react-router";

const Blogs = ({ blogSingle, blogSingleApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	let { single } = useParams();

	useEffect(() => {
		blogSingleApi(single);
	}, [single]);

	return (
		<>
			{(Object.keys(blogSingle).length && (
				<div>
					<Seo
						title={blogSingle.detail[0].page_title}
						description={blogSingle.detail[0].meta_description}
						canonical={blogSingle.detail[0].canonical_rel}
						robot={blogSingle.detail[0].meta_robots}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={blogSingle.detail[0].blog_title}
						img1={imgUrl + blogSingle.detail[0].banner_img}
						img2={imgUrl + blogSingle.detail[0].banner_img}
						alt1={blogSingle.detail[0].banner_img_alt}
						alt2={blogSingle.detail[0].banner_img_alt}
					/>
					<BlogBody data={blogSingle.detail[0]} data2={blogSingle.latestBlog} />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		blogSingle: state.blogRed.blogSingle,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		blogSingleApi: function (url) {
			dispatch(blogSingleApi(url));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Blogs);
