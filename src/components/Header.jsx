import React, { useEffect } from "react";
import logo from "../assets/logo.png";

// IMPORTING LINK
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = ({ home, isOpen, setIsOpen, hamb }) => {
	useEffect(() => {
		// var trigger = document.getElementById("hamburger");
		// var trigger2 = document.getElementById("hamburgerM");
		var header = document.querySelector(".headerContainer");
		var logo = document.querySelector(".logo");
		var logo2 = document.querySelector(".logo2");
		var headerM = document.querySelector(".headerContainerM");
		var isClosed = true;

		// trigger.addEventListener("click", () => {
		// 	burgerTime();
		// });

		// trigger2.addEventListener("click", () => {
		// 	burgerTime();
		// });

		function burgerTime() {
			if (isClosed === true) {
				// DESKTOP START
				// trigger.classList.add("is-open");
				// trigger.classList.remove("is-closed");
				header.classList.remove("shadow-sm");
				// DESKTOP END

				// MOBILE START
				// trigger2.classList.add("is-open");
				// trigger2.classList.remove("is-closed");
				headerM.classList.remove("shadow-sm");
				// MOBILE END

				isClosed = false;
			} else {
				// DESKTOP START
				// trigger.classList.add("is-closed");
				// trigger.classList.remove("is-open");
				header.classList.add("shadow-sm");
				logo.style.display = "block";
				// DESKTOP END

				// MOBILE START
				// trigger2.classList.add("is-closed");
				// trigger2.classList.remove("is-open");
				headerM.classList.add("shadow-sm");
				headerM.style.marginTop = "0rem";
				logo2.style.display = "block";
				// MOBILE END

				isClosed = true;
			}
		}

		// if (!hamb) {
		// 	trigger2.style.visibility = "hidden";
		// } else {
		// 	trigger2.style.visibility = "visible";
		// }
	}, []);

	if (hamb) {
		var hamberger = (isOpen && (
			<ImCross
				onClick={() => console.log("object")}
				// onClick={() => setIsOpen(false)}
				fontSize="1.6rem"
				className="pointer"
			/>
		)) || (
			<GiHamburgerMenu
				onClick={() => console.log("object2")}
				// onClick={() => setIsOpen(true)}
				fontSize="2rem"
				className="pointer"
			/>
		);
	}
	return (
		<>
			{/* DESKTOP START */}
			<div className="d-none d-md-block">
				<div
					className={`headerContainer ${
						(home && "bg-transparent") || "bg-white shadow-sm"
					} py-3 px-3 px-md-5`}
				>
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<Link to="/">
								<img src={logo} alt="logo" className="logo pointer" />
							</Link>
						</div>
						{/* HAMBERGER START */}

						{hamberger}
					</div>
				</div>
			</div>
			{/* DESKTOP END */}

			{/* MOBILE START */}
			<div className="d-block d-md-none">
				<div
					className={`mobileHeader ${
						(home && "bg-transparent") || "bg-white shadow-sm"
					} py-2 px-4`}
				>
					<div className="d-flex justify-content-center">
						<Link to="/">
							<img src={logo} alt="logo" className="logo2 pointer" />
						</Link>
					</div>
					<div className="humbergerCont position-absolute">{hamberger}</div>
				</div>
				{/* MOBILE END */}
			</div>
		</>
	);
};

export default Header;
