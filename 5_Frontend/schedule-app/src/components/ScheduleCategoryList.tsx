import React, { useEffect } from "react";
import ScheduleCategory from "../models/ScheduleCategory";
import Loading from "./Loading";
import ScheduleCategoryDetail from "./ScheduleCategoryDetail/ScheduleCategoryDetail";

interface ScheduleCategoryListProps {
    getAllScheduleCategory: any
    loading: boolean
    scheduleCat: ScheduleCategory[]
}

function ScheduleCategoryList({
    getAllScheduleCategory,
    loading,
    scheduleCat
}: ScheduleCategoryListProps) {
    useEffect(() => {
        getAllScheduleCategory()

    }, [getAllScheduleCategory])

    return (
        <div>
            {loading ? <Loading /> :
                scheduleCat.map(m => {
                    return (
                        <ScheduleCategoryDetail scheduleCat={m} key={m.catCode}/>
                    )
                })
            }
        </div>
    )
}

export default ScheduleCategoryList