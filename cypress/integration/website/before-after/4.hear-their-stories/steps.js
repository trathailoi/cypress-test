import { checkSliderExists, changeSlide, checkSlideActive } from '../../../common/website/common-scripts'

Given('I scroll to Hear Their Stories section', () => {
})

When('I click to {string} at {string} story', (clickSelector, place) => {
  cy.get(`.mod-hear-their-stories .item-featured-blog:nth-child(${place}) ${clickSelector === 'image' ? '.bg-featured-blog' : '.tag-link.popup-is-open'}`)
    .click()
})

Then('I must see popup lightbox video​', () => {
  cy.get('.popup-show .popup-gallary')
    .should('be.visible')
});

When('I click close popup lightbox video', () => {
  cy.wait(5000)
  cy.get('.popup-show .popup-gallary .popup-is-close')
    .click()
})
Then('I do not see popup lightbox video​', () => {
  cy.get('.popup-show .popup-gallary')
    .should('not.exist')
});


/* Test slide trong popup */
const popupSlideOptions = {
  slideSelector: '.popup-show .popup-gallary .gallary-silder .slick-list',
  slideItemSelector: '.gallary-item',
  nextSelector: '.popup-show .popup-gallary .gallary-silder a.slick-next',
  prevSelector: '.popup-show .popup-gallary .gallary-silder a.slick-prev',
  dataKey: 'data-slick-index'
}

const popupSlideExpects = [
  {
    iframeLink: 'https://www.youtube.com/embed/7OZWRGwjFkM'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/-RqNj2RyP_o'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/jKo4wTg_Oq0'
  }
]

Then('In popup video, I must see slider', () =>{
  checkSliderExists(popupSlideOptions.slideSelector)
});

Then('In popup video, I can see slide at {string} place is active', (place) =>{
  checkSlideActive(popupSlideOptions, Number(place), true)
})

When('In popup video, I click {string} at slider', (clickSelector) =>{
  const mapSelector = {
    'next': popupSlideOptions.nextSelector,
    'prev': popupSlideOptions.prevSelector
  }
  changeSlide(mapSelector[clickSelector])
});

Then('In popup video, I must see video of slide {string}', (place) =>{
  const expectObj = popupSlideExpects[Number(place - 1)]
  cy.get(`.popup-show .popup-gallary .slick-active iframe#ytb-${Number(place - 1)}`)
    .should('have.attr', 'src').should('include', expectObj.iframeLink)
});

/* End Test slide trong popup */
