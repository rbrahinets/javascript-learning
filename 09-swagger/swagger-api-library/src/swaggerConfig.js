const YAML = require('js-yaml');
const fs = require('fs');
const mergePatch = require('json-merge-patch');

const loadYamlFile = (filePath) => YAML.load(fs.readFileSync(filePath, 'utf8'));

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'A simple Express Library API',
        },
        servers: [
            {
                url: 'http://localhost:8080'
            }
        ],
    },
    apis: [
        'docs/swagger-docs-authors.yaml',
        'docs/swagger-docs-books.yaml',
    ],
};

const yamlSpecs = options.apis.map(loadYamlFile);
const specs = yamlSpecs.reduce((acc, spec) => mergePatch.apply(acc, spec), {});

module.exports = specs;
