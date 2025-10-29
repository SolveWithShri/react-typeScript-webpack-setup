import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

export default async (envVars = { env: 'dev' }) => {
  const { env } = envVars;
  const envModule = await import(`./webpack.${env}.js`);
  const envConfig = envModule.default || envModule;
  return merge(commonConfig, envConfig);
};
