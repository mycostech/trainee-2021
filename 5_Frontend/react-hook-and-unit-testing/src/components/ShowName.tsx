interface ShowNameProps {
  name: string
}

function ShowName({ name }: ShowNameProps) {
  return (
    <div>
      Name : {name}
    </div>
  );
}

export default ShowName