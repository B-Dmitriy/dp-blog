// В jest.config в setupFilesAfterEnv указываем путь на этот файл
// Расщиряет возможности RTL
import '@testing-library/jest-dom';
// Позволяет работать асинхронщине внутри тестируемого компонента
import 'regenerator-runtime/runtime';
