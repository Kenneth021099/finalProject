package com.example.finalProject.repository;

import com.example.finalProject.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface StudentRepository extends JpaRepository<Student, Long> {
        // all crud database methods
}
