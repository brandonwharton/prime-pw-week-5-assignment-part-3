console.log('***** Music Collection *****')

let collection = [];

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
