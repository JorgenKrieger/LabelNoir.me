const CUSTOM_AT_RULES = [
	// Tailwind-specific at-rules
	'apply',
	'layer',
	'responsive',
	'screen',
	'tailwind',
	'variants',
];

const CUSTOM_FUNCTIONS = [
	// Tailwind-specific functions
	'theme',
	// Experimental CSS functions
	'view',
];

const ONLY_ALLOW_CAMEL_CASE_SELECTORS = [
	/^(?:[a-z]+(?:[A-Z][a-z]*)*)$/,
	{ message: s => `Expected '${s}' to be in camelCase` },
];

export default {
	extends: ['stylelint-config-standard'],
	plugins: ['stylelint-order'],
	rules: {
		// Enforces Element Class Names to be camelCase
		'selector-class-pattern': ONLY_ALLOW_CAMEL_CASE_SELECTORS,
		// Enforces Element IDs to be camelCase
		'selector-id-pattern': ONLY_ALLOW_CAMEL_CASE_SELECTORS,
		// Allow custom at-rules
		'at-rule-no-unknown': [true, { ignoreAtRules: CUSTOM_AT_RULES }],
		// Allow custom functions
		'function-no-unknown': false,
		// Allow the Global CSS selector
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClass: ['global'] }],
		// Enforces the order of the CSS properties to be in alphabetical order
		'order/properties-alphabetical-order': true,
		'no-descending-specificity': null,
		// Disable the Level-4 Media Queries; since they're more exotic and less known
		'media-feature-range-notation': 'prefix',
		// Adopts the import notion from 'postcss-import'
		'import-notation': 'string',
	},
};
