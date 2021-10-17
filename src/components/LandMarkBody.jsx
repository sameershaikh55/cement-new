import React from "react";

// IMPORTING IMAGES
import LandmarkCards from "./LandmarkCards";

const LandMarkBody = ({ data }) => {
	return (
		<div className="page_container mt-2 mt-md-5 mb-5">
			<div className="container-fluid">
				{/* BODY START */}
				<div className="row">
					{data.landmark_page_list.order_by.map((prev, i) => {
						return (
							<LandmarkCards
								banner_img={data.landmark_page_list.landmarks_img[i]}
								under_head={data.landmark_page_list.landmarks_location[i]}
								banner_img_alt={data.landmark_page_list.landmarks_img_alt[i]}
								banner_img_title={
									data.landmark_page_list.landmarks_img_title[i]
								}
								description={data.landmark_page_list.landmarks_desc[i]}
								short_desc={data.landmark_page_list.landmarks_short[i]}
								title={data.landmark_page_list.landmarks_title[i]}
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
