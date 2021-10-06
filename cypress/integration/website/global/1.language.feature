Feature: Website Language

  Background:
    Given Visit "/" #Common
    And The language field is available

  Scenario: TC_Language_01: On all pages of the website, switch language to display content
    Then I must see the default language of the Website is "En"
    When I want to change the language of the Website is "Es"    
    Then I must see the language of the Website is "Es"
    And I must redirect to URL that has added alias "/es/​"
    When I want to change the language of the Website is "En"    
    Then I must see the language of the Website is "En"
    And I must redirect to URL that has removed alias "/es/​"
    When Go to Scheduler page
    Then I must see the default language of the Website is "En"
    When I want to change the language of the Website is "Es"    
    Then I must see the language of the Website is "Es"
    And I must redirect to URL that has added alias "/es/​"
