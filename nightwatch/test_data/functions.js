const selectors = require('./css_selectors')
// enterValue enters data in 1 field
const enterValue = (selector, input, browser) => {
    browser.setValue(selector, input)
    browser.verify.value(selector, input)
}
// enterMultipleValues uses enterValue to loop through and enter more than 1 value into more than 1 field
// the keys from the data and the selectors match exactly so thats how it enters the right data into the right field
const enterMultipleValues = (selectors, data, browser) => {
    for (const key in data) {
        enterValue(selectors[key], data[key], browser)
    }
}
// checkErrors runs through a list of given errors to make sure they match what errors are appearing in the app
const checkErrors = (errors, browser) => {
    browser.expect.element(selectors.global.errorList).text.to.equal(errors);
}
// verifyFieldsAreEmpty makes sure after data is entered into all the fields and the clear button is clicked all the fields are cleared
const verifyFieldsAreEmptyEnterWanted = (browser) => {
    for (const key in selectors.enterWantedFields) {
        browser.expect.element(selectors.enterWantedFields[key]).text.to.equal('')
    }
}
// verifyFieldsAreEmpty makes sure after data is entered into all the fields and the clear button is clicked all the fields are cleared
const verifyFieldsAreEmptyModifyWanted = (browser) => {
    for (const key in selectors.modifyWantedFields) {
        browser.expect.element(selectors.modifyWantedFields[key]).text.to.equal('')
    }
}
// verifyFieldsAreEmpty makes sure after data is entered into all the fields and the clear button is clicked all the fields are cleared
const verifyFieldsAreEmptyCancelWanted = (browser) => {
    for (const key in selectors.cancelWantedFields) {
        browser.expect.element(selectors.cancelWantedFields[key]).text.to.equal('')
    }
}

module.exports = {
    enterValue: enterValue,
    enterMultipleValues: enterMultipleValues,
    checkErrors: checkErrors,
    verifyFieldsAreEmptyEnterWanted: verifyFieldsAreEmptyEnterWanted,
    verifyFieldsAreEmptyModifyWanted: verifyFieldsAreEmptyModifyWanted,
    verifyFieldsAreEmptyCancelWanted: verifyFieldsAreEmptyCancelWanted
}