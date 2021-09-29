import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'
import { slideExpects } from './spec-data.json'

/* test slide ngoài page home */
const slideOptions = {
  slideSelector: '.mod-location-list .slider-gal-location',
  slideItemSelector: '.slick-slide',
  nextSelector: '.mod-location-list .control-location-list button.slick-next',
  prevSelector: '.mod-location-list .control-location-list button.slick-prev',
  dataKey: 'data-slick-index'
}

Given('I scroll to gallery section​​', () => {
  cy.scrollTo(0, 1500)
  cy.wait(1000)
});

Then('I must see slider', () =>{
  checkSliderExists(slideOptions.slideSelector)
});

Then('I can see slide at {string} place is active', (place) =>{
  checkSlideActive(slideOptions, Number(place), true)
})

When('I click {string} at slider', (clickSelector) =>{
  const mapSelector = {
    'next': slideOptions.nextSelector,
    'prev': slideOptions.prevSelector
  }
  changeSlide(mapSelector[clickSelector], 500)
});

Then('I must see Big image, info, and link location of slide {string}', (place) =>{
  const expectObj = slideExpects[Number(place - 1)]
  cy.get('.mod-location-list .slick-active .image-locat-list')
    .should('have.css', 'background-image')
    .and('include', expectObj.backgroundImage)
  cy.get(`.mod-location-list .slick-active .image-locat-list a`)
    .invoke('attr', 'href')
    .should('equal', expectObj.linkHref)
  cy.get('.mod-location-list .slick-active .text-white')
    .invoke('text')
    .then(text => {
      expect(String(text).toUpperCase()).to.include(expectObj.text)
    })
});
/* end test slide ngoài page home */
