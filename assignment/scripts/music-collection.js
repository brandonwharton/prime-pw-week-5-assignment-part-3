console.log('***** Music Collection *****')

let collection = [];

// Function to add records to the collection variable
function addToCollection (title, artist, yearPublished, tracks) { // tracks variable is an array of objects
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }; // end record
  collection.push(record);
  return record;
} // end addToCollection

// Using the addToCollection function to fill up an album collection
// edit: after adding tracks to addToCollection, updated with 3 tracks from each album
console.log('Filling up our collection:', addToCollection('Trouble', 'Trampled by Turtles', 2007, [{trackName: 'Valley', duration: 206},
{trackName: 'Still in Love With You', duration: 155}, {trackName: 'Arming of Infants', duration: 140}]));
console.log('Filling up our collection:', addToCollection('Duluth', 'Trampled by Turtles', 2008, [{trackName: 'November', duration: 218},
{trackName: 'White Noise', duration: 127}, {trackName: 'Darkness and the Light', duration: 202}]));
console.log('Filling up our collection:', addToCollection('If Sorrows Swim', 'Greensky Bluegrass', 2014, [{trackName: 'Windshield', duration: 225},
{trackName: 'Burn Them', duration: 201}, {trackName: 'A Letter to Seymour', duration: 145}]));
console.log('Filling up our collection:', addToCollection('How To Be A Human Being', 'Glass Animals', 2016, [{trackName: 'Life Itself', duration: 282},
{trackName: 'Youth', duration: 231}, {trackName: 'Season 2 Episode 3', duration: 244}]));
console.log('Filling up our collection:', addToCollection('Black Holes and Revelations', 'Muse', 2006, [{trackName: 'Take a Bow', duration: 275},
{trackName: 'Starlight', duration: 240}, {trackName: 'Supermassive Black Hole', duration: 209}]));
console.log('Filling up our collection:', addToCollection('In Rainbows', 'Radiohead', 2007, [{trackName: '15 Step', duration: 238},
{trackName: 'Bodysnatchers', duration: 242}, {trackName: 'Nude', duration: 255}]));

// Logging our results to make sure the pushes worked
console.log(`That's a nice collection so far. It contains:`, collection);

// Function to display the contents of our collection
function showCollection (array) {
  console.log(`The collection contains ${array.length} items currently.`);
  for (let items of array) {
    console.log(`${items.title} by ${items.artist} published in ${items.yearPublished}:`);
// Looping through tracks while looping through the albums in collection
    for (let i = 0; i < items.tracks.length; i++) {
      console.log(`${i+1}. ${items.tracks[i].trackName}: ${items.tracks[i].duration}`);
    } // end nested loop
  } // end loop
} // end showCollection

console.log('******* showCollection test *******')
console.log(`Let's examine our new collection:`)
showCollection(collection);

// Function to find albums in the collection by searching an artist
const findByArtist = (artist) => {
  let newArr = [];
  if (typeof artist === 'string') {
    for (let albums of collection) {
      if (albums.artist === artist) {
        newArr.push(albums);
      } // end adding matching albums
    } // end for of
  } // end if artist is a string
  else {
    console.log('Please enter a string')
    return false;
  } // end not a string output
  return newArr;
} // end findByArtist

console.log('******* findbyArtist tests *******')
console.log('Testing the artist finder with an artist with mutliples:', findByArtist('Trampled by Turtles'));
console.log('Testing the artist finder with an artist with one album:', findByArtist('Glass Animals'));
console.log('Testing the artist finder with an artist not in collection:', findByArtist('Alice in Chains'));
console.log('Testing the artist finder with a non-string input, expecting a return of false:', findByArtist(8));

// Stretch Goals
function search(obj) {
  let searchArr = [];
  if (typeof obj !== 'object' || Object.entries(obj).length === 0) {
    console.log('Please enter an object with at least one key-value pair');
    return collection;
  } // end non-object and empty object finder
  for (let choices of collection) {
    if (choices.artist === obj.artist && Object.entries(obj).length === 1) {
      searchArr.push(choices);
    } // checking for artist only
    else if (choices.title === obj.title && Object.entries(obj).length === 1) {
      searchArr.push(choices);
    } // checking for title only
    else if (choices.yearPublished === obj.yearPublished && Object.entries(obj).length === 1) {
      searchArr.push(choices);
    } // checking for year published only
    else if (choices.artist === obj.artist && choices.title === obj.title && Object.entries(obj).length === 2) {
      searchArr.push(choices);
    } // checking for artist and title
    else if (choices.title === obj.title && choices.yearPublished === obj.yearPublished && Object.entries(obj).length === 2) {
      searchArr.push(choices);
    } // checking for title and yearPublished
    else if (choices.artist === obj.artist && choices.yearPublished === obj.yearPublished && Object.entries(obj).length === 2) {
      searchArr.push(choices);
    } // checking for artist and yearPublished
    else if
    (choices.artist === obj.artist && choices.title === obj.title && choices.yearPublished === obj.yearPublished && Object.entries(obj).length === 3)
      { searchArr.push(choices);
    } // checking for artist, title, and yearPublished
    for (let i=0; i<choices.tracks.length; i++) {
      if (choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 1) {
        searchArr.push(choices);
      } // checking for trackName only
      else if (choices.artist === obj.artist && choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 2) {
        searchArr.push(choices);
      } // checking for artist and trackName
      else if (choices.title === obj.title && choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 2) {
        searchArr.push(choices);
      } // checking for title and trackName
      else if (choices.yearPublished === obj.yearPublished && choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 2) {
        searchArr.push(choices);
      } // checking for yearPublished and trackName
      else if
      (choices.artist === obj.artist && choices.title === obj.title && choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 3)
        { searchArr.push(choices);
      } // checking for artist, title, and trackName
      else if
      (choices.artist === obj.artist && choices.yearPublished === obj.yearPublished && choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 3)
        { searchArr.push(choices);
      } // checking for artist, yearPublished, and trackName
      else if
      (choices.title === obj.title && choices.yearPublished === obj.yearPublished && choices.tracks[i].trackName === obj.trackName && Object.entries(obj).length === 3)
        { searchArr.push(choices);
      } // checking for title, yearPublished, and trackName
      else if
      (choices.artist === obj.artist && choices.yearPublished === obj.yearPublished && choices.tracks[i].trackName === obj.trackName
       && choices.title === obj.title && Object.entries(obj).length === 4)
        { searchArr.push(choices);
      } // checking for artist, title, yearPublished, and trackName
    }// end nested loop
  } // end for of loop
  return searchArr;
} // end search

console.log('******* Single argument search tests *******')
console.log('Testing search function for artist, expecting two hits', search({artist: 'Trampled by Turtles'}));
console.log('Testing search function for yearPublished, expecting two hits', search({yearPublished: 2007}));
console.log('Testing search function for title, expecting a hit', search({title: 'If Sorrows Swim'}));
console.log('Testing search function for trackName, expecting a hit', search({trackName: '15 Step'}));

console.log('******* Two argument search tests *******');
console.log('Testing search function, expecting a hit', search({artist: 'Trampled by Turtles', yearPublished: 2008}));
console.log('Testing search function, expecting a hit', search({artist: 'Muse', title: "Black Holes and Revelations"}));
console.log('Testing search function, expecting a hit', search({title: 'If Sorrows Swim', yearPublished: 2014}));
console.log('Testing search function, expecting a hit', search({artist: 'Muse', trackName: 'Starlight'}));
console.log('Testing search function, expecting a hit', search({title: 'Duluth', trackName: 'White Noise'}));
console.log('Testing search function, expecting a hit', search({yearPublished: 2016, trackName: 'Youth'}));

console.log('******* Three argument search tests *******');
console.log('Testing search function, expecting a hit', search({artist: 'Glass Animals', title: 'How To Be A Human Being', yearPublished: 2016}));
console.log('Testing search function, expecting a hit', search({artist: 'Trampled by Turtles', yearPublished: 2007, trackName: 'Arming of Infants'}));
console.log('Testing search function, expecting a hit', search({artist: 'Muse', title: 'Black Holes and Revelations', trackName: 'Take a Bow'}));
console.log('Testing search function, expecting a hit', search({title: 'If Sorrows Swim', yearPublished: 2014, trackName: 'Windshield'}));

console.log('******* Four argument search test *******');
console.log('Testing search function, expecting a hit', search({artist: 'Radiohead', title: 'In Rainbows', yearPublished: 2007, trackName: 'Nude'}));

console.log('******* Search function test: fail cases *******');
console.log('Testing search function, expecting an empty array', search({yearPublished: 2020}));
console.log('Testing search function, expecting an empty array', search({title: 'How To Be A Human Being', yearPublished: 2020}));
console.log('Testing search function, expecting an empty array', search({artist: 'Radiohead', title: 'OK Computer', yearPublished: 2007}));
console.log('Testing search function, expecting an empty array', search({artist: 'Fleet Foxes', title: 'If Sorrows Swim', yearPublished: 2014, trackName: 'Letter to Seymour'}));
console.log('Testing search function for not an object, expecting the full collection', search('Not an object'));
console.log('Testing search function for an empty object, expecting the full collection', search( {} ));
console.log('Testing search function with tracks, expecting an empty array', search({artist: 'Muse', trackName: 'Invincible'}));

console.log('******* searchAny testing *******');
// The following is my first version of the first stretch goal. I read it to mean we needed to make
// a function that would return albums that match any of the search criteria. I now know that's not
// what was asked for, but thought I'd leave it here. This function takes in an object containing any
// one, two, or all three keys of artist, title, and yearPublished.
function searchAny(obj) {
  let searchArr = [];
  if (typeof obj !== 'object' || Object.entries(obj).length === 0) {
    return collection;
  } // end non-object and empty object finder
  else if (typeof obj === 'object') {
    for (let choices of collection) {
      if (choices.artist === obj.artist || choices.title === obj.title || choices.yearPublished === obj.yearPublished) {
        searchArr.push(choices);
      } // end if checking for values of obj
    } // end for of loop
  } // end else if
  return searchArr;
} // end search

console.log('Testing the searchAny function, expecting two hits', searchAny({artist: 'Muse', title: 'Duluth'}));
console.log('Testing the searchAny function, expecting three hits', searchAny({artist: 'Trampled by Turtles', yearPublished: 2016}));
console.log('Testing the searchAny function, expecting three hits', searchAny({title: 'If Sorrows Swim', yearPublished: 2007}));
console.log('Testing the searchAny function, expecting one hit', searchAny({title: 'How To Be A Human Being', yearPublished: 2020}));
console.log('Testing the searchAny function, expecting an empty array', searchAny({artist: 'Journey', yearPublished: 1996}));
console.log('Testing the searchAny function on a random string, expecting the full collection to return', searchAny('Not an object'));
console.log('Testing the searchAny function on an empty object, expecting the full collection to return', searchAny( { } ));

// I also made a quick function to add tracks to existing albums in our collection, in case we want more than just three tracks per
// album. It searches for the album title in the function argument and adds a track using the song (trackName) and length (duration)
// arguments.
function addTracks (albumTitle, song, length) {
  for (let selection of collection) {
    if (selection.title === albumTitle) {
      selection.tracks.push({trackName: song, duration: length})
    }
  } // end loop
} // end addTracks

console.log('******* addTracks tests *******')
console.log('Adding to Trouble by TBT:', addTracks ('Trouble', 'Salvation', 206));
console.log('Adding to If Sorrows Swim by Greensky', addTracks ('If Sorrows Swim', 'In Control', 273));
console.log('Checking collection to ensure tracks were added, and are numbered correctly');
showCollection(collection);
console.log('Searching for a newly added track:', search({artist: 'Trampled by Turtles', trackName: 'Salvation'}));
console.log('Searching for a newly added track:', search({yearPublished: 2014, trackName: 'In Control', artist: 'Greensky Bluegrass'}));

// Starting a different approach to the search function based on something that James showed us at study group.
// I tried a bunch of ways of looking at this using Object.entries to make the function more scalable.
// Based on the size of the functioning code above adding another property to our collection objects
// would be unwieldy when adding more to the search function.

// function search2 (obj) {
//   let newArray = [];
//   let objArr = Object.entries(obj);
//   let matched = false;
//   if (typeof obj !== 'object' || objArr.length === 0) {
//     return collection;
//   } // end non-object and empty object finder
//   for (let [key, value] of objArr) {
//     for (let choice of collection) {
//       if (choice[key] === value) {
//         matched = true;
//         newArray.push(choice);
//       }
//       matched = false;
//       }
//     }
//     return newArray;
//   }
