import React from 'react';
import Student from '../../components/Student/Student';

const Students = ({students}) => {
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
        </>
      );
}
 
export default Students;