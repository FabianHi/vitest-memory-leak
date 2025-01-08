import path from 'path';
import { UserConfig } from 'vitest/node';
import { defineConfig, ViteUserConfig } from 'vitest/config';
import { fileURLToPath } from 'url';

// @ts-ignore
if (__dirname === undefined) {
  var __dirname = path.dirname(fileURLToPath(import.meta.url));
}

export function generateConfig(projectDir: string): ViteUserConfig & UserConfig {
  const reportsDir = path.resolve(projectDir, 'reports');
  return {
    test: {
      reporters: ['default', 'junit'],
      include: [`test/**/*.ts`],
      outputFile: {
        junit: path.resolve(reportsDir, 'tests', 'junit.xml'),
      },
      fileParallelism: true,
    },
  } satisfies ViteUserConfig & UserConfig;
}

const config = generateConfig(__dirname);
export default defineConfig(config);
