Feature: View Offer

  Scenario Outline: TC_ViewOffer_01: Visit Internal page, click button View All Offers: open popup​ and close
    Given Visit "https://bosley-develop.box.carbon8test.com/internal/" #Common
    When I click View All Offer​s
    Then I must see popup expand at right-side
    Then I can scroll content​ at popup expand
    When I click click "<clickSelector>"
    Then Popup expand is closed
    Examples:
      | clickSelector             |
      | close button at top-right |
      | outside                   |