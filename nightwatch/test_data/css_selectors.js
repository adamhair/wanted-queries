module.exports = {
    // selectors that appear on all pages
    global: {
        title: 'h2[name="enterWanted"]',
        submit: 'button[id="saveBtn"]',
        clear: 'button[id="clearBtn"]',
        query: 'span[name="queryTitle"]',
        valid: 'h4[id="validHeader"]',
        errorList: 'ul[id="errorList"]'
    },
    // the three pages on enter wanted app
    pages: {
        enterWanted: 'p[name="enterWanted"]',
        modifyWanted: 'p[name="modifyWanted"]',
        cancelWanted: 'p[name="cancelWanted"]'
    },
    // all the specific selectors for the fields on the enter wanted page
    enterWantedFields: {
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        race: 'input[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        dateOfWarrant: 'input[name="dowInput"]',
        driversLicense: 'input[name="olnInput"]',
        dlState: 'input[name="olsInput"]',
        dlExpiration: 'input[name="oldInput"]',
        licensePlate: 'input[name="licInput"]',
        licenseState: 'input[name="lisInput"]',
        licenseExpiration: 'input[name="lidInput"]'
    },
    // all the specific selectors for the fields on the modify wanted page
    modifyWantedFields: {
        warrantId: 'input[name="widInput"]',
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'input[name="sexInput"]',
        race: 'input[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        dateOfWarrant: 'input[name="dowInput"]',
        driversLicense: 'input[name="olnInput"]',
        dlState: 'input[name="olsInput"]',
        dlExpiration: 'input[name="oldInput"]',
        licensePlate: 'input[name="licInput"]',
        licenseState: 'input[name="lisInput"]',
        licenseExpiration: 'input[name="lidInput"]'
    },
    // all the specific selectors for the fields on the cancel wanted page
    cancelWantedFields: {
        warrantId: 'input[name="widInput"]',
        reasonForCancellation: 'input[name="resInput"]',
        dateOfCancellation: 'input[name="datInput"]'
    }
}