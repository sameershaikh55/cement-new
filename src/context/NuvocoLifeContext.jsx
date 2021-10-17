import React, { Component, createContext } from "react";

// IMPORTING IMAGES
import lifeCard1 from "../assets/lifeCard1.jpg";
import lifeCard2 from "../assets/lifeCard2.jpg";
import lifeCard3 from "../assets/lifeCard3.jpg";
import lifeCard4 from "../assets/lifeCard4.jpg";
import lifeCard5 from "../assets/lifeCard5.jpg";

export const NuvocoLifeContext = createContext();

class NuvocoLifeC extends Component {
	state = {
		nuvocoLife: [
			{
				name: "Total Rewards",
				image: lifeCard1,
				desc: "Nuvoco compensation philosophy is built around equality, pay for performance and market parity. We believe in providing fair and competitive compensation and benefits that will attract, retain and reward high performing employees at all levels.",
			},
			{
				name: "Learning and Development",
				image: lifeCard2,
				desc: "In our endeavour to create a sustainable & future-ready organisation, Learning and Development initiatives play a pivotal role. All programmes and talent management initiatives are designed basis the adult learning principles and are bucketed under three categories of Build - Building capabilities through self-paced and group learning methodologies Nurture - Nurturing young talent to be future leaders of the organization Grow - Growing leadership capabilities To foster the growth of our employees, we offer policies that provide assistance in undertaking relevant education courses and further studies.",
			},
			{
				name: "Internal Job Postings (IJP)",
				image: lifeCard3,
				desc: "People capital has been one of our strengths; one key reason is tenure and depth of knowledge. Nuvoco offers countless opportunities to employees to move across the organisation both functionally and geographically, based on merit, by displaying all the vacant positions with the internals talent before conducting an external hunt.  This helps us in strengthening our Talent Development strategy by identifying and grooming internal talent and allows employees to grow personally as well as professionally.",
			},
			{
				name: "Rewards and Recognitions",
				image: lifeCard4,
				desc: "At Nuvoco, meeting commitments, delivering what is promised and celebrating achievements is a core philosophy. We recognise employees at various platforms that acknowledge their efforts and performance. Our Annual Nuvoco Edge Awards (NEA) is one such platform, where each Nuvocan eagerly awaits to be recognised for its achievements. These achievements are the recognition of value-based initiatives (Entrepreneurship, Care, Collaboration and Operational Excellence) undertaken by an individual or by a team.",
			},
			{
				name: "Employee friendly Policies",
				image: lifeCard5,
				desc: (
					<div>
						<p>
							Our employee friendly working practices support all employees to
							balance/combine their working life with their social, health,
							family and other responsibilities or aspirations. Some of the
							policies include
						</p>
						<ol>
							<li>
								Insurance – comprehensive medical, term and accidental coverage
								for employees and immediate medical coverage extending to the
								immediate family
							</li>
							<li>
								Annual Medical Check-up - help address any medical concerns at
								an early stage
							</li>
							<li>
								House Building Loan Scheme – supports your dream of acquiring an
								asset in the form of a residential accommodation at the place of
								employment or other locations in India.
							</li>
							<li>
								White Goods Advance Loan – provides freedom to buy white goods
							</li>
						</ol>
					</div>
				),
			},
		],
	};
	nameToUrl = (name) => name.split(" ").join("_").toLowerCase();
	render() {
		return (
			<NuvocoLifeContext.Provider
				value={{ ...this.state, nameToUrl: this.nameToUrl }}
			>
				{this.props.children}
			</NuvocoLifeContext.Provider>
		);
	}
}

export default NuvocoLifeC;
