# Return Of The String

### Setup

1. Fork and clone this repository.
2. Navigate into this directory in your terminal.
3. Use `code .` to open the whole directory in Visual Studio Code.
4. In that same directory, run `jest --watch-all` to start testing.

### Workflow

- You'll be working in **`main.js`** this time, NOT `main.test.js`!
- You'll be creating functions according to the specifications given in the tests in `main.test.js`. Check your terminal for feedback on which aspect of the problem you have yet to complete, and read the specifications' actual code implementation for extra help; it makes explicit exactly what outputs are expected given the test inputs.
- You will NOT need to call your own functions, except for testing purposes.
- But now that we're out of the dark dark realm where global variables slither, we won't need to worry about messing things up by manually testing our code, either! Call your own functions as often as you find it helpful, and feel free to leave those tests in there if you find that helpful as well. Testing don't cost a thing.

### Functions to Write:

- `yell` - it takes in a parameter of type String and returns a version where an exclamation point has been added to the end.
- `getFirstCharacter` - it takes in a parameter of type String and returns only the first character from it. Hint: use an index!
- `getLastCharacter` - it takes in a parameter of type String and returns only the last character from it. Hint: there is a property of strings that can tell you how long the string is. Use it!
- `getOneCharacter` - it takes in a parameter of type String and a parameter of type Number and returns the character in the string that's at the index contained in the second parameter. (Check out the tests in `main.test.js` for examples.) Hint: you can put any JavaScript code in the square brackets, and whatever number it resolves to will be the index JS will look up for you.
- `getTwoCharacters` - it takes in a parameter of type String, a parameter of type Number, and a parameter of type Number, and returns _one_ string made up of the character at the first number's index in the string followed by the character at the second number's index in the string.
- `makeCapitalized` - it takes in a parameter of type String and returns a modified version of that string where every character has been capitalized. Hint: there's a method for that! A little research should turn it up for you.
- `yellLouder` - it takes in a parameter of type String and returns a string where each character in the original has been capitalized and there are three exclamation points at the end.
- `getInitials` - it takes in a parameter of type String representing a name and returns one string with the initials, each followed by a period. See the test for examples. Hint: the first name's initials are always in the same place, but since we don't know how long the first name will be, the second initial is harder. But! There's a method that will return to you the **index** at which a **character** is in a string (sort of the reverse of square brackets, which give you the **character** at a given **index**), and the second initial always comes near a very specific character... Good luck on this one, it's a bit tough!
