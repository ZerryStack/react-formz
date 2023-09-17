/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const config = require('conventional-changelog-conventionalcommits');
const { releaseRules } = require('./.releaseRules');

console.log("here!!!!");

const releaseRulesMap = releaseRules.reduce((map, rule) => {
    return {
        ...map,
        [rule.tag]: rule.release
    }
}, {});

const levels = {
  major: 0,
  minor: 1,
  patch: 2,
};

/**
 * This determines what the next version will be bumped to. 
 * 
 * It replaces the default `whatBump` function that conventionalcommits
 * uses here: https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-recommended-bump/index.js#L90
 * 
 * Instead, we use our release rules to determine the version bump.
 */
function whatBumpFactory(originalWhatBump) {
  return function vitalWhatBump(commits) {
    let level = 2;

    originalWhatBump(commits);

    commits.forEach((commit) => {
      const releaseType = releaseRulesMap[commit.type] || 'patch';
      const releaseLevel = levels[releaseType];

      if (releaseType && releaseLevel < level) {
        level = releaseLevel;
      }
    });

    return {
      level,
      reason: '',
    };
  };
}

module.exports = config({
  types: [
    { type: 'breaking', section: 'Breaking' },
    { type: 'update', section: 'Updates' },
    { type: 'fix', section: 'Fixes' },
    { type: 'chore', hidden: true },
    { type: 'docs', hidden: true },
    { type: 'style', hidden: true },
    { type: 'refactor', hidden: true },
    { type: 'perf', hidden: true },
    { type: 'test', hidden: true },
  ],
}).then((preset) => {
  const whatBump = whatBumpFactory(preset.recommendedBumpOpts.whatBump);

  const finalPreset = {
    ...preset,
    recommendedBumpOpts: {
      ...preset.recommendedBumpOpts,
      whatBump,
    },
  };

  return finalPreset;
});