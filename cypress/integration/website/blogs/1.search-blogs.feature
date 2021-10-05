Feature: Search Blogs

  Background:
    Given Visit "/why-bosley/blog/" #Common

  Scenario Outline: TC_SearchBlogs_01: input keyword to search blogs and check list results
    When I input "<keyword>" on search box
    Then I must see line input have length equal with "<keyword>"
    When I press enter on keyboard
    Then I must redirect to "<urlRedirect>"
    And I must see the list results has "<numPage>" pages with "9" items
    Examples:
      | keyword | urlRedirect                   | numPage | numCol  | numItems  |
      | hair    | /why-bosley/blog/?search=hair | 21      | 3       | 9         |

