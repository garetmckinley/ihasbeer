export default 
`
Let’s talk about [comma-dangle](http://eslint.org/docs/rules/comma-dangle). More specifically, let’s talk about why you need to be using this eslint rule in your open source projects. Actually, scratch that. This is something that’s best learned through examples. Allow me to walk you through what happens when you don’t use the comma-dangle rule.

## The Example

Okay, so let’s pretend we have an awesome open source project we just created called beer.js. Let’s go ahead and add some exports to our package

\`\`\`
+ export default const beer = {
+   type: "IPA",
+   oz: "16"
+ };
\`\`\`

See all the lines prefixed with a \`+\`? Those signify new additions to our repo. For our initial commit, we’re gonna have \`4\` line additions and \`0\` deletions. Let’s go ahead and add another value to our beer object

\`\`\`
  export default const beer = {
    type: "IPA",
~   oz: "16",
+   empty: false
  };
\`\`\`

Now what happened here? We only added one value to our export, yet git is going to show \`1\` addition and \`1\` modification. No doubt our commit message is going to be along the lines of \`chore(core): add empty prop to beer export\`, and there’s absolutely nothing wrong with that! The problem is that the \`oz\` line is modified in that commit as well.

## With comma-dangle

Now let’s look at the exact same git history, but this time let’s enforce the \`comma-dangle\` rule.

\`\`\`
+ export default const beer = {
+   type: "IPA",
+   oz: "16",
+ };
\`\`\`

Again, our initial commit has a clean \`4++++0----\` history. Now let’s go ahead and append another export onto this

\`\`\`
  export default const beer = {
    type: "IPA",
    oz: "16",
+   empty: false,
  };
\`\`\`

💥 BOOM! Now our commit history is going to be clean and concise. No more modifying lines just to add commas, let 'em dangle!

## Should I always use the comma-dangle?

Nope! Only when dealing with multiline objects/arrays. The easiest way to configure this, is to add the comma-dangle rule to your .eslintrc

\`\`\`
{
  "rules": {
    "comma-dangle": ["error", "always-multiline"]
  }
}
\`\`\`

*(ironically, trailing commas are unsupported in JSON)*
`