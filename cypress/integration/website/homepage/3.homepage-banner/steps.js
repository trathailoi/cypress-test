import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'

const slideOptions = {
  slideSelector: '.banner-slide',
  slideItemSelector: '.banner-slide-item',
  nextSelector: '.slick-control button.slick-next',
  prevSelector: '.slick-control button.slick-next',
  dotSelector: '.slick-control button.slick-next',
  dataKey: 'data-index',
  dotLength: 2
}

Then('I must see slider', (  ) =>{
  checkSliderExists(slideOptions.slideSelector)
} );

Then('I can see slide at {string} place is active', (place) =>{
  checkSlideActive(slideOptions, Number(place))
})

When('I click {string} at slider', (clickSelector) =>{
  const mapSelector = {
    'next': '.slick-control button.slick-next',
    'prev': '.slick-control button.slick-prev',
    'dot': '.slick-control button.slick-dot'
  }
  changeSlide(mapSelector[clickSelector])
});

When('I click dot at {string} place of slider', (place) =>{
  changeSlide(getDotSelector(slideOptions.slideSelector, place))
});

const slideExpects = [
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/header-nick-home.jpeg',
    iconImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/08/stamp-300k-restoration.svg',
    beforeAfterAlt: 'before-after image',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/08/before-after-image.jpeg',
    texts: [
      'Nick H.',
      'Actual Bosley Patient. Individual results may vary.'
    ]
  },
  {
    backgroundImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Blair-Header-Image.jpg',
    iconImage: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/08/stamp-bosley-guarantee_update.svg',
    beforeAfterAlt: 'blair-before-after',
    beforeAfter: 'https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/blair-before-after.jpg',
    texts: [
      'Blair',
      'Actual Bosley Patient. Individual results may vary.'
    ]
  }
]

Then('I must see Big image, before-after image, disclaimer box, badge icon​ of slide {string}', (place) =>{
  const expectObj = slideExpects[Number(place - 1)]
  cy.get('.slick-active .img-slide-banner')
    .should('have.css', 'background-image')
    .and('include', expectObj.backgroundImage)
  cy.get('.slick-active .banner-logo')
    .should('have.attr', 'src').should('include', expectObj.iconImage)
  cy.get(`.slick-active img[alt="${expectObj.beforeAfterAlt}"]`)
    .should('have.attr', 'src').should('include', expectObj.beforeAfter)
  for (const text of expectObj.texts) {
    cy.get('.slick-active .box-text')
      .contains(text)
  }
});
