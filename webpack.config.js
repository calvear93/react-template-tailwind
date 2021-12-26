const alias = require('craco-alias');

module.exports = {
    devServer: {
        compress: false,
        headers: {
            'X-Frame-Options': 'SAMEORIGIN',
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block'
        }
    },
    jest: {
        configure: {
            "verbose": true,
            "slowTestThreshold": 10,
            "testTimeout": 30000,
            "coverageDirectory": "src/tests/__coverage__",
            "collectCoverageFrom": [
                "src/**/*.(t|j)s"
            ],
            "coveragePathIgnorePatterns": [
                "index.ts",
                ".d.ts",
                "src/app",
                "src/modules",
                "__tests__",
                "__mocks__"
            ]
        }
    },
    plugins: [
        {
            plugin: alias,
            options: {
                source: 'tsconfig',
                baseUrl: 'src',
                tsConfigPath: 'tsconfig.json'
            }
        }
    ]
};
