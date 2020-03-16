module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    setupFiles: [
        'raf/polyfill',
        '<rootDir>/src/test/setupTests.js'
    ],
};