import { useEffect, useState } from "react";
import ShowSum from "./ShowSum";

function TestEffect() {
  const [count, setCount] = useState<number>(0);
  const [showName, setShowName] = useState<boolean>(true);

  //เวลาที่ state อะไรก็ตามในนี้เปลี่ยน มันจะ call effect


  useEffect(() => {
    console.log("call only first time !!");

    return () => {
      console.log("terminate!!!!!!!"); //ถ้าโดนทำลาย มันจะ call ตัวนี้
    };
  }, []); //[] call แค่ครั้งเดียว

  const calSum = () => {
      return count*5
  }

  return (
    <div>
      {count}
      <button
        onClick={() => setCount((count) => count + 1)}
        style={{
          marginBottom: 10,
        }}
      >
        +
      </button>
      <ShowSum calSum={calSum} count={count}/>

      <div>
        <button onClick={() => setShowName((name) => !name)}>toggle</button>
        {showName && "my name is Nook"}
      </div>

    </div>
  );
}

export default TestEffect;
