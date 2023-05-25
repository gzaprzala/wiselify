package pl.wiselify.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.wiselify.backend.models.Achievement;

@Repository
public interface AchievementRepository extends JpaRepository<Achievement, Long> {
  Achievement findByUserId(String userId);
}

