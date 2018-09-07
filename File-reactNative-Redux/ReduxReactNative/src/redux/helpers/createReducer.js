export default function createReducer(initialState, handles) {
    return function reducer(state = initialState, action) {
        if(handles.hasOwnProperty(action.type)) {
            return handles[action.type](state, action);
        }
        return state;
    }
}