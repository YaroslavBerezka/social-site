import { IUser } from "../interfaces/interfaces"

export const updateObjectInArray = (items: IUser[], 
                                    itemId: number, 
                                    objPropName: string, 
                                    newObjProps: {followed: boolean}) => {

    return items.map((u: any) => {
                if(u[objPropName] === itemId) {
                return {...u, ...newObjProps}
                }
                return u;
    });
};

