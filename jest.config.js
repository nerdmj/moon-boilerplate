module.exports = {
   "setupFiles": ["babel-polyfill"],
   transform: {
   "\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
 },
 bail: false,
 collectCoverageFrom: [
   'src/**/*.{js,jsx}',
   "!**/node_modules/**",
   "!**/vendor/**"
 ],
 coverageDirectory: "<rootDir>/coverage", // [string]
 moduleNameMapper: {
   "\\.(css|less|styl|scss|sass|sss)$": "identity-obj-proxy",
 },
 snapshotSerializers: [
     "enzyme-to-json/serializer"
 ],
 globals: {
   __DEV__: true,
 },
 "setupTestFrameworkScriptFile": "<rootDir>/enzyme.setup.js",
 "setupFiles": [
   "raf/polyfill"
 ]
}
