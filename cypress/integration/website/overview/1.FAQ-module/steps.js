
Given('I scroll to FAQ module​', () => {
  cy.scrollTo(0, 5400)
});

const getSelectorFAQItem = place => `.mod-overview-faq .item-overview-faq:nth-child(${place})`

When('I click to {string} at {string} FAQ', (showSelector, place) => {
  const selectorFAQItem = getSelectorFAQItem(place)
  const mapSelector = {
    'icon +': `${selectorFAQItem} .close-faq`,
    'icon -': `${selectorFAQItem} .close-faq`,
    'FAQ Item': selectorFAQItem
  }
  cy.get(mapSelector[showSelector])
    .click()
});

const faqExpects = [
  {
    question: 'Can women get a hair transplant? ',
    answers: [
      'Of course! While women typically lose hair in a different pattern than men, Bosley uses a similar procedure to treat female pattern baldness. Check out our page on the causes of hair loss in women to learn more about this common issue along with possible treatment solutions.'
    ]
  },
  {
    question: 'Can I speak with someone who got their transplant through Bosley?',
    answers: [
      'In addition to reviewing the photos and testimonies shared by Bosley Patients, you can also email Bosley patients to ask about their experiences with hair transplantation.',
      'If you’d like, we can also arrange for you to meet or talk to a patient who has had hair restoration work done. Call us at 1-800-985-6405 for more information about setting up an in-person meeting.',
    ]
  },
  {
    question: 'Do hair transplantation procedures hurt?',
    answers: [
      `It's difficult to evaluate a patient’s degree of pain or discomfort during or after a procedure - as it varies from one patient to another. However, all patients are administered local anesthetics and other pain medications during the procedure, and a Bosley physician may supply medication to use after the procedure if needed. However, many of our patients find that they do not need to take any medication after their hair transplant.`      
    ]
  },
  {
    question: 'Will the procedure leave a scar?',
    answers: [
      `Whenever human skin is cut, it always heals by the process called “fibrosis,” which is the technical term for scarring. Fibrosis is the skin’s natural way of healing.`,
      `Thanks to the skill of our experienced hair transplant physicians, the healing sites in the transplanted areas are usually so small that scarring is virtually undetectable, and the donor site scar is covered by your existing hair.`      
    ]
  },
  {
    question: 'Can I get a hair transplant even if I have a medical condition?',
    answers: [
      `Pre-existing medical conditions are always a concern of your Bosley doctor. If you have a pre-existing medical condition, please tell your Senior Counselor at the time of your consultation. For your convenience, we have listed responses for some of the most frequently conditions and medications:`
    ]
  },
  {
    question: 'Why do hair transplants sometimes look unnatural?',
    answers: [
      'Short answer: because they’re a bad hair transplant. Bosley hair restorations utilize cutting-edge techniques based on recent research, leading to restorations that go unnoticed because they are so natural looking.',
      'Modern research in hair growth discovered that scalp hairs grow in small groupings called follicular units. Each unit contains between one and four hairs per unit. We duplicate that grouping by randomly dispersing hair units like nature does.',
      'With our 30 years of experience in the artistry of hair restoration, we have refined these micro-technologies to the point where medical doctors have difficulty identifying which hairs are the original, non-transplanted follicles and which have been transplanted.',
    ]
  },
  {
    question: 'How many procedures will I have to undergo?',
    answers: [
      `The number of procedures you'll need depends on your goals and your degree of hair loss. However, in our experience, the majority of patients will want to have at least two procedures to achieve their desired results.`
    ]
  },  
  {
    question: 'Won’t my transplanted hair just fall out like my old hair?',
    answers: [
      `For the vast majority of patients, virtually all transplanted hair lasts a lifetime. In some cases, a small percentage of transplanted hair may be lost as you age.`
    ]
  }  
]

Then('FAQ content at {string} place must be expanded', (place) => {
  const selectorFAQItem = getSelectorFAQItem(place)
  const selectorContentFAQItem = `${selectorFAQItem} .content-of`
  cy.get(selectorContentFAQItem)
    .should('be.visible')
  
  const faqObj = faqExpects[Number(place - 1)]
  cy.get(selectorFAQItem)
    .contains(faqObj.question)
  for (const answer of faqObj.answers) {
    cy.get(selectorFAQItem)
      .contains(answer)
  }
});
  
Then('FAQ content at {string} place must be collapsed', (place) => {
  const selectorContentFAQItem = `${getSelectorFAQItem(place)} .content-of`
  cy.get(selectorContentFAQItem)
    .should('not.be.visible')
});
