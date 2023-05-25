package pl.wiselify.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Result {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne
  @JsonIgnore
  private User user;

  private int mathTestResult;

  @JsonIgnore
  private int historyTestResult;

  @JsonIgnore
  private int javascriptTestResult;

  @JsonIgnore
  private int htmlTestResult;

  public Result() {
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

  public void setMathTestResult(int mathTestResult) {
    this.mathTestResult = mathTestResult;
  }

  public void setHistoryTestResult(int historyTestResult) {
    this.historyTestResult = historyTestResult;
  }

  public void setJavascriptTestResult(int javascriptTestResult) {
    this.javascriptTestResult = javascriptTestResult;
  }

  public void setHtmlTestResult(int htmlTestResult) {
    this.htmlTestResult = htmlTestResult;
  }

  public int getMathTestResult() {
    return mathTestResult;
  }

  public int getHistoryTestResult() {
    return historyTestResult;
  }

  public int getJavascriptTestResult() {
    return javascriptTestResult;
  }

  public int getHtmlTestResult() {
    return htmlTestResult;
  }
}


