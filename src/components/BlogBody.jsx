import React from "react";

// IMPORTING IMAGES
import blog from "../assets/blog.png";
import blogCard1 from "../assets/blogCard1.png";
import blogCard2 from "../assets/blogCard2.png";
import blogCard3 from "../assets/blogCard3.png";

// IMPORTING ANIMATIONS
import Fade from "react-reveal/Fade";

const BlogBody = () => {
	const data = [
		{
			head: "1. Wood decoration for outer wall design",
			para: "Wood has a way of complementing any home. Apart from being affordable, wood can also help you with quality wall designs. In case you want to go big on savings, you can just go ahead with the wood from your previous interior renovations. An outdoor wooden dining space is a much-loved idea though and is definitely worth",
		},
		{
			head: "2. Spray paint on the outer wall of your home",
			para: "Spray painting might be a fun activity for your kids. But you know what else it is? It’s a way to get a good design for your outer walls. With a few strings, painter’s tape, a chevron stencil, a lace washi tape, and of course, spray paints of your choice, you can decorate the exterior wall of your house! And while you’re at it, you can also give a thought to texture paint for exterior walls.",
		},
		{
			head: "3. Using old and un-useful things for decorating the outer walls",
			para: "We all have those old windows and planters that we don’t use anymore. Turning them into decorations for the exterior wall design can be a great use of those things. These antique ideas will give your house a unique look from outside and up your design quotient as well.",
		},
		{
			head: "4. Use of vase flower fillings",
			para: "Greens will never fail you. Huge vase fillers with flowers and plants will add a type of unexplainable beauty to your house with just its natural simplicity. The decoration with flowers will please the visitors’ heart as well.",
		},
		{
			head: "5. Frame decorations for the outer wall",
			para: "A peaceful yet delightful look can be brought in with a display of frames of wood & metal as your outdoor wall decoration. These will really bring that touch of something extra in the summers. To add to this, if you have a garden, frames can truly spruce up the look and make your walls look all decked up. 6. Vertical succulent gardens for your outer walls Decorate the outer wall of the house with vertical succulent gardens. This is an eco-friendly, cool and attractive way of keeping your exterior wall highly admirable. To add to that, these gardens are cheap and easy to maintain.",
		},
		{
			head: "7. Using fences for outer wall",
			para: "decorations Simple, floral fences can have an interesting visual impact on your external walls. This is a simple, creative and practical way of beautifying the outer look of your house without having to put in a lot of time, effort or money. What’s more? Fences never go of fashion!",
		},
		{
			head: "8. Abstract metal wall art for outer walls",
			para: "For the infrastructure that’s modern already, abstract metal wall art is recommended for outer wall designing. This type of art has a modern, minimalist approach, which can also make your home look elite and give your outdoor design a taste of luxury.",
		},
		{
			head: "9. Birdhouse for exterior walls",
			para: "Hanging a birdhouse on the exterior walls of your house or simply hanging a lovely little insect hotel on one of the walls of your house will give a beauty with a natural touch. This idea of exterior designing will help you get close to nature on a personal level too.",
		},
		{
			head: "10. Triptych for decorating exterior walls",
			para: "A triptych is a quite interesting option you can think of while decorating the outdoor walls. A triptych comprises of water features, accent lighting, and the organic wall art displays, together creating a very relaxing and ambient look. With these cool ideas, give your exterior wall design the inviting aura it needs and be a proud owner of a beautiful home!",
		},
	];

	const blogcards = [
		{
			img: blogCard1,
			title: "10 outdoor wall design ideas to beautify you house",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references that you are sure to fall in love with.",
		},
		{
			img: blogCard2,
			title: "decorative paint techniques for living rooms",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references that you are sure to fall in love with.",
		},
		{
			img: blogCard3,
			title: "10 outdoor wall design ideas to beautify you house",
			desc: "For a home that reflects your ideas and aspirations, your search for the perfect inspiration ends here. Because we have references that you are sure to fall in love with.",
		},
	];

	return (
		<div className="page_container mt-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						{/* FOR DESKTOP START */}
						<Fade delay={1300} bottom>
							<h4 className="d-none d-sm-block text-center themeColor text-uppercase">
								10 Outer Wal
								<span className="borderBottom border-3">
									l Designs To Beautif
								</span>
								y Your House
							</h4>
						</Fade>
						{/* FOR DESKTOP END */}

						{/* FOR MOBILE START */}
						<Fade delay={1300} bottom>
							<h4 className="d-block d-sm-none text-center themeColor text-uppercase">
								10 Outer Wall Designs To Beautify{" "}
								<span className="borderBottom">Your House</span>
							</h4>
						</Fade>
						{/* FOR MOBILE END */}

						<div className="resposiveJustified mt-5">
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
						</div>

						<div className="row mt-4">
							<div className="col-12 col-md-10 mx-auto">
								<img
									data-aos="zoom-in"
									data-aos-offset="500"
									width="100%"
									src={blog}
									alt="blog"
								/>
							</div>
						</div>

						<div className="mt-4">
							{data.map((prev, i) => {
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
								{blogcards.map((prev, i) => {
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
													<img src={prev.img} alt={prev.title} />
													<div className="p-3">
														<h6 className="text-uppercase themeColorG fw-bold">
															{prev.title}
														</h6>
														<p className="lh-base">{prev.desc}</p>
														<div>
															<button className="text-uppercase greenBtn border-0 py-1 px-4 text-white mt-1">
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
