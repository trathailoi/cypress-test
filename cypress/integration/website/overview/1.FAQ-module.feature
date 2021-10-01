Feature: FAQ-module

  Scenario Outline: TC_FAQ_01: Visit Hair-transplant, FAQ module: check expanded & collapsed
    Given Visit "/overview" #Common
    Given I scroll to FAQ module​    
    When I click to "<showSelector>" at "1" FAQ
    Then FAQ content at "1" place must be expanded
    When I click to "<hideSelector>" at "1" FAQ
    Then FAQ content at "1" place must be collapsed
    When I click to "<showSelector>" at "2" FAQ
    Then FAQ content at "2" place must be expanded
    When I click to "<hideSelector>" at "2" FAQ
    Then FAQ content at "2" place must be collapsed
    When I click to "<showSelector>" at "3" FAQ
    Then FAQ content at "3" place must be expanded
    When I click to "<hideSelector>" at "3" FAQ
    Then FAQ content at "3" place must be collapsed
    When I click to "<showSelector>" at "4" FAQ
    Then FAQ content at "4" place must be expanded
    When I click to "<hideSelector>" at "4" FAQ
    Then FAQ content at "4" place must be collapsed
    Examples:
      | showSelector | hideSelector   |
      | icon +       | icon -         |
      | icon +       | FAQ Item       |
      | FAQ Item     | FAQ Item       |