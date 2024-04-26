import React, { useState } from 'react';

// Sample student data with results for different subjects
const studentsData = [
  { name: "2200031211", results: { "Design Analysis of Algorithm": "Pass", "MERN Stack": "Pass", "Automata Theory": "Fail" } },
  { name: "2200031158", results: { "Design Analysis of Algorithm": "Fail", "MERN Stack": "Pass", "Automata Theory": "Pass" } },
  { name: "2200031120", results: { "Design Analysis of Algorithm": "Pass", "MERN Stack": "Pass", "Automata Theory": "Pass" } },
  { name: "2200100034", results: { "Design Analysis of Algorithm": "Fail", "MERN Stack": "Fail", "Automata Theory": "Fail" } },
  { name: "2200030400", results: { "Design Analysis of Algorithm": "Pass", "MERN Stack": "Fail", "Automata Theory": "Pass" } }
];

// Function to find the results of a student by name
const findStudentResults = (studentName) => {
  const student = studentsData.find(student => student.name === studentName);
  return student ? student.results : null;
};

// JSX component for the App
const App = () => {
  // State for storing the input value (student name)
  const [studentName, setStudentName] = useState("");
  // State for storing the results
  const [results, setResults] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentResults = findStudentResults(studentName);
    setResults(studentResults);
  };

  return (
    <div>
      <h1>Student Results</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="student id">Enter student id: </label>
        <input 
          type="text" 
          id="student id" 
          value={studentName} 
          onChange={(e) => setStudentName(e.target.value)} 
        />
        <button type="submit">Get Results</button>
      </form>
      {results && (
        <div>
          <h2>Results for {studentName}</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #ddd' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Subject</th>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results).map(([subject, result]) => (
                <tr key={subject}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{subject}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
