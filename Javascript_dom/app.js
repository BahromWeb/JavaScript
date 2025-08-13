



function isValid(s) {
    const stack = [];

    for (let char of s) {
        switch (char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("{[]}"));     // true
