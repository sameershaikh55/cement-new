import React, { Component, createContext } from "react";

// IMPORTING IMAGES
import director1 from "../assets/director1.png";
import director2 from "../assets/director2.png";
import director3 from "../assets/director3.png";
import director5 from "../assets/director5.png";
import director6 from "../assets/director6.png";

export const Board = createContext();
class BoardContext extends Component {
	state = {
		boards: [
			{
				name: "Mr. HIREN PATEL",
				img: director1,
				role: "Chairman",
			},
			{
				name: "Mrs. Bhavna Doshi",
				img: director2,
				role: "Independent Director & Women Director",
			},
			{
				name: "Mr. Berjis Desai",
				img: director3,
				role: "Independent Director",
			},
			{
				name: "Mr. Achal Bakeri",
				img: director5,
				role: "Independent Director",
			},
			{
				name: "Mr. Kaushikbhai Patel",
				img: director5,
				role: "Non-Executive Director",
			},
			{
				name: "MR. Jayakumar Krishnaswamy",
				img: director6,
				role: "Managing Director",
			},
		],
	};
	nameToUrl = (name) => name.split(" ").join("_").toLowerCase();
	render() {
		return (
			<Board.Provider value={{ ...this.state, nameToUrl: this.nameToUrl }}>
				{this.props.children}
			</Board.Provider>
		);
	}
}

export default BoardContext;
