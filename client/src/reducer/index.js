import {
  GET_EVENTS,
  GET_CATEGORIES,
  GET_USER_DETAIL,
  GET_EVENT_DETAIL,

  GET_SUBCATEGORIES,
  ADD_EVENT,
  BULK_EVENTS,
  REMOVE_EVENT,
  FILTER_CAT, //Javi
  FILTER_DATE,
  FILTER_SUBCAT,
  FILTER_ADDRESS,
  UPDATE_EVENTS,
  UPDATE_USER_PASS,
  DELETE_EVENT,
  POST_TICKETS,
  UPDATE_AVAILABLE,
  USER_DATA,
  GET_TICKETS,
  UPDATE_TICKET,
  USER_LOGOUT,
  MERCADO_PAGO,
  DELETE_USER,
  USER_REGISTER,
  USER_LOGIN
} from "../actions";
import { loadState } from "../localStorage";

const persistedState = loadState(); //Javi

const initialState = {
  eventsLoaded: [],
  allEvents: [],
  wishEvents: [],
  eventDetail: "",
  subCategories: [],
  categories: [],

  userDetail: "",
  persistedState,
  activeUser: '',
  tickets: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        eventsLoaded: action.payload,
        allEvents: action.payload,
      };
    case BULK_EVENTS:
      return {
        ...state,
      };
    case REMOVE_EVENT:
      return {
        ...state,
        eventsLoaded: state.eventsLoaded.filter((e) => e.id !== action.payload),
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
    case DELETE_EVENT:
      return {
        ...state,
      };
    case GET_EVENT_DETAIL:
      return {
        ...state,
        eventDetail: action.payload,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };

    case FILTER_CAT: //Javi
      return {
        ...state,
        eventsLoaded: action.payload,
      };
    case FILTER_SUBCAT:
      return {
        ...state,
        eventsLoaded: action.payload,
      };
    case FILTER_DATE:
      return {
        ...state,
        eventsLoaded: action.payload,
      };
    case FILTER_ADDRESS:
      return {
        ...state,
        eventsLoaded: action.payload,
      };
    case UPDATE_EVENTS:
      return {
        ...state,
      };
    case UPDATE_USER_PASS:
      return {
        ...state,
        userDetail: action.payload,
      };
    case POST_TICKETS:
      return {
        ...state,
      };
    case UPDATE_AVAILABLE:
      return {
        ...state,

      }
    case USER_DATA:
      return {
        ...state,
        activeUser: action.payload
      }
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...action.payload],
      };
    case UPDATE_TICKET:
      return {
        ...state,
      };
    case USER_LOGOUT:
      return {
        ...state,
        activeUser: ''
      };

    case MERCADO_PAGO:
      return {
        ...state
      }


    case DELETE_USER:
      return {
        ...state,
        activeUser: '',
        userDetail: ''
      }
      case USER_REGISTER:
      return {
        ...state,
      };
    case USER_LOGIN:
      return {
        ...state,
      }

    default:
      return state;
  }
}

