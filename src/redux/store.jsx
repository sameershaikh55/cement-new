import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// IMPORTING REDUCERS
import financialInformationRed from "./financialInformation/reducer";
import productDetailsRed from "./productDetails/reducer";
import corporateGovernanceRed from "./corporateGovernance/reducer";
import mediaRelationsRed from "./mediaRelations/reducer";
import environmentRed from "./enviroment/reducer";
import healthSafetyRed from "./healthSafty/reducer";
import csrRed from "./corporateResponsibility/reducer";
import partnerRelationsRed from "./partnerRelations/reducer";
import manufacturingRed from "./manufacturingUnits/reducer";
import managementRed from "./managementTeam/reducer";
import boardCommitteeRed from "./boardCommitte/reducer";
import boardDirectorsRed from "./boardDirectors/reducer";
import corporateOfficeRed from "./coorporateOffice/reducer";
import nuvocoGlanceRed from "./nuvocoGlance/reducer";
import covidRed from "./covid/reducer";
import mvRed from "./missionVission/reducer";
import awardsRed from "./awards/reducer";
import innovationCentreRed from "./innovationCentre/reducer";
import homeRed from "./home/reducer";
import icRed from "./investorContact/reducer";
import contactRed from "./contact/reducer";
import menuRed from "./menu/reducer";
import landmarkRed from "./landmark/reducer";
import buildingRed from "./homeBuilding/reducer";
import sustainabilityRed from "./sustainability/reducer";

const middleware = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
	financialInformationRed,
	productDetailsRed,
	corporateGovernanceRed,
	mediaRelationsRed,
	environmentRed,
	healthSafetyRed,
	csrRed,
	partnerRelationsRed,
	manufacturingRed,
	managementRed,
	boardCommitteeRed,
	boardDirectorsRed,
	corporateOfficeRed,
	nuvocoGlanceRed,
	covidRed,
	mvRed,
	awardsRed,
	innovationCentreRed,
	homeRed,
	icRed,
	contactRed,
	menuRed,
	landmarkRed,
	buildingRed,
	sustainabilityRed,
});

const store = createStore(rootReducer, middleware);
export default store;
