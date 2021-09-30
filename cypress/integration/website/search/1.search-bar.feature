Feature: Search Bar

  Scenario Outline: TC_SearchBar_01: Visit homepage, click Icon search: focus, input keyword and press enter to redirect search page
    Given Visit home page #Common
    When Click Search icon on navigation
    Then Search box must be display and focus
    When Input "<keyword>" on search box
    Then I must see line input have length equal with "<keyword>"
    And Press enter on keyboard
    Then I must redirect to "<urlRedirect>"
    Examples:
      | keyword | urlRedirect                                     |
      | hair    | /search-result/?key=hair&website=true&blog=true |

  Scenario Outline: TC_SearchBar_02: Visit homepage, click Icon search: focus, input keyword and click Icon Search to redirect search page
    Given Visit home page #Common
    When Click Search icon on navigation
    Then Search box must be display and focus
    When Input "<keyword>" on search box
    Then I must see line input have length equal with "<keyword>"
    And Click Search icon on search box
    Then I must redirect to "<urlRedirect>"
    Examples:
      | keyword | urlRedirect                                     |
      | hair    | /search-result/?key=hair&website=true&blog=true |

  Scenario: TC_SearchBar_03: Visit homepage, click Icon search: no input keyword and press enter -> search box is focus
    Given Visit home page #Common
    When Click Search icon on navigation
    Then Search box must be display and focus
    When Press enter on keyboard
    Then Search box must be display and focus

  Scenario: TC_SearchBar_04: Visit homepage, click Icon search: no input keyword and click Icon Search -> search box is focus
    Given Visit home page #Common
    When Click Search icon on navigation
    Then Search box must be display and focus
    When Click Search icon on search box
    Then Search box must be display and focus