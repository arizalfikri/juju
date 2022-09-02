import { DATA, FETCH_ONE_DATA } from "../actions/actionType";
let initialState = {
  data: [],
  oneData: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_ONE_DATA:
      return {
        ...state,
        oneData: action.payload,
      };
    default:
      return state;
  }
}
