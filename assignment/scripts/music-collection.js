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
