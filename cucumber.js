module.exports = {
  default: {
    require: ["steps/**/*.ts", "hooks/**/*.ts"],
    format: ["progress", "json:reports/cucumber_report.json"],
    requireModule: ["ts-node/register"],
  },
};
