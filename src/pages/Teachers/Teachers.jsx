import React from 'react';
import Teacher from '../../components/Teacher/Teacher';
import AddPerson from '../../components/AddPerson/AddPerson';

const Teachers = ({teachers, handleAdd}) => {
    return (
        <>
        <h1>Teachers </h1>
        { teachers.map(teacher =>
            <Teacher 
                key={teacher}
                name={teacher}
            />
            
        ) }
        <AddPerson 
            handleAdd={handleAdd}
            role={"teachers"}/>
        </>
    );
}
 
export default Teachers;