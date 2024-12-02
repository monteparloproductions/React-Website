import React from 'react';

function Faculty() {
  const facultyMembers = [
    {
      name: 'Todd Price',
      email: 'tprice1@broward.edu',
      location: 'North Campus, Building 48 Room 201',
    },
    {
      name: 'Prof. Archila',
      email: 'farchila@broward.edu',
      location: 'Central Campus, Building 13',
    },
    {
      name: 'Sasha Charles-Prince',
      email: 'scharle2@broward.edu',
      location: 'Central Campus, Building 13',
    },
    {
      name: 'Jianchang Yang',
      email: 'jyang@broward.edu',
      location: 'Central Campus, Building 13',
    },
    {
      name: 'Marie-Claire Pady',
      email: 'mpady@broward.edu',
      location: 'Central Campus, Building 13',
    },
    {
      name: 'Nadine Blackwood',
      email: 'nblackwo@broward.edu',
      location: 'North Campus, Building 48',
    },
    {
      name: 'Amina Beharie',
      email: 'abeharie@broward.edu',
      location: 'Central Campus, Building 13',
    },
    {
      name: 'Zack Gilson',
      email: 'zgilson@broward.edu',
      location: 'North Campus, Building 50',
    },
    {
      name: 'Toni Crooks',
      email: 'tcrooks@broward.edu',
      location: 'Central Campus, Building 13',
    },
    {
      name: 'Mary Taboada-Gonzalez',
      email: 'mtaboada@broward.edu',
      location: 'Central Campus, Building 13',
    },
  ];

  return (
    <div id="Faculty">
      <h2>Program Managers</h2>
      {facultyMembers.map((member, index) => (
        <div key={index} className="faculty-member">
          <p>
            <strong>{member.name}</strong>
            <br />
            <a href={`mailto:${member.email}`}>{member.email}</a>
            <br />
            {member.location}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Faculty;
