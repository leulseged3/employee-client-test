import { Reducer } from "redux";
import { employee  } from "../types/employeeType";
import {
	createdEmployeeAction,
	deletedEmployeeAction,
	gotEmployees,
} from "../types/actionsTypes";

type actions =
	| createdEmployeeAction
	| deletedEmployeeAction
	| gotEmployees


const initialState: employee[] = [];

const employeeReducer: Reducer<employee[], actions> = (state = initialState,action) => {
	switch (action.type) {
		case "CREATED_EMPLOYEE":
			return [...state, action.employee];
		case "DELETED_EMPLOYEE":
			return [...state.filter((employee) => employee._id !== action.id)];
		case "GOT_EMPLOYEES":
			return [...state, ...action.employees];
		default:
			return [...state];
	}
};

export default employeeReducer;