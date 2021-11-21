package com.example.finalProject.controller;

import com.example.finalProject.model.Student;
import com.example.finalProject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

}
