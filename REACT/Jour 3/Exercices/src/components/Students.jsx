function Student(props) {
  const average =
    props.notes.reduce((sum, note) => sum + note, 0) / props.notes.length;

  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{average.toFixed(2)}</td>
      </tr>
    </>
  );
}

export default Student;
