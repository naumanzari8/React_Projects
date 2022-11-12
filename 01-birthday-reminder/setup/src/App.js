import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const deletePerson = (e) => {
    setPeople(people.filter(person => person.id != e));
  }
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} deletePerson={deletePerson} />
          {
            people.length == 0
            ?
            <button onClick={() => setPeople(data)}>Bring Back All</button>
            :
            <button onClick={() => setPeople([])}>Clear All</button>
          }
        </section>
      </main>
    </>
  );
}

export default App;
