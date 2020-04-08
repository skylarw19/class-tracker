import React from 'react';
import Student from '../../components/Student/Student';
import AddPerson from '../../components/AddPerson/AddPerson';

const Students = ({students, handleAdd}) => {
    return (
        <>
        <h1>Students</h1>
        {students.map(student =>
            <Student 
                key={student}
                name={student}
            />
            )
        }
        <AddPerson 
            handleAdd={handleAdd}
            role={"students"}/>
        </>
      );
}
 
export default Students;