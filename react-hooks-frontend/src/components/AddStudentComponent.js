import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import StudentService from "../services/StudentService";

const AddStudentComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    
    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = {firstName, lastName, address, emailId }

        if(id){
                StudentService.updateStudent(id, student).then((response) =>{
                    navigate('/students')
                }).catch(error =>{
                    console.log(error);
                })

        }else{
            StudentService.createStudent(student).then((response) =>{
            
                console.log(response.data)
    
                navigate('/students')
    
            }).catch(error => {
                console.log(error)
            })
        }

        

    }
    
    const cancel = (e) => {
        e.preventDefault();
        navigate('/students')

    }

    useEffect(()=>{

            StudentService.getStudentById(id).then((response) =>{
                    setFirstName(response.data.firstName)
                    setLastName(response.data.lastName)
                    setEmailId(response.data.emailId)
                    setAddress(response.data.address)
                    
            }).catch(error =>{
                console.log(error)
            })
    }, [id])

    const title = () =>{

        if(id){
            return <h2 className = "text-center"> Update Student</h2>
        }else{
            return <h2 className = "text-center"> Add Student</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label">Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label">Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter Email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateStudent(e)}>Submit</button>

                                <button className = "btn btn-danger" onClick = {(e) => cancel(e)}style ={{marginLeft:"25px"}}>Cancel</button>

                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </div>
       
    )
}

export default AddStudentComponent

