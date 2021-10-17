import React, { Component, createContext } from "react";

export const EmployeeTestimonial = createContext();

class EmployeeTestimonialContext extends Component {
	state = {
		EmployeeTestimonials: [
			{
				name: "plant sales executive1",
				Business: "RMX",
				Job_Description:
					"Achieving Sales & Collection Target Generating solution based Sales for BVAP Driving SFE,  & Policy effectively Increase market share, Achieving Revenue target for Profitably, Achieve IBP process accuracy",
				Location: "Chattisgarh, Jharkhand",
				Experience_required: "5-10 Years",
				Min_Educational: "",
				qualification_req: "BE (Civil)",
			},
			{
				name: "sales executive2",
				Business: "RMX",
				Job_Description:
					"Achieving Sales & Collection Target Generating solution based Sales for BVAP Driving SFE,  & Policy effectively Increase market share, Achieving Revenue target for Profitably, Achieve IBP process accuracy",
				Location: "Chattisgarh, Jharkhand",
				Experience_required: "5-10 Years",
				Min_Educational: "",
				qualification_req: "BE (Civil)",
			},
			{
				name: "plant executive3",
				Business: "RMX",
				Job_Description:
					"Achieving Sales & Collection Target Generating solution based Sales for BVAP Driving SFE,  & Policy effectively Increase market share, Achieving Revenue target for Profitably, Achieve IBP process accuracy",
				Location: "Chattisgarh, Jharkhand",
				Experience_required: "5-10 Years",
				Min_Educational: "",
				qualification_req: "BE (Civil)",
			},
		],
	};
	nameToUrl = (name) => name.split(" ").join("_").toLowerCase();
	render() {
		return (
			<EmployeeTestimonial.Provider
				value={{ ...this.state, nameToUrl: this.nameToUrl }}
			>
				{this.props.children}
			</EmployeeTestimonial.Provider>
		);
	}
}

export default EmployeeTestimonialContext;
