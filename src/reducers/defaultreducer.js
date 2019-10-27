import { TYPE_NAME } from '../Actions/defaultActions';

const initialState = {

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_NAME:
      return { ...state, ...payload };

    default:
      return state;
  }
};
