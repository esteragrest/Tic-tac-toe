export const setField = (newField) => {
	return {
		type: 'SET_FIELD',
		payload: newField,
	};
};
