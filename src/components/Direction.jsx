import React from "react";

const Direction = ({ title }) => {
	return (
		<div>
			{/* DIRECTION SECTION START */}
			<div className="d-flex justify-content-center align-items-center">
				<div className="directionBg text-white d-flex justify-content-center fw-bold">
					<span className={`h6 mt-direction2 text-uppercase`}> {title} </span>
				</div>
			</div>
			{/* DIRECTION SECTION END */}
		</div>
	);
};

export default Direction;
