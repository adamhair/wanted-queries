// used for all the optional field data to give the data needed for all the required fields for optional field tests
const optionalFieldData = {
    header: 'abcde1234',
    mke: 'ha!',
    oai: 'asdfjkirg',
    name: 'Anastasia Cordelia',
    sex: 'F',
    race: 'B',
    height: '602',
    weight: '7',
    hair: 'Whi',
    offense: 'Assua',
    dateOfWarrant: '10291999'
}
module.exports = {
    // all the data and corresponding errors needed for all the enter wanted page tests
    enterWanted: {
        notEnoughCharacters: {
            data: {
                header: 'abcd1234',
                mke: 'b',
                oai: '12345678',
                name: 'Ty',
                sex: '',
                race: '',
                height: '60',
                weight: '',
                hair: 'Br',
                offense: 'Assa',
                dateOfWarrant: '1212201',
                driversLicense: '',
                dlState: 'U',
                dlExpiration: '1027196',
                licensePlate: 'HA45',
                licenseState: 'U',
                licenseExpiration: '1215199'
            },
            error:
                'The "Header" field should be between 9 and 19 characters long.\n' +
                'The "MKE" field should be between 2 and 4 characters long.\n' +
                'The "Originating Agency Identifier" field should be 9 characters long.\n' +
                'The "Name" field should be between 3 and 30 characters long.\n' +
                'The field named "Sex" must be included.\n' +
                'The field named "Race" must be included.\n' +
                'The "Height" field should be 3 characters long.\n' +
                'The field named "Weight" must be included.\n' +
                'The "Hair" field should be between 3 and 10 characters long.\n' +
                'The "Offense" field should be between 5 and 15 characters long.\n' +
                'The "Date of Warrant/Violation" field should be 8 characters long.\n' +
                'The "DL State" field should be 2 characters long.\n' +
                'The "DL Expiration Date" field should be 8 characters long.\n' +
                'The "License Plate" field should be between 5 and 8 characters long.\n' +
                'The "License State" field should be 2 characters long.\n' +
                'The "License Expiration Date" field should be 8 characters long.\n' +
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        minimumCharacters: {
            data: {
                header: 'abcde1234',
                mke: 'ha',
                oai: 'asdfjkirg',
                name: 'Tim',
                sex: 'M',
                race: 'W',
                height: '602',
                weight: '7',
                hair: 'Whi',
                offense: 'Assua',
                dateOfWarrant: '12232016',
                driversLicense: 'Z',
                dlState: 'UT',
                dlExpiration: '11232014',
                licensePlate: '54678',
                licenseState: 'WY',
                licenseExpiration: '12292014'
            }
        },
        middleCharacters: {
            data: {
                header: '"Car Crashed"',
                mke: 'ha!',
                oai: 'abcde1234',
                name: 'Anastasia Cordelia',
                sex: 'F',
                race: 'B',
                height: '100',
                weight: '72',
                hair: 'Purple',
                offense: 'Flashing',
                dateOfWarrant: '10291999',
                driversLicense: 'HWKIYUBDH123',
                dlState: 'CA',
                dlExpiration: '11232014',
                licensePlate: 'HA34582',
                licenseState: 'FL',
                licenseExpiration: '12292014'

            }
        },
        maximumCharacters: {
            data: {
                header: 'Jekvbnoep89065^%$as',
                mke: 'ajo$',
                oai: 'oaiem9026',
                name: '$$Tarquin Biscuit-Barrel ! Hey',
                sex: 'U',
                race: 'I',
                height: '210',
                weight: '180',
                hair: 'Coquelicot',
                offense: 'asdfj45670!@#$%',
                dateOfWarrant: '12122010',
                driversLicense: 'UWQNPDLHJEIU&^762067',
                dlState: 'WA',
                dlExpiration: '11232014',
                licensePlate: '1230owbi',
                licenseState: 'MI',
                licenseExpiration: '12292014'
            }
        },
        toManyCharacters: {
            data: {
                header: 'hello how are you do',
                mke: 'yre78',
                oai: 'oaiem9026l',
                name: 'jfikeidktightirkb456902345(^&*!',
                sex: 'V',
                race: '1',
                height: '9005',
                weight: '1005',
                hair: 'Coquelicots',
                offense: 'asdfjkl;asdfjkl;',
                dateOfWarrant: '122319439',
                driversLicense: 'iekfopl2345!!jiliping',
                dlState: 'ND',
                dlExpiration: '112320143',
                licensePlate: '1230owbik',
                licenseState: 'SD',
                licenseExpiration: '122920143'
            },
            error:
                'The "Header" field should be between 9 and 19 characters long.\n' +
                'The "MKE" field should be between 2 and 4 characters long.\n' +
                'The "Originating Agency Identifier" field should be 9 characters long.\n' +
                'The "Name" field should be between 3 and 30 characters long.\n' +
                'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.\n' +
                'The "Race" field can only include characters from the English Alphabet.\n' +
                'The "Height" field should be 3 characters long.\n' +
                'The "Weight" field should be between 1 and 3 characters long.\n' +
                'The "Hair" field should be between 3 and 10 characters long.\n' +
                'The "Offense" field should be between 5 and 15 characters long.\n' +
                'The "Date of Warrant/Violation" field should be 8 characters long.\n' +
                'The "Drivers License" field should be between 1 and 20 characters long.\n' +
                'The "DL Expiration Date" field should be 8 characters long.\n' +
                'The "License Plate" field should be between 5 and 8 characters long.\n' +
                'The "License Expiration Date" field should be 8 characters long.'
        },
        emptyFields: {
            data: {
                header: 'a',
                mke: '',
                oai: '',
                name: '',
                sex: '',
                race: '',
                height: '',
                weight: '',
                hair: '',
                offense: '',
                dateOfWarrant: '',
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            },
            error:
                'The "Header" field should be between 9 and 19 characters long.\n' +
                'The field named "MKE" must be included.\n' +
                'The field named "Originating Agency Identifier" must be included.\n' +
                'The field named "Name" must be included.\n' +
                'The field named "Sex" must be included.\n' +
                'The field named "Race" must be included.\n' +
                'The field named "Height" must be included.\n' +
                'The field named "Weight" must be included.\n' +
                'The field named "Hair" must be included.\n' +
                'The field named "Offense" must be included.\n' +
                'The field named "Date of Warrant/Violation" must be included.'
        },
        dlWithDl: {
            // object.assign puts all the data for the required fields into this object in order to correctly test all optional fields
            data: Object.assign({
                driversLicense: 'Z',
                dlState: '',
                dlExpiration: '',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        dlWithDlState: {
            data: Object.assign({
                driversLicense: '',
                dlState: 'UT',
                dlExpiration: '',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        dLWithExpiration: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '11232014',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        dLWithLicenseAndState: {
            data: Object.assign({
                driversLicense: 'Z',
                dlState: 'UT',
                dlExpiration: '',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        dLWithLicenseAndExpiration: {
            data: Object.assign({
                driversLicense: 'Z',
                dlState: '',
                dlExpiration: '11232014',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        dlWithStateAndExpiration: {
            data: Object.assign({
                driversLicense: '',
                dlState: 'UT',
                dlExpiration: '11232014',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.'
        },
        lpWithPlate: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '54678',
                licenseState: '',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        },
        lpWithState: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '',
                licenseState: 'WY',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        },
        lpWithExpiration: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '',
                licenseState: '',
                licenseExpiration: '12292014'
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        },
        lpWithPlateAndState: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '54678',
                licenseState: 'WY',
                licenseExpiration: ''
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        },
        lpWithPlateAndExpiration: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '54678',
                licenseState: '',
                licenseExpiration: '12292014'
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        },
        lpWithStateAndExpiration: {
            data: Object.assign({
                driversLicense: '',
                dlState: '',
                dlExpiration: '',
                licensePlate: '',
                licenseState: 'WY',
                licenseExpiration: '12292014'
            }, optionalFieldData),
            error:
                'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        },
    },
    // all the data and corresponding errors needed for all the modify wanted page tests
    modifyWanted: {
        validInput: {
            header: {
                warrantId: '3454332123',
                header: 'abcdefghi'
            },
            mke: {
                warrantId: '4098327846',
                mke: 'ha!'
            },
            oai: {
                warrantId: '4387206937',
                oai: 'abcde1234'
            },
            name: {
                warrantId: '5903869174',
                name: 'Anastasia Cordelia'
            },
            sex: {
                warrantId: '5988720945',
                sex: 'F'
            },
            race: {
                warrantId: '1098489678',
                race: 'W'
            },
            height: {
                warrantId: '0594896485',
                height: '602'
            },
            weight: {
                warrantId: '2879406893',
                weight: '102'
            },
            hair: {
                warrantId: '9589299485',
                hair: 'brown'
            },
            offense: {
                warrantId: '2958789095',
                offense: 'assualt'
            },
            dateOfWarrant: {
                warrantId: '9870375895',
                dateOfWarrant: '01161978'
            },
            driversLicenseSet: {
                warrantId: '8949879078',
                driversLicense: 'HWKIYUBDH123',
                dlState: 'UT',
                dlExpiration: '06192016'
            },
            licensePlateSet: {
                warrantId: '9567826651',
                licensePlate: 'HA34582',
                licenseState: 'FL',
                licenseExpiration: '12292014'
            },
        },
        invalidInput: {
            header: {
                data: {
                    warrantId: '3454332123',
                    header: 'abcd'
                },
                error:
                    'The "Header" field should be between 9 and 19 characters long.'
            },
            mke: {
                data: {
                    warrantId: '4098327846',
                    mke: 'h'
                },
                error:
                    'The "MKE" field should be between 2 and 4 characters long.'
            },
            oai: {
                data: {
                    warrantId: '4387206937',
                    oai: 'abcdehighe'
                },
                error:
                    'The "Originating Agency Identifier" field should be 9 characters long.'
            },
            name: {
                data: {
                    warrantId: '5903869174',
                    name: 'An'
                },
                error:
                    'The "Name" field should be between 3 and 30 characters long.'
            },
            sex: {
                data: {
                    warrantId: '5988720945',
                    sex: 'Female'
                },
                error:
                    'The "Sex" field should be 1 character long.'
            },
            race: {
                data: {
                    warrantId: '1098489678',
                    race: 'White'
                },
                error:
                    'The "Race" field should be 1 character long.'
            },
            height: {
                data: {
                    warrantId: '0594896485',
                    height: '60234'
                },
                error:
                    'The "Height" field should be 3 characters long.'
            },
            weight: {
                data: {
                    warrantId: '2879406893',
                    weight: '102354'
                },
                error:
                    'The "Weight" field should be between 1 and 3 characters long.'
            },
            hair: {
                data: {
                    warrantId: '9589299485',
                    hair: 'redorangeyellow'
                },
                error:
                    'The "Hair" field should be between 3 and 10 characters long.'
            },
            offense: {
                data: {
                    warrantId: '2958789095',
                    offense: 'assu'
                },
                error:
                    'The "Offense" field should be between 5 and 15 characters long.'
            },
            dateOfWarrant: {
                data: {
                    warrantId: '9870375895',
                    dateOfWarrant: '011619'
                },
                error:
                    'The "Date of Warrant/Violation" field should be 8 characters long.'
            },
            driversLicenseSet: {
                data: {
                    warrantId: '8949879078',
                    driversLicense: 'HWKIHSPDOUIHE:JDFSDFDDFDFDF',
                    dlState: 'U',
                    dlExpiration: '06192'
                },
                error:
                    'The "Drivers License" field should be between 1 and 20 characters long.\n' +
                    'The "DL State" field should be 2 characters long.\n' +
                    'The "DL Expiration Date" field should be 8 characters long.'
            },
            licensePlateSet: {
                data: {
                    warrantId: '9567826651',
                    licensePlate: 'HA34',
                    licenseState: 'F',
                    licenseExpiration: '1229201'
                },
                error:
                    'The "License Plate" field should be between 5 and 8 characters long.\n' +
                    'The "License State" field should be 2 characters long.\n' +
                    'The "License Expiration Date" field should be 8 characters long.'
            }
        }
    },
    // all the data and corresponding errors needed for all the cancel wanted page tests
    cancelWanted: {
        validInput: {
            data: {
                warrantId: '1234523124',
                reasonForCancellation: 'Mistake',
                dateOfCancellation: '01141956'
            }
        },
        invalidInput: {
            data: {
                warrantId: '127609345',
                reasonForCancellation: 'Dead',
                dateOfCancellation: '1224201'
            },
            error:
                'The "Warrant ID" field should be 10 characters long.\n' +
                'The "Reason for Cancellation" field should be between 5 and 150 characters long.\n' +
                'The "Date of Cancellation" field should be 8 characters long.'
        }
    }
}

