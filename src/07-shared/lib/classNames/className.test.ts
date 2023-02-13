// Jest пока не поддерживает абсолютные импорты, уронит тест в ошибку
import { classNames } from './classNames';

describe('className', () => {
    test('with only first param', () => {
        const result = classNames('someClass');
        const expectedResult = 'someClass';
        expect(result).toBe(expectedResult);
    });

    test('with additional classes', () => {
        const result = classNames('someClass', {}, ['class1', 'class2']);
        const expectedResult = 'someClass class1 class2';
        expect(result).toBe(expectedResult);
    });

    test('with mods', () => {
        const result = classNames('someClass', { hovered: true, disabled: true }, ['class1', 'class2']);
        const expectedResult = 'someClass class1 class2 hovered disabled';
        expect(result).toBe(expectedResult);
    });

    test('with mods false', () => {
        const result = classNames('someClass', { hovered: true, disabled: false }, ['class1', 'class2']);
        const expectedResult = 'someClass class1 class2 hovered';
        expect(result).toBe(expectedResult);
    });

    test('with mods undefined', () => {
        const result = classNames('someClass', { hovered: undefined, disabled: true }, ['class1', 'class2']);
        const expectedResult = 'someClass class1 class2 disabled';
        expect(result).toBe(expectedResult);
    });
});
