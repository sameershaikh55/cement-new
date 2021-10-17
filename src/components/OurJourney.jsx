import React, { useEffect } from "react";
import { imgUrl } from "../redux/config";

// IMPORTING IMAGE
import selectIcon from "../assets/selectIcon.png";

const OurJourney = ({ data }) => {
	// JUST FOR THIS PAGE
	useEffect(() => {
		document.body.style.overflow = "initial";
	}, []);

	return (
		<div className="page_container mt-5 mb-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						{/* DIRECTION SECTION START */}
						<div className="d-flex justify-content-center align-items-center">
							<div className="directionBgEnv text-white d-flex justify-content-center fw-bold">
								<span
									style={{ marginTop: "15px" }}
									class={`h6 mt-direction2Env text-uppercase`}
								>
									our journey
								</span>
							</div>
						</div>
						{/* DIRECTION SECTION END */}

						<section className="interactive-timeline component js-interactive-timeline">
							<div className="interactive-timeline__progress">
								<nav
									className="interactive-timeline__nav"
									aria-label="Timeline"
								>
									<ul className="interactive-timeline__link-items">
										<li>
											<a
												href="#interactive-timeline-2021"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker is-active"
												aria-current="location"
											>
												2020
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2020"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2019
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2019"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2017
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2018"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2016
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2017"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2014
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2016"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2013
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2015"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2012
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2014"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2009
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2012"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2008
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2011"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												2002
											</a>
										</li>
										<li>
											<a
												href="#interactive-timeline-2010"
												type="button"
												className="interactive-timeline__year-marker js-timeline-year-marker"
											>
												1999
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className="interactive-timeline__container">
								<div
									id="interactive-timeline-2021"
									tabindex="-1"
									className="interactive-timeline__row js-interactive-timeline-year scrolled-into-view"
									data-repeat-animation="true"
									data-index="8"
								>
									<div className="interactive-timeline__year-column">
										<div className="interactive-timeline__display-year">
											{(Object.keys(data).length &&
												data.our_journey.twothousandtwenty[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article scrolled-into-view"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandtwenty.map((prev, i) => {
													const { image, deacription } = prev;
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{Object.keys(data).length &&
												data.our_journey.twothousandnineteen[0].year}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandnineteen.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandseventeen[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandseventeen.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandsixteen[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandsixteen.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandfourteen[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandfourteen.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandthirteen[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandthirteen.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandtwelve[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandtwelve.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandnine[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandnine.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousandeight[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousandeight.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.twothousand[0].year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.twothousand.map((prev, i) => {
													const { image, deacription } = prev;

													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`d-flex ${
																			(i !== 0 && "my-3") || "mb-2"
																		}`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt="selectIcon"
																			/>
																		</div>

																		<div
																			dangerouslySetInnerHTML={{
																				__html: deacription,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	<img
																		className="w-100 leftPaddingTimeline"
																		srcset={imgUrl + image}
																		alt="journey1"
																	/>
																</div>
															</div>
														</section>
													);
												})) ||
												""}
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
										<div className="interactive-timeline__display-year ms-0 ms-md-5">
											{(Object.keys(data).length &&
												data.our_journey.onethousandninehundredninetynine[0]
													.year) ||
												""}
										</div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.our_journey.onethousandninehundredninetynine.map(
													(prev, i) => {
														const { image, deacription } = prev;

														return (
															<section key={i} className="timeline-article">
																<div className="timeline-article__content-column">
																	<div className="timeline-article__title"></div>
																	<div className="timeline-article__description">
																		<div
																			className={`d-flex ${
																				(i !== 0 && "my-3") || "mb-2"
																			}`}
																		>
																			<div>
																				<img
																					className="rightImgArrow"
																					src={selectIcon}
																					alt="selectIcon"
																				/>
																			</div>

																			<div
																				dangerouslySetInnerHTML={{
																					__html: deacription,
																				}}
																			></div>
																		</div>
																	</div>
																</div>
																<div className="timeline-article__image-column">
																	<div className="timeline-article__image">
																		<img
																			className="w-100 leftPaddingTimeline"
																			srcset={imgUrl + image}
																			alt="journey1"
																		/>
																	</div>
																</div>
															</section>
														);
													}
												)) ||
												""}
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurJourney;
