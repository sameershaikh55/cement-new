import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationC = ({ currentPage, totalPages, setCurrentPage }) => {
	const handleChange = (event, value) => {
		setCurrentPage(value);
		window.scrollTo(0, 0);
	};

	return (
		<div className="d-flex justify-content-center mb-5">
			<Pagination
				count={totalPages}
				variant="outlined"
				shape="rounded"
				onChange={handleChange}
				siblingCount={0}
				page={currentPage}
			/>
		</div>
	);
};

export default PaginationC;
