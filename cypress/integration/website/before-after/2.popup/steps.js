import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'
import { popupSlideExpects } from './spec-data.json'

Given('I scroll to Before-After​ section', () => {
  cy.scrollTo(0, 600)
  cy.wait(500)
});

When('I click image at {string} place', (place) => {
  cy.get(`.mod-before-after .bf-category:nth-child(${place}) .bf-img`)
    .click()
});

const popupSelector = '.popup-show .popup-gallary'
Then('I must see opened popup', () => {
  cy.get(popupSelector)
    .should('be.visible')
});

When('I click {string} for close', (clickCloseSelector) => {
  // đợi hiện overlay
  cy.wait(5000)
  if (clickCloseSelector === 'close button at top-right') {
    cy.get(`${popupSelector} .popup-is-close`)
      .click()
  } else {
    cy.get(`.popup-show .mask-pop-overlay`)
      .click(15, 40, { force: true })
  }
});

Then('Popup must be closed', () => {
  cy.get(popupSelector)
    .should('not.exist')
});


/* Test slide trong popup */
const popupSlideOptions = {
  slideSelector: '.popup-gallary .gallary-silder .slick-list',
  slideItemSelector: '.bf-item',
  nextSelector: '.popup-gallary .gallary-silder a.slick-next',
  prevSelector: '.popup-gallary .gallary-silder a.slick-prev',
  dataKey: 'data-slick-index'
}

Then('In popup image, I must see slider', () =>{
  checkSliderExists(popupSlideOptions.slideSelector)
});


const checkSlideInfo = (place) => {
  cy.get('.popup-gallary .slick-active')
    .contains(`${place} / 66`)

  const expectObj = popupSlideExpects[Number(place - 1)]
  const activeSlideSelector = '.popup-gallary .slick-active'
  cy.get(`${activeSlideSelector} .popup-before-img.b-loaded`)
    .should('have.css', 'background-image')
    .and('include', expectObj.imageLink)
  for (const text of expectObj.texts) {
    cy.get(activeSlideSelector)
      .contains(text)
  }
}

Then('In popup image, I can see slide at {string} place is active and image of slide', (place) =>{
  checkSlideActive(popupSlideOptions, Number(place), true)
  checkSlideInfo(place)
})

const mapSelector = {
  'next': popupSlideOptions.nextSelector,
  'prev': popupSlideOptions.prevSelector
}
const checkSlideCorrectly = (clickSelector, place) => {
  changeSlide(mapSelector[clickSelector], 500)
  checkSlideActive(popupSlideOptions, Number(place), true)
  checkSlideInfo(place)
}

Then('I must see correctly display content from slide {string} to slide {string} when every time I click {string} icon', (from, to, clickSelector) => {
  from = Number(from)
  to = Number(to)
  if (from <= to) {
    for (let place = from; place <= to; place++) {
      cy.log(`Check slide ${place} info`)
      checkSlideCorrectly(clickSelector, place)
    }
  } else {
    for (let place = from; place >= to; place--) {
      cy.log(`Check slide ${place} info`)
      checkSlideCorrectly(clickSelector, place)
    }
  }
})

When('In popup image, I click {string} at slider', (clickSelector) =>{
  const mapSelector = {
    'next': popupSlideOptions.nextSelector,
    'prev': popupSlideOptions.prevSelector
  }
  changeSlide(mapSelector[clickSelector])
});

When('In popup image, I click dot at {string} place of slider', (place) =>{
  changeSlide(getDotSelector(popupSlideOptions.slideSelector, place))
});
/* End Test slide trong popup */