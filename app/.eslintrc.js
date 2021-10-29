/* eslint-disable no-undef */

module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended" ],
	rules: {
		"react/display-name": "off"
		// place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
	},
	settings: {
		react: {
			version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	}
};
