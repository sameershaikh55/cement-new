import React from "react";

// IMPORTING IMAGES
import LandmarkCards from "./LandmarkCards";

const LandMarkBody = ({ data }) => {
	let landmarkLineup = [];

	data.landmark_page_list.landmarks_img.map((prev, i) => {
		landmarkLineup.push({
			landmarks_img: prev,
			landmarks_location: data.landmark_page_list.landmarks_location[i],
			landmarks_img_alt: data.landmark_page_list.landmarks_img_alt[i],
			landmarks_img_title: data.landmark_page_list.landmarks_img_title[i],
			landmarks_desc: data.landmark_page_list.landmarks_desc[i],
			landmarks_short: data.landmark_page_list.landmarks_short[i],
			landmarks_title: data.landmark_page_list.landmarks_title[i],
			order_by: data.landmark_page_list.order_by[i],
		});

		landmarkLineup.sort((a, b) => parseInt(a.order_by) - parseInt(b.order_by));
	});

	return (
		<div className="page_container mt-2 mt-md-5 mb-5">
			<div className="container-fluid">
				{/* BODY START */}
				<div className="row">
					{landmarkLineup
						.sort((a, b) => parseInt(a.order_by) - parseInt(b.order_by))
						.map((prev, i) => {
							return (
								<LandmarkCards
									banner_img={prev.landmarks_img}
									under_head={prev.landmarks_location}
									banner_img_alt={prev.landmarks_img_alt}
									banner_img_title={prev.landmarks_img_title}
									description={prev.landmarks_desc}
									short_desc={prev.landmarks_short}
									title={prev.landmarks_title}
									ind={i}
								/>
							);
						})}
					{/* BODY END */}
				</div>
			</div>
		</div>
	);
};

export default LandMarkBody;
