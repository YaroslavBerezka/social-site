import { IUser } from "../../interfaces/interfaces"
import { updateObjectInArray } from "../../utils/objects-helpers"
import { InferActionsTypes } from "../redux-store"

const initialState = {
  users:  [] as IUser[] ,
  pageSize: 10,
  totalItemsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as number[],
  filter: {
    term: "",
    friend: null as null | boolean 
  }
};

export const usersReducer = (state = initialState, action: ActionsUsersTypes): InitialStateType => {
  
  switch(action.type) {
    case "users/FOLLOW":
        return {
            ...state,
            users: updateObjectInArray(state.users, action.payload.userId, "id", {followed: true}),
    }
    case "users/UNFOLLOW": 
        return {
            ...state,
            users: updateObjectInArray(state.users, action.payload.userId, "id", {followed: false}),
    }
    case "users/SET_USERS":
        return {
                ...state,
                users: action.payload.users,
            } 
    case "users/SET_CURRENT_PAGE":
        return {
                ...state,
                currentPage: action.payload.currentPage,
            }
    case "users/SET_TOTAL_ITEMS_COUNT":
        return {
                ...state,
                totalItemsCount: action.payload.totalItemsCount,
              }
    case "users/TOGGLE_IS_FETCHING":
        return {
                ...state,
                isFetching: action.payload.isFetching,
              }
    case "users/TOGGLE_IS_FOLLOWING_PROGRESS":
        return {
                ...state,
                followingInProgress: action.payload.isFetching
                ? [...state.followingInProgress, action.payload.userId] 
                : state.followingInProgress.filter(id => id !== action.payload.userId),
              }
    case "users/SET_FILTER": 
        return {
                ...state,
                filter: action.payload.filter
        }
    default:
      return state;
  };   
};

export const actionsUsers = {
  followSuccess: (userId: number) => ({ type: "users/FOLLOW", payload: {userId} } as const),
  unfollowSuccess: (userId: number) => ({ type: "users/UNFOLLOW", payload: {userId} } as const),
  setUsers: (users: IUser[]) => ({ type: "users/SET_USERS", payload: {users} } as const),
  setCurrentPage: (currentPage: number) => ({ type:"users/SET_CURRENT_PAGE", payload: {currentPage} } as const),
  setTotalItemsCount: (totalItemsCount: number) => ({ type:"users/SET_TOTAL_ITEMS_COUNT", 
                                                      payload: {totalItemsCount} } as const),
  setFilter: (filter: FilterType) => ({type: "users/SET_FILTER", payload: {filter}} as const),
  toggleIsFetching: (isFetching: boolean) => ({ type:"users/TOGGLE_IS_FETCHING", payload: {isFetching} } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",
                                                                       payload: {isFetching, userId } } as const)
};

export default usersReducer;

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
export type ActionsUsersTypes = InferActionsTypes<typeof actionsUsers>;