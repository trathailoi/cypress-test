import { cloneDeep } from "lodash"

const resDefault = {
  "success": true,
  "data": {}
}

// const resFailedDefault = {
//   "success": false,
//   "data": {}
// }

const resBookFailed = {
  data: {
    sfHttpCode: 404
  } 
}

const resNewFormObj = {
  "success": true,
  "data": {
    "__type": "Bosley_Self_Service.BosleyshortformDataObject",
    "SFID": "00Q56000006raiPEAQ",
    "Email": "",
    "Message": "SUCCESS",
    "ReturnCode": 200,
    "isLeadConsultProcedure": "Lead",
    "isNew": true,
    "zipCode": "43051"
  }
}

const resConfirmVideoConsult = {
  success: true,
  data: {
    response: {
      status: 'Success'
    }
  }
}

const generateAvailableSlots = (dateString) => [
  "T08:00:00",
  "T08:30:00",
  "T09:00:00",
  "T09:30:00",
  "T10:00:00",
  "T11:00:00",
  "T11:30:00",
  "T12:00:00",
  "T12:30:00",
  "T13:00:00",
  "T13:30:00",
  "T14:00:00",
  "T14:30:00",
  "T15:00:00",
  "T15:30:00",
  "T16:00:00",
  "T16:30:00",
  "T17:00:00",
  "T17:30:00",
  "T18:00:00",
  "T18:30:00",
  "T19:00:00",
  "T19:30:00",
  "T20:00:00",
  "T20:30:00"
].map(e => `${dateString}${e}`)

const today = (new Date()).toISOString().split('T')[0]
// vì trong code detach theo new Date nên phải set thế này

const resGetLocationAndVideos = {
  "success": true,
  "data": {
    "appointmentEligibility": "ICON",
    "locations": [
      {
        "address1": "2450 Severn Ave., Suite 510",
        "city": "Metairie",
        "company": "BOSLEY",
        "country": "USA",
        "distanceInMiles": "13.93",
        "officeName": "New Orleans",
        "officeType": "RSO",
        "state": "LA",
        "zip": "70001",
        "timezone": 'PT'
      }
      // {
      //   "address1": "2450 Severn Ave., Suite 510",
      //   "city": "Metairie",
      //   "company": "BOSLEY",
      //   "country": "USA",
      //   "distanceInMiles": "13.93",
      //   "officeName": "videoconsult New Orleans",
      //   "officeType": "RSO",
      //   "state": "LA",
      //   "zip": "70001",
      //   "timezone": 'PST'
      // }
    ],
    "videoConsultation": {
      "timezone": {
        "tzfromscheduler": "Videoconsultpst",
        "tzfromschedulerprint": "PT",
        "abbreviation": "PT"
      },
      "slots": {
        "sfId": "00Q56000006raEqEAI",
        "scheduledDate": today,
        "location": "videoconsult",
        "availableSlots": generateAvailableSlots(today),
        "appointmentEligibility": "ICON"
      }
    }
  }
}

const resGetJustLocation = {
  "success": true,
  "data": {
    "locations": [
      {
        "address1": "2450 Severn Ave., Suite 510",
        "city": "Metairie",
        "company": "BOSLEY",
        "country": "USA",
        "distanceInMiles": "13.93",
        "officeName": "New Orleans",
        "officeType": "RSO",
        "state": "LA",
        "zip": "70001",
        "timezone": 'PT'
      }
    ]
  }
}

const resGetLocationNoItems = {
  "success": true,
  "data": {
    "appointmentEligibility": null,
    "locations": []
  }
}

const resGetDateAvailables = {
  "success": true,
  "data": [
    '2021-08-27',
    '2021-08-28',
    '2021-08-30',
    '2021-08-31',
    '2021-09-01',
    '2021-09-02',
    '2021-09-03',
    '2021-09-04',
    '2021-09-06',
    '2021-09-07',
    '2021-09-08',
    '2021-09-09',
    '2021-09-10',
    '2021-09-11',
    '2021-09-13'
  ].map(scheduledDate => ({
    scheduledDate,
    "sfId": "00Q56000006raiPEAQ",
    "location": "New Orleans",
    "availableSlots": generateAvailableSlots(scheduledDate),
    "appointmentEligibility": "ICON"
  }))
}

const resLoadMoreDateAvailables = {
  "success": true,
  "data": [
    '2021-09-14',
    '2021-09-15',
    '2021-09-16',
    '2021-09-17',
    '2021-09-18',
    '2021-09-19',
    '2021-09-20',
    '2021-09-21',
    '2021-09-22',
    '2021-09-23',
    '2021-09-24',
    '2021-09-25',
    '2021-09-26',
    '2021-09-27',
    '2021-09-28'
  ].map(scheduledDate => ({
    scheduledDate,
    "sfId": "00Q56000006raiPEAQ",
    "location": "New Orleans",
    "availableSlots": generateAvailableSlots(scheduledDate),
    "appointmentEligibility": "ICON"
  }))
}

const resGetTimeAvailableNoItem = {
  "success": true,
  "data": [
    '2021-08-27',
    '2021-08-28',
    '2021-08-30',
    '2021-08-31',
    '2021-09-01',
    '2021-09-02',
    '2021-09-03',
    '2021-09-04',
    '2021-09-06',
    '2021-09-07',
    '2021-09-08',
    '2021-09-09',
    '2021-09-10',
    '2021-09-11',
    '2021-09-13'
  ].map(scheduledDate => ({
    scheduledDate,
    "sfId": "00Q56000006raiPEAQ",
    "location": "Hartford",
    "availableSlots": [],
    "appointmentEligibility": "ICON"
  }))
}

const resBookSuccessfully = {
  "success": true,
  "data": {
    "response": {
      "status": "Success",
      "message": "Successfully Booked an Appointment!"
    },
    "startdate": "20210827T100435",
    "calendar_outlook": "https://www.bosley.com/wp-content/themes/bosley/functions/ical.php?location=Bosley%20Metairie&startdate=20210827T100435",
    "calendar_google": "https://calendar.google.com/calendar/r/eventedit?text=Bosley%20Metairie&dates=20210827T100435/20210827T100435"
  }
}

const resGetDateTimeNoItems = {
  "success": true,
  "data": []
}

const defaultData = {
  "fullDropdown": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resBookSuccessfully
  ],
  "fullDropdown": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resBookSuccessfully
  ],
  "fullDropdownBookFailed": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resBookFailed
  ],
  "fullDropdownHaveConfirm": [
    resNewFormObj,
    resGetLocationAndVideos,
    resConfirmVideoConsult
  ],
  "fullDropdownHaveLoadMore": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resLoadMoreDateAvailables,
    resBookSuccessfully
  ],
  "fullDropdownNotHaveLoadMore": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resLoadMoreDateAvailables,
    resGetDateTimeNoItems,
    resBookSuccessfully
  ],
  "fullDropdownHaveSelectTimezone": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resGetDateAvailables,
    resBookSuccessfully
  ],
  "fullDropdownHaveSelectTimezoneBookFailed": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateAvailables,
    resGetDateAvailables,
    resBookFailed
  ],
  "fullDropdownUnAvailableDateTime": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetDateTimeNoItems
  ],
  "fullDropdownUnAvailableTime": [
    resNewFormObj,
    resGetLocationAndVideos,
    resGetTimeAvailableNoItem
  ],
  "withoutInstantVideo": [
    resNewFormObj,
    resGetJustLocation,
    resDefault,
    resGetDateAvailables,
    resBookSuccessfully
  ],
  "emptyDropdown": [
    resNewFormObj,
    resGetLocationNoItems
  ]
}

// const resCheckSFIDSuccess = {
//   "success": true,
//   "data": {
//     "validID": "True",
//     "message": "Successfully Validated Salesforce ID!",
//     "errorCode": "SUCCESS"
//   }
// }

const resCheckSFIDFailed = {"success":false,"data":{"Message":"Invalid Salesforce ID"}}

const clonedDefaultData = cloneDeep(defaultData)

const withCookies = Object.keys(clonedDefaultData).reduce((resultObj, key) => {
  resultObj[key] = cloneDeep(clonedDefaultData[key])
  // resultObj[key][0] = resCheckSFIDSuccess
  resultObj[key].splice(0, 1)
  return resultObj
}, {})

const withInvalidSFID = Object.keys(clonedDefaultData).reduce((resultObj, key) => {
  // resultObj[key] = [resCheckSFIDFailed, ...cloneDeep(clonedDefaultData[key])]
  resultObj[key] = cloneDeep(clonedDefaultData[key])
  return resultObj
}, {})

const withValidSFID = Object.keys(clonedDefaultData).reduce((resultObj, key) => {
  resultObj[key] = cloneDeep(clonedDefaultData[key])
  resultObj[key].splice(0, 1)
  return resultObj
}, {})


const resSubmitFreeKit = {
  "success": true,
  "data": {
    "__type": "Bosley_Self_Service.BosleyshortformDataObject",
    "SFID": "00Q56000006raiPEAQ",
    "Email": "",
    "Message": "SUCCESS",
    "ReturnCode": 200,
    "isLeadConsultProcedure": "Lead",
    "isNew": true,
    "zipCode": "91356"
  }
}

withCookies.checkSubmitFreeKit = [
  resSubmitFreeKit
]

export default {
  stubbedData: {
    defaultData,
    withCookies,
    withInvalidSFID,
    withValidSFID
  },
  cookies: {
    bosley_campaign_name:	'BOSLEY.COM',
    bosley_crmid:	'00Q56000006raiPEAQ',
    bosley_lead_address: 'U2FsdGVkX18ig0ogTuDdbGQ9wWtquOFmnSzSZYBB4f4=',
    bosley_lead_email: 'U2FsdGVkX19cosweybGFNSPvdC/u85TcKDQXYd6IFsg1AmSNxrSB8YhqDctvpzS4',
    bosley_lead_first_name:	'U2FsdGVkX1+ONFM9JAhZNnSqjzREra7NJLTUlObXq3w=',
    bosley_lead_gender:	'U2FsdGVkX1844aQSHB0OITjdGv2Y7pnh9nf0mokNjN8=',
    bosley_lead_last_name: 'U2FsdGVkX1+sxSZDRIICQ43hYdcUCcLpdiggULGF/F0=',
    bosley_lead_mobile_phone:	'U2FsdGVkX1+oMtr3cQzGakrsJK8XgPcd2GnAcw7KSDg=',
    bosley_lead_zip: '91356'
  }
}
