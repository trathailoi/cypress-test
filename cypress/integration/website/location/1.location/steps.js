import { fakeLocation } from '../../../common/scripts'

const LOCATION_LENGTH = 73

Given('Visit Location Page and fake location', () => {
  cy.visit(`${Cypress.env('BASE_URL')}/locations`, fakeLocation(48, 2)); // France
})

Given('I scroll to map section', () => {
  cy.scrollTo(0, 400)
})

Then(`I must see my location refill on searchbox`, () => {
  cy.get('.search-location #location')
    .invoke('val')
    .should('include', 'France')
})

And(`I must see the distance in miles and sort from nearest to farthest`, () => {
  cy.window().then(win => {
    const $els = win.$('.list-location .list-item-location .box-find-location')
    expect($els.length).to.equal(LOCATION_LENGTH)
    const locationMiles = []
    for (const el of $els) {
      const mileText = el.querySelector('.mile').innerText
      const mileNumber = Number(String(mileText || '').replace(' mi', ''))
      locationMiles.push(mileNumber)
    }
    const sortedLocationMiles = JSON.parse(JSON.stringify(locationMiles)).sort((a, b) => a < b ? -1 : 1)
    for (const i in locationMiles) {
      expect(locationMiles[i]).to.deep.equal(sortedLocationMiles[i])
    }
  })
})

Then(`I must see list location sort alphabet by name`, () => {
  cy.window().then(win => {
    const $els = win.$('.list-location .list-item-location .box-find-location')
    cy.wrap($els).as('listLocationElement')
    expect($els.length).to.equal(LOCATION_LENGTH)
    const locationCityStates = []
    for (const el of $els) {
      const locationText = el.querySelector('.left-content h4').innerText
      const splittedLocationText = locationText.split(', ')
      const locationCityState = `${splittedLocationText[1]},${splittedLocationText[0]}`
      locationCityStates.push(locationCityState)
    }
    const sortedLocationCityStates = JSON.parse(JSON.stringify(locationCityStates)).sort((a, b) => a < b ? -1 : 1)
    expect(sortedLocationCityStates).to.deep.equal(locationCityStates)
  })
})

And(`I can't see the distance in miles`, () => {
  cy.get('@listLocationElement').then($els => {
    let checkAllMileIsHdden = true
    for (const el of $els) {
      const checkMileIsHidden = el.querySelector('.mile').classList.contains('hidden')
      if (!checkMileIsHidden) {
        checkAllMileIsHdden = false
        break
      }
      // expect(checkMileIsHidden).to.equal(true)
    }
    expect(checkAllMileIsHdden).to.equal(true)
  })
})

const clickLocationItem = (id, window) => {
  if (window) {
    window.$(`.list-location .list-item-location .box-find-location[data-id=${id}]`).click()
  } else {
    cy.get(`.list-location .list-item-location .box-find-location[data-id=${id}]`)
      .click()
  }
}


Given('Wait for map loaded', () => {
  cy.wait(3000)
  cy.window().then(window => {
    cy.wrap(window).as('window')
  })
})

When(`I click location at {string} place in the list`, (place) => {
  cy.get(`.list-location .list-item-location .box-find-location:nth-child(${place})`)
    .first()
    .invoke('attr', 'data-id')
    .then(dataId => {
      clickLocationItem(dataId)
      cy.wait(1000)
    })
})

// https://stackoverflow.com/questions/54690118/why-is-google-maps-getcenter-returning-invalid-coordinates/54711077
const fixCoordinates = (coordinate) => {
  let fixedCoordinate = coordinate
  while (fixedCoordinate > 180) fixedCoordinate -= 360
  while (fixedCoordinate < -180) fixedCoordinate += 360
  return fixedCoordinate
};

const getCenterCoordinate = (win) => {
  const mapCenter = win._cyCurrentGoogleMap.getCenter()
  return {
    lat: fixCoordinates(Number(mapCenter.lat())).toFixed(5),
    lng: fixCoordinates(Number(mapCenter.lng())).toFixed(5)
  }
}

And(`I must see location {string} is zoom on a map`, (place) => {
  cy.get(`.list-location .list-item-location .box-find-location:nth-child(${place})`)
    .first()
    .invoke('attr', 'data-id')
    .then(dataId => {
      cy.window().then(win => {
        const centerCoordinate = getCenterCoordinate(win)
        const loc = (win._cyCurrentLocations || []).find(l => String(l.data?.id) === String(dataId))
        expect(Number(loc.coordinate.lat).toFixed(5)).to.equal(centerCoordinate.lat)
        expect(Number(loc.coordinate.lng).toFixed(5)).to.equal(centerCoordinate.lng)
      })
    })
})

When(`I click marker at place {string} on map`, (place) => {
  cy.get(`#map [role=button]:nth-child(${place})`)
    .click({ force: true })
  cy.wait(1000)
})

And(`I must see this location is active on the list`, () => {
  cy.window().then(win => {
    win.$(`.list-location .list-item-location .box-find-location[data-id=${win._cyCurrentMarkerClickedLoc.data.id}]`)[0].classList.contains('active')
  })
})

When(`I input {string} on search box`, (keyword) => {
  cy.get('.search-location #location')
    .type(keyword)
})

const mapSearchResults = {
  'Vietnam': [
    'Vietnam',
    'Vietnam Town RdSan Jose, CA, USA',
    'VietnamskáBratislava, Slovakia',
    'Vietnam SupermarketLondon, UK',
    'Vietnam TengahVietnam'
  ]
}

Then(`I must see the suggest list of search {string} by Google`, (keyword) => {
  cy.wait(3000)
  const suggestTexts = mapSearchResults[keyword] || []
  for (const suggestText of suggestTexts) {
    cy.get('.pac-item')
      .contains(suggestText)
  }
})

When(`I select 1 address on the suggest list`, () => {
  cy.get('@window').then(win => {
    cy.wrap(getCenterCoordinate(win)).as('centerCoordinate')
    cy.get('.pac-item:nth-child(2)')
      .click()
    cy.wait(1000)
  })
})

And(`I must see this address is zoom on a map`, () => {
  cy.get('@centerCoordinate').then(oldCenterCoordinate => {
    cy.get('@window').then(win => {
      const currentCenterCoordinate = getCenterCoordinate(win)
      expect(currentCenterCoordinate.lat).to.not.equal(oldCenterCoordinate.lat)
      expect(currentCenterCoordinate.lng).to.not.equal(oldCenterCoordinate.lng)
    })
  })
})
