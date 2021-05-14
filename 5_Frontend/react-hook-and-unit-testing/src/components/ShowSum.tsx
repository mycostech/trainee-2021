import { useEffect } from "react";

interface ShowSumProps {
    calSum: any
    count: number
}
function ShowSum({ calSum , count}: ShowSumProps) {
    
    useEffect(() => {
        if (count > 0)
          //ไม่อยากให้เข้ามาแล้ว call effect เลย
          console.log("effect effect effect");
    
        // return () => {
        //   console.log("terminate!!!!!!!", count); 
        // };
      }, [count]); //อยากให้ effect แค่ count


      
    return (
        <div>
            Count is : {count}
            Cal Sum is:  {calSum()}
        </div>
    )
}

export default ShowSum