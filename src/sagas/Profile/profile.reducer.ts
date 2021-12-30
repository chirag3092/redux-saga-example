import { PROFILE_GET_INFO_LOADING_STATE, PROFILE_GET_INFO_DATA_STATE, PROFILE_ADD_USER_STATE } from './profile.actionTypes';
import { ProfileState } from './profile.types';

const initialState: ProfileState = {
  loading: true,
  profile: [],
};
const profileReducer = (state = initialState, action: any): ProfileState => {
  switch (action.type) {
    case PROFILE_GET_INFO_LOADING_STATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case PROFILE_GET_INFO_DATA_STATE: {
      return {
        ...state,
        loading: false,
        profile: [
          {
            id: 1,
            name: 'Chirag',
            age: 29,
          },
        ],
      };
    }
    case PROFILE_ADD_USER_STATE: {
      return {
        ...state,
        loading: false,
        profile: [
          ...state.profile,
          {
            id: Math.random(),
            name: 'Test',
            age: '30',
          },
        ],
      };
    }
    default:
      return state;
  }
};
export default profileReducer;
