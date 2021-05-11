interface ShowAgeProps {
  age: number
}

function ShowAge({ age }: ShowAgeProps) {
  return (
    <div>
      Age : {age}
    </div>
  );
}

export default ShowAge