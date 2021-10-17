import React, { Component, createContext } from "react";
import p1 from "../assets/manufacturingUnits/01 - Bhabua Cement Plant, Bihar.jpg";
import p2 from "../assets/manufacturingUnits/02 - Arasmeta Cement Plant, Chhattisgarh.jpg";
import p3 from "../assets/manufacturingUnits/03 - Sonadih Cement Plant, Chhattisgarh.JPG";
import p4 from "../assets/manufacturingUnits/04 Risda Cement Plant, Chhattisgarh.jpg";
import p5 from "../assets/manufacturingUnits/05 - Bhiwani Cement Plant, Haryana (1).jpg";
import p6 from "../assets/manufacturingUnits/06 - Jojobera Cement Plant, Jharkhand.jpg";
import p7 from "../assets/manufacturingUnits/07 - Jajpur Cement Plant, Odisha.jpg";
import p8 from "../assets/manufacturingUnits/08 - Chittor Cement Plant, Rajasthan.jpeg";
import p9 from "../assets/manufacturingUnits/09 - Nimbol Cement Plant, Rajasthan.jpg";
import p10 from "../assets/manufacturingUnits/10 - Mejia Cement Plant, West bengal.jpeg";
import p11 from "../assets/manufacturingUnits/11 - Panagarh Cement Plant, West Bengal.jpg";

export const ManufacturingUnits = createContext();

class ManufacturingUnitsContext extends Component {
	state = {
		units: [
			{
				img: p1,
				name: "Bhabua Cement Plant",
				desc: "The grinding unit at Bhabua in Bihar was acquired in 2018 from Eco Cements, with an initial cement production capacity of 0.6 MMTPA. As of December 31, 2020, the Bhabua Cement Plant had an aggregate cement production capacity of 0.8 MMTPA. We are undertaking a capacity expansion exercise at the Bhabua Cement Plant to increase its capacity to 2 MMTPA. The Bhabua  Cement Plant is supplied with clinker from the manufacturing facilities at Risda. We meet our energy requirement for the Bhabua Cement Plant through the state electricity grid.",
			},
			{
				img: p2,
				name: "Arasmeta Cement Plant",
				desc: "The integrated unit at Arasmeta in Chhattisgarh had an initial cement production capacity of 0.4 MMTPA. As of December 31, 2020, our Arasmeta facility had an aggregate cement and clinker production capacity of 1.89 MMTPA and 1.66 MMTPA, respectively. We source limestone for the Arasmeta Cement Plant from the Arasmeta mines, Kirari mines and Chilhati mines. Gypsum for the Arasmeta Cement Plant is procured from domestic suppliers, whilst fly ash is procured from nearby power plants (coal-fired) and steel manufacturing facilities. The fuel requirements are met by procuring coal and pet coke from domestic and international markets. The power requirements are primarily met from the local state power grid and a 7 MW WHR system, which was commissioned in 2019. We have 21 railway lines with a total length of 29 kms at the Arasmeta Cement Plant. We have 18.5 kms of railway tracks inside the plant and 10.5 kms outside the plant. We use two of the railway lines for raw material unloading, and 10 of the railway lines for our packing plant at the Arasmeta Cement Plant.",
			},
			{
				img: p3,
				name: "Sonadih Cement Plant",
				desc: "The integrated unit at Raseda, Sonadih village in Chhattisgarh was acquired from a steel manufacturer in 1999, with an initial cement production capacity of 0.30 MMTPA. As of December 31, 2020, our Sonadih Cement Plant had an aggregate cement and clinker production capacity of 0.65 MMTPA and 3.30 MMTPA, respectively. We source limestone for this facility from the Sonadih mines. Gypsum for this facility is procured from Coromandel International Limited. Fly ash for this facility is procured from nearby power plants (coal-fired). The fuel requirements are met by procuring coal from a domestic coal producer and pet coke from domestic and international markets. The power requirements are primarily met from the local state power grid and our 25MW captive power plant, which was commissioned at the Sonadih Cement Plant in 2020, and a 11 MW WHR system which was commissioned during February 2020. We have four railway lines with a total track length of 26.1 kms at this plant.",
			},
			{
				img: p4,
				name: "Risda Cement Plant",
				desc: "The integrated unit at Risda in Chhattisgarh was commissioned in 2016, with an initial cement production capacity of 2.5 MMTPA. As of December 31, 2020, the Risda Cement Plant had an aggregate cement and clinker production capacity of 3.0 MMTPA and 3.2 MMTPA, respectively. We source limestone for the Risda Cement Plant from a mine of 222.13 MT limestone reserve located in the Risda mines. The Risda mines is located adjacent to the Risda Cement Plant, where we operate a fully mechanised, open-cast mine, and are able to extract sufficient quantities of limestone for our current clinker production requirements. At this facility, we have a 30 MW captive coal-based power plant and a 15 MW waste heat recovery system. We source almost all of our electrical energy requirement for the Risda Cement Plant from the captive power plant and waste heat recovery system. We are also connected to the state electricity grid.",
			},
			{
				img: p5,
				name: "Bhiwani Cement Plant",
				desc: "The blending unit at Bhiwani in Haryana was commissioned in 2013. As of December 31, 2020, our Bhiwani Cement Plant had an aggregate cement production capacity of 0.50 MMTPA. PPC cement is blended at the Bhiwani Cement Plant. Our Bhiwani Cement Plant is supplied with OPC internally from the Chittorgarh Cement Plant and from the Nimbol Cement Plant. Fly ash is sourced from various coal-fired power plants. The power requirements are met through solar power panels at the plant commissioned in 2020, and through state electricity board, as well as through local state power grids, and purchases of power that are made through energy exchanges.",
			},
			{
				img: p6,
				name: "Jojobera Cement Plant",
				desc: "The grinding unit at Jojobera in Jamshedpur, Jharkhand was acquired in 1999, with an initial cement production capacity of 1.43 MMTPA. As of December 31, 2020, the Jojobera Cement Plant had an aggregate cement production capacity of 4.95 MMTPA, and we are undertaking a capacity expansion to increase its capacity to 6.45 MTPA. Our Jojobera Cement Plant is supplied with clinker from our manufacturing facilities at Sonadih and Arasmeta. Gypsum for the Jojobera Cement Plant is procured from local vendors, Paradeep Phosphates Limited and Kay Kay Trading Company. Fly ash is exclusively sourced from the local power plant (coal-fired) and an electric utility company, whilst slag is sourced from a steel manufacturer, both of which are located adjacent to the Jojobera Cement Plant and the open market. The power requirements are met through the power plant belonging to the electric utility company, which is located adjacent to the plant.",
			},
			{
				img: p7,
				name: "Jajpur Cement Plant",
				desc: "The grinding unit at Jajpur in Odisha was commissioned in 2018 while commercial production commenced in March 2020, with an initial cement production capacity of 2 MMTPA. As of December 31, 2020, the Jajpur Cement Plant had an aggregate cement production capacity of 2 MMTPA. The Jajpur Cement Plant is supplied with clinker from the manufacturing facilities at Risda. We meet our energy requirement for the Jajpur Cement Plant through the state electricity grid.",
			},
			{
				img: p8,
				name: "Chittorgarh Cement Plant",
				desc: "The integrated unit at Bhawaliya, Chittorgarh in Rajasthan was commissioned in 2013, with an initial cement production capacity of 2.1 MMTPA. As of December 31, 2020, our Chittorgarh Cement Plant had an aggregate cement and clinker production capacity of 2.1 MMTPA and 1.94 MMTPA, respectively. We primarily source limestone for this facility from the Arniya Joshi mines and Sita Ram Ji Ka Khera mines, which are near our Chittorgarh Cement Plant. In addition, certain amounts of high-grade limestone are also sourced from the market. The requirement for gypsum is met via the Jahnavi Minerals and Novel Spent Acid Management, whilst fly ash is sourced from the local coal fired power plants. Fuel requirements are met by sourcing South African coal and petcoke from domestic and international markets. The power requirements are primarily met from the local state power grid, our own captive power plant of 25 MW and a 7 MW WHR system which was installed at the Chittorgarh Cement Plant in 2019. We have three railway lines, with a total track length of 10.1 kms, and a 0.78 km loading platform at this plant for transport, loading and unloading of raw materials and finished products.",
			},
			{
				img: p9,
				name: "Nimbol Cement Plant",
				desc: "The integrated unit at Nimbol in Rajasthan commenced operations in 2014, with an initial cement production capacity of 2.28 MMTPA. As of December 31, 2020, our Nimbol Cement Plant had an aggregate cement and clinker production capacity of 2.28 MMTPA and 1.48 MMTPA, respectively. We primarily source limestone for this facility from the Sinla mines and Digrana mines, which are close to our Nimbol Cement Plant. The gypsum requirement is met via procurement from imports and local vendors. Fly ash is sourced from power plants, while fuel requirements are met by sourcing coal and petcoke from domestic and international markets. The power requirements are primarily met from our own captive power plant of 25 MW, the local state power grid and a 4.7 MW WHR system-based power generation unit located at the plant.",
			},
			{
				img: p10,
				name: "Mejia Cement Plant",
				desc: "The grinding unit at Nandanpur, Mejia in West Bengal was commissioned in 2009, with an initial cement production capacity of 1.0 MMTPA. As of December 31, 2020, the Mejia Cement Plant had an aggregate cement production capacity of 1.65 MMTPA. The Mejia Cement Plant is supplied with clinker from our manufacturing facilities at Sonadih and Arasmeta. Gypsum for the Mejia Cement Plant is procured from local vendor, Paradeep Phosphates Limited. Fly ash is sourced from a coal-fired power plant, which is located adjacent to the Mejia Cement Plant. The power requirements are met through sourcing from a power plant belonging to a governmental organisation and local state power grid.",
			},
			{
				img: p11,
				name: "Panagarh Cement Plant",
				desc: "The grinding unit at Panagarh in West Bengal was commissioned in 2017, with an initial cement production capacity of 2 MMTPA. As of December 31, 2020, the Panagarh Cement Plant had an aggregate cement production capacity of 2.5 MMTPA. The Panagarh Cement Plant is supplied with clinker from the manufacturing facilities at Risda. The Panagarh Cement Plant is located approximately 150 kms from Kolkata, which is the capital of West Bengal. We commissioned a railway siding at the Panagarh Cement Plant in September 2018. We meet our energy requirement for this plant through connection to the state electricity grid. We have 5 railway lines at the Panagarh Cement Plant.",
			},
		],
	};
	nameToUrl = (name) => name.split(" ").join("_").toLowerCase();
	render() {
		return (
			<ManufacturingUnits.Provider
				value={{ ...this.state, nameToUrl: this.nameToUrl }}
			>
				{this.props.children}
			</ManufacturingUnits.Provider>
		);
	}
}

export default ManufacturingUnitsContext;
