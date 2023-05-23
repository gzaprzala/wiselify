package pl.wiselify.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Achievement {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne
  @JsonIgnore
  private User user;

  private int loginCount;

  @JsonIgnore
  private int finishedLessons;

  @JsonIgnore
  private int accountAge;

  public Achievement() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public int getLoginCount() {
    return loginCount;
  }

  public int getFinishedLessons() {
    return finishedLessons;
  }

  public int getAccountAge() {
    return accountAge;
  }

  public void setLoginCount(int loginCount) {
    this.loginCount = loginCount;
  }

  public void setFinishedLessons(int finishedLessons) {
    this.finishedLessons = finishedLessons;
  }

  public void setAccountAge(int accountAge) {
    this.accountAge = accountAge;
  }
}


