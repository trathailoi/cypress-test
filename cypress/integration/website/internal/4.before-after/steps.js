import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'

Given('I scroll to Before-After​ section', () => {
  cy.scrollTo(0, 4500)
  cy.wait(500)
});

When('I click image at {string} place', (image) => {
  cy.get(`.mod-before-after .row>div:nth-child(${image}) .bf-img`)
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

const popupSlideExpects = [
  {
    imageLink: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/hair-transplant-before-and-after-4.jpg',
    texts: [
      'Type',
      'FUE'
    ]
  },
  {
    imageLink: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/hair-transplant-before-and-after-4-1.jpg',
    texts: [
      'Type',
      'FUE'
    ]
  }
]

Then('In popup image, I must see slider', () =>{
  checkSliderExists(popupSlideOptions.slideSelector)
});

Then('In popup image, I can see slide at {string} place is active and image of slide', (place) =>{
  checkSlideActive(popupSlideOptions, Number(place), true)
  cy.get('.popup-gallary .slick-active')
    .contains(`${place} / 2`)

  const expectObj = popupSlideExpects[Number(place - 1)]
  const activeSlideSelector = '.popup-gallary .slick-active'
  cy.get(`${activeSlideSelector} img.b-loaded`)
    .should('have.attr', 'src').should('include', expectObj.imageLink)
  for (const text of expectObj.texts) {
    cy.get(activeSlideSelector)
      .contains(text)
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