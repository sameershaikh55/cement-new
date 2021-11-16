import React from "react";

// IMPORTING IMAGE
import selectIcon from "../assets/selectIcon.png";
import { imgUrl } from "../redux/config";

const CsrProjects = ({ data }) => {
	return (
		<div className="page_container mt-5 mb-5">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<h5 className="text-center themeColor mb-5 text-uppercase">
							Our <span className="borderBottom pb-2">Flagship Proj</span>
							ects
						</h5>
						<div className="ourJourneyContainer csrProject">
							<section className="interactive-timeline component js-interactive-timeline">
								<div className="interactive-timeline__container">
									<div
										id="interactive-timeline-2021"
										tabindex="-1"
										className="interactive-timeline__row js-interactive-timeline-year"
										data-repeat-animation="true"
										data-index="1"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													<h1 className="themeColorG">
														{data.length && data[0].key_csr_projects_name}
													</h1>
												</h1>
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article scrolled-into-view"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[0].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[0].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[0].key_csr_projects_image_alt
																}
																title={
																	data.length && data[0].key_csr_projects_name
																}
															/>
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
										data-index="2"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[1].key_csr_projects_name}
												</h1>
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[1].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[1].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[1].key_csr_projects_image_alt
																}
																title={
																	data.length && data[1].key_csr_projects_name
																}
															/>{" "}
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
										data-index="3"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[2].key_csr_projects_name}
												</h1>
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[2].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[2].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[2].key_csr_projects_image_alt
																}
																title={
																	data.length && data[2].key_csr_projects_name
																}
															/>{" "}
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
										data-index="4"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[3].key_csr_projects_name}
												</h1>
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[3].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[3].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[3].key_csr_projects_image_alt
																}
																title={
																	data.length && data[3].key_csr_projects_name
																}
															/>{" "}
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
										data-index="4"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[4].key_csr_projects_name}
												</h1>
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[4].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[4].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[4].key_csr_projects_image_alt
																}
																title={
																	data.length && data[4].key_csr_projects_name
																}
															/>{" "}
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
										data-index="5"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[5].key_csr_projects_name}
												</h1>{" "}
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[5].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[5].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[5].key_csr_projects_image_alt
																}
																title={
																	data.length && data[5].key_csr_projects_name
																}
															/>{" "}
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
										data-index="6"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[6].key_csr_projects_name}
												</h1>{" "}
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[6].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[6].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[6].key_csr_projects_image_alt
																}
																title={
																	data.length && data[6].key_csr_projects_name
																}
															/>{" "}
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
										data-index="7"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[7].key_csr_projects_name}
												</h1>{" "}
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[7].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[7].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[7].key_csr_projects_image_alt
																}
																title={
																	data.length && data[7].key_csr_projects_name
																}
															/>{" "}
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
										data-index="8"
									>
										<div className="interactive-timeline__year-column">
											<div className="interactive-timeline__display-year ms-0 ms-md-5">
												<h1 className="themeColorG">
													{data.length && data[8].key_csr_projects_name}
												</h1>{" "}
											</div>
										</div>
										<div className="interactive-timeline__article-column">
											<div
												className="interactive-timeline__article-row js-interactive-timeline-article"
												data-repeat-animation="true"
											>
												<section className="timeline-article">
													<div className="timeline-article__content-column">
														<div className="timeline-article__title"></div>
														<div className="timeline-article__description">
															<div className="d-flex mb-2">
																<div>
																	<img
																		className="rightImgArrow"
																		src={selectIcon}
																		alt="selectIcon"
																	/>
																</div>
																<div
																	dangerouslySetInnerHTML={{
																		__html:
																			data.length &&
																			data[8].key_csr_projects_desc,
																	}}
																></div>
															</div>
														</div>
													</div>
													<div className="timeline-article__image-column">
														<div className="timeline-article__image">
															<img
																className="w-100 leftPaddingTimeline"
																src={
																	data.length &&
																	imgUrl + data[8].key_csr_projects_img
																}
																alt={
																	data.length &&
																	data[8].key_csr_projects_image_alt
																}
																title={
																	data.length && data[8].key_csr_projects_name
																}
															/>{" "}
														</div>
													</div>
												</section>
											</div>
										</div>
									</div>{" "}
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CsrProjects;
