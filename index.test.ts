import parse, { Bracket, Separator, Token } from './index';

describe('JSON Parse', () => {
    test('should parse a basic JSON object', () => {
        const json = '{"key": "value"}';
        const expectedTokens: Token[] = [
            Bracket.LeftObject,
            "key",
            Separator.Colon,
            "value",
            Bracket.RightObject
        ];
        const result = parse(json);
        expect(result).toEqual(expectedTokens);
    });

    test('should parse a nested JSON object', () => {
        const json = '{"key": {"nestedKey": "nestedValue"}}';
        const expectedTokens: Token[] = [
            Bracket.LeftObject,
            "key",
            Separator.Colon,
            Bracket.LeftObject,
            "nestedKey",
            Separator.Colon,
            "nestedValue",
            Bracket.RightObject,
            Bracket.RightObject
        ];
        const result = parse(json);
        expect(result).toEqual(expectedTokens);
    });

    test('should parse an array', () => {
        const json = '["value1", "value2"]';
        const expectedTokens: Token[] = [
            Bracket.LeftArray,
            "value1",
            Separator.Comma,
            "value2",
            Bracket.RightArray
        ];
        const result = parse(json);
        expect(result).toEqual(expectedTokens);
    });

    test('should return empty array for empty string', () => {
        const json = '';
        const expectedTokens: Token[] = [];
        const result = parse(json);
        expect(result).toEqual(expectedTokens);
    });
});

