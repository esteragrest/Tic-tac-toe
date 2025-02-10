import { ACTION_TYPES } from './action-types';
export const setField = (newField) => {
	return {
		type: ACTION_TYPES.SET_FIELD,
		payload: newField,
	};
};
