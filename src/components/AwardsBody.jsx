import React, { useEffect } from "react";

// IMPORTING IMAGE
import selectIcon from "../assets/selectIcon.png";
import { imgUrl } from "../redux/config";

const AwardsBody = ({ data }) => {
	// JUST FOR THIS PAGE
	useEffect(() => {
		document.body.style.overflowX = "initial";
	}, []);

	return (
		<div className="page_container mt-5 mb-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
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
										<div
											dangerouslySetInnerHTML={{
												__html:
													(Object.keys(data).length &&
														data.award_list.twothousandtwentyone[0].year) ||
													"",
											}}
											className="interactive-timeline__display-year"
										></div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article scrolled-into-view"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.award_list.twothousandtwentyone.map((prev, i) => {
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`${
																			(i > 0 && "mt-4") || "mb-2"
																		} d-flex`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																		<div
																			dangerouslySetInnerHTML={{
																				__html: prev.awaward_desc,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	{prev.award_image !== null && (
																		<div>
																			<img
																				className="w-100 leftPaddingTimeline"
																				src={imgUrl + prev.award_image}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																	)}
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
										<div
											dangerouslySetInnerHTML={{
												__html:
													(Object.keys(data).length &&
														data.award_list.twothousandtwenty[0].year) ||
													"",
											}}
											className="interactive-timeline__display-year ms-0 ms-md-5"
										></div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.award_list.twothousandtwenty.map((prev, i) => {
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`${
																			(i > 0 && "mt-4") || "mb-2"
																		} d-flex`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																		<div
																			dangerouslySetInnerHTML={{
																				__html: prev.awaward_desc,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	{prev.award_image !== null && (
																		<div>
																			<img
																				className="w-100 leftPaddingTimeline"
																				src={imgUrl + prev.award_image}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																	)}
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
										<div
											dangerouslySetInnerHTML={{
												__html:
													(Object.keys(data).length &&
														data.award_list.twothousandnineteen[0].year) ||
													"",
											}}
											className="interactive-timeline__display-year ms-0 ms-md-5"
										></div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.award_list.twothousandnineteen.map((prev, i) => {
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`${
																			(i > 0 && "mt-4") || "mb-2"
																		} d-flex`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																		<div
																			dangerouslySetInnerHTML={{
																				__html: prev.awaward_desc,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	{prev.award_image !== null && (
																		<div>
																			<img
																				className="w-100 leftPaddingTimeline"
																				src={imgUrl + prev.award_image}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																	)}
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
										<div
											dangerouslySetInnerHTML={{
												__html:
													(Object.keys(data).length &&
														data.award_list.twothousandeighteen[0].year) ||
													"",
											}}
											className="interactive-timeline__display-year ms-0 ms-md-5"
										></div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.award_list.twothousandeighteen.map((prev, i) => {
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`${
																			(i > 0 && "mt-4") || "mb-2"
																		} d-flex`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																		<div
																			dangerouslySetInnerHTML={{
																				__html: prev.awaward_desc,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	{prev.award_image !== null && (
																		<div>
																			<img
																				className="w-100 leftPaddingTimeline"
																				src={imgUrl + prev.award_image}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																	)}
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
										<div
											dangerouslySetInnerHTML={{
												__html:
													(Object.keys(data).length &&
														data.award_list.twothousandseventeen[0].year) ||
													"",
											}}
											className="interactive-timeline__display-year ms-0 ms-md-5"
										></div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.award_list.twothousandseventeen.map((prev, i) => {
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`${
																			(i > 0 && "mt-4") || "mb-2"
																		} d-flex`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																		<div
																			dangerouslySetInnerHTML={{
																				__html: prev.awaward_desc,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	{prev.award_image !== null && (
																		<div>
																			<img
																				className="w-100 leftPaddingTimeline"
																				src={imgUrl + prev.award_image}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																	)}
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
										<div
											dangerouslySetInnerHTML={{
												__html:
													(Object.keys(data).length &&
														data.award_list.twothousandsixteen[0].year) ||
													"",
											}}
											className="interactive-timeline__display-year ms-0 ms-md-5"
										></div>
									</div>
									<div className="interactive-timeline__article-column">
										<div
											className="interactive-timeline__article-row js-interactive-timeline-article"
											data-repeat-animation="true"
										>
											{(Object.keys(data).length &&
												data.award_list.twothousandsixteen.map((prev, i) => {
													return (
														<section key={i} className="timeline-article">
															<div className="timeline-article__content-column">
																<div className="timeline-article__title"></div>
																<div className="timeline-article__description">
																	<div
																		className={`${
																			(i > 0 && "mt-4") || "mb-2"
																		} d-flex`}
																	>
																		<div>
																			<img
																				className="rightImgArrow"
																				src={selectIcon}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																		<div
																			dangerouslySetInnerHTML={{
																				__html: prev.awaward_desc,
																			}}
																		></div>
																	</div>
																</div>
															</div>
															<div className="timeline-article__image-column">
																<div className="timeline-article__image">
																	{prev.award_image !== null && (
																		<div>
																			<img
																				className="w-100 leftPaddingTimeline"
																				src={imgUrl + prev.award_image}
																				alt={prev.award_image_alt}
																			/>
																		</div>
																	)}
																</div>
															</div>
														</section>
													);
												})) ||
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

export default AwardsBody;
