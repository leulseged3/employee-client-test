import { employee } from "./employeeType"

// For Action Creator

export interface deleteEmployeeAction {
	type: "DELETE_EMPLOYEE";
	id: string;
}

export interface createEmployeeAction {
	type: "CREATE_EMPLOYEE";
	employee: employee;
}

export interface getEmployees {
	type: "GET_EMPLOYEES";
}

// For Reducers
export interface createdEmployeeAction {
	type: "CREATED_EMPLOYEE";
	employee: employee;
}

export interface deletedEmployeeAction {
	type: "DELETED_EMPLOYEE";
	id: string;
}

export interface gotEmployees {
	type: "GOT_EMPLOYEES";
	employees: employee[];
}

export const actionIds = {
	DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
	CREATE_EMPLOYEE: "CREATE_EMPLOYEE",
	GET_EMPLOYEES: "GET_EMPLOYEES",
};
