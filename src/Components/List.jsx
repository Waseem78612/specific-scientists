import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li key={person.id} style={{ display: "flex", margin: "20px" }}>
      <img
        style={{ borderRadius: "50%" }}
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p style={{ marginLeft: "10px" }}>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "400px",
        width: "400px",
        margin: "auto",
        borderRadius: "5px",
      }}
    >
      {listItems}
    </ul>
  );
}
