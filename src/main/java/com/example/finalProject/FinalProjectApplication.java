package com.example.finalProject;

import com.example.finalProject.model.Student;
import com.example.finalProject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FinalProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(FinalProjectApplication.class, args);
	}

	@Autowired
	private StudentRepository studentRepository;
	@Override
	public void run(String... args) throws Exception {
		Student student = new Student();
		student.setFirstName("Kenneth");
		student.setLastName("Mañalac");
		student.setAddress("Candaba");
		student.setEmailId("kennethmanalac@gmail.com");
		studentRepository.save(student);

		Student student1 = new Student();
		student1.setFirstName("iron");
		student1.setLastName("Man");
		student1.setAddress("newyork");
		student1.setEmailId("ironman@gmail.com");
		studentRepository.save(student1);
	}
}
