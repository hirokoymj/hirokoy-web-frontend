import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/',
  documents: ['src/**/*.tsx', 'src/queries/*', 'src/mutations/*'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  //ignoreNoDocuments: true,
};

export default config;
