package pl.wiselify.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.wiselify.backend.models.Lesson;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
}
