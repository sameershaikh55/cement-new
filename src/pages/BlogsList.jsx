import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BlogListC from "../components/BlogListC";

// IMPORTING IMAGES
import banner from "../assets/blogBanner.png";
import bannerM from "../assets/blogBannerM.png";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const BlogsList = () => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
			<Hero heading="Blogs" img1={banner} img2={bannerM} />
			<BlogListC />
			<Footer />
		</div>
	);
};

export default BlogsList;
