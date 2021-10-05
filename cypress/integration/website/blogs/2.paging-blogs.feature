Feature: Paging Blogs

  Background:
    Given Visit "/why-bosley/blog/" #Common
    And The paging is available

  Scenario Outline: TC_PagingBlogs_01: On page Blogs, click next/prev to view blogs
    Then I must see the page "1" on the dropdown
    When I click "next" on the paging    
    Then I must redirect to page "2"
    And I must see the page "2" on the dropdown
    And I must see the list blogs of page "2" with right image, link, title
    When I click "next" on the paging    
    Then I must redirect to page "3"
    And I must see the page "3" on the dropdown
    And I must see the list blogs of page "3" with right image, link, title
    When I click "prev" on the paging    
    Then I must redirect to page "2"
    And I must see the page "2" on the dropdown
    And I must see the list blogs of page "2" with right image, link, title
    When I click "prev" on the paging    
    Then I must redirect to page "1"
    And I must see the page "1" on the dropdown
    And I must see the list blogs of page "1" with right image, link, title

Scenario Outline: TC_PagingBlogs_02: On page Blogs, select paging on the dropdown 
    Then I must see the page "1" on the dropdown
    When I select page "10" on the paging    
    Then I must redirect to page "10"
    And I must see the page "10" on the dropdown
    And I must see the list blogs of page "10" with right image, link, title