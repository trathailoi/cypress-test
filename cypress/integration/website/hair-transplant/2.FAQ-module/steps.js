
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
    question: 'Why should I go to Bosley for my hair restoration?',
    answers: [
      `Two key factors distinguish Bosley from the competition: experience and natural-looking results. Bosley has been a full-time hair restoration practice since 1974—it’s all we do.`,
      `We think the facts speak for themselves:`,
      `Bosley has performed more hair transplants than any other medical group in the world.`,
      `We’ve restored hair for patients from all 50 states and more than 70 foreign countries.`,
      `We’ve pioneered major advancements in the field of hair transplantation over the last 40 years.`,
      `Every Bosley physician is required to be actively licensed in the state in which they practice along with being a member of one or more professional associations. Before joining Bosley, all of our physicians have had years of training and experience in their field. If you are interested in seeing a particular Bosley physician, you can find a summary of their professional training and background by searching our Doctors page.`,
      `Bosley’s advanced hair transplant procedures and our doctors’ artistic abilities lead to recreated hairlines and hair growth that looks as natural as your original hair. Our follicular-unit techniques result in hair restoration so natural that most people can’t tell which hairs are transplanted and which are native. (You can even watch a video of people trying to tell the difference if you order our Info Kit)`,
    ]
  },
  {
    question: 'Can women get a hair transplant? ',
    answers: [
      'Of course! While women typically lose hair in a different pattern than men, Bosley uses a similar procedure to treat female pattern baldness. Check out our page on the causes of hair loss in women to learn more about this common issue along with possible treatment solutions.'
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
    question: 'Can I speak with someone who got their transplant through Bosley?',
    answers: [
      'In addition to reviewing the photos and testimonies shared by Bosley Patients, you can also email Bosley patients to ask about their experiences with hair transplantation.',
      'If you’d like, we can also arrange for you to meet or talk to a patient who has had hair restoration work done. Call us at 1-800-985-6405 for more information about setting up an in-person meeting.',
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
