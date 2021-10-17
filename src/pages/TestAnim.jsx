import React from "react";
// import arististBanner from "../js/arististBanner.png";

const TestAnim = () => {
	// useEffect(() => {
	// 	const script = document.createElement("script");
	// 	const script2 = document.createElement("script");
	// 	script.src = "../js/index-generated.js";
	// 	script2.src = "../js/libraries-generated.js";
	// 	script.async = true;
	// 	script2.async = true;
	// 	document.body.appendChild(script);
	// 	document.body.appendChild(script2);
	// 	return () => {
	// 		document.body.removeChild(script);
	// 		document.body.removeChild(script2);
	// 	};
	// }, []);

	return (
		<>
			<section
				className="component container container--bleed"
				id="Container-1c08e171-b6e9-4fe4-a942-165bff202c8a"
			>
				<section className="section-headline component component--headline container">
					<h2 className="section-headline__title">Timeline</h2>
				</section>
				<section className="interactive-timeline component js-interactive-timeline">
					<div className="interactive-timeline__progress">
						<nav className="interactive-timeline__nav" aria-label="Timeline">
							<ul className="interactive-timeline__link-items">
								<li>
									<a
										href="#interactive-timeline-2021"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker is-active"
										aria-current="location"
									>
										2021
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2020"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2020
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2019"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2019
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2018"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2018
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2017"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2017
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2016"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2016
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2015"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2015
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2014"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2014
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2012"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2012
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2011"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2011
									</a>
								</li>
								<li>
									<a
										href="#interactive-timeline-2010"
										type="button"
										className="interactive-timeline__year-marker js-timeline-year-marker"
									>
										2010
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="interactive-timeline__container container">
						<div
							id="interactive-timeline-2021"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year scrolled-into-view"
							data-repeat-animation="true"
							data-index="8"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2021</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article scrolled-into-view"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2020"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="9"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2020</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.{" "}
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2019"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="10"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2019</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2018"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="11"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2018</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2017"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="12"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2017</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2016"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="13"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2016</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2015"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="14"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2015</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2014"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="15"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2014</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2012"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="16"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2012</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2011"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="17"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2011</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
						<div
							id="interactive-timeline-2010"
							tabindex="-1"
							className="interactive-timeline__row js-interactive-timeline-year"
							data-repeat-animation="true"
							data-index="18"
						>
							<div className="interactive-timeline__year-column">
								<div className="interactive-timeline__display-year">2010</div>
							</div>
							<div className="interactive-timeline__article-column">
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
										<div className="timeline-article__image-column">
											<div className="timeline-article__image">
												{/* <img srcset={arististBanner} alt="" /> */}
											</div>
										</div>
									</section>
								</div>
								<div
									className="interactive-timeline__article-row js-interactive-timeline-article"
									data-repeat-animation="true"
								>
									<section className="timeline-article">
										<div className="timeline-article__content-column">
											<div className="timeline-article__title">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.
											</div>
											<div className="timeline-article__description">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passages, and
												more recently with desktop publishing software like
												Aldus PageMaker including versions of Lorem Ipsum.
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <script src="./assets/libraries-generated.js"></script>
				<script src="./assets/index-generated.js"></script> */}
			</section>
		</>
	);
};

export default TestAnim;
