import { Dispatch } from "redux"
import { ActionsUsersTypes, FilterType, actionsUsers } from "../../redux/reducers/users-reducer"
import { BaseThunkActionType } from "../../redux/redux-store"
import { ResultCodes } from "../api"
import { usersAPI } from "../users-api"

export const requestUsers = (pageNumber: number, pageSize: number, filter: FilterType): ThunkActionType => async (dispatch) => {
      try {
        dispatch(actionsUsers.toggleIsFetching(true));
        dispatch(actionsUsers.setCurrentPage(pageNumber));
        dispatch(actionsUsers.setFilter(filter));

        const data = await usersAPI.getUsers(pageNumber, pageSize, filter.term, filter.friend);
      
        dispatch(actionsUsers.setCurrentPage(pageNumber));
        dispatch(actionsUsers.toggleIsFetching(false));
        dispatch(actionsUsers.setUsers(data.items));
        dispatch(actionsUsers.setTotalItemsCount(data.totalCount));
      }
      catch(error) {
        //processing some error
      };
};
  
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsUsersTypes>, userId: number, 
                                   apiMethod: (userId: number) => Promise<ResponseType>, 
                                   actionCreator: ActionCreatorType ) => {
    try {
      dispatch(actionsUsers.toggleFollowingProgress(true, userId));
      
      const data = await apiMethod(userId);
    
      switch(data.resultCode as ResultCodes){
        case ResultCodes.Success:
        dispatch(actionCreator(userId));
      }
        dispatch(actionsUsers.toggleFollowingProgress(false, userId));
    }
    catch(error) {
      //processing some error
    };
};
  
export const following = (userId: number): ThunkActionType => async (dispatch) => {
    try {
      await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actionsUsers.followSuccess);
    }
    catch(error) {
      //processing some error
    };
};
  
export const unfollowing = (userId: number): ThunkActionType => async (dispatch) => {
    try {
      await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actionsUsers.unfollowSuccess);
    }
    catch(error) {
      //processing some error
    };
};

type ThunkActionType = BaseThunkActionType<ActionsUsersTypes>;
type ActionCreatorType = (userId: number) => ActionsUsersTypes;