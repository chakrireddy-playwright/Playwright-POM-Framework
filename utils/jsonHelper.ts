import fs from 'fs';

export function readJSON(path: string) {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}