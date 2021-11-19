import React from "react";
import { useHistory } from "react-router-dom";

// IMPORTING IMAGES
// import blog from "../assets/blog.png";
import { imgUrl } from "../redux/config";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

const BlogBody = ({ data, data2 }) => {
	let history = useHistory();

	return (
		<div className="page_container mt-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<div dangerouslySetInnerHTML={{ __html: data.banner_desc }}></div>
						{/* FOR DESKTOP START */}
						<div className="my-5">
							<h5
								data-aos="fade-left"
								data-aos-offset="800"
								className="text-center fw-bold"
							>
								<span className="themeColor borderBottom text-uppercase pb-2 px-5">
									latest blogs
								</span>
							</h5>

							<div className="row mt-4">
								{data2.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-lg-4 mt-4">
											<Fade
												delay={
													(i === 0 && 200) ||
													(i === 1 && 400) ||
													(i === 2 && 600)
												}
												bottom
											>
												<div className="blogCard">
													<img
														src={imgUrl + prev.banner_img}
														alt={prev.banner_img_alt}
														title={prev.banner_img_title}
													/>
													<div className="p-3">
														<h6
															dangerouslySetInnerHTML={{
																__html: prev.blog_title,
															}}
															className="text-uppercase themeColorG fw-bold"
														></h6>
														<p
															dangerouslySetInnerHTML={{
																__html: prev.meta_description,
															}}
															className="lh-base p_description"
														></p>
														<div>
															<button
																onClick={() => {
																	history.push(`/blog/${prev.page_url}`);
																	window.scrollTo(0, 0);
																}}
																className="text-uppercase greenBtn border-0 py-1 px-4 text-white mt-1"
															>
																Know mORE
															</button>
														</div>
													</div>
												</div>
											</Fade>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogBody;
