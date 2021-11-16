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
						{/* <Fade delay={1300} bottom>
							<h4 className="d-none d-sm-block text-center themeColor text-uppercase">
								10 Outer Wal
								<span className="borderBottom border-3">
									l Designs To Beautif
								</span>
								y Your House
							</h4>
						</Fade> */}
						{/* FOR DESKTOP END */}

						{/* FOR MOBILE START */}
						{/* <Fade delay={1300} bottom>
							<h4
								dangerouslySetInnerHTML={{ __html: data.blog_title }}
								className="text-center themeColor text-uppercase"
							></h4>
						</Fade> */}
						{/* FOR MOBILE END */}

						{/* <div className="resposiveJustified mt-5">
							<div
								data-aos="fade-right"
								data-aos-offset="500"
								data-aos-delay="1500"
								data-aos-duration="400"
							>
								Beautifying your house is no joke. We all want our homes to look
								perfect and beautiful. But most importantly, we want them to
								look like homes that we would want to live in.
							</div>
							<div
								data-aos="fade-right"
								data-aos-offset="500"
								data-aos-delay="1800"
								data-aos-duration="400"
								className="mt-4"
							>
								Your exterior wall is an expression of you, of your tastes and
								choices. And by going for exterior wall designs that speak to
								you and are yet mid-lifting, you are giving your guests and
								visitors an insight.
							</div>
							<div
								data-aos="fade-right"
								data-aos-offset="500"
								data-aos-delay="2000"
								data-aos-duration="400"
								className="mt-3"
							>
								But having said that, it is indeed quite difficult to have a job
								that is beautiful. And that’s where we come in. While we, as
								Birla White are a construction company, also understand the need
								to beautify your home and not just be limited to having a strong
								home. Read on to know a few things you can do to up your home’s
								beauty quotient.
							</div>
						</div> */}

						{/* <div className="row mt-4">
							<div className="col-12 col-md-10 mx-auto">
								<img
									data-aos="zoom-in"
									data-aos-offset="500"
									width="100%"
									src={imgUrl + data.banner_img}
									alt="blog"
								/>
							</div>
						</div>

						<div className="mt-4">
							{data2.map((prev, i) => {
								return (
									<div key={i} className="mt-3">
										<div
											data-aos="fade-up"
											data-aos-offset="1000"
											data-aos-delay="50"
											className="fw-bold"
										>
											{prev.head}
										</div>
										<p
											data-aos="fade-up"
											data-aos-offset="1000"
											data-aos-delay="50"
											className="lh-base onlyTextJustify"
										>
											{prev.para}
										</p>
									</div>
								);
							})}
						</div>

					*/}

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
