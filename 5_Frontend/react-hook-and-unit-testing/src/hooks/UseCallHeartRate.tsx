import { useState } from "react";


function UseCallHeartRate(age: number){

    const [_age, setAge] = useState<number>(age);

    return [200 - _age, setAge] as const
  
}


export default UseCallHeartRate