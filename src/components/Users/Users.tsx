import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { following, requestUsers, unfollowing } from "../../api/thunkMW/thunk-users"
import { IUser } from "../../interfaces/interfaces"
import { FilterType } from "../../redux/reducers/users-reducer"
import { DispatchType } from "../../redux/redux-store"
import {
    getCurrentPage, getFilter, getFollowingInProgress,
    getIsFetching, getPageSize, getTotalItemsCount, getUsers
} from "../../redux/selectors/users-selectors"
import style from "../Users/Users.module.scss"
import Paginator from "../common/Paginator/Paginator"
import Preloader from "../common/Preloader/Preloader"
import User from "./User"
import { UsersSearchForm } from "./UsersSearchForm"

export const Users: React.FC<IProps> = React.memo((props) => {
    const users = useSelector(getUsers);
    const filter = useSelector(getFilter);
    const pageSize = useSelector(getPageSize);
    const isFetching = useSelector(getIsFetching);
    const currentPage = useSelector(getCurrentPage);
    const totalItemsCount = useSelector(getTotalItemsCount);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch: DispatchType = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams(location.search);

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    };
    const follow = (userId: number) => {
        dispatch(following(userId));
    };
    const unfollow = (userId: number) => {
        dispatch(unfollowing(userId));
    };
    
    useEffect(() => {
        console.log("component mount")
        const parsed = Object.fromEntries([...searchParams]);
        let actualPage = currentPage;
        let actualFilter = filter;
        
        if(!!parsed.page) actualPage = Number(parsed.page);
        if(!!parsed.term) actualFilter = {...actualFilter, 
                                         term: parsed.term as string};
        if(parsed.friend) actualFilter = {...actualFilter, 
                                         friend: parsed.friend === "null" ? null 
                                                                          : parsed.friend === "true"};
        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, []);

    useEffect(() => {
        navigate({
            pathname: "/users",
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage]);
    
    return (
            <div className={style.pageUsers}>
                <UsersSearchForm onFilterChanged = {onFilterChanged}/>
                <>
                {isFetching ? <Preloader/> 
                            : <>
                                <Paginator onPageChanged={onPageChanged} pageSize={pageSize}
                                           totalItemsCount={totalItemsCount} currentPage={currentPage} />
                                <div className={style.users}>
                                        { users.map((user: IUser) => {const isFollowingInProgress = 
                                                                        followingInProgress.some((id: number) => id === user.id);

                                        return <User isFollowingInProgress={isFollowingInProgress} unfollow={unfollow}
                                                    follow={follow}  user={user} key={user.id} />
                                        })}
                                </div>
                              </>}
                </>
            </div>
    );
});

interface IProps {
   
};
