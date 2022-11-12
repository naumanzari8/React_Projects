import React from "react";

const List = ({ people,deletePerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <span>{age} years</span>
                  <span>
                    <button style={{ width: "80px",margin:'-10px' }} onClick={(e)=>deletePerson(e.target.value)} value={id}>Delete</button>
                  </span>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};

export default List;
