// const ShowName = () => {
//     return (
//         <div>
//             My name is Yeo
//         </div>
//     )
// }

//นิยมเขียนแบบนี้
interface ShowNameProps{
    childName: string //บังคับว่า ShowName จะให้รับอะไรบ้าง
}

function ShowName({childName}: ShowNameProps){
    // const name = props.childName
    // console.log("props props: ", props)

    //const {childName} = props //ลดรูปจาก const chilsName = props.childName
    //const {childName: name} = props
    return (
        <div>
            My name is {childName}
        </div>
    )
}

export default ShowName