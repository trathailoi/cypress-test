Feature: Alert Bar

  Scenario: TC_Alert_01: Visit homepage, close alert: Refresh homepage
    Given Clear window session #Common
    Given Visit home page #Common
    Then Alert bar should be showing up
    When Click close alert bar
    Given Refresh window #Common
    Then Alert bar should NOT be showing up
  
  Scenario: TC_Alert_02: Visit homepage, close alert: Visit internal page
    Given Clear window session #Common
    Given Visit home page #Common
    Then Alert bar should be showing up
    When Click close alert bar
    Given Go to Scheduler page #Common
    Then Alert bar should NOT be showing