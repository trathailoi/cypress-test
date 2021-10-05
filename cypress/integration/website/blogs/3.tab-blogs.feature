Feature: Paging Blogs

  Background:
    Given Visit "/why-bosley/blog/" #Common
    And The tab bar is available

  Scenario: TC_TabBlogs_01: On page Blogs, click each Tab to view list blogs of tab
    Then I must see the "All" tab is active
    When I click the "Hair Transplantation" tab    
    Then I must redirect to page "1" of the "Hair Transplantation" tab
    And At the the "Hair Transplantation" tab, I must see the page "1" on the dropdown
    And At the "Hair Transplantation" tab, I must see the list blogs of page "1" with right image, link, title
    When I click the "Non-Surgical" tab    
    Then I must redirect to page "1" of the "Non-Surgical" tab
    And At the "Non-Surgical" tab, I must see the page "1" on the dropdown
    And At the "Non-Surgical" tab, I must see the list blogs of page "1" with right image, link, title
    When I click the "Hair Loss Education" tab    
    Then I must redirect to page "1" of the "Hair Loss Education" tab
    And At the "Hair Loss Education" tab, I must see the page "1" on the dropdown
    And At the "Hair Loss Education" tab, I must see the list blogs of page "1" with right image, link, title
    When I click the "Female Hair Loss" tab    
    Then I must redirect to page "1" of the "Female Hair Loss" tab
    And At the "Female Hair Loss" tab, I must see the page "1" on the dropdown
    And At the "Female Hair Loss" tab, I must see the list blogs of page "1" with right image, link, title
    When I click the "Testimonials" tab    
    Then I must redirect to page "1" of the "Testimonials" tab
    And At the "Testimonials" tab, I must see the page "1" on the dropdown
    And At the "Testimonials" tab, I must see the list blogs of page "1" with right image, link, title
    When I click the "Consultations" tab    
    Then I must redirect to page "1" of the "Consultations" tab
    And At the "Consultations" tab, I must see the page "1" on the dropdown
    And At the "Consultations" tab, I must see the list blogs of page "1" with right image, link, title
    When I click the "About Bosley" tab    
    Then I must redirect to page "1" of the "About Bosley" tab
    And At the "About Bosley" tab, I must see the page "1" on the dropdown
    And At the "About Bosley" tab, I must see the list blogs of page "1" with right image, link, title
