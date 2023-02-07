export const listFilesMockResponse = [
  {
    sha: '2f74ba2cc1255d8d5f6f965767992250e00f5504',
    filename: '.eslintrc.js',
    status: 'modified',
    additions: 6,
    deletions: 11,
    changes: 17,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/.eslintrc.js',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/.eslintrc.js',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/.eslintrc.js?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2',
    patch: '@@ -1,21 +1,16 @@\n' +
      " /** @type {import('@types/eslint').Linter.BaseConfig} */\n" +
      ' module.exports = {\n' +
      '-  extends: [\n' +
      '-    "@remix-run/eslint-config",\n' +
      '-    "@remix-run/eslint-config/node",\n' +
      '-    "@remix-run/eslint-config/jest-testing-library",\n' +
      '-    "prettier",\n' +
      '-  ],\n' +
      '+  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node", "@remix-run/eslint-config/jest-testing-library", "prettier", "plugin:storybook/recommended"],\n' +
      '   env: {\n' +
      '-    "cypress/globals": true,\n' +
      '+    "cypress/globals": true\n' +
      '   },\n' +
      '   plugins: ["cypress"],\n' +
      "   // we're using vitest which has a very similar API to jest\n" +
      '   // (so the linting plugins work nicely), but it means we have to explicitly\n' +
      '   // set the jest version.\n' +
      '   settings: {\n' +
      '     jest: {\n' +
      '-      version: 28,\n' +
      '-    },\n' +
      '-  },\n' +
      '-};\n' +
      '+      version: 28\n' +
      '+    }\n' +
      '+  }\n' +
      '+};\n' +
      '\\ No newline at end of file'
  },
  {
    sha: 'd98be57659eb91c2e404fcc61b2a4b5e80e48b13',
    filename: '.storybook/main.js',
    status: 'added',
    additions: 9,
    deletions: 0,
    changes: 9,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/.storybook%2Fmain.js',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/.storybook%2Fmain.js',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/.storybook%2Fmain.js?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2',
    patch: '@@ -0,0 +1,9 @@\n' +
      '+module.exports = {\n' +
      '+  stories: ["../app/components/**/*.stories.@(js|jsx|ts|tsx)"],\n' +
      '+  addons: [\n' +
      '+    "@storybook/addon-links",\n' +
      '+    "@storybook/addon-essentials",\n' +
      '+    "@storybook/addon-interactions",\n' +
      '+  ],\n' +
      '+  framework: "@storybook/react",\n' +
      '+};'
  },
  {
    sha: '48afd568ae900d86b72a12d95e3682d01943ec0f',
    filename: '.storybook/preview.js',
    status: 'added',
    additions: 9,
    deletions: 0,
    changes: 9,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/.storybook%2Fpreview.js',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/.storybook%2Fpreview.js',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/.storybook%2Fpreview.js?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2',
    patch: '@@ -0,0 +1,9 @@\n' +
      '+export const parameters = {\n' +
      '+  actions: { argTypesRegex: "^on[A-Z].*" },\n' +
      '+  controls: {\n' +
      '+    matchers: {\n' +
      '+      color: /(background|color)$/i,\n' +
      '+      date: /Date$/,\n' +
      '+    },\n' +
      '+  },\n' +
      '+}\n' +
      '\\ No newline at end of file'
  },
  {
    sha: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
    filename: 'app/components/translator/index.tsx',
    status: 'added',
    additions: 0,
    deletions: 0,
    changes: 0,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/app%2Fcomponents%2Ftranslator%2Findex.tsx',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/app%2Fcomponents%2Ftranslator%2Findex.tsx',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/app%2Fcomponents%2Ftranslator%2Findex.tsx?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2'
  },
  {
    sha: '548cd95e5411f2f849b84145e7b1ae60b8ce29f2',
    filename: 'app/components/translator/translator.stories.tsx',
    status: 'added',
    additions: 14,
    deletions: 0,
    changes: 14,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/app%2Fcomponents%2Ftranslator%2Ftranslator.stories.tsx',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/app%2Fcomponents%2Ftranslator%2Ftranslator.stories.tsx',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/app%2Fcomponents%2Ftranslator%2Ftranslator.stories.tsx?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2',
    patch: '@@ -0,0 +1,14 @@\n' +
      '+import { ComponentMeta, ComponentStory } from "@storybook/react";\n' +
      '+import { Translator } from "./translator";\n' +
      '+\n' +
      '+export default {\n' +
      '+  title: "Translator",\n' +
      '+  component: Translator,\n' +
      '+  argTypes: {\n' +
      '+    backgroundColor: { control: "color" },\n' +
      '+  },\n' +
      '+} as ComponentMeta<typeof Translator>;\n' +
      '+\n' +
      '+const Template: ComponentStory<typeof Translator> = (args) => <Translator />;\n' +
      '+\n' +
      '+export const Default = Template.bind({});'
  },
  {
    sha: '47729938a2913179c98630e00b9e8ffccf35e7bc',
    filename: 'app/components/translator/translator.tsx',
    status: 'added',
    additions: 5,
    deletions: 0,
    changes: 5,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/app%2Fcomponents%2Ftranslator%2Ftranslator.tsx',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/app%2Fcomponents%2Ftranslator%2Ftranslator.tsx',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/app%2Fcomponents%2Ftranslator%2Ftranslator.tsx?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2',
    patch: '@@ -0,0 +1,5 @@\n' +
      '+import { Select } from "../select";\n' +
      '+\n' +
      '+export function Translator() {\n' +
      '+  return <div>Translator</div>;\n' +
      '+}'
  },
  {
    sha: '23f3d237b2bd190dc0b220037fad374a98e85c14',
    filename: 'package-lock.json',
    status: 'modified',
    additions: 33768,
    deletions: 13905,
    changes: 47673,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/package-lock.json',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/package-lock.json',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/package-lock.json?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2'
  },
  {
    sha: 'fc41c21a6a286c7cb3978b27c222fe64602b615e',
    filename: 'package.json',
    status: 'modified',
    additions: 14,
    deletions: 1,
    changes: 15,
    blob_url: 'https://github.com/n-filatov/lexical-trainer/blob/e849599c2e011599ab14cb53b5af3cb0ed368dc2/package.json',
    raw_url: 'https://github.com/n-filatov/lexical-trainer/raw/e849599c2e011599ab14cb53b5af3cb0ed368dc2/package.json',
    contents_url: 'https://api.github.com/repos/n-filatov/lexical-trainer/contents/package.json?ref=e849599c2e011599ab14cb53b5af3cb0ed368dc2',
    patch: '@@ -20,7 +20,9 @@\n' +
      '     "pretest:e2e:run": "npm run build",\n' +
      '     "test:e2e:run": "cross-env PORT=8811 start-server-and-test start:mocks http://localhost:8811 \\"npx cypress run\\"",\n' +
      '     "typecheck": "tsc -b && tsc -b cypress",\n' +
      '-    "validate": "run-p \\"test -- --run\\" lint typecheck test:e2e:run"\n' +
      '+    "validate": "run-p \\"test -- --run\\" lint typecheck test:e2e:run",\n' +
      '+    "storybook": "start-storybook -p 6006",\n' +
      '+    "build-storybook": "build-storybook"\n' +
      '   },\n' +
      '   "prettier": {},\n' +
      '   "eslintIgnore": [\n' +
      '@@ -44,9 +46,18 @@\n' +
      '     "tiny-invariant": "^1.3.1"\n' +
      '   },\n' +
      '   "devDependencies": {\n' +
      '+    "@babel/core": "^7.20.12",\n' +
      '     "@faker-js/faker": "^7.6.0",\n' +
      '     "@remix-run/dev": "^1.9.0",\n' +
      '     "@remix-run/eslint-config": "^1.9.0",\n' +
      '+    "@storybook/addon-actions": "^6.5.15",\n' +
      '+    "@storybook/addon-essentials": "^6.5.15",\n' +
      '+    "@storybook/addon-interactions": "^6.5.15",\n' +
      '+    "@storybook/addon-links": "^6.5.15",\n' +
      '+    "@storybook/builder-webpack4": "^6.5.15",\n' +
      '+    "@storybook/manager-webpack4": "^6.5.15",\n' +
      '+    "@storybook/react": "^6.5.15",\n' +
      '+    "@storybook/testing-library": "^0.0.13",\n' +
      '     "@testing-library/cypress": "^8.0.3",\n' +
      '     "@testing-library/dom": "^8.19.0",\n' +
      '     "@testing-library/jest-dom": "^5.16.5",\n' +
      '@@ -60,6 +71,7 @@\n' +
      '     "@vitejs/plugin-react": "^2.2.0",\n' +
      '     "@vitest/coverage-c8": "^0.24.5",\n' +
      '     "autoprefixer": "^10.4.13",\n' +
      '+    "babel-loader": "^8.3.0",\n' +
      '     "binode": "^1.0.5",\n' +
      '     "c8": "^7.12.0",\n' +
      '     "cookie": "^0.5.0",\n' +
      '@@ -68,6 +80,7 @@\n' +
      '     "eslint": "^8.26.0",\n' +
      '     "eslint-config-prettier": "^8.5.0",\n' +
      '     "eslint-plugin-cypress": "^2.12.1",\n' +
      '+    "eslint-plugin-storybook": "^0.6.10",\n' +
      '     "happy-dom": "^6.0.4",\n' +
      '     "msw": "^0.47.4",\n' +
      '     "npm-run-all": "^4.1.5",'
  }
]
