import React, {
	useEffect,
	useState,
	createRef,
	useCallback,
	useRef,
} from "react";
import Slider from "react-slick";

// IMPORTS
import Header from "../components/Header";
import Seo from "../components/Seo";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../hooks/useHooks";
import truckMp from "../assets/truck.webm";
import { homeApi } from "../redux";
import { connect } from "react-redux";
import { imgUrl } from "../redux/config";

const Home = ({ home, homeApi }) => {
	const [slideInd, setSlideInd] = useState();
	const vidRef = useRef(null);
	const sliderRef = createRef();
	const [scrollData, setScrollData] = useState();

	useEffect(() => {
		homeApi();
	}, []);

	const scroll = useCallback((y) => {
		if (y > 0) {
			return sliderRef?.current?.slickNext();
		} else {
			return sliderRef?.current?.slickPrev();
		}
	});

	// JUST FOR THIS PAGE
	useEffect(() => {
		document.body.style.overflowX = "hidden";
	}, []);
	useEffect(() => {
		window.addEventListener("wheel", (e) => {
			scroll(e.deltaY);
		});
		window.addEventListener("wheel", (e) => {
			if (vidRef.current !== null) {
				if (e.deltaY < 0) {
					if (slideInd > 0) {
						vidRef.current.play();
						setScrollData(e.deltaY);
					} else {
						vidRef.current.pause();
					}
				} else if (e.deltaY > 0) {
					if (slideInd < 7) {
						vidRef.current.play();
						setScrollData(e.deltaY);
					} else {
						vidRef.current.pause();
					}
				}
				setTimeout(() => {
					if (scrollData === e.deltaY) {
						vidRef.current.pause();
					}
				}, [800]);
			}
		});
	}, [scroll]);

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		draggable: false,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: true,
		beforeChange: function (e) {
			vidRef.current.play();
			setTimeout(() => {
				vidRef.current.pause();
			}, [500]);
		},
		afterChange: function (e) {
			setSlideInd(e);
		},
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
				},
			},
			{
				breakpoint: 875,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: true,
					infinite: false,
					arrows: false,
				},
			},
		],
	};

	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	return (
		<>
			{(Object.keys(home).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} home />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={home.seo.page_title}
						description={home.seo.meta_description}
						canonical={home.seo.canonical_rel}
						robot={home.seo.meta_robots}
					/>
					<div className="d-none d-md-block truck_video">
						<video ref={vidRef} loop muted>
							<source src={truckMp} type="video/mp4" />
						</video>
					</div>
					{/* FOR MOBILE START */}
					<div className="homeSlider">
						{/* FEATURE SLIDER START */}
						<Slider ref={sliderRef} {...settings}>
							{home.home_page_list.map((prev, i) => {
								return (
									<a href={prev.link}>
										<div
											key={i}
											className="homeSlide bg-white position-relative"
										>
											<img
												src={imgUrl + prev.banner_img}
												alt={prev.banner_img_alt}
												title={prev.banner_img_title}
											/>
											<div className="text_data text-white px-4 px-lg-4">
												<div className="h-100 d-flex flex-column justify-content-between">
													<h1
														dangerouslySetInnerHTML={{ __html: prev.title }}
														className="fw-bold titleT"
													></h1>
													<div>
														<p
															dangerouslySetInnerHTML={{
																__html: prev.short_title,
															}}
															className="fw-bold mb-1 mb-md-3"
														></p>
														<p
															dangerouslySetInnerHTML={{
																__html: prev.description,
															}}
														></p>
													</div>
												</div>
											</div>
										</div>
									</a>
								);
							})}
						</Slider>
						{/* FEATURE SLIDER END */}
					</div>
					{/* FOR MOBILE END */}
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		home: state.homeRed.home,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		homeApi: function () {
			dispatch(homeApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
