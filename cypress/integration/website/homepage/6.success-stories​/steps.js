import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'

/* test slide ngoài page home */
const slideOptions = {
  slideSelector: '.mod-success-stories .stories-slide',
  slideItemSelector: '.stories-item',
  nextSelector: '.mod-success-stories .stories-slide button.slick-next',
  prevSelector: '.mod-success-stories .stories-slide button.slick-prev',
  dataKey: 'data-slick-index'
}

const slideExpects = [
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/NIckH-SuccessStory-Image.jpg',
    beforeAfterAlt: 'nick-before-text',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/nick-before-text.jpg',
    texts: [
      'Bosley fixes your hair loss, they have done it for years. Bosley gives you your hair back! My only regret, is that I wish I had done it sooner!',
      `Watch Nick's Story`
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Ron-SuccessStory-Image.jpg',
    beforeAfterAlt: 'ron-before-(1)',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/ron-before-1.jpg',
    texts: [
      `I could not look at myself in the mirror and say, 'You're handsome.' My confidence level was at an all-time low. Bosley has changed by life tremendously.`,
      `Watch Ron's Story`
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Jayne-SuccessStory-Image.jpg',
    beforeAfterAlt: 'jayne-beforejpg',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/jayne-beforejpg.jpg',
    texts: [
      'It was really difficult for me to get up in the morning, take a shower and take a look at myself in the mirror. It made me feel less confident. Thanks to Power Matrix PRP, I went from this to this, here today. Bosley has definitely given me my life back',
      `Watch Jayne's Story`
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Troy-SuccessStory-Image.jpg',
    beforeAfterAlt: 'troy-before(1)',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/troy-before1.jpg',
    texts: [
      `If someone was telling me that they were thinking about going to Bosley, I would tell them to stop thinking. Just do it. I was in your shoes and you don't need to think anymore. Just go`,
      `Watch Troy's Story`
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Luke-SuccessStory-Image.jpg',
    beforeAfterAlt: 'luke-before-(2)',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/luke-before-2.jpg',
    texts: [
      'I would say that Bosley has the most advanced technology on the market right now.',
      `Watch Luke's Story`
    ]
  },
]

Given('I scroll to Success Stories section​', () => {
  cy.wait(1000)
  cy.scrollTo(0, 4800)
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

Then('I must see Big image, before-after image, story, button watch video of slide {string}', (place) =>{
  const expectObj = slideExpects[Number(place - 1)]
  cy.get('.mod-success-stories .slick-active .stories-img')
    .should('have.css', 'background-image')
    .and('include', expectObj.backgroundImage)
  cy.get(`.mod-success-stories .slick-active img[alt="${expectObj.beforeAfterAlt}"]`)
    .should('have.attr', 'src').should('include', expectObj.beforeAfter)
  for (const text of expectObj.texts) {
    cy.get('.mod-success-stories .slick-active')
      .contains(text)
  }
});
/* end test slide ngoài page home */


When('I click watch story video', () => {
  cy.get('.mod-success-stories .slick-active a')
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
    iframeLink: 'https://www.youtube.com/embed/acLFCx5wumw'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/Tn8WhJQh8ec'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/iV-QGinc-Pc'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/aDNoKx8ew2I'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/7OZWRGwjFkM'
  },
]

Then('In popup video, I must see slider', () =>{
  checkSliderExists(popupSlideOptions.slideSelector)
});

Then('In popup video, I can see slide at {string} place is active and see video of slide', (place) => {
  // check slide active
  checkSlideActive(popupSlideOptions, Number(place), true)

  // check video showing up
  const expectObj = popupSlideExpects[Number(place - 1)]
  cy.get(`.popup-gallary .slick-active iframe#ytb-${Number(place - 1)}`)
    .should('have.attr', 'src').should('include', expectObj.iframeLink)
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
/* End Test slide trong popup */