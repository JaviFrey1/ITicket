import {
  GET_EVENTS,
  ADD_EVENT_WISHLIST,
  REMOVE_EVENT_WISHLIST,
  GET_EVENT_DETAIL,
  GET_CATEGORIES,
  GET_SUBCATEGORIES,
  ADD_EVENT,
  REMOVE_EVENT,
} from "../actions";

const initialState = {
  eventsLoaded: [],
  allEvents: [],
  wishEvents: [],
  eventDetail: "",
  subCategories:[],
  categories: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        eventsLoaded: action.payload,
        allEvents: action.payload,
      };
    case REMOVE_EVENT:
      return {
        ...state,
        eventsLoaded: state.eventsLoaded.filter(
          (e) => e.id !== action.payload
        ),
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
      case GET_SUBCATEGORIES:
        return {
          ...state,
          subCategories: action.payload,
        };
    case ADD_EVENT:
      return {
        ...state,
      };
    case GET_EVENT_DETAIL:
      return {
        ...state,
        eventDetail: action.payload,
      };
    
      case ADD_EVENT_WISHLIST:
      return {
        ...state,
        wishEvents: [action.payload, ...state.wishEvents],
      };
    case REMOVE_EVENT_WISHLIST:
      return {
        ...state,
        wishEvents: state.wishEvents.filter(
          (we) => we.id !== action.payload
        ),
      };


    default:
      return state;
  }
}
