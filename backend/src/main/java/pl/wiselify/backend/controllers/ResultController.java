package pl.wiselify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.wiselify.backend.models.Achievement;
import pl.wiselify.backend.models.Lesson;
import pl.wiselify.backend.models.Result;
import pl.wiselify.backend.repositories.ResultRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/results")
public class ResultController {
  private final ResultRepository resultRepository;

  @Autowired
  public ResultController(ResultRepository resultRepository) {
    this.resultRepository = resultRepository;
  }

  @PostMapping("/{userId}")
  public Result saveResultDetails(@RequestBody Result result, @PathVariable String userId) {
    return resultRepository.save(result);
  }
}
