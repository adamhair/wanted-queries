const data = require('../test_data/test_data')
const selectors = require('../test_data/css_selectors')
const functions = require('../test_data/functions')

module.exports = {
    before: (browser) => {
        browser
            .url('http://localhost:3000/#/enter')
    },
    beforeEach: (browser) => {
        browser
            .refresh()
    },
    after: (browser) => {
        browser.end()
    },
    // The following five tests test each field using boundary value analysis
    'Test enter wanted page with not enough characters': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.notEnoughCharacters.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.notEnoughCharacters.error, browser)
    },
    'Test enter wanted page with minimum characters': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.minimumCharacters.data, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test enter wanted page with characters in the middle of the boundary': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.middleCharacters.data, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test enter wanted page with maximum characters': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.maximumCharacters.data, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test enter wanted page with to many characters': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.toManyCharacters.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.toManyCharacters.error, browser)
    },
    // Tests that empty fields will give the right error messages
    'Test enter wanted page with empty fields': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.emptyFields.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.emptyFields.error, browser)
    },
    // Tests the drivers license set of fields (drivers license, drivers license state, drivers license expiration date) with all combinations
    // to make sure correct error messages are displayed with invalid entries and valid entries are accepted
    'Test drivers license set with driver license field': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.dlWithDl.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.dlWithDl.error, browser)
    },
    'Test drivers license set with driver license state': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.dlWithDlState.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.dlWithDlState.error, browser)
    },
    'Test drivers license set with driver license expiration': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.dLWithExpiration.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.dLWithExpiration.error, browser)
    },
    'Test drivers license set with driver license and driver license state': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.dLWithLicenseAndState.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.dLWithLicenseAndState.error, browser)
    },
    'Test drivers license set with driver license and driver license expiration': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.dLWithLicenseAndExpiration.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.dLWithLicenseAndExpiration.error, browser)
    },
    'Test drivers license set with driver license state and driver license expiration': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.dlWithStateAndExpiration.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.dlWithStateAndExpiration.error, browser)
    },
    // Tests the license plate set of fields (license plate, license state, license expiration date) with all combinations
    // to make sure correct error messages are displayed with invalid entries and valid entries are accepted
    'Test license plate set with license plate field': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.lpWithPlate.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.lpWithPlate.error, browser)
    },
    'Test license plate set with license state field': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.lpWithState.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.lpWithState.error, browser)
    },
    'Test license plate set with license expiration field': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.lpWithExpiration.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.lpWithExpiration.error, browser)
    },
    'Test license plate set with license plate and state fields': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.lpWithPlateAndState.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.lpWithPlateAndState.error, browser)
    },
    'Test license plate set with license plate and expiration fields': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.lpWithPlateAndExpiration.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.lpWithPlateAndExpiration.error, browser)
    },
    'Test license plate set with license state and expiration fields': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.lpWithStateAndExpiration.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.enterWanted.lpWithStateAndExpiration.error, browser)
    },
    'Test clear button on enter wanted page': (browser) => {
        functions.enterMultipleValues(selectors.enterWantedFields, data.enterWanted.middleCharacters.data, browser)
        browser.click(selectors.global.clear)
        functions.verifyFieldsAreEmptyEnterWanted(browser)
    },
    // Checks to make sure each field can be modified and each set of optional fields can be modified together resulting in a valid query
    'Test modify wanted page with valid input in header field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.header, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in mke field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.mke, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in oai field': (browser) => {
        browser.click(selectors.global.submit)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.oai, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in name field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.name, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in sex field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.sex, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in race field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.race, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in height field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.height, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    // This test will not work until bug AHP-85 is fixed
    // 'Test modify wanted page with weight field': (browser) => {
    //     browser.click(selectors.pages.modifyWanted)
    //     functions.addingInput(selectors.fields, data.modifyWanted.validInput.weight, browser)
    //     browser.click(selectors.global.submit)
    //     browser.expect.element(selectors.global.valid).to.be.visible
    // },
    // Checks to make sure error messages are displayed with invalid input and valid input gives assembled query on modify wanted page
    'Test modify wanted page with valid input in hair field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.hair, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in offense field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.offense, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in date of warrant field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.dateOfWarrant, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in drivers license set of fields': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.driversLicenseSet, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with valid input in license plate set of fields': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.licensePlateSet, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test modify wanted page with invalid input in header field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.header.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.header.error, browser)
    },
    'Test modify wanted page with invalid input in mke field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.mke.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.mke.error, browser)
    },
    'Test modify wanted page with invalid input in oai field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.oai.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.oai.error, browser)
    },
    'Test modify wanted page with invalid input in name field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.name.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.name.error, browser)
    },
    'Test modify wanted page with invalid input in sex field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.sex.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.sex.error, browser)
    },
    'Test modify wanted page with invalid input in race field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.race.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.race.error, browser)
    },
    'Test modify wanted page with invalid input in height field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.height.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.height.error, browser)
    },
    'Test modify wanted page with invalid input in weight field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.weight.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.weight.error, browser)
    },
    'Test modify wanted page with invalid input in hair field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.hair.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.hair.error, browser)
    },
    'Test modify wanted page with invalid input in offense field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.offense.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.offense.error, browser)
    },
    'Test modify wanted page with invalid input in date of warrant field': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.dateOfWarrant.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.dateOfWarrant.error, browser)
    },
    'Test modify wanted page with invalid input in drivers license set of fields': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.driversLicenseSet.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.driversLicenseSet.error, browser)
    },
    'Test modify wanted page with invalid input in license plate set of fields': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.invalidInput.licensePlateSet.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.modifyWanted.invalidInput.licensePlateSet.error, browser)
    },
    'Test clear button on modify wanted page': (browser) => {
        browser.click(selectors.pages.modifyWanted)
        functions.enterMultipleValues(selectors.modifyWantedFields, data.modifyWanted.validInput.data, browser)
        browser.click(selectors.global.clear)
        functions.verifyFieldsAreEmptyModifyWanted(browser)
    },
    // Checks to make sure error messages are displayed with invalid input and valid input gives assembled query on cancel wanted page
    'Test cancel wanted page with valid input': (browser) => {
        browser.click(selectors.pages.cancelWanted)
        functions.enterMultipleValues(selectors.cancelWantedFields, data.cancelWanted.validInput.data, browser)
        browser.click(selectors.global.submit)
        browser.expect.element(selectors.global.valid).to.be.visible
    },
    'Test cancel wanted page with invalid input': (browser) => {
        browser.click(selectors.pages.cancelWanted)
        functions.enterMultipleValues(selectors.cancelWantedFields, data.cancelWanted.invalidInput.data, browser)
        browser.click(selectors.global.submit)
        functions.checkErrors(data.cancelWanted.invalidInput.error, browser)
    },
    'Test clear button on cancel wanted page': (browser) => {
        browser.click(selectors.pages.cancelWanted)
        functions.enterMultipleValues(selectors.cancelWantedFields, data.cancelWanted.validInput.data, browser)
        browser.click(selectors.global.clear)
        functions.verifyFieldsAreEmptyCancelWanted(browser)
    },
}