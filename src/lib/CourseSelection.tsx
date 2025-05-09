import { useState } from "react";
import { facultyData } from "./facultyData";

const CourseSelection = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedStructure, setSelectedStructure] = useState("");
  const [structures, setStructures] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);

  const handleFacultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const facultyId = event.target.value;
    setSelectedFaculty(facultyId);
    setSelectedStructure("");
    setSubjects([]);

    const faculty = facultyData.find(f => f.id === facultyId);
    if (faculty) {
      setStructures(Object.keys(faculty.structure));
    } else {
      setStructures([]);
    }
  };

  const handleStructureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const structureKey = event.target.value;
    setSelectedStructure(structureKey);
    
    const faculty = facultyData.find(f => f.id === selectedFaculty);
    if (faculty) {
      setSubjects(faculty.structure[structureKey] || []);
    }
  };

  return (
    <div>
      <h2>Course Selection</h2>

      {/* Faculty Dropdown */}
      <label>Select Faculty:</label>
      <select onChange={handleFacultyChange} value={selectedFaculty}>
        <option value="">--Select Faculty--</option>
        {facultyData.map(faculty => (
          <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
        ))}
      </select>

      {/* Semester/Year Dropdown */}
      {structures.length > 0 && (
        <>
          <label>Select Semester/Year:</label>
          <select onChange={handleStructureChange} value={selectedStructure}>
            <option value="">--Select Semester/Year--</option>
            {structures.map((str, index) => (
              <option key={index} value={str}>{str.replace(/semester|year/i, '').trim()}</option>
            ))}
          </select>
        </>
      )}

      {/* Subject List */}
      {subjects.length > 0 && (
        <>
          <h3>Subjects:</h3>
          <ul>
            {subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CourseSelection;