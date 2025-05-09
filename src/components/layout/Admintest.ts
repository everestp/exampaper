// // Updated AdminPanel component with changes marked

// const AdminPanel = () => {
//     // ... (previous state and imports remain the same)
  
//     // Updated faculty change handler
//     const handleFacultyChange = (value: string) => {
//       setSelectedFaculty(value);
//       setSelectedStructure("");
//       setSubjects([]);
  
//       const faculty = facultyData.find(f => f.id === value);
//       if (faculty) {
//         // Get semester/year names for the dropdown
//         const structureOptions = faculty.structure.map(item => item.id);
//         setStructures(structureOptions);
//       } else {
//         setStructures([]);
//       }
//     };
  
//     // Updated semester/structure change handler
//     const handleStructureChange = (value: string) => {
//       setSelectedStructure(value);
      
//       const faculty = facultyData.find(f => f.id === selectedFaculty);
//       if (faculty) {
//         const selectedSemester = faculty.structure.find(item => item.id === value);
//         setSubjects(selectedSemester?.subjects || []);
//       }
//     };
  
//     // ... (rest of the component remains the same until the Select components)
  
//     // Updated Semester Select component
//     <Select 
//       value={selectedStructure} 
//       onValueChange={handleStructureChange}
//       disabled={!selectedFaculty}
//     >
//       <SelectTrigger>
//         <SelectValue placeholder={`Select ${facultyData.find(f => f.id === selectedFaculty)?.type || 'period'}`} />
//       </SelectTrigger>
//       <SelectContent>
//         {structures.map((structureId) => {
//           const faculty = facultyData.find(f => f.id === selectedFaculty);
//           const structureItem = faculty?.structure.find(item => item.id === structureId);
//           return (
//             <SelectItem key={structureId} value={structureId}>
//               {structureItem?.name || structureId}
//             </SelectItem>
//           );
//         })}
//       </SelectContent>
//     </Select>
  
//     // ... (rest of the component remains the same)
//   };