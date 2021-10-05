export const GET_EVENTS = "GET_EVENTS"
export const ADD_EVENT_WISHLIST = "ADD_EVENT_WISHLIST "
export const REMOVE_EVENT_WISHLIST = "REMOVE_EVENT_WISHLIST"
export const GET_EVENT_DETAIL = "GET_EVENT_DETAIL"
export const FILTER_DATE = 'FILTER_DATE'
export const FILTER_CAT = "FILTER_CAT" //Javi
export const FILTER_SUBCAT = "FILTER_SUBCAT" 
export const FILTER_ADDRESS = 'FILTER_ADDRESS'
export const GET_CATEGORIES = "GET_CATEGORIES"
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES"
export const SET_PAGE ="SET_PAGE"//Javi
export const BULK_EVENTS = "BULK_EVENTS"


export const  ADD_EVENT = " ADD_EVENT"
export const REMOVE_EVENT='REMOVE_EVENT'

export function removeEvent(payload){
    return{
        type: REMOVE_EVENT,
        payload
    }
}

export  function addEventWish(recipe){
    return {
        type: ADD_EVENT_WISHLIST,
        payload: recipe
    }
}

export  function removeEventWish(id){
    return {
        type: REMOVE_EVENT_WISHLIST,
        payload:id
    }
}

// export const setPage = (page) => {//Javi
//     return {
//         type: SET_PAGE,
//         payload: page
//     }
// }

