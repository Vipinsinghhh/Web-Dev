//filter:- filter() is an array method in JavaScript.
//returning the values in forEach loop is not allowed that's why filter was introduced

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item;  //returning the values in forEach loop is not allowed that's why filter was introduced
} )

console.log(values);  //undefined



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//ways of using filter method:-

//With { } (Block Scope)
const newNums1 = myNums.filter( (num) => {      //scope used must use return keyword
    return num > 4
} )
console.log(newNums1);

//Without { } (Implicit Return)
const newNums2= myNums.filter( (num) => num > 4 )    //scope not used automatically returns filtered value
console.log(newNums2);



//-----------returns without using filter method----------
const newNums = []  //create empty array

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )
console.log(newNums);



//--------------filter method example----------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')   //filtered history books

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"   //filtered History books that was publish after 1995
})
  console.log(userBooks);