const firstNameArray = [
  'Sam',
  'John',
  'Ralph',
  'Antoine',
  'Jason',
  'Mark',
  'Andre',
  'Wayne',
  'Craig',
  'Karl'
];
const lastNameArray = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Wilson'
];
const locationArray = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinos',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsyvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'Washington DC',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Canada',
  'Mexico',
  'Brazil',
  'Argentina',
  'England',
  'Scotland',
  'Wales',
  'Ireland',
  'France',
  'Greece',
  'Italy',
  'Spain',
  'Portugal',
  'Slovenia',
  'Latvia',
  'China',
  'Japan'
];
const positionArray = [
  'Point Guard',
  'Shooting Guard',
  'Small Forward',
  'Power Forward',
  'Center'
];
const teamArray = [
  'Atlanta Hawks',
  'Boston Celtics',
  'Brooklyn Nets',
  'Charlotte Hornets',
  'Chicago Bulls',
  'Cleveland Cavaliers',
  'Dallas Mavericks',
  'Denver Nuggets',
  'Detroit Pistons',
  'Golden State Warriors',
  'Houston Rockets',
  'Indiana Pacers',
  'Los Angeles Clippers',
  'Los Angeles Lakers',
  'Memphis Grizzlies',
  'Miami Heat',
  'Milwaukee Bucks',
  'Minnesota Timberwolves',
  'New Orleans Pelicans',
  'New York Knicks',
  'Oklahoma City Thunder',
  'Orlando Magic',
  'Philadelphia 76ers',
  'Phoenix Suns',
  'Portland Trail Blazers',
  'Sacramento Kings',
  'San Antonio Spurs',
  'Toronto Raptors',
  'Utah Jazz',
  'Washington Wizards'
];

const randomise = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomHeight = () => {
  const feet = Math.floor(Math.random() * 3 + 5);
  const inches = Math.floor(Math.random() * 13);
  return feet + ',' + inches;
};

const messageGenerator = () => {
  const firstName = randomise(firstNameArray);
  const lastName = randomise(lastNameArray);
  const fullName = firstName + ' ' + lastName;
  const location = randomise(locationArray);
  const height = randomHeight();
  const position = randomise(positionArray);
  const team = randomise(teamArray);

  console.log(
    `${fullName} is from ${location}. He is ${height} and is a ${position}. He plays for the ${team}.`
  );
};

messageGenerator();
