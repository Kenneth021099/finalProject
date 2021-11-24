package com.example.finalProject.controller;

import com.example.finalProject.exception.ResourceNotFoundException;
import com.example.finalProject.model.Student;
import com.example.finalProject.repository.StudentRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@Getter
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id"));
        return ResponseEntity.ok(student);
    }

    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable long id, @RequestBody Student studentDetails) {
        Student updateStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));

        updateStudent.setFirstName(studentDetails.getFirstName());
        updateStudent.setLastName(studentDetails.getLastName());
        updateStudent.setAddress(studentDetails.getAddress());
        updateStudent.setEmailId(studentDetails.getEmailId());
        studentRepository.save(updateStudent);
        return ResponseEntity.ok(updateStudent);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));

        studentRepository.delete(student);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}