// @ts-nocheck
module.exports = {
	plugins: [
		require("postcss-url"),
		require("@tailwindcss/postcss"),
		require("postcss-combine-media-query"),
		require("postcss-combine-duplicated-selectors")({
			removeDuplicatedProperties: true,
			removeDuplicatedValues: false,
		}),
		require("autoprefixer"),
		require("cssnano")({ preset: "advanced" }),
		require("postcss-reporter"),
	],
};
