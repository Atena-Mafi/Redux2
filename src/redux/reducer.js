import {produce} from 'immer';
const initialState={total:0,count:0};


 export const reducer=produce((draft,action)=>{


    switch (action.type) {
        case "SUM":
            draft.total+=action.payload
            draft.count+=1
            break;
    
        default:
            break;
    }


},initialState);

