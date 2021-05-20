import {
	createEmployeeAction,
	deleteEmployeeAction,
	getEmployees
} from "./actionsTypes";
import { employee } from "./employeeType";


export type deleteEmployeeActionCreator = (id: string) => deleteEmployeeAction;

export type createEmployeeActionCreator = (newEmployee: employee,) => createEmployeeAction;

export type getEmployeesActionCreator = () => getEmployees;
