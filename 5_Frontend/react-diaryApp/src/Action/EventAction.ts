import { Dispatch } from 'react'
import { IEventActionType, IEventAction, IEvent } from '../model/IEventType'
import axios from 'axios'


const API = process.env.REACT_APP_APP_URL


const getEventList = (uid?: string) => async(dispatch: Dispatch<IEventAction>) => {
    
    if(uid !== undefined){
        let api = API + `api/event/${uid}`
        dispatch({type: IEventActionType.GET_ALL_EVENT_START})
        
        try{

            let result:any = await axios.get<any>(api)
            console.log("result ",result)

            dispatch({
                type: IEventActionType.GET_ALL_EVENT_SUCESS,
                payload: result.data
            })

            dispatch({
                type: IEventActionType.GET_ALL_EVENT_END,
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
        await axios({
            url: api,
            method: 'POST',
            data: newEvent
        }).then(res => {

            //window.alert(res.data)
            console.log("add event ",res.data)

            dispatch({
                type: IEventActionType.ADD_NEW_EVENT_SUCESS,
                payload: res.data,
            })

            dispatch({type: IEventActionType.ADD_NEW_EVENT_END})
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
    let api = API + `api/event/${eventId}`
    console.log('++ ',api)
    dispatch({ type: IEventActionType.UPDATE_EVENT_START })
    
    try{
        axios({
            url:api,
            method: 'PUT',
            data: newEvent
        }).then(res => {
            console.log("edit Event", res.data)

            dispatch({
                type: IEventActionType.UPDATE_EVENT_SUCCESS,
                payload: res.data
            })

            dispatch({type: IEventActionType.UPDATE_EVENT_END})
        })
    }
    catch(err){
        dispatch({
            type: IEventActionType.UPDATE_EVENT_ERROR,
            error: err
        })
    }
}


const deleteEvent = (eventId: number) => async(dispatch: any) => {
    let api = API + `api/event/${eventId}`
    dispatch({ type: IEventActionType.DELETE_EVENT_START })
    
    try{
        axios.delete(api)
        .then(res => {
            console.log('delete ', res.data)
            dispatch({
                type: IEventActionType.DELETE_EVENT_SUCCESS,
                payload: res.data
            })
        })
    }
    catch(err){
        dispatch({
            type: IEventActionType.GET_ALL_EVENT_ERROR,
            payload: err
        })
    }
}

export {
    getEventList,
    getEventDetail,
    addEvent,
    editEvent,
    deleteEvent
}

