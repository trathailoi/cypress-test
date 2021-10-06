Feature: Paging Blogs

  Background:
    Given Visit "/why-bosley/blog/" #Common
    And The paging is available

  Scenario: TC_PagingBlogs_01: On page Blogs, click next/prev to view blogs
    Then At the "All" tab, I must see the page "1" on the dropdown
    Given Fake data page "2"
    When I click "next" on the paging
    Given Wait for paginate
    Then I must redirect to page "2" of the "All" tab
    And At the "All" tab, I must see the page "2" on the dropdown
    And At the "All" tab, I must see the list blogs of page "2" with right image, link, title
    Given Fake data page "3"
    When I click "next" on the paging
    Given Wait for paginate
    Then I must redirect to page "3" of the "All" tab
    And At the "All" tab, I must see the page "3" on the dropdown
    And At the "All" tab, I must see the list blogs of page "3" with right image, link, title
    Given Fake data page "2"
    When I click "prev" on the paging
    Given Wait for paginate
    Then I must redirect to page "2" of the "All" tab
    And At the "All" tab, I must see the page "2" on the dropdown
    And At the "All" tab, I must see the list blogs of page "2" with right image, link, title
    Given Fake data page "1"
    When I click "prev" on the paging
    Given Wait for paginate
    Then I must redirect to page "1" of the "All" tab
    And At the "All" tab, I must see the page "1" on the dropdown
    And At the "All" tab, I must see the list blogs of page "1" with right image, link, title

# Scenario: TC_PagingBlogs_02: On page Blogs, select paging on the dropdown 
#     Then At the "All" tab, I must see the page "1" on the dropdown
#     When At the "All" tab, I select page "10" on the paging
#     Then I must redirect to page "10" of the "All" tab 
#     And At the "All" tab, I must see the page "10" on the dropdown
#     And At the "All" tab, I must see the list blogs of page "10" with right image, link, title