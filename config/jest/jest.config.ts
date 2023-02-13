/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // Автоматически очищайте фиктивные вызовы, экземпляры и результаты перед каждым тестом.
    clearMocks: true,

    // Указывает, следует ли собирать информацию о покрытии во время выполнения теста.
    collectCoverage: true,

    // Корневой каталог, в котором Jest должен сканировать тесты и модули.
    // Не там где лежит конфиг, а корень приложения, package.json
    rootDir: '../../',

    // Регулярные выражения, по которым мы находим файлы с тестами
    // <rootDir> - ссылка на путь до корня проекта rootDir
    testMatch: [
        '<rootDir>src/**/*@(spec|test).[tj]s?(x)',
    ],

    // Директория в которую Jest поместит фалы покрытия
    coverageDirectory: './config/jest/coverage',

    // Игнорировать информацию о покрытии из следующих директорий
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    // Тестовая среда, которая будет использоваться для тестирования
    testEnvironment: 'jsdom',

    // Массив имен каталогов для рекурсивного поиска вверх от местоположения требуемого модуля
    moduleDirectories: [
        'node_modules',
    ],

    // Массив расширений файлов, которые используют ваши модули
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\User\\AppData\\Local\\Temp\\jest",

    // An array of glob patterns indicating a set of files
    // for which coverage information should be collected
    // collectCoverageFrom: undefined,

    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "babel",

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,

    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,

    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // A path to a module which exports an async function that
    // is triggered once before all test suites
    // globalSetup: undefined,

    // A path to a module which exports an async function that
    // is triggered once after all test suites
    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments
    // globals: {},

    // The maximum amount of workers used to run your tests. Can be specified as % or a number.
    // E.g. maxWorkers: 10% will use 10% of your CPU amount + 1
    // as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",

    // A map from regular expressions to module names or to arrays of
    // module names that allow to stub out resources with a single module
    // moduleNameMapper: {},

    // An array of regexp pattern strings, matched against all
    // module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],

    // Activates notifications for test results
    // notify: false,

    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration
    // preset: undefined,

    // Run tests from one or more projects
    // projects: undefined,

    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,

    // Automatically reset mock state before every test
    // resetMocks: false,

    // Reset the module registry before running each individual test
    // resetModules: false,

    // A path to a custom resolver
    // resolver: undefined,

    // Automatically restore mock state and implementation before every test
    // restoreMocks: false,

    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],

    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",

    // The paths to modules that run some code to configure
    // or set up the testing environment before each test
    // setupFiles: [],

    // A list of paths to modules that run some code to configure
    // or set up the testing framework before each test
    // setupFilesAfterEnv: [],

    // The number of seconds after which a test is considered
    // as slow and reported as such in the results.
    // slowTestThreshold: 5,

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // An array of regexp pattern strings that are matched against
    // all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",

    // This option sets the URL for the jsdom environment.
    // It is reflected in properties such as location.href
    // testURL: "http://localhost",

    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",

    // A map from regular expressions to paths to transformers
    // transform: undefined,

    // An array of regexp pattern strings that are matched against all source file paths,
    // matched files will skip transformation
    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\",
    //   "\\.pnp\\.[^\\\\]+$"
    // ],

    // An array of regexp pattern strings that are matched against
    // all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,

    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,

    // An array of regexp patterns that are matched against
    // all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],

    // Whether to use watchman for file crawling
    // watchman: true,
};
