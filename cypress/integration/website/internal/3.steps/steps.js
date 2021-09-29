import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'

const slideOptions = {
  slideSelector: '.mod-success-stories .slick-slider',
  slideItemSelector: '.stories-item',
  nextSelector: '.mod-success-stories .slick-slider button.slick-next',
  prevSelector: '.mod-success-stories .slick-slider button.slick-prev',
  dataKey: 'data-slick-index'
}

const mapSelector = {
  'next': slideOptions.nextSelector,
  'prev': slideOptions.prevSelector
}

const slideExpects = [
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/hair_image.png',
    texts: [
      'Step 1:',
      'Preparing the Donor Area',
      'First, we identify the recipient areas and work to personalize a plan to help you achieve the most natural-looking hairline possible. Next, we trim the hair in your donor area to facilitate the identification and removal of strong, healthy donor hairs.'
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/hair_image.png',
    texts: [
      'Step 2:',
      'Preparing the Donor Area Preparing the Donor Area Preparing the Donor Area',
      'First, we identify the recipient areas and work to personalize a plan to help you achieve the most natural-looking hairline possible. Next, we trim the hair in your donor area to facilitate the identification and removal of strong, healthy donor hairs.'
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/hair_image.png',
    texts: [
      'Step 3:',
      'Preparing the Donor Area',
      'First, we identify the recipient areas and work to personalize a plan to help you achieve the most natural-looking hairline possible. Next, we trim the hair in your donor area to facilitate the identification and removal of strong, healthy donor hairs.'
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/hair_image.png',
    texts: [
      'Step 4:',
      'Preparing the Donor Area',
      'First, we identify the recipient areas and work to personalize a plan to help you achieve the most natural-looking hairline possible. Next, we trim the hair in your donor area to facilitate the identification and removal of strong, healthy donor hairs. First, we identify the recipient areas and work to personalize a plan to help you achieve the most natural-looking hairline possible. Next, we trim the hair in your donor area to facilitate the identification and removal of strong, healthy donor hairs.'
    ]
  },
]

Given('I scroll to Step​ section', () => {
  cy.scrollTo(0, 2000)
  cy.wait(1000)
});

Then('I must see slider', () =>{
  checkSliderExists(slideOptions.slideSelector)
});

Then('I can see slide at {string} place is active', (place) =>{
  checkSlideActive(slideOptions, Number(place))
})

Then('I can see button {string} is disabled', (clickSelector) => {
  cy.get(mapSelector[clickSelector])
    .should('have.class', 'slick-disabled')
})

When('I click {string} at slider', (clickSelector) =>{
  changeSlide(mapSelector[clickSelector])
});

When('I click dot at {string} place of slider', (place) =>{
  changeSlide(getDotSelector(slideOptions.slideSelector, place))
});

Then('I must see Big image, step content of slide {string}', (place) =>{
  const expectObj = slideExpects[Number(place - 1)]
  cy.get('.mod-success-stories .slick-active .stories-img')
    .should('have.css', 'background-image')
    .and('include', expectObj.backgroundImage)
  for (const text of expectObj.texts) {
    cy.get('.mod-success-stories .slick-active')
      .contains(text)
  }
});

