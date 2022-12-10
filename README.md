# Execises written in TypeScript

## Install project dependencies

- In the project root folder run: `npm install` (or `npm i`).

## Run tests

- In the project root folder run: `npx jest --watchAll`

---

## Exercise 1: word counter

Make a function called `countWords(textToParse: string): Map<string, number>` which takes one argument (string to search). Function returns a map of words and their count.

## Example

```ts
countWords("Hello world"); // Map { 'Hello' => 1, 'world' => 1 }
countWords("Hello world world"); // Map { 'Hello' => 1, 'world' => 2 }
```

## Solution

See [countWords.ts](/src/countWords.ts) file.

# Exercise 2: range maker

Make a function called `makeRanges(numbers: number[]): string[]` which take one argument (array of numbers). Function returns an array of strings.

Note: Each number is unique and in acending order.

## Example

```ts
makeRanges([0, 1, 2, 5, 7]); // ['0-2', '5', '7']
makeRanges([0, 1, 2, 5, 7, 8, 9]); // ['0-2', '5', '7-9']
makeRanges([]); // [""]
```

# Exercise 3: pattern counter

Write a function called `countPatterns(pattern: string, text: string): number` which takes two arguments (pattern and text to search). Function returns a number of times pattern is found in text.

Note: Pattern can be a single word or a phrase and can contain spaces. Must be exact match.

## Example

```ts
countPatterns("ababab", "ab"); // 3
countPatterns("bark dog dogma", "dog"); // 2
```

# Exercise 4: syntax highlighter

Write a function called `highlightSyntax(content: string): StyledContent[]` which takes one argument (content to find "cat" and "dog" words in it and make them bold). Function returns an array of tuples (type StyledContent). Each tuple's first item is the word and the second item is the style of the word.

"cat" and "dog" will be always printed bold by syntaxHighlighter function no matter what the content passed to it. 

## Example

```ts
highlightSyntax("the cat jumped over the old dog"); // [['the', 'none'], ['cat', 'bold'], ['jumped', 'none'], ['over', 'none'], ['the', 'none'], ['old', 'none'], ['dog', 'bold']]
highlightSyntax("cat cat one two"); // [['cat', 'bold'], ['cat', 'bold'], ['one', 'none'], ['two', 'none']]
highlightSyntax(""); // []
```
