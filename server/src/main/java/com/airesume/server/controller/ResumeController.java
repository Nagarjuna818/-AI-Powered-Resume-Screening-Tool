package com.airesume.server.controller;

import com.airesume.server.dto.AnalyzeRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://Nagarjuna818.github.io") // Adjust the origin as needed

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

    @PostMapping("/analyzeResume")
    public ResponseEntity<Map<String, Object>> analyzeResume(@RequestBody AnalyzeRequest request) {
        List<String> resumeWords = Arrays.asList(request.getResumeText().toLowerCase().split("\\W+"));
        List<String> jobWords = Arrays.asList(request.getJobDescription().toLowerCase().split("\\W+"));

        Set<String> matched = new HashSet<>(resumeWords);
        matched.retainAll(jobWords);

        Set<String> missing = new HashSet<>(jobWords);
        missing.removeAll(matched);

        int totalWords = jobWords.size();
        int matchedWords = matched.size();
        int score = totalWords == 0 ? 0 : (matchedWords * 100) / totalWords;

        Map<String, Object> result = new HashMap<>();
        result.put("score", score);

        result.put("matchedKeywords", matched);
        result.put("missingKeywords", missing);
        return  ResponseEntity.ok(result);
    }

}


