module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.[jt]s?(x)'],
  verbose: true,
  testTimeout: 30000,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './output',
        filename: 'report.html',
        pageTitle: 'Integration Tests with Jest and Pactum',
        logoImgPath: './assets/jest-logo.png',
        expand: false,
        openReport: false
      }
    ]
  ],
  collectCoverage: true, // Habilita a coleta de cobertura
  coverageDirectory: 'coverage', // Diretório onde os relatórios de cobertura serão armazenados
  coverageReporters: ['lcov', 'text-summary'], // Gera o relatório de cobertura em formato lcov (para SonarQube) e resumo em texto
};
