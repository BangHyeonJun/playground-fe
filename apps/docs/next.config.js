/** @type {import('next').NextConfig} */
module.exports = {
	transpilePackages: ["@pfe/ui"],
	output: "standalone",
	env: {
		PORT: "3001",
	},
};
