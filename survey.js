const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?: => ', (name) => {
  rl.question('What\'s an activity you like doing?: => ', (activity) => {
    rl.question('What do you listen to while doing that?: => ', (music) => {
      rl.question('Which meal is your favourite?: => ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?: => ', (dish) => {
          rl.question('Which sport is your absolute favourite?: => ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: => ', (ability) => {
              console.log(`My name is ${name}! I like ${activity}, and listen to ${music} during. \n My favourite meal of day is ${meal} and I love ${dish}! Also I lile playing ${sport} as well! By the way, I am really good at ${ability}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});