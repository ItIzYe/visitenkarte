import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

function createEntitiesIndex() {

    let src = `${path.dirname(__dirname)}/apps/backend/src`;
    src = src.split('\\').join('/')
    if (!fs.existsSync(src)) {
        console.log(`App backend cannot be found. Path not exist: ${src}`);
        process.exit(1);
    }
    console.log(src)
    const outDir = `${src}/database`;
    const tmpFile = `${outDir}/tmp-entities-index.ts`;
    const outFile = `${outDir}/entities-index.ts`;
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
    }
    for (let item of fg.sync(`${src}/**/*.entity.ts`)) {
        let filePath = path.relative(outDir, item).replace(/\.ts$/, '');
        filePath = filePath.split('\\').join('/')
        const data = `export * from '${filePath}';\n`;
        fs.writeFileSync(tmpFile, data, { flag: 'a+' });
    }
    if (fs.existsSync(outFile) && fs.existsSync(tmpFile)) {
        fs.unlinkSync(outFile);
        console.log(`Old file '${outFile}' removed`);
    }
    if (fs.existsSync(tmpFile)) {
        fs.renameSync(tmpFile, outFile);
        console.log(`New file ${outFile} saved`);
    }
}
createEntitiesIndex();
