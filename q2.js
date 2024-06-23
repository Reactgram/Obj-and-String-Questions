// ### q2: 

let library = { 
    name: "City Library", 
    address: "123 Main St", 
    books: [ 
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" } ,
        { title: "Harry Potter", author: "J.K. Rowling" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
    
    ] 
};

// print the book whosse author is "George Orwell"

let arr = library.books // 1000th

for(let t of arr){
    // console.log(t)
   if(t.author=="George Orwell"){
         console.log(t)
   }
   
}