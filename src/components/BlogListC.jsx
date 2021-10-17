import React from "react";
import { useHistory } from "react-router-dom";

// IMPORTING IMAGES
import blogListCard1 from "../assets/blogListCard1.png";
import blogListCard2 from "../assets/blogListCard2.png";
import blogListCard3 from "../assets/blogListCard3.png";
import blogListCard4 from "../assets/blogListCard4.png";

const BlogListC = () => {
	let history = useHistory();

	const data = [
		{
			img: blogListCard1,
			title: "home decor tips",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references you are sure to fall in love with.",
		},
		{
			img: blogListCard2,
			title: "wall texture designs for bedroom",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references you are sure to fall in love with.",
		},
		{
			img: blogListCard3,
			title: "decoding your home renovation",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references that you are sure to fall in love with.",
		},
		{
			img: blogListCard4,
			title: "5 texture wallpaint ideas for your living room",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references you are sure to fall in love with.",
		},
		{
			img: blogListCard2,
			title: "wall texture designs for bedroom",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references you are sure to fall in love with.",
		},
		{
			img: blogListCard3,
			title: "decoding your home renovation",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references that you are sure to fall in love with.",
		},
		{
			img: blogListCard4,
			title: "5 texture wallpaint ideas for your living room",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references you are sure to fall in love with.",
		},
		{
			img: blogListCard3,
			title: "decoding your home renovation",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references that you are sure to fall in love with.",
		},
		{
			img: blogListCard4,
			title: "5 texture wallpaint ideas for your living room",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references you are sure to fall in love with.",
		},
	];
	return (
		<div className="page_container mb-5 mt-3 mt-md-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<div className="row">
							{data.map((prev, i) => {
								const { img, title, desc } = prev;
								return (
									<div
										data-aos="fade-up"
										data-aos-delay={`${
											(i === 0 && 1000) ||
											(i === 1 && 1100) ||
											(i === 2 && 1200) ||
											i * 100
										}`}
										data-aos-duration="400"
										data-aos-offset="600"
										key={i}
										className="col-12 col-md-6 col-lg-4 mt-5 mt-md-4"
									>
										<div className="blogListCard">
											<img className="w-100 rounded-3" src={img} alt="" />
											<div className="my-3 px-3">
												<h6 className="fw-bold themeColorG text-uppercase">
													{title}
												</h6>
												<h6 className="small">{desc}</h6>
												<button
													onClick={() => history.push("/blogs")}
													className="text-uppercase greenBtn px-4 py-1 mt-2 text-white"
												>
													know more
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogListC;
