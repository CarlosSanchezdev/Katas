
//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    const result = array.map(({artist}) => artist);
    //const dataArr = new Set(dataMap)
    //let result = [...dataArr];
    //console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    //Write your code here
    const newArr = array.filter(type => type.artist == artist);
    return newArr
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    //Write your code here
    const newArr = array.map(({title}) => title).sort().slice(0,10);
    return newArr
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    //Write your code here
    const newArr = array.sort((x,y) => x.year == y.year ? (x.title < y.title ? -1 : 1) : (x.year < y.year ? -1 : 1));
    
    return [...newArr]
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genere) {
    //Write your code here
    const newArr = array.filter((item) => item.genre = genere);
    return [...newArr]
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};
