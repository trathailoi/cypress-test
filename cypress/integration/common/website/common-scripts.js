const checkSliderExists = (slideSelector) => {
  cy.get(slideSelector)
    .should('be.visible')
}

const changeSlide = (actionSelector) => {
  cy.get(actionSelector)
    .click()
  // wait for animation
  cy.wait(1000)
}

const getDotSelector = (slideSelector, i) => `${slideSelector} .slick-dots > li:nth-child(${i})`

const checkSlideActive = (slideOptions, place, isNotCheckDot) => {
  const { slideSelector, slideItemSelector, dataKey } = slideOptions
  const getSlideItemSelector = (i) => `${slideSelector} .slick-track ${slideItemSelector || `${slideSelector}-item`}[${dataKey}=${i}]`

  if (!isNotCheckDot) {
    cy.get(getDotSelector(slideSelector, place))
      .should('have.class', 'slick-active')
  }
  const activeItemSelector = getSlideItemSelector(place - 1)
  cy.get(activeItemSelector)
    .should('have.class', 'slick-current slick-active')
}

const checkSlickSlider = (options = {}) => {
  const { slideSelector, slideItemSelector, nextSelector, dataKey, dotLength, isNotCheckDot } = options
  cy.get(slideSelector)
    .should('be.visible')
  
  const getSlideItemSelector = (i) => `${slideSelector} .slick-track ${slideItemSelector || `${slideSelector}-item`}[${dataKey}=${i}]`

  // check show item đầu tiên
  if (!isNotCheckDot) {
    cy.get(getDotSelector(slideSelector, 1))
      .should('have.class', 'slick-active')
  }
  cy.get(getSlideItemSelector(0))
    .should('have.class', 'slick-current slick-active')
  
  // check show các item tiếp theo
  for (let i = 1; i < dotLength; i++) {
    cy.get(nextSelector)
      .click()
    
    if (!isNotCheckDot) {
      cy.get(getDotSelector(slideSelector, i + 1))
        .should('have.class', 'slick-active')
    }
    cy.get(getSlideItemSelector(i))
      .should('have.class', 'slick-current slick-active')
    // wait for animation
    cy.wait(1000)
  }

  // đến item cuối cùng thì check hiện lại item đầu tiên
  cy.get(nextSelector)
    .click()
  if (!isNotCheckDot) {
    cy.get(getDotSelector(slideSelector, 1))
      .should('have.class', 'slick-active')
  }
  cy.get(getSlideItemSelector(0))
    .should('have.class', 'slick-current slick-active')
}

export {
  checkSlickSlider,
  checkSliderExists,
  changeSlide,
  getDotSelector,
  checkSlideActive
}