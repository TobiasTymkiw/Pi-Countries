import { actions } from "../actions";
const {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  GET_ALL_ACTIVITIES,
  POST_ACTIVITY,
  BY_NAME_ASC,
  BY_NAME_DESC,
  BY_MAX_POPULATION,
  BY_MIN_POPULATION,
  BY_CONTINENT,
  FILTER_BY_ACTIVITIES,
  SET_CURRENT_PAGE,
  COUNTRY_ACTIVITY,
} = actions;

const initialState = {
  allCountries: [],
  allActivities: [],
  backUpCountries: [],
  country: [],
  byNameCountries: [],
  currentPage: 1,
  countryActivty: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_ACTIVITY:
      return { ...state, countryActivty: action.payload };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        byNameCountries: [],
        country: [],
        backUpCountries: action.payload,
        currentPage: 1,
      };
    case GET_COUNTRIES_BY_NAME:
      if (action.payload) {
        return { ...state, byNameCountries: action.payload };
      } else {
        return { ...state, byNameCountries: [] };
      }
    case GET_COUNTRY_BY_ID:
      return { ...state, country: action.payload };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case BY_NAME_ASC:
      return {
        ...state,
        allCountries: action.payload,
        currentPage: 1,
      };
    case BY_NAME_DESC:
      return {
        ...state,
        allCountries: action.payload,
        currentPage: 1,
      };
    case BY_MAX_POPULATION:
      return {
        ...state,
        allCountries: action.payload,
        currentPage: 1,
      };
    case BY_MIN_POPULATION:
      return {
        ...state,
        allCountries: action.payload,
        currentPage: 1,
      };
    case BY_CONTINENT:
      return {
        ...state,
        allCountries: action.payload,
        currentPage: 1,
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: action.payload,
        currentPage: 1,
      };
    case FILTER_BY_ACTIVITIES:
      if (action.payload.length) {
        const selectedActivities = action.payload;
        const filterActivities = state.backUpCountries.filter((country) => {
          return selectedActivities.every((i) =>
            country.activities.map((activity) => activity.name).includes(i)
          );
        });
        return {
          ...state,
          allCountries: filterActivities,
          currentPage: 1,
        };
      } else {
        return {
          ...state,
          allCountries: state.backUpCountries,
          currentPage: 1,
        };
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
