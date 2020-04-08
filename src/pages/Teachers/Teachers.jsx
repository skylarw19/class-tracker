import React from 'react';
import Teacher from '../../components/Teacher/Teacher';

const Teachers = ({teachers}) => {
    return (
        <>
        <h1>Teachers </h1>
        { teachers.map(teacher =>
            <Teacher 
                key={teacher}
                name={teacher}
            />
        ) }
        </>
    );
}
 
export default Teachers;