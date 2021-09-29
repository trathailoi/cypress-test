const adminAjaxUrl = 'https://bosley-develop.box.carbon8test.com/wp-admin/admin-ajax.php'

const stubAdminAjaxApi = (dataApi = {}, options = {}) => {
  const { method = 'POST', url = adminAjaxUrl } = options
  let countAdminAjaxApi = 0
  cy.intercept(method, url, (req) => {
    const defaultResponse = {
      success: true,
      data: {}
    }
    req.reply(dataApi[countAdminAjaxApi] || defaultResponse)
    countAdminAjaxApi++
    req.alias = `${countAdminAjaxApi}-Times-AdminAjaxApi`
  })
}

// https://github.com/cypress-io/cypress/issues/2671
const fakeLocation = (latitude, longitude)  => ({
  onBeforeLoad(win) {
    cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
      if (latitude && longitude) {
        return cb({ coords: { latitude, longitude } });
      }
      throw err({ code: 1 }); // 1: rejected, 2: unable, 3: timeout
    });
  }
})

export {
  adminAjaxUrl,
  stubAdminAjaxApi,
  fakeLocation
}