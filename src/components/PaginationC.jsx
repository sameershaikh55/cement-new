import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory, useParams } from "react-router-dom";

const PaginationC = ({ currentPage, totalPages, setCurrentPage }) => {
	let { page } = useParams();

	useEffect(() => {
		if (page !== undefined) {
			setCurrentPage(parseInt(page));
		} else {
			setCurrentPage(1);
		}
	}, []);

	let history = useHistory();

	const [windowSize, setWindowSize] = useState({
		width: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
			});
		}
		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	const handleChange = (event, value) => {
		if (value !== 1) {
			history.push(`/blog/page/${value}`);
		} else {
			history.push(`/blog`);
		}

		setCurrentPage(value);
		window.scrollTo(0, 0);
	};

	return (
		<div className="page_Container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="d-flex justify-content-center mb-5">
							<Pagination
								showFirstButton
								showLastButton
								count={totalPages}
								variant="outlined"
								shape="rounded"
								onChange={handleChange}
								siblingCount={(windowSize.width > 475 && 2) || 0}
								page={currentPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginationC;
