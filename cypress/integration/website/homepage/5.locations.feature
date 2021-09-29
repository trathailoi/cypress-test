Feature: Location - Share Api

  Scenario: TC_Location_01: Visit homepage, Location section: Allow alert popup and show location (fake)
    Given Visit home page and fake location
    Given I scroll to Location section​
    Then I must scroll see location info

  Scenario: TC_Location_02: Visit homepage, Location section: Block alert popup and find location (not fake)
    Given Visit home page #Common
    Given I scroll to Location section​
    Then I must see location info form
    When I input zipcode, city or address​
    Then I click button Find Location​
    Then I must redirect to location