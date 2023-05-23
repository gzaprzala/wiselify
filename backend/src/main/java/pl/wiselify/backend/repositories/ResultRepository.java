package pl.wiselify.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.wiselify.backend.models.Result;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {
}
