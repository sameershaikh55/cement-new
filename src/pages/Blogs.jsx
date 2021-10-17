import React, { useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import BlogBody from "../components/BlogBody";
import Footer from "../components/Footer";

// IMPORTING IMAGES
import banner from "../assets/blogBanner.png";
import bannerM from "../assets/blogBannerM.png";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const Blogs = () => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	return (
		<div>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
			<Hero heading="Blogs" img1={banner} img2={bannerM} />
			<BlogBody />
			<Footer />
		</div>
	);
};

export default Blogs;
