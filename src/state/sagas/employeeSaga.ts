import { takeEvery, put, call, StrictEffect} from 'redux-saga/effects'
import { actionIds } from '../types/actionsTypes'
import employeeApi from '../api'
import { AxiosResponse } from 'axios'

import {
    createdEmployeeAction,
    deletedEmployeeAction,
    gotEmployees,
    createEmployeeAction,
    deleteEmployeeAction,
} from '../types/actionsTypes'

function* employeeSaga(): Generator<StrictEffect> {
    yield takeEvery(actionIds.CREATE_EMPLOYEE, createEmployeeWorker)
    yield takeEvery(actionIds.DELETE_EMPLOYEE, deleteEmployeeWorker)
    yield takeEvery(actionIds.GET_EMPLOYEES, getEmployeesWorker)

}

function* createEmployeeWorker({ employee }: createEmployeeAction) {
    try {
        const response: AxiosResponse = yield call(employeeApi.post, "/", employee)
        switch(response.status) {
            case 201:
                const data: createdEmployeeAction = {
                    type: "CREATED_EMPLOYEE",
                    employee: response.data.newEmploy
                }
                yield put(data)
        }
    } catch (error) {
        
    }
}

function* deleteEmployeeWorker({ id }: deleteEmployeeAction) {
	try {
		const response: AxiosResponse = yield call(employeeApi.delete, `/${id}`);
		switch (response.status) {
			case 200:
				const data: deletedEmployeeAction = {
					type: "DELETED_EMPLOYEE",
					id,
				};
				yield put(data);
		}
	} catch (err) {}
}


function* getEmployeesWorker() {
	try {
		const response: AxiosResponse = yield call(employeeApi.get, "/");
		switch (response.status) {
			case 200:
				const data: gotEmployees = {
					type: "GOT_EMPLOYEES",
					employees: response.data.employees,
				};
				yield put(data);
		}
	} catch (err) {}
}

export default employeeSaga