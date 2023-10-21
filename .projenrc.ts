import { typescript } from 'projen';
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  name: 'geo-india',
  projenrcTs: true,
  github: false,
  authorName: 'Yadav, Sunil',
  authorUrl : 'https://me-sunil.github.io/'
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();