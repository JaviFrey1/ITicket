export const GET_EVENTS = "GET_EVENTS"
export const ADD_EVENT_WISHLIST = "ADD_EVENT_WISHLIST "
export const REMOVE_EVENT_WISHLIST = "REMOVE_EVENT_WISHLIST"
export const GET_EVENT_DETAIL = "GET_EVENT_DETAIL"

export const FILTER_CAT = "FILTER_CAT" //Javi
export const FILTER_CREATED = "FILTER_CREATED"
export const ORDER_BY_TITLE = "ORDER_BY_TITLE"
export const ORDER_BY_SCORE = "ORDER_BY_SCORE"
export const GET_CATEGORIES = "GET_CATEGORIES"
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES"
export const SET_ORDER ="SET_ORDER"//Javi

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

export const setOrder = (order) => {//Javi
    return {
        type: SET_ORDER,
        payload: order
    }
}

