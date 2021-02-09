
function addTokens(input, tokens) {
    if (typeof input !== 'string') {
        throw 'Invalid input';
    }
    if (input.length >= 6) {
        if (Array.isArray(tokens)) {
            for (let i = 0; i < tokens.length; i++) {
                if (!(tokens[i].hasOwnProperty('tokenName') && typeof tokens[i].tokenName === 'string')) {
                    throw 'Invalid array format';
                }
            }
            if (input.includes('...')) {
                input = input.replace('...', '');
                input += '${';
                for (let i = 0; i < tokens.length; i++) {
                    input += tokens[i].tokenName;
                }
                input += '}';
            }
            return input;
        }
    } else {
        throw 'Input should have at least 6 characters';
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;