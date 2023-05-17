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

  public void setLoginCount(int loginCount) {
    this.loginCount = loginCount;
  }
}


