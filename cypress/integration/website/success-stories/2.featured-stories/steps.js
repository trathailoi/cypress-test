import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'

/* test slide ngoài page home */
const slideOptions = {
  slideSelector: '.mod-success-story-banner .list-featured-stories',
  slideItemSelector: '.stories-item',
  nextSelector: '.mod-success-story-banner .list-featured-stories button.slick-next',
  prevSelector: '.mod-success-story-banner .list-featured-stories button.slick-prev',
  dataKey: 'data-slick-index'
}

const slideExpects = [
  {
    backgroundImage: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/Troy-SuccessStory-Image.jpg`,
    beforeAfterAlt: 'troy-before(1)',
    beforeAfter: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/troy-before1.jpg`,
    texts: [
      'Troy P.',
      'TBD',
      'TBD',
      `Watch Troy's Story`,
    ]
  },
  {
    backgroundImage: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/Ron-SuccessStory-Image.jpg`,
    beforeAfterAlt: 'ron-before-(1)',
    beforeAfter: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/ron-before-1.jpg`,
    texts: [
      'Ron C.',
      'TBD',
      'TBD',
      `Watch Ron's Story`,
    ]
  },
  {
    backgroundImage: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/NIckH-SuccessStory-Image.jpg`,
    beforeAfterAlt: 'nick-before-text',
    beforeAfter: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/nick-before-text.jpg`,
    texts: [
      'Nick H.',
      'TBD',
      'TBD',
      `Watch Nick's Story`,
    ]
  },
  {
    backgroundImage: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/Cayle-SuccessStory-Image.jpg`,
    beforeAfterAlt: 'cayle-before',
    beforeAfter: `${Cypress.env('BASE_URL')}/wp-content/uploads/2021/09/cayle-before.jpg`,
    texts: [
      'Cayle D.',
      'TBD',
      'TBD',
      `Watch Cayle's Story`,
    ]
  }
]

Given('I scroll to featured stories section​​', () => {
  cy.scrollTo(0, 300)
  cy.wait(1000)
});

Then('I must see slider', () =>{
  checkSliderExists(slideOptions.slideSelector)
});

Then('I can see slide at {string} place is active', (place) =>{
  checkSlideActive(slideOptions, Number(place))
})

When('I click {string} at slider', (clickSelector) =>{
  const mapSelector = {
    'next': slideOptions.nextSelector,
    'prev': slideOptions.prevSelector
  }
  changeSlide(mapSelector[clickSelector])
});

When('I click dot at {string} place of slider', (place) =>{
  changeSlide(getDotSelector(slideOptions.slideSelector, place))
});

Then('I must see Big image, before-after image, info, button watch video of slide {string}', (place) =>{
  const expectObj = slideExpects[Number(place - 1)]
  cy.get('.mod-success-story-banner .slick-active .stories-img')
    .should('have.css', 'background-image')
    .and('include', expectObj.backgroundImage)
  cy.get(`.mod-success-story-banner .slick-active img[alt="${expectObj.beforeAfterAlt}"]`)
    .should('have.attr', 'src').should('include', expectObj.beforeAfter)
  for (const text of expectObj.texts) {
    cy.get('.mod-success-story-banner .slick-active')
      .contains(text)
  }
});
/* end test slide ngoài page home */


When('I click watch story video', () => {
  cy.get('.mod-success-story-banner .slick-active a')
    .contains('Watch')
    .click()
});

Then('I must see popup lightbox video​', () => {
  cy.get('.popup-gallary')
    .should('be.visible')
});

When('I click close popup lightbox video', () => {
  cy.wait(5000)
  cy.get('.popup-gallary .popup-is-close')
    .click()
})
Then('I do not see popup lightbox video​', () => {
  cy.get('.popup-gallary')
    .should('not.be.visible')
});

/* Test slide trong popup */
const popupSlideOptions = {
  slideSelector: '.popup-gallary .gallary-silder .slick-list',
  slideItemSelector: '.gallary-item',
  nextSelector: '.popup-gallary .gallary-silder a.slick-next',
  prevSelector: '.popup-gallary .gallary-silder a.slick-prev',
  dataKey: 'data-slick-index'
}

const popupSlideExpects = [
  {
    iframeLink: 'https://www.youtube.com/embed/aDNoKx8ew2I'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/Tn8WhJQh8ec'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/acLFCx5wumw'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/JORMgtgOjjw'
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

When('In popup video, I click dot at {string} place of slider', (place) =>{
  changeSlide(getDotSelector(popupSlideOptions.slideSelector, place))
});

Then('In popup video, I must see video of slide {string}', (place) =>{
  const expectObj = popupSlideExpects[Number(place - 1)]
  cy.get(`.popup-gallary .slick-active iframe#ytb-${Number(place - 1)}`)
    .should('have.attr', 'src').should('include', expectObj.iframeLink)
});

/* End Test slide trong popup */