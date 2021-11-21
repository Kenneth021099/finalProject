import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'


const ListStudentsComponent = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className="container">
            <h2 className="text-center"> List Employees </h2>
            <Link to = "/add-students" className = "btn btn-primary mb-2" >Add Student</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Student Id </th>
                    <th> Student First Name </th>
                    <th> Student Last Name </th>
                    <th> Student Address </th>
                    <th> Student Email Id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key={student.id}>
                                <td> {student.id} </td>
                                <td> {student.firstName} </td>
                                <td> {student.lastName} </td>
                                <td> {student.address} </td>
                                <td> {student.emailId} </td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-students/${student.id}`} >Update</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentsComponent