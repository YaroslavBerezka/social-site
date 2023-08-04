import { IResponse, ResultCodes } from "../api/api"
import { following, unfollowing } from "../api/thunkMW/thunk-users"
import { usersAPI } from "../api/users-api"
import { actionsUsers } from "../redux/reducers/users-reducer"

jest.mock("../api/users-api");
const usersApiMock = usersAPI as jest.Mocked<typeof usersAPI>;
const result: IResponse = {
    resultCode: ResultCodes.Success,
    messages: [],
    data: {}
};
const dispatchMock =  jest.fn();
const getStateMock =  jest.fn();
beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    usersApiMock.follow.mockClear();
    usersApiMock.unfollow.mockClear();
});

test("follow thunk success", async () => { 
    usersApiMock.follow.mockReturnValue(Promise.resolve(result));
    const thunk = following(1);

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsUsers.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsUsers.followSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsUsers.toggleFollowingProgress(false, 1));
});
test("unfollow thunk success", async () => { 
    usersApiMock.unfollow.mockReturnValue(Promise.resolve(result));
    const thunk = unfollowing(1);

    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsUsers.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsUsers.unfollowSuccess(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsUsers.toggleFollowingProgress(false, 1));
})