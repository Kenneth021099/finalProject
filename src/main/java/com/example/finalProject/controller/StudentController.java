package com.example.finalProject.controller;

import com.example.finalProject.exception.ResourceNotFoundException;
import com.example.finalProject.model.Student;
import com.example.finalProject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllStudent(){
        return studentRepository.findAll();
    }
    // build create student REST API
    @PostMapping
    public  Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }

    // build get student by id rest api
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
        return  ResponseEntity.ok(student);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public  ResponseEntity<Student> updateStudent(@PathVariable long id, @RequestBody Student studentDetails){
        Student updateStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " +id));

        updateStudent.setFirstName(studentDetails.getFirstName());
        updateStudent.setLastName(studentDetails.getLastName());
        updateStudent.setAddress(studentDetails.getAddress());
        updateStudent.setEmailId(studentDetails.getEmailId());

        studentRepository.save(updateStudent);
        return ResponseEntity.ok(updateStudent);
    }


}