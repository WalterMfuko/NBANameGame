// Expanded NBA players database //
const nbaPlayers = [
    "Michael Jordan", "LeBron James", "Kobe Bryant", "Stephen Curry", "Kevin Durant", "Magic Johnson", "Larry Bird", "Tim Duncan", "Shaquille O'Neal", "Karl Malone", "John Stockton", "Charles Barkley", "David Robinson", "Patrick Ewing", "Hakeem Olajuwon", "Dirk Nowitzki", "Steve Nash", "Allen Iverson", "Ray Allen", "Paul Pierce", "Mitch Richmond", "Roy Hibbert", "Horace Grant", "George Karl", "Kawhi Leonard", "Dwyane Wade", "Chris Paul", "Damian Lillard", "Luka Doncic", "James Harden", "Giannis Antetokounmpo", "Scottie Pippen", "Carmelo Anthony", "Russell Westbrook", "Kyrie Irving", "Kevin Garnett", "Charles Barkley", "Rick Barry", "Bill Bradley", "Elgin Baylor", "Bradley Beal", "Eric Bledsoe", "Bojan Bogdanovic", "Bogdan Bogdanovic", "Chris Bosh", "Lonzo Ball", "LaMelo Ball", "Larry Bird", "Bismack Biyombo", "Andray Blatche", "Mookie Blaylock", "DeJuan Blair", "Steve Blake", "Marquis Bolden", "Matt Bonner", "Trevor Booker", "Carlos Boozer", "Chris Boucher", "Bruce Bowen", "Ryan Bowen", "Ky Bowman", "Avery Bradley", "Tony Bradley", "Michael Bradley", "Mark Bradley", "Shawn Bradley", "Corey Brewer", "Ronnie Brewer", "Malcolm Brogdon", "Mikal Bridges", "Miles Bridges", "Bruce Brown", "Jaylen Brown", "Kwame Brown", "Lorenzo Brown", "Moses Brown", "Sterling Brown", "Kobe Bryant", "Thomas Bryant", "Reggie Bullock", "Alec Burks", "Deonte Burton", "Jimmy Butler", "Rasual Butler", "Dwight Buycks", "Will Barton" , "Clint Capela", "Vince Carter", "Michael Carter-Williams", "Wilt Chamberlain", "Tyson Chandler", "Wilson Chandler", "Josh Childress", "Earl Clark", "Jordan Clarkson", "Kelvin Cato", "Willie Cauley-Stein", "Nick Collison", "Darren Collison", "Mike Conley", "Pat Connaughton", "Chris Chiozza", "John Collins", "Zach Collins", "Marvin Clark", "Ian Clark", "Gary Clark", "Norris Cole", "Nathaniel Coleman", "DeMarcus Cousins", "Robert Covington", "Jamal Crawford", "Jordan Crawford", "Jae Crowder", "Dante Cunningham", "Seth Curry", "Stephen Curry", "Dell Curry", "Eddy Curry", "Michael Cooper", "Chris Copeland", "Anthony Carter", "Jevon Carter", "Wendell Carter Jr.", "Billy Cunningham", "Allen Crabbe", "Torrey Craig", "Javale Crawford", "Mitchell Creek", "Joe Crawford", "Chucky Crawford", "Justin Crawford", "Corey Crawford", "Chris Crawford", "Dave Cowens", "Chuck Cooper", "Wayne Cooper" , "Anthony Davis", "Baron Davis", "Dale Davis", "Ed Davis", "Glen Davis", "Hubert Davis", "Johnny Davis", "Ricky Davis", "Walter Davis", "DeMar DeRozan", "Carlos Delfino", "Luol Deng", "DeSagana Diop", "Boris Diaw", "Gorgui Dieng", "Spencer Dinwiddie", "Luka Doncic", "Tyler Dorsey", "Damyean Dotson", "Goran Dragic", "Larry Drew", "Andre Drummond", "Chris Duhon", "Tim Duncan", "Mike Dunleavy", "Kevin Durant", "Dewayne Dedmon", "Matthew Dellavedova", "Donte DiVincenzo", "Luguentz Dort", "Toney Douglas", "PJ Dozier", "Jared Dudley", "Bob Dandridge", "Adrian Dantley", "Brad Daugherty", "Antonio Davis", "Brian Davis", "Mark Davis", "Terry Davis", "Josh Davis", "Paul Davis", "Jerome Dyson", "Kris Dunn", "Devin Durrant", "Tremaine Dalton", "Erick Dampier", "Joe Dumars", "Dan Dickau", "Derrick Dial" , "Joel Embiid", "Wayne Ellington", "Pervis Ellison", "Monta Ellis", "Dale Ellis", "Bo Ellis", "LaPhonso Ellis", "Maurice Evans", "Reggie Evans", "Tyreke Evans", "Julius Erving", "Patrick Ewing", "Patrick Ewing Jr.", "Christian Eyenga", "Semaj Ehrhardt", "James Edwards", "John Edwards", "Kevin Edwards", "Blue Edwards", "Corsley Edwards", "Doug Edwards", "Franklin Edwards", "Bill Ebben", "Craig Ehlo", "Howard Eisley", "Mario Elie", "Ray Ellefson", "Sean Elliott", "Bob Elliott", "Alexander Ellis", "Joe Ellis", "LeRoy Ellis", "Harold Ellis", "Porter Ellis", "Ray Ellis", "Alex English", "Claude English", "Gene Englund", "Tyler Ennis", "Ray Epps", "Evan Eschmeyer", "Jack Eskridge", "Billy Evans", "Brian Evans", "Earl Evans", "Jacob Evans", "Jeremy Evans", "Mike Evans", "Kenny Evans", "Reggie Evans" , "De'Aaron Fox", "Tim Frazier", "Evan Fournier", "Bryn Forbes", "Marcus Fizer", "Michael Finley", "Derek Fisher", "Raymond Felton", "Rudy Fernandez", "Landry Fields", "Danny Ferry", "Kenneth Faried", "Jordan Farmar", "Nick Fazekas", "Kay Felder", "Cristiano Felicio", "Desmond Ferguson", "Bob Ferry", "Dick Fisher", "Gerald Fitch", "Marcus Fizer", "Sleepy Floyd", "World B. Free", "Larry Fogle", "Gary Forbes", "Alphonso Ford", "Alton Ford", "T.J. Ford", "Bobby Ford", "Jake Forte", "Fred Foster", "Greg Foster", "Jeff Foster", "Rod Foster", "Markelle Fultz", "Lawrence Funderburke", "Joe Fulks", "Terry Furlow", "Channing Frye", "Pat Frink", "Bernie Fryer", "Frank Fucarino", "Larry Foust", "Steve Francis", "Ron Franz", "Walt Frazier", "Will Franklin", "Jamaal Franklin", "Melvin Frazier", "Malik Fitts" , "Kevin Garnett", "Paul George", "Pau Gasol", "Marc Gasol", "Rudy Gay", "Draymond Green", "Danny Green", "Jeff Green", "Gerald Green", "JaMychal Green", "Aaron Gordon", "Eric Gordon", "Ben Gordon", "Drew Gooden", "Marcin Gortat", "Evan Gattison", "Rudy Gobert", "Manu Ginobili", "Taj Gibson", "Harry Gallatin", "Danilo Gallinari", "Francisco Garcia", "Kevin Garnett", "Chris Gatling", "Paul George", "Marcus Georges-Hunt", "Daniel Gibson", "Dee Gibson", "Jonathan Gibson", "Mel Gibson", "Eddie Gill", "Kendall Gill", "Artis Gilmore", "Manu Ginobili", "Gordan Giricek", "Jack George", "Devonte' Graham", "Gary Grant", "Brian Grant", "Harvey Grant", "Horace Grant", "Josh Grant", "Greg Grant", "Paul Grant", "Travis Grant", "Hal Greer", "A.C. Green", "Gerald Green", "Willie Green", "Sidney Green" , "James Harden", "Tim Hardaway", "Tim Hardaway Jr.", "Joe Harris", "Tobias Harris", "Gordon Hayward", "Tyler Herro", "Buddy Hield", "George Hill", "Solomon Hill", "Kirk Hinrich", "Grant Hill", "Jordan Hill", "Tyrone Hill", "Allan Houston", "Dwight Howard", "Josh Howard", "Al Horford", "Robert Horry", "Eddie House", "Ron Harper", "Matt Harpring", "Josh Hart", "Udonis Haslem", "Spencer Hawes", "Chuck Hayes", "Elvin Hayes", "Richard Hamilton", "Roy Hibbert", "J.J. Hickson", "Nene Hilario", "Aaron Holiday", "Jrue Holiday", "Justin Holiday", "Ryan Hollins", "Rondae Hollis-Jefferson", "Richaun Holmes", "Jeff Hornacek", "Dennis Hopson", "Al Harrington", "Montrezl Harrell", "Devin Harris", "Gerald Henderson", "John Henson", "Xavier Henry", "Roy Hibbert", "Mario Hezonja", "Daniel House", "Eddie House", "Danuel House Jr.", "Kyrie Irving", "Brandon Ingram", "Andre Iguodala", "Ersan Ilyasova", "Joe Ingles", "Jonathan Isaac", "Allen Iverson", "Royal Ivey", "Dan Issel", "Wesley Iwundu", "Zydrunas Ilgauskas", "Marc Jackson", "Byron Irvin", "John Isaacs", "Mike Iuzzolino", "Didier Ilunga-Mbenga", "Eugene Ivo", "Frank Iwuc", "Harold Irwin", "Brad Imes" , "LeBron James", "Magic Johnson", "Dennis Johnson", "Joe Johnson", "Tyler Johnson", "Richard Jefferson", "Brandon Jennings", "Stephen Jackson", "Reggie Jackson", "Mark Jackson", "Josh Jackson", "Jim Jackson", "Luke Jackson", "Jaren Jackson Jr.", "Al Jefferson", "Antawn Jamison", "DeJounte Murray", "Eddie Johnson", "Larry Johnson", "Kevin Johnson", "Wesley Johnson", "Vinnie Johnson", "James Johnson", "Joe Johnson", "Mickey Johnson", "Tyler Johnson", "Nick Johnson", "Orlando Johnson", "Chris Johnson", "Amir Johnson", "Anthony Johnson", "Avery Johnson", "Ken Johnson", "Larry Johnson", "Marques Johnson", "Eddie Jordan", "Michael Jordan", "DeAndre Jordan", "Jerome Jordan", "Reggie Jordan", "Walter Jordan", "Phil Jordon", "Johnny Jorgensen", "Noble Jorgensen", "Adonis Jordan", "Charles Jordan", "Eddie Jordan", "Michael Jordan", "Thomas Jordan", "Walter Jordan" , "Kyle Korver", "Enes Kanter", "Michael Kidd-Gilchrist", "Brandon Knight", "Kyle Kuzma", "Jason Kidd", "Andrei Kirilenko", "Brandon King", "Bernard King", "Stacey King", "Kerry Kittles", "Joe Kleine", "Jonathan Kuminga", "Toni Kukoc", "Christian Koloko", "Furkan Korkmaz", "Luke Kornet", "Kevin Knox", "John Konchar", "Rodions Kurucs", "Corey Kispert", "Alex Kirk", "Ed Kalafat", "George Karl", "Coby Karl", "Jason Kapono", "Daniel Kasperski", "Mario Kasun", "Kenny Kadji", "Randolph Keys", "Alec Kessler", "Greg Kelser", "Ben Kelso", "Shawn Kemp", "Eddie Kerner", "Johnny Kerr", "Steve Kerr", "Tom Kerwin", "Lari Ketner", "Harold Keeling", "Adam Keefe", "Ken Keller", "Rich Kelley", "Clark Kellogg", "Gerard King", "George King", "Jimmy King", "Reggie King", "Tom King", "Maxi Kleber" , "Kawhi Leonard", "Damian Lillard", "Kyle Lowry", "Brook Lopez", "Robin Lopez", "Kevin Love", "Zach LaVine", "Jeremy Lamb", "Doron Lamb", "Jake Layman", "Ty Lawson", "Courtney Lee", "David Lee", "Damion Lee", "Alex Len", "Kawhi Leonard", "Meyers Leonard", "Jon Leuer", "Rashard Lewis", "Damian Lillard", "Jeremy Lin", "Shaun Livingston", "Kyle Lowry", "Kevin Love", "Kevin Looney", "Brook Lopez", "Robin Lopez", "Nate Loenser", "Fat Lever", "Cliff Levingston", "Bob Love", "Stan Love", "Maurice Lucas", "John Lucas", "Jerry Lucas", "Tyronn Lue", "Randy Livingston", "Reginald Livingston", "Chuck Love", "Bob Love", "Clyde Lovellette", "Kevin Lynch", "George Lynch", "Lonnie Lorey", "Lewis Lloyd", "Scott Lloyd", "Earl Lloyd", "Chuck Lloyd", "Carl Loeffler", "Art Long" , "Karl Malone", "Moses Malone", "Shawn Marion", "Stephon Marbury", "Jamal Murray", "Tracy McGrady", "Donovan Mitchell", "Khris Middleton", "Paul Millsap", "Mike Miller", "Andre Miller", "Brad Miller", "Malcolm Miller", "Marcus Morris", "Markieff Morris", "Monte Morris", "Ja Morant", "Greg Monroe", "E'Twaun Moore", "Malik Monk", "Greg Monroe", "Jameer Nelson", "Pete Maravich", "Kenyon Martin", "Kevin Martin", "Wesley Matthews", "Jason Maxiell", "O.J. Mayo", "Luc Mbah a Moute", "JaVale McGee", "CJ McCollum", "T.J. McConnell", "Doug McDermott", "Ben McLemore", "Josh McRoberts", "Jodie Meeks", "Gal Mekel", "De'Anthony Melton", "Chimezie Metu", "Khris Middleton", "Patty Mills", "Paul Millsap", "Shake Milton", "Nikola Mirotic", "Donovan Mitchell", "Naz Mitrou-Long", "Greg Monroe", "Malik Monk", "E'Twaun Moore", "Marcus Morris" , "Steve Nash", "Larry Nance", "Larry Nance Jr.", "Shabazz Napier", "Jameer Nelson", "Nerlens Noel", "Norm Nixon", "Joakim Noah", "Dirk Nowitzki", "Jack Nichols", "Andrew Nicholson", "Maurice Newby", "Johnny Newman", "Chuck Noble", "Andres Nocioni", "Paul Noel", "Jim Nolan", "Troy Neal", "Craig Neal", "Gary Neal", "Jim Neal", "Lloyd Neal", "Ed Nealy", "Bob Netolicky", "Johnny Neumann", "Paul Neumann", "Chuck Nevitt", "Rasho Nesterovic", "Dave Newmark", "Johnny Newman", "Malik Newman", "Don Newton", "Georges Niang", "Demetris Nichols", "Jack Nichols", "Howard Nichols", "Andrew Nicholson", "Mike Niles", "Kurt Nimphius", "Dyron Nix", "Nixon Nixon", "Zeke Nnaji", "Abdel Nader", "Lee Nailon", "Eduardo Najera", "Larry Nancy", "Swen Nater", "Howard Nathan", "Calvin Natt", "Kenny Natt" , "Victor Oladipo", "Kelly Oubre Jr.", "Chuma Okeke", "Josh Okogie", "KZ Okpala", "Lamar Odom", "Greg Oden", "Daniel Orton", "Johnny O'Bryant", "Patrick O'Bryant", "Charles O'Bannon", "John O'Boyle", "Bob Odell", "Greg Oden", "Bud Ogden", "Ralph Ogden", "Alan Ogg", "Don Ohl", "Charles O'Kelly", "Mehmet Okur", "Hakeem Olajuwon", "John Oldham", "Frank Oleynick", "John Olive", "Brian Oliver", "Dean Oliver", "Jimmy Oliver", "Kevin Ollie", "Michael Olowokandi", "Gene Olmstead", "Barry O'Neill", "Mike O'Neill", "Paul O'Neill", "Johnny O'Neill", "Garland O'Quinn", "Kyle O'Quinn", "Charles O'Rourke", "Dan O'Sullivan", "Kevin O'Shea", "Mike O'Toole", "Royce O'Neale", "Semi Ojeleye", "Emeka Okafor", "Jahlil Okafor", "Ike Okafor", "Isaac Okoro", "Kelly Oubre", "Daniel Orton", "Johnny O'Bryant", "Greg Ostertag" , "Chris Paul", "Tony Parker", "Gary Payton", "Gary Payton II", "Kendrick Perkins", "Paul Pierce", "Scottie Pippen", "Kristaps Porzingis", "Otto Porter Jr.", "Bobby Portis", "Kevin Porter Jr.", "Michael Porter Jr.", "Dwight Powell", "Norman Powell", "Julius Randle", "Zach Randolph", "Anthony Parker", "Jabari Parker", "Smush Parker", "Patrick Patterson", "Ruben Patterson", "Chris Paul", "Brandon Paul", "Sasha Pavlovic", "Gary Payton", "Elfrid Payton", "Nikola Pekovic", "Sam Perkins", "Kendrick Perkins", "Paul Pierce", "Scottie Pippen", "Mason Plumlee", "Miles Plumlee", "Marshall Plumlee", "Jakob Poeltl", "Quincy Pondexter", "Otto Porter", "Michael Porter", "Kevin Porter", "Terry Porter", "Bobby Portis", "Kristaps Porzingis", "James Posey", "Dwight Powell", "Josh Powell", "Norman Powell", "Roger Powell", "Alex Poythress", "Paul Pressey", "Phil Pressey" , "Brian Quinnett", "Chris Quinn", "Bob Quick", "Immanuel Quickley", "Paul Quesinberry", "John Query", "Tim Quarterman", "Omar Quinones", "Ivan Quiroz", "Bill Quackenbush", "Kevin Quarles", "Albert Quami", "Fred Queen", "Bob Quick", "Paul Quick", "John Quick", "Tom Quick", "Chris Quinn", "Mark Quinn", "Brian Quinn" , "Julius Randle", "Zach Randolph", "J.J. Redick", "Cam Reddish", "Austin Rivers", "Glenn Robinson", "Glenn Robinson III", "Nate Robinson", "Duncan Robinson", "Mitchell Robinson", "Rajon Rondo", "Derrick Rose", "Terry Rozier", "Brandon Roy", "Michael Redd", "Willis Reed", "Glen Rice", "Glen Rice Jr.", "Jason Richardson", "Quentin Richardson", "Oscar Robertson", "David Robinson", "Dennis Rodman", "Russell Robinson", "Jerome Robinson", "Nate Robinson", "Clifford Robinson", "Glenn Robinson", "James Robinson", "Larry Robinson", "Flynn Robinson", "Eddie Robinson", "Bernard Robinson", "Bill Russell", "Bryon Russell", "Cazzie Russell", "D'Angelo Russell", "Walker Russell", "Campy Russell", "Michael Ruffin", "Trevor Ruffin", "Brandon Rush", "Kareem Rush", "JaKarr Sampson", "Bill Russell", "Isaiah Rider", "Doc Rivers", "David Rivers", "Malik Rose", "Jalen Rose" , "Domantas Sabonis", "John Stockton", "Ben Simmons", "Pascal Siakam", "Dennis Smith Jr.", "Josh Smith", "J.R. Smith", "Marcus Smart", "Dennis Schröder", "Ricky Rubio", "D'Angelo Russell", "Lonnie Walker IV", "Collin Sexton", "Pascal Siakam", "Ben Simmons", "Marcus Smart", "Ish Smith", "Jason Smith", "Josh Smith", "Dennis Smith Jr.", "Zhaire Smith", "Tony Snell", "Marreese Speights", "Nik Stauskas", "Lance Stephenson", "David Stockton", "Jae'Sean Tate", "Jayson Tatum", "Jeff Teague", "Daniel Theis", "Klay Thompson", "Tristan Thompson", "Karl-Anthony Towns", "P.J. Tucker", "Evan Turner", "Jonas Valanciunas", "Fred VanVleet", "Jarred Vanderbilt", "Noah Vonleh", "Nikola Vucevic", "Dion Waiters", "Kemba Walker", "John Wall", "T.J. Warren", "Yuta Watanabe", "Russell Westbrook", "Hassan Whiteside", "Andrew Wiggins", "Lou Williams", "Robert Williams III" , "Jayson Tatum", "Jeff Teague", "Klay Thompson", "Tristan Thompson", "Karl-Anthony Towns", "P.J. Tucker", "Evan Turner", "Terry Teagle", "Sebastian Telfair", "Jason Terry", "Isaiah Thomas", "Tim Thomas", "Kenny Thomas", "John Thompson", "David Thompson", "Mychal Thompson", "Jason Thompson", "Tyrus Thomas", "Kurt Thomas", "Lance Thomas", "Terry Tyler", "Anthony Tolliver", "Axel Toupane", "Gary Trent", "Gary Trent Jr.", "Allonzo Trier", "Kelly Tripucka", "Cody Taylor", "Jeff Taylor", "Maurice Taylor", "Mike Taylor", "Terry Teagle", "Marquis Teague", "Jeff Teague", "Mirza Teletovic", "Garrett Temple", "Milos Teodosic", "Daniel Theis", "Adonis Thomas", "Billy Thomas", "Carl Thomas", "Etan Thomas", "Irving Thomas", "Isiah Thomas", "James Thomas", "Joe Thomas", "John Thomas", "Kenny Thomas", "Malcolm Thomas", "Tim Thomas" , "Ekpe Udoh", "Beno Udrih", "Tyler Ulis", "Wes Unseld", "Wes Unseld Jr.", "Ben Uzoh", "Jonas Ukmergis", "Ime Udoka", "Kelvin Upshaw", "Hal Uplinger", "James Usry", "Ken Unterberger", "Bill Unterberger", "Jarrod Uthoff", "Bob Utterback", "Don Utter", "Mel Utley", "George Unseld", "Roger Unangst", "Devin Ugland" , "Jonas Valanciunas", "Fred VanVleet", "Jarred Vanderbilt", "Luc Vaudt", "Charlie Villanueva", "Anderson Varejao", "Greivis Vasquez", "Gabe Vincent", "Jacque Vaughn", "David Vaughn", "Rasheed Vaughn", "Jake Voskuhl", "Noah Vonleh", "Nikola Vucevic", "Gary Voce", "Floyd Volker", "Jan van Breda Kolff", "Nick Van Exel", "Keith Van Horn", "Darnell Valentine", "Ronnie Valentine", "John Vallely", "Dick Van Arsdale", "Tom Van Arsdale", "Butch Van Breda Kolff", "Nick Vanos", "David Vanterpool", "Ratko Varda", "Jeff Varem", "Chico Vaughn", "Charles Vaughn", "David Vaughn", "Jacque Vaughn", "James Vaughn", "Virgil Vaughn", "Bob Verga", "Peter Verhoeven", "Jan Vesely", "John Vivian", "Gary Voce", "Floyd Volker", "Alexander Volkov", "Jake Voskuhl", "Danny Vranes", "Slavko Vranes", "Stojko Vrankovic", "Brett Vroman", "Jackson Vroman", "Sasha Vujacic", "Nikola Vucevic" , "Russell Westbrook", "John Wall", "Kemba Walker", "Ben Wallace", "Rasheed Wallace", "T.J. Warren", "Lonnie Walker IV", "Bill Walton", "Chris Webber", "Dwyane Wade", "Jerry West", "Dominique Wilkins", "Andrew Wiggins", "Lou Williams", "Deron Williams", "James Worthy", "Christian Wood", "Robert Williams III", "Marvin Williams", "Derrick White", "Hassan Whiteside", "Gerald Wallace", "John Wall", "Bill Walker", "Antoine Walker", "Chet Walker", "Kenny Walker", "Samaki Walker", "Dwyane Wade", "Von Wafer", "Neal Walk", "Dion Waiters", "Henry Walker", "Jimmy Walker", "Kenny Walker", "Danny Walters", "Rex Walters", "Luke Walton", "Paul Walther", "Lloyd Warner", "Cornell Warner", "Charlie Ward", "Gee Wardlaw", "Bob Warlick", "Ben Warley", "Bobby Warren", "Johnny Warren", "Gerald Washington", "Wilson Washington", "Clarence Weatherspoon" , "Xavier McDaniel", "Xavier Henry", "Xavier Rathan-Mayes", "Xavier Silas", "Xavier Thames", "Xavier Tillman", "Xavi Rey", "Xiaoyi Chen", "Xu Jianlian", "Xue Yuyang" , "Trae Young", "Thaddeus Young", "Nick Young", "Sam Young", "Joe Young", "Michael Young", "Perry Young", "Tim Young", "Danny Young", "James Young", "Rich Yonakor", "Sun Yue", "Max Yoder", "George Yardley", "Charlie Yelverton", "Yi Jianlian", "Yao Ming", "Webster Yates", "Wayne Yates", "Barry Yates", "Yuta Watanabe", "Young Yue", "Yuta Tabuse", "Yaroslav Korolev", "Yogi Ferrell", "Yakhouba Diawara", "Yinka Dare", "Yellow Washington", "Yin Jian", "Yudai Baba" , "Zach LaVine", "Zach Randolph", "Zach Collins", "Zydrunas Ilgauskas", "Zaire Wade", "Zeke Nnaji", "Zoran Dragic", "Zoran Planinic", "Zvonimir Boban", "Zarko Cabarkapa", "Zeljko Rebraca", "Zendon Hamilton", "Zhou Qi", "Zaza Pachulia", "Zabian Dowdell", "Zach Auguste", "Zach Norvell Jr.", "Zaire Smith", "Zhaire Smith", "Zoran Dragic", "Zoran Planinic", "Zvi Sherf", "Zach Hankins", "Zach Lofton", "Zach Thomas", "Zena Edosomwan", "Zeus McClurkin", "Zip Gayles", "Ziggy Kauls", "Zion Williamson"
]; 
// Game state variables
let gameHistory = [];
let currentPlayer = 1;
let lastUsedNames = new Set();
let scores = {1: 0, 2: 0};
let hintsRemainingThisTurn = 2; // Track available hints

// Initialize game
function initializeGame() {
    const randomPlayer = nbaPlayers[Math.floor(Math.random() * nbaPlayers.length)];
    gameHistory.push({ 
        player: "Auto", 
        name: randomPlayer,
        correct: null // Auto-generated, not scored
    });
    updateGameDisplay();
    updateScoreDisplay();
    updateHintButton();
}

// Get last letter requirement
function getRequiredLetter() {
    if (gameHistory.length === 0) return null;
    const lastPlayer = gameHistory[gameHistory.length - 1].name;
    const lastNames = lastPlayer.split(" ");
    return lastNames[lastNames.length - 1][0].toUpperCase();
}

// Modified to be case-insensitive
function validateName(name) {
    if (!name) return "Please enter a name";
    if (lastUsedNames.has(name.toLowerCase())) return "This name has already been used";
    
    // Case-insensitive check against the database
    const nameExists = nbaPlayers.some(player => 
        player.toLowerCase() === name.toLowerCase()
    );
    
    if (!nameExists) return "This player is not in our database";
    
    const requiredLetter = getRequiredLetter();
    if (requiredLetter) {
        // Case-insensitive check for first letter
        const firstName = name.split(" ")[0];
        if (firstName[0].toUpperCase() !== requiredLetter) {
            return `Name must start with the letter ${requiredLetter}`;
        }
    }
    
    return null;
}

// Show hint function
function showHint() {
    if (hintsRemainingThisTurn <= 0) {
        document.getElementById('hint').textContent = "No hints remaining this turn!";
        return;
    }
    
    const requiredLetter = getRequiredLetter();
    if (!requiredLetter) {
        document.getElementById('hint').textContent = "No letter requirement yet!";
        return;
    }
    
    // Find valid players that match the required letter (case-insensitive)
    const validPlayers = nbaPlayers.filter(player => {
        if (!lastUsedNames.has(player.toLowerCase())) {
            const firstName = player.split(" ")[0];
            return firstName[0].toUpperCase() === requiredLetter;
        }
        return false;
    });
    
    if (validPlayers.length === 0) {
        document.getElementById('hint').textContent = "No valid players found for this letter!";
        return;
    }
    
    // Select a random player and show first 3 letters
    const randomPlayer = validPlayers[Math.floor(Math.random() * validPlayers.length)];
    const firstThreeLetters = randomPlayer.substring(0, 3);
    document.getElementById('hint').textContent = `Hint: Try a name that starts with "${firstThreeLetters}..."`;
    
    // Decrease hints remaining and update button
    hintsRemainingThisTurn--;
    updateHintButton();
}

// Update hint button display
function updateHintButton() {
    document.querySelector('.hint-button').textContent = `Get Hint (${hintsRemainingThisTurn} left)`;
    if (hintsRemainingThisTurn <= 0) {
        document.querySelector('.hint-button').classList.add('disabled');
    } else {
        document.querySelector('.hint-button').classList.remove('disabled');
    }
}

// Submit name - modified to properly format the input name
function submitName() {
    const input = document.getElementById("playerInput");
    let name = input.value.trim();
    
    // Format name properly with correct capitalization
    const formattedName = name.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
        
    // Use the original input for validation, but the formatted name for display
    const error = validateName(name);

    if (error) {
        // Incorrect answer
        scores[currentPlayer] -= 1;
        gameHistory.push({ 
            player: `Player ${currentPlayer}`, 
            name: name || "(Empty input)", 
            correct: false,
            error: error
        });
        document.getElementById("error").textContent = error;
        
        // Switch to next player
        switchPlayer();
        input.value = "";
        updateGameDisplay();
        updateScoreDisplay();
        return;
    }

    // Correct answer - use the properly formatted name
    scores[currentPlayer] += 1;
    gameHistory.push({ 
        player: `Player ${currentPlayer}`, 
        name: formattedName,  // Use formatted name here
        correct: true 
    });
    lastUsedNames.add(name.toLowerCase());
    
    // Switch to next player
    switchPlayer();
    input.value = "";
    document.getElementById("error").textContent = "";
    document.getElementById("hint").textContent = ""; // Clear hint text
    updateGameDisplay();
    updateScoreDisplay();
}

// Switch player and reset hints
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    hintsRemainingThisTurn = 2; // Reset hints for new player
    updateHintButton();
}

// Update game display
function updateGameDisplay() {
    const historyDiv = document.getElementById("gameHistory");
    historyDiv.innerHTML = gameHistory
        .map(entry => {
            let entryClass = '';
            let resultText = '';
            
            if (entry.correct === true) {
                entryClass = 'correct';
                resultText = ' ✓ (+1 point)';
            } else if (entry.correct === false) {
                entryClass = 'incorrect';
                resultText = ` ✗ (-1 point) - ${entry.error}`;
            }
            
            return `<div class="${entryClass}">${entry.player}: ${entry.name}${resultText}</div>`;
        })
        .join("");

    const currentPlayerDiv = document.querySelector(".current-player");
    currentPlayerDiv.textContent = `Player ${currentPlayer}'s turn`;

    const requirementDiv = document.getElementById("currentRequirement");
    const requiredLetter = getRequiredLetter();
    requirementDiv.textContent = requiredLetter 
        ? `Next name must start with: ${requiredLetter}`
        : "";

    // Scroll to bottom of history
    historyDiv.scrollTop = historyDiv.scrollHeight;
}

// Update score display
function updateScoreDisplay() {
    document.querySelector("#player1Score .score").textContent = scores[1];
    document.querySelector("#player2Score .score").textContent = scores[2];
    
    // Update active player styling
    document.getElementById("player1Score").classList.toggle("active", currentPlayer === 1);
    document.getElementById("player2Score").classList.toggle("active", currentPlayer === 2);
}

// Add enter key support for input
document.getElementById("playerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitName();
    }
});

// Initialize game on load
window.onload = initializeGame;

// Modal functionality for help button
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("helpModal");
    const btn = document.getElementById("helpButton");
    const span = document.getElementsByClassName("close")[0];

    // Open modal when help button is clicked
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal when X is clicked
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});