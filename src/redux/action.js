import { SET_VISIBILITY_FILTER } from "./types";
const requet = (data) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: data
    }
}
const load = () => {
    return distpath => {
        distpath(requet('HUY'))
    }
}