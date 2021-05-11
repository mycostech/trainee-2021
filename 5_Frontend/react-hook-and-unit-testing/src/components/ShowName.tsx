interface ShowNameProps{
  name : string
}

function ShowName({name} : ShowNameProps) {
    return (
      <div>
        name : {name}
      </div> 
    );
  }

export default ShowName