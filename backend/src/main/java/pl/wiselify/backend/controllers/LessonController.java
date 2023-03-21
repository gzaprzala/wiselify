package pl.wiselify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.wiselify.backend.models.Lesson;
import pl.wiselify.backend.repositories.LessonRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class LessonController {
  @Autowired
  private LessonRepository lessonRepository;

  @GetMapping("/lessons")
  public List<Lesson> getAllLessons() {
    return lessonRepository.findAll();
  }

  @GetMapping("/lessons/{id}")
  public Lesson getLessonById(@PathVariable Long id) {
    return lessonRepository.findById(id).get();
  }

  @PostMapping("/lessons")
  public Lesson saveLessonDetails(@RequestBody Lesson lesson) {
    return lessonRepository.save(lesson);
  }

  @PutMapping("/lessons")
  public Lesson updateLesson(@RequestBody Lesson lesson) {
    return lessonRepository.save(lesson);
  }
  
  @DeleteMapping("/lessons/{id}")
  public ResponseEntity<HttpStatus> deleteLessonById(@PathVariable Long id) {
    lessonRepository.deleteById(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
