import { Dispatch } from 'react'
import { IEventActionType, IEventAction, IEvent } from '../model/IEventType'
import axios from 'axios'


const API = process.env.REACT_APP_APP_URL

const showLoading = () => async(dispatch: Dispatch<IEventAction>) => {
    dispatch({
        type: IEventActionType.SHOW_LOADING
    })
}

const getEventList = (uid: string) => async(dispatch: Dispatch<IEventAction>) => {
    
    let api = API + `api/event/${uid}`
    dispatch({type: IEventActionType.GET_ALL_EVENT_START})
    try{

        let result:any = await axios.get<any>(api)
        console.log("result ",result)

        dispatch({
            type: IEventActionType.GET_ALL_EVENT_SUCESS,
            payload: result.data
        })

    }
    catch (err){
        console.log("get event list err : ",err)
        dispatch({
            type: IEventActionType.GET_ALL_EVENT_ERROR,
            payload: err
        })
    }
    
}

const getEventDetail = (eventId: number) => async(dispatch: Dispatch<IEventAction>) => {
    
    let api = API + `api/event/detail/${eventId}`
    dispatch({
        type: IEventActionType.GET_EVENT_DETAIL_START})

    try{

        let result:any = await axios.get<any>(api)
        console.log("==> ",result.data)

        dispatch({
            type: IEventActionType.GET_EVENT_DETAIL_SUCCESS,
            payload: result.data
        })

    }
    catch(err){
        console.log(err)
        dispatch({
            type: IEventActionType.GET_EVENT_DETAIL_ERROR
        })
    }
}

const addEvent = (newEvent: IEvent) => async(dispatch: any) => {
    
    //window.alert(newEvent.userId)
    let api = API + `api/event/add`
    dispatch({ type:IEventActionType.ADD_NEW_EVENT_START})

    try{
        axios({
            url: api,
            method: 'POST',
            data: newEvent
        }).then(res => {

            //window.alert(res.data)
            console.log("add event ",res.data)

            dispatch({
                type: IEventActionType.ADD_NEW_EVENT_SUCESS,
                payload: res.data
            })
        })
    }
    catch(err){

        //window.alert(err)
        dispatch({
            type: IEventActionType.ADD_NEW_EVENT_ERROR
        })
    }
}

const editEvent = (eventId: number,newEvent: IEvent) => async(dispatch: any) => {
    let api = API + `api/${eventId}`
    try{
        axios({
            url:api,
            method: 'PUT',
            data: newEvent
        }).then(res => {
            console.log("edit Event", res.data)

            dispatch({
                type: IEventActionType.UPDATE_EVENT,
                payload: res.data
            })
        })
    }
    catch(err){

    }
}

const deleteEvent = (eventId: number) => async(dispatch: any) => {
    let api = API + `api/${eventId}`
    try{

    }
    catch(err){

    }
}

export {
    showLoading,
    getEventList,
    getEventDetail,
    addEvent,
    editEvent,
    deleteEvent
}

