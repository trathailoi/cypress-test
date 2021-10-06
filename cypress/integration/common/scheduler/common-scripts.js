const checkBanner = (bannerOptions = {}) => {
  const {
    bannerHeaders = ['Schedule Your Free Hair Loss Consultation'],
    bannerSubHeaders = ['Schedule your free in-person or video consultation to learn more about our hair loss solutions, ask any questions you might have, and work with a Bosley specialist to customize a plan to reach your hair restoration goals.'],
    bannerDisclaimers = ['Conditions apply. Please see Terms & Conditions for full details | Legal Disclosures | Current Offers'],
    bannerImageUrl
  } = bannerOptions

  // check banner theo params
  for (const textString of bannerHeaders) {
    cy.contains(textString)
  }
  for (const textString of bannerSubHeaders) {
    cy.contains(textString)
  }
  for (const textString of bannerDisclaimers) {
    cy.contains(textString)
  }

  if (bannerImageUrl) {
    cy.get('.sche-ban-r-img')
      .should('have.css', 'background-image')
      .and('include', bannerImageUrl)
  }
}

export {
  checkBanner
}
