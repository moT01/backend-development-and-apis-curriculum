import { Babeliser } from 'babeliser';
import { default as nodeFetch } from 'node-fetch';

export async function babeliser(codeString) {
  return new Babeliser(codeString, {
    plugins: [ 'decorators' ]
  });
}

export const fetch = nodeFetch;
