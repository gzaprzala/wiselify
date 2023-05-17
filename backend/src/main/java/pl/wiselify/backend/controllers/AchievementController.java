package pl.wiselify.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.wiselify.backend.models.Achievement;
import pl.wiselify.backend.repositories.AchievementRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/achievements")
public class AchievementController {
  private final AchievementRepository achievementRepository;

  @Autowired
  public AchievementController(AchievementRepository achievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  @GetMapping("/{userId}")
  public ResponseEntity<Achievement> getUserAchievements(@PathVariable("userId") Long userId) {
    Achievement achievement = achievementRepository.findById(userId)
            .orElse(null);

    if (achievement != null) {
      return new ResponseEntity<>(achievement, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}
