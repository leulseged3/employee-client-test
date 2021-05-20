import {
	deleteEmployeeActionCreator,
	createEmployeeActionCreator,
	getEmployeesActionCreator
} from "../types/actionCreaterTypes";

export const deleteEmployee: deleteEmployeeActionCreator = (id) => {
	return {
		type: "DELETE_EMPLOYEE",
		id,
	};
};

export const createEmployee: createEmployeeActionCreator = (newEmploy) => {
	return {
		type: "CREATE_EMPLOYEE",
		employee:newEmploy
	};
};

export const getEmployees: getEmployeesActionCreator = () => {
	return {
		type: "GET_EMPLOYEES",
	};
};
