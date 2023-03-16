import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/objects-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_ITEMS_COUNT = "SET_TOTAL_ITEMS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users:  [],
  pageSize: 10,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case FOLLOW:
        return {
            ...state,
            users: updateObjectInArray(state.users, action.payload, "id", {followed: true}),
    }
    case UNFOLLOW: 
        return {
            ...state,
            users: updateObjectInArray(state.users, action.payload, "id", {followed: false}),
    }
    case SET_USERS:
        return {
                ...state,
                users: action.payload,
            } 
    case SET_CURRENT_PAGE:
        return {
                ...state,
                currentPage: action.payload,
            }
    case SET_TOTAL_ITEMS_COUNT:
        return {
                ...state,
                totalItemsCount: action.payload,
              }
    case TOGGLE_IS_FETCHING:
        return {
                ...state,
                isFetching: action.payload,
              }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
                ...state,
                followingInProgress: action.payload.isFetching
                ? [...state.followingInProgress, action.payload.userId] 
                : state.followingInProgress.filter(id => id !== action.payload.userId),
              }
    default:
      return state;
  }
    
};

export const followSuccess = (userId) => ({ type: FOLLOW, payload: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, payload: userId });
export const setUsers = (users) => ({ type: SET_USERS, payload: users });
export const setCurrentPage = (currentPage) => ({ type:SET_CURRENT_PAGE, payload: currentPage });
export const setTotalItemsCount = (totalItemsCount) => ({ type:SET_TOTAL_ITEMS_COUNT, payload: totalItemsCount });
export const toggleIsFetching = (isFetching) => ({ type:TOGGLE_IS_FETCHING, payload: isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type:TOGGLE_IS_FOLLOWING_PROGRESS, payload: {isFetching, userId } });

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const data = await usersAPI.getUsers(page, pageSize);

  dispatch(setCurrentPage(page));
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalItemsCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator ) => {
  dispatch(toggleFollowingProgress(true, userId));
    
  const data = await apiMethod(userId);

  if (data.resultCode === 0){
    dispatch(actionCreator(userId));
  }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}

export default usersReducer;