## Homework React Hooks And Unit Testing 

ความเข้าใจเรื่อง React Hooks และ Unit testing for React

1. แก้ไขไฟล์ custom hooks ใน hooks/usePrimeNumber/usePrimeNumber.ts เพื่อหาจำนวนเฉพาะให้กับตัวเลขที่ส่งเข้าไป กำหนดให้ hook return เป็น [isPrime, calPrime, num] ตามลำดับ (ห้ามสลับตำแหน่ง) 
 เมื่อ 
    - isPrime คือ Boolean ที่บอกว่าตัวเลขที่ส่งเข้าไปเป็นจำนวนเฉพาะหรือไม่
    - calPrime คือ function ไว้สำหรับส่งตัวเลขที่ต้องการค่าจำนวนเฉพาะ ex. calPrime(77), calPrime(72)
    - Num คือ ตัวเลขเดียวกันกับที่ส่งเข้าไปใน calPrime

2. แก้ไขไฟล์ custom hooks ใน /hooks/useThaiWin/useThaiWin.ts สำหรับใช้สแกนเข้าไทยชนะ โดยที่ hook จะ return 
[isStay, enter, exit] ตามลำดับ 

    เมื่อ
    - isStay, Boolean ที่จะบอกว่า user ยังอยู่ในระบบ
    - enter, Function เพื่อเข้าใช้งาน โดยที่จะต้องเรียก API (เรียกด้วย enterThaiWin() ) จาก /api/enterThaiWin 
    - exit, Function เพื่อออกจากระบบ โดยที่จะต้องเรียก API (เรียกด้วย exitThaiWin() ) จาก /api/exitThaiWin 

- เพิ่มเติม 
  - เมื่อ user อยู่ในระบบ แล้วเรียก function enter ทับหลาย ๆ ครั้ง จะไม่เรียก API enterThaiWin เพื่อ Optimize(เรียกครั้งเดียวตอนเข้าระบบ)
  - เมื่อ user ปิดระบบโดยที่ไม่ได้เรียก function exit (component ถูกทำลาย) จะต้องเรียก API exitThaiWin ด้วย

3. เพิ่ม unit-testing ให้ไฟล์ /src/component/MyValidateForm/MyValidateForm.test.tsx โดยต้องมี coverage 100%
    
    Command for showing coverage: 
    ```npm test -- --coverage```  
