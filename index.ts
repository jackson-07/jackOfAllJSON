enum Bracket {
    LeftObject = '{',
    RightObject = '}',
    LeftArray = '[',
    RightArray = ']',
}

enum Separator {
    Colon = ':',
    Comma = ',',
}

type Literal = string | number | boolean | null;

type Token = Bracket | Separator | Literal;

function parse(jsonString: string): Token[] {
    let tokens: Token[] = [];
    let current = 0;

    while (current < jsonString.length) {
        let character = jsonString[current];

        if (character === '{') {
            tokens.push(Bracket.LeftObject);
            current++;
            continue;
        }
        
        if (character === '}') {
            tokens.push(Bracket.RightObject);
            current++;
            continue;
        }

        if (character === '[') {
            tokens.push(Bracket.LeftArray);
            current++;
            continue;
        }

        if (character === ']') {
            tokens.push(Bracket.RightArray);
            current++;
            continue;
        }

        if (character === ':') {
            tokens.push(Separator.Colon);
            current++;
            continue;
        }

        if (character === ',') {
            tokens.push(Separator.Comma);
            current++;
            continue;
        }

        if (character === '"') {
            let value = "";
            current++;

            while (jsonString[current] !== '"' && current < jsonString.length) {
                value += jsonString[current];
                current++;
            }

            current++;
            tokens.push(value);
            continue;
        }

        current++; 
    }

    return tokens;
}

export default parse; 
export { Bracket, Separator, Token }; 