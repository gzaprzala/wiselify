//package pl.wiselify.backend.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import pl.wiselify.backend.models.Achievement;
//import pl.wiselify.backend.models.Lesson;
//import pl.wiselify.backend.models.Result;
//import pl.wiselify.backend.models.User;
//import pl.wiselify.backend.repositories.ResultRepository;
//import pl.wiselify.backend.repositories.UserRepository;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("/api/v1/results")
//public class ResultController {
//  private final ResultRepository resultRepository;
//
//  @Autowired
//  public ResultController(ResultRepository resultRepository) {
//    this.resultRepository = resultRepository;
//  }
//
////  @PostMapping("/math/{userId}")
////  public Result saveResultDetails(@RequestBody Result result, @PathVariable String userId) {
////    return resultRepository.save(result);
////  }
//
//  @PostMapping("/math/{userId}")
//  public ResponseEntity<Result> saveResultDetails(@RequestBody Result result, @PathVariable String userId) {
//    Result existingResult = resultRepository.findByUserId(userId);
//    if (existingResult != null) {
//      existingResult.setMathTestResult(result.getMathTestResult());
//      // Update other test results as needed
//      Result updatedResult = resultRepository.save(existingResult);
//      return ResponseEntity.ok(updatedResult);
//    } else {
//      // If no existing result found, return a not found status
//      return ResponseEntity.notFound().build();
//    }
//  }
//
//
//
//}

package pl.wiselify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

  @PostMapping("/math/{userId}")
  public ResponseEntity<Result> saveResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setMathTestResult(result.getMathTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }
}

