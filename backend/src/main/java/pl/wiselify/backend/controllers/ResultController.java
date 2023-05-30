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
import pl.wiselify.backend.models.Achievement;
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
  public ResponseEntity<Result> saveMathResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setMathTestResult(result.getMathTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }

  @PostMapping("/history/{userId}")
  public ResponseEntity<Result> saveHistoryResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setHistoryTestResult(result.getHistoryTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }

  @PostMapping("/javascript/{userId}")
  public ResponseEntity<Result> saveJavascriptResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setJavascriptTestResult(result.getJavascriptTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }

  @PostMapping("/html/{userId}")
  public ResponseEntity<Result> saveHtmlResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setHtmlTestResult(result.getHtmlTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }

  @PostMapping("/java/{userId}")
  public ResponseEntity<Result> saveJavaResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setJavaTestResult(result.getJavaTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }

  @PostMapping("/python/{userId}")
  public ResponseEntity<Result> savePythonResultDetails(@RequestBody Result result, @PathVariable String userId) {
    Result existingResult = resultRepository.findByUserId(userId);
    existingResult.setPythonTestResult(result.getPythonTestResult());
    Result updatedResult = resultRepository.save(existingResult);
    return ResponseEntity.ok(updatedResult);
  }

  @GetMapping("/{userId}")
  public ResponseEntity<Result> getUserMathResults(@PathVariable("userId") String userId) {
    Result existingResult = resultRepository.findByUserId(userId);

    if (existingResult != null) {
      return new ResponseEntity<>(existingResult, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}

