var body, colours, species, adverbs, preposition;
          colours = ["brown", "black", "white", "green", "blue", "purple", "red", "cream", "grey", "pastel rainbow", "neon blue", "rainbow", "royal blue", "pink", "orange", "yellow", "pastel pink", "pastel purple"];
          species = ["maine coon", "samoyed", "rat", "coyote", "wolf", "red fox", "rabbit", "lion", "cougar", "jackal", "deer"];
          tops = ["dark pullovers", "neon crop tops", "button downs", "polo shirts", "supreme pullovers", "mesh tank tops", "muscle tanks", "band tees", "no shirt", "varsity jackets"];
          bottoms = ["skinny jeans", "jeans", "cargo pants", "yoga pants", "camo cargo pants", "sweatpants", "daisy dukes", "ripped blue jeans", "ripped skinny jeans", "no pants"];
          likes = ["electropop", "mumble rap", "tagging buildings", "partying", "chilling with friends", "drugs", "whiskey", "champagne", "weed", "horror"];
          accessories = ["too many wristbands", "a black choker", "a spiked collar", "a harness", "a snapback", "band-aids on their arms", "stickers on their arms", "bandages wrapped around their wrists", "a backpack covered in pins", "a bandana around their face"];

          function randGen() {
            return Math.floor(Math.random() * 5);
          }

          function sentence() {
            var rand1 = Math.floor(Math.random() * 10);
            var rand2 = Math.floor(Math.random() * 18);
            var rand3 = Math.floor(Math.random() * 18);
            var rand4 = Math.floor(Math.random() * 11);
            var rand5 = Math.floor(Math.random() * 10);
            var rand6 = Math.floor(Math.random() * 10);
            var rand7 = Math.floor(Math.random() * 10);
            //                var randCol = [rand1,rand2,rand3,rand4,rand5];
            //                var i = randGen();

            do {
             rand2 = Math.floor(Math.random() * 18);
             rand3 = Math.floor(Math.random() * 18);
            } while(rand2 === rand3 );

            var content = "A " + colours[rand2] + " and " + colours[rand3] + " " + species[rand4] + " who likes to wear " + tops[rand5] + " and " + bottoms[rand6] + ". They like " + likes[rand7] + " and have " + accessories[rand1];

            document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
          };
          sentence();
