import React from 'react';

function ProgramSection({ title, description, specialties, manager, img }) {
  return (
    <div id={title.replace(/\s+/g, '').toLowerCase()}>
      <h3>{title}</h3>
      <img src={require(`../assets/${img}`).default} alt={title} />
      <p>{description}</p>
      <ul>
        {specialties.map((specialty, index) => (
          <li key={index}>{specialty}</li>
        ))}
      </ul>
      <h4>Program Manager</h4>
      <p>
        {manager.name}
        <br />
        <a href={`mailto:${manager.email}`}>{manager.email}</a>
        <br />
        {manager.location}
      </p>
    </div>
  );
}

export default ProgramSection;
