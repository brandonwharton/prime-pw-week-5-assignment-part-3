console.log('***** Music Collection *****')

let collection = [];

// Function to add records to the collection variable
function addToCollection (title, artist, yearPublished) {
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }; // end record
  collection.push(record);
  return record;
} // end addToCollection

// Using the addToCollection function to fill up an album collection
console.log('Filling up our collection:', addToCollection('Trouble', 'Trampled by Turtles', 2007));
console.log('Filling up our collection:', addToCollection('Duluth', 'Trampled by Turtles', 2008));
console.log('Filling up our collection:', addToCollection('If Sorrows Swim', 'Greensky Bluegrass', 2014));
console.log('Filling up our collection:', addToCollection('How To Be A Human Being', 'Glass Animals', 2016));
console.log('Filling up our collection:', addToCollection('Black Holes and Revelations', 'Muse', 2006));
console.log('Filling up our collection:', addToCollection('In Rainbows', 'Radiohead', 2007));

// Logging our results to make sure the pushes worked
console.log(`That's a nice collection so far. It contains:`, collection);

// Function to display the contents of our collection
function showCollection (array) {
  console.log(`The collection contains ${array.length} items currently.`);
  for (let items of array) {
    console.log(`${items.title} by ${items.artist} published in ${items.yearPublished}`);
  } // end loop
} // end showCollection

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

console.log('Testing the artist finder with an artist with mutliples:', findByArtist('Trampled by Turtles'));
console.log('Testing the artist finder with an artist with one album:', findByArtist('Glass Animals'));
console.log('Testing the artist finder with an artist not in collection:', findByArtist('Alice in Chains'));
console.log('Testing the artist finder with a non-string input, expecting a return of false:', findByArtist(8));

// Stretch Goals
function search(obj) {
  let searchArr = [];
  if (typeof obj !== 'object' || Object.entries(obj).length === 0) {
    return collection;
  } // end non-object and empty object finder
  else if (typeof obj === 'object') {
    for (let choices of collection) {
      if (choices.artist === obj.artist && choices.title === obj.title ) {
        searchArr.push(choices);
      } // end if checking for artist and title
      else if (choices.title === obj.title && choices.yearPublished === obj.yearPublished) {
        searchArr.push(choices);
      } // end else if checking for title and yearPublished
      else if (choices.artist === obj.artist && choices.yearPublished === obj.yearPublished) {
        searchArr.push(choices);
      } // end else if checking for artist and yearPublished
    } // end for of loop
  } // end else if
  return searchArr;
} // end search

console.log('Testing search function, expecting a hit', search({artist: 'Trampled by Turtles', yearPublished: 2008}));
console.log('Testing search function, expecting a hit', search({artist: 'Muse', title: "Black Holes and Revelations"}));
console.log('Testing search function, expecting a hit', search({title: 'If Sorrows Swim', yearPublished: 2014}));
console.log('Testing search function, expecting an empty array', search({artist: 'Trampled by Turtles', yearPublished: 2020}));
console.log('Testing search function, expecting an empty array', search({title: 'How To Be A Human Being', yearPublished: 2020}));
console.log('Testing search function, expecting an empty array', search({artist: 'Radiohead', title: 'OK Computer'}));
console.log('Testing search function, expecting an empty array', search({artist: 'Fleet Foxes', title: 'Fleet Foxes'}));
console.log('Testing search function for not an object, expecting the full collection', search('Not an object'));
console.log('Testing search function for an empty object, expecting the full collection', search( {} ));


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
