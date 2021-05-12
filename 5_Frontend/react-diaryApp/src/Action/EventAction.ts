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
    try{

        let result:any = await axios.get<any>(api)
        console.log("result ",result)
        dispatch({
            type: IEventActionType.GET_ALL_EVENT,
            payload: result.data
        })

    }
    catch (err){
        console.log("get event list err : ",err)
    }
    
}

const getEventDetail = (eventId: number) => async(dispatch: Dispatch<IEventAction>) => {
    
    let api = API + `api/event/detail/${eventId}`
    try{

    }
    catch(err){

    }
}

const addEvent = (newEvent: IEvent) => async(dispatch: any) => {
    let api = API + `api/add`
    try{
        axios({
            url: api,
            method: 'POST',
            data: newEvent
        }).then(res => {
            console.log("add event ",res.data)

            dispatch({
                type: IEventActionType.ADD_NEW_EVENT,
                payload: res.data
            })
        })
    }
    catch(err){

    }
}

const editEvent = (eventId: number,newEvent: IEvent) => async(dispatch: any) => {
    let api = API + `api/${eventId}`
    try{

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

