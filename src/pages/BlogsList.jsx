import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BlogListC from "../components/BlogListC";
import PaginationC from "../components/PaginationC";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import Seo from "../components/Seo";
import { blogApi } from "../redux";
import { imgUrl } from "../redux/config";
import { connect } from "react-redux";

const BlogsList = ({ blog, blogApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(9);

	useEffect(() => {
		blogApi();
	}, []);

	if (Object.keys(blog).length) {
		// Get current posts
		const indexOfLastPost = currentPage * postsPerPage;
		const indexOfFirstPost = indexOfLastPost - postsPerPage;
		var totalPages = Math.ceil(blog.Blogs.length / postsPerPage);
		var currentPosts = blog.Blogs.slice(indexOfFirstPost, indexOfLastPost);
	}

	return (
		<>
			{(Object.keys(blog).length && (
				<>
					<Seo
						title={blog.page.page_title}
						description={blog.page.meta_description}
						canonical={blog.page.canonical_rel}
						robot={blog.page.meta_robots}
					/>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Hero
						heading={blog.page.banner_img_title}
						img1={imgUrl + blog.page.banner_img}
						img2={imgUrl + blog.page.banner_img_mob}
						alt1={blog.page.banner_img_alt}
						alt2={blog.page.banner_img_alt}
					/>
					<BlogListC data={currentPosts} />
					<PaginationC
						currentPage={currentPage}
						totalPages={totalPages}
						currentPosts={currentPosts}
						setCurrentPage={setCurrentPage}
					/>
					<Footer />
				</>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		blog: state.blogRed.blog,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		blogApi: function () {
			dispatch(blogApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BlogsList);
