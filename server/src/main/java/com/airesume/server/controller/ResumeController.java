package com.airesume.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Adjust the origin as needed

public class ResumeController {

    @PostMapping("/uploadResume")
    public ResponseEntity<String> uploadResume(@RequestParam("file") MultipartFile file) {
        // Logic to handle the uploaded file
        // For example, save it to a directory or process it
        System.out.println("Received file: " + file.getOriginalFilename());
        return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());
    }

    @PostMapping("/analyzeResumeText")
    public ResponseEntity<String> analyzeResumeText(@RequestBody String resumeText) {
        // Logic to analyze the resume text
        System.out.println("Received resume text length: " + resumeText.length());
        return ResponseEntity.ok("Resume text analyzed successfully");
    }
}
