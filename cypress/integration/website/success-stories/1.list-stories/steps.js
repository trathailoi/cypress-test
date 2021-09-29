import { stubAdminAjaxApi } from '../../../common/scripts'
import { checkSliderExists, changeSlide, getDotSelector, checkSlideActive } from '../../../common/website/common-scripts'

const resShowMore = {
  data: {
    content: `<div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/brenda.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"It was painless, it was professional. I would definitely recommend this procedure to other people who have the same situation that I do.\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"8\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Brenda's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Default_image.png\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"I chose Bosley because of the reviews I found online and the reputation that they have.\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"9\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Joe's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Ebony.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"I’d recommend Bosley SMP to any man or woman who’s ready to make a change to their life and find their confidence again. I would suggest Bosley; this is the...\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"10\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Ebony's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Jeff-SuccessStory-Image.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"I have never experienced such wonderful customer service. They were all focused on my comfort throughout the procedure.\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"11\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Jeff's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/joshuaA-SuccessStory-Image.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"Bosley was the best investment that I ever made. It gave me my confidence back. When I go out, I don’t wear a baseball hat. I don’t do any of...\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"12\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Joshua's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Blair-SuccessStory-Image.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"When I first thought about hair restoration, I thought, ‘is it going to fall out if I do something active—if I go on roller coasters, or if I am in...\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"13\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Blair's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Wayne-SuccessStory-Image.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"Going to Bosley was the best decision I ever made. It was so simple, I was at work the next day!\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"14\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Wayne's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Edgar-SuccessStory-Image.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"I’m so thankful that I had the FUE procedure at Bosley. I wanted to go with a company that had the latest and most advanced technology, and that decision ultimately...\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"15\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch Edgar's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>  <div class=\"col w-full mb-28 md:mb-23 lg:w-1/3 lg:mb-33 2xl:mb-50 anima-bottom delay-6\">\n  <div class=\"bg-success-story-grid lazy rounded-box bg bg-center mb-8 bg-v2 2xl:mb-6\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/johnb-SuccessStory-Image.jpg\"></div>\n  <div class=\"last-mb-none paragraph-super-large font-medium text-black\">\n    <div class=\"content-item-grid last-mb-none md:mb-6 2xl:mb-8\">\n      \"I’m extremely happy with the Bosley FUE procedure. It allowed me to go in that morning, have the procedure, and go home that evening. I went out that evening with...\"\n    </div>\n    <p>\n  <a href=\"javascript:;\" data-id=\"#popup-video2\" data-popup=\"garally\" data-garally=\"16\" data-htmlclass=\"html-popup-garally\" class=\"text-btn-dark tag-link no-underline text-blue-500 popup-is-open font-bold\" tabindex=\"0\">\n      Watch John's Story\n      <span class=\"icomoon icon-play h-9 w-13 bg-red inline-flex items-center justify-center ml-3 relative -top-1\"></span>\n  </a>\n</p>\n  </div>\n</div>`,
    contentVideo: `<div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/aP_XH4K6vn0\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Brenda</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/8cRCoqiipP0\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Joe L.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://youtu.be/V98gr4fYGLk\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Ebony P.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/bnfj32M2mgc\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Jeff B.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/r6oLj0oDK14\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Joshua A.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/ItXQNsi-7Uw\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Blair T.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/suUTybNkCjg\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Wayne C.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                    Wayne C. test\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/l2dBCxOR9m4\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>Edgar S.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                    Edgar S.\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>  <div class=\"gallary-item ps-rv slider-lazy relative\">\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=\" class=\"loading lazy absolute transform-center-middle z-1\" alt=\"loading\" data-src=\"https://bosley-develop.box.carbon8test.com/wp-content/themes/bosley/dist/images/ajax-loader-white.svg\">\n  <div class=\"item-video-popup w-full z-2 relative\" data-video=\"https://www.youtube.com/embed/HlWAEHZJyo0\">\n    <div class=\"video w-full\"></div>\n    <div class=\"hidden justify-between description-video text-white text-white-headline items-center lg:flex md:mt-9\">\n      <div class=\"last-mb-none\"><h4>John B.</h4></div>\n      <div class=\"last-mb-none\">\n        <p>\n                    John B.\n                  </p>\n      </div>\n    </div>\n  </div>\n</div>`,
    indexItem: 16,
    page: 2,
    showLoadMore: false
  },
  success: true
}

Given('Fake admin ajax api', () => {
  stubAdminAjaxApi([resShowMore], {
    method: 'GET',
    url: "https://bosley-develop.box.carbon8test.com/wp-admin/admin-ajax.php?action=get_more_stories&curPage=1&reqPage=&indexItem=7"
  })
})

Given('I scroll to List success stories', () => {
  cy.scrollTo(0, 900)
})

const successStories = [
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Luke-SuccessStory-Image.jpg"`,
    content: `I’m a bartender and my hair really matters to me. Having my confidence means having my hair, and without that, I wouldn’t be able to do my job.`,
    buttonText: `Watch Luke's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Jayne-SuccessStory-Image.jpg"`,
    content: `It was really difficult for me to get up in the morning, take a shower and take a look at myself in the mirror. It made me feel less confident....`,
    buttonText: `Watch Jayne's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Torrance-ss.jpg"`,
    content: `Bosley was the best choice I ever made for myself.`,
    buttonText: `Watch Torrance's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/DeanB-SuccessStory-Image.jpg"`,
    content: `In my career, everything is based on appearances. After my hair restoration I felt better, more at ease than any time before.`,
    buttonText: `Watch Dean's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/StevenA-SuccessStory-Image.jpg"`,
    content: `Bosley is great. I look the way I'm supposed to look. I feel the way I'm supposed to feel about myself.`,
    buttonText: `Watch Steven's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/JasonW-SuccessStory-Image.jpg"`,
    content: `I don't mind taking photos anymore. In fact, I kind of like to take pictures now to be honest.`,
    buttonText: `Watch Jason's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Luke-SuccessStory-Image.jpg"`,
    content: `I would say that Bosley has the most advanced technology on the market right now.`,
    buttonText: `Watch Luke's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/MarcB-SuccessStory-Image.jpg"`,
    content: `When I first saw that hair growing in, I was like wow, this really works.`,
    buttonText: `Watch Marc's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/brenda.jpg"`,
    content: `It was painless, it was professional. I would definitely recommend this procedure to other people who have the same situation that I do.`,
    buttonText: `Watch Brenda's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Default_image.png"`,
    content: `I chose Bosley because of the reviews I found online and the reputation that they have.`,
    buttonText: `Watch Joe's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Ebony.jpg"`,
    content: `I’d recommend Bosley SMP to any man or woman who’s ready to make a change to their life and find their confidence again. I would suggest Bosley; this is the...`,
    buttonText: `Watch Ebony's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Jeff-SuccessStory-Image.jpg"`,
    content: `I have never experienced such wonderful customer service. They were all focused on my comfort throughout the procedure.`,
    buttonText: `Watch Jeff's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/joshuaA-SuccessStory-Image.jpg"`,
    content: `Bosley was the best investment that I ever made. It gave me my confidence back. When I go out, I don’t wear a baseball hat. I don’t do any of...`,
    buttonText: `Watch Joshua's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Blair-SuccessStory-Image.jpg"`,
    content: `When I first thought about hair restoration, I thought, ‘is it going to fall out if I do something active—if I go on roller coasters, or if I am in...`,
    buttonText: `Watch Blair's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Wayne-SuccessStory-Image.jpg"`,
    content: `Going to Bosley was the best decision I ever made. It was so simple, I was at work the next day!`,
    buttonText: `Watch Wayne's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/Edgar-SuccessStory-Image.jpg"`,
    content: `I’m so thankful that I had the FUE procedure at Bosley. I wanted to go with a company that had the latest and most advanced technology, and that decision ultimately...`,
    buttonText: `Watch Edgar's Story`
  },
  {
    backgroundImage: `"https://bosley-develop.box.carbon8test.com/wp-content/uploads/2021/09/johnb-SuccessStory-Image.jpg"`,
    content: `I’m extremely happy with the Bosley FUE procedure. It allowed me to go in that morning, have the procedure, and go home that evening. I went out that evening with...`,
    buttonText: `Watch John's Story`
  },
]

Then('I must see list success stories have {string} items', (itemLength) => {
  cy.get('.mod-success-story-grid .bg-success-story-grid')
    .should('have.length', itemLength)

  cy.get('.mod-success-story-grid .bg-success-story-grid')
    .then($els => {
      let i = 0
      for (const el of $els) {
        const yPosition = {
          4: 2000,
          9: 2600,
          12: 3200,
          15: 3800,
        }
        if (yPosition[i]) {
          cy.scrollTo(0, yPosition[i])
          cy.wait(500)
        }
        cy.get(el)
          .should('have.css', 'background-image')
          .and('include', successStories[i].backgroundImage)
        i++
      }
    })
  cy.get('.mod-success-story-grid .content-item-grid')
    .then($els => {
      let i = 0
      for (const el of $els) {
        expect(el.innerText).to.include(successStories[i].content)
        cy.get(el)
          .parent()
          .get('.popup-is-open')
          .contains(successStories[i].buttonText)
        i++
      }
    })
})

When('I click show more button', () => {
  cy.get('.mod-success-story-grid .load-more-story')
    .contains('Show More')
    .click()
})

Then('paged-start query params has been added to url', () => {
  cy.url()
    .should('equal', `https://bosley-develop.box.carbon8test.com/results/success-stories/?paged-start=2`)
})

Then('I do not see button show more', () => {
  cy.get('.mod-success-story-grid .load-more-story')
    .should('not.be.visible')
})


/* Test slide trong popup */
When('I click watch {string} story video', (video) => {
  cy.get('.mod-success-story-grid .popup-is-open')
    .then($els => {
      cy.get($els[Number(video - 1)])
        .click()
    })
});

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
    iframeLink: 'https://www.youtube.com/embed/iV-QGinc-Pc'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/-RqNj2RyP_o'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/jKo4wTg_Oq0'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/QqBc05FMhOs'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/uEFxhr1tkdY'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/7OZWRGwjFkM'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/4-e0e1HYBwA'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/aP_XH4K6vn0'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/8cRCoqiipP0'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/V98gr4fYGLk'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/bnfj32M2mgc'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/r6oLj0oDK14'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/ItXQNsi-7Uw'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/suUTybNkCjg'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/l2dBCxOR9m4'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/HlWAEHZJyo0'
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
  cy.get(`.popup-show .popup-gallary .slick-active iframe#ytb-${Number(place - 1)}`)
    .should('have.attr', 'src').should('include', expectObj.iframeLink)
});

/* End Test slide trong popup */
