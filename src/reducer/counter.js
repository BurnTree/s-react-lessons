import {INCREMENT} from "../constant";

export default (count = 0, action) =>{
    const {type} = action
    switch (type){
        case {INCREMENT}: return count + 1
    }
    return count
}
