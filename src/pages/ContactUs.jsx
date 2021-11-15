import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";
import { connect } from "react-redux";
import { contactApi } from "../redux";
import Seo from "../components/Seo";
import { imgUrl } from "../redux/config";

const ContactUs = ({ contact, contactApi }) => {
	const { isOpen, setIsOpen } = useHooks();
	const [hamb, setHamb] = useState(true);

	useEffect(() => {
		contactApi();
	}, []);

	return (
		<>
			{(Object.keys(contact).length && (
				<div>
					<Header isOpen={isOpen} setIsOpen={setIsOpen} hamb={hamb} />
					<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setHamb={setHamb} />
					<Seo
						title={contact.page.page_title}
						description={contact.page.meta_description}
						canonical={contact.page.canonical_rel}
						robot={contact.page.meta_robots}
					/>
					<Hero
						heading={contact.page.banner_img_title}
						img1={imgUrl + contact.page.banner_img}
						img2={imgUrl + contact.page.banner_img_mob}
						alt1={contact.page.banner_img_alt}
						alt2={contact.page.banner_img_alt}
					/>
					<ContactBody data={contact.offices} />
					<br />
					<br className="d-block d-md-none" />
					<Footer />
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		contact: state.contactRed.contact,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		contactApi: function () {
			dispatch(contactApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ContactUs);
