import React, { useState } from 'react';
import './App.css';

const StudentList = () => {
  const [students] = useState([
    'Mohammed',
    'Adame',
    'Omar',
    'Hamza',
    'Ali'
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un élève..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
