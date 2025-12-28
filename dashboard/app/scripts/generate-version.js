#!/usr/bin/env node
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
    // Read version from package.json
    const packageJson = JSON.parse(
        readFileSync(join(__dirname, '../package.json'), 'utf-8')
    );
    const version = packageJson.version;

    // Get git commit hash
    let commitHash = 'dev';
    try {
        commitHash = execSync('git rev-parse --short HEAD', {
            encoding: 'utf-8',
            stdio: ['pipe', 'pipe', 'ignore']
        }).trim();
    } catch (error) {
        console.warn('Warning: Could not get git commit hash, using "dev"');
    }

    // Get git branch
    let branch = 'unknown';
    try {
        branch = execSync('git rev-parse --abbrev-ref HEAD', {
            encoding: 'utf-8',
            stdio: ['pipe', 'pipe', 'ignore']
        }).trim();
    } catch (error) {
        console.warn('Warning: Could not get git branch');
    }

    // Get build timestamp
    const buildDate = new Date().toISOString();

    // Generate version file
    const versionContent = `// Auto-generated file - DO NOT EDIT
// Generated at: ${buildDate}

export const VERSION = {
    version: '${version}',
    commit: '${commitHash}',
    branch: '${branch}',
    buildDate: '${buildDate}',
    full: 'v${version}-${commitHash}',
} as const;

export default VERSION;
`;

    // Write version file
    const versionPath = join(__dirname, '../src/version.ts');
    writeFileSync(versionPath, versionContent, 'utf-8');

    console.log(`✓ Version file generated: v${version}-${commitHash}`);
    console.log(`  Branch: ${branch}`);
    console.log(`  Build date: ${buildDate}`);
} catch (error) {
    console.error('Error generating version file:', error);
    process.exit(1);
}
