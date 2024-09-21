// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("response is no ok");
//     }
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//     return fetch("https://jsonplaceholder.typicode.com/users")
//   }).then((res)=>{
//    return res.json();
//   }).then((response)=>{
//     console.log(response)
//   })

// async function fetchh() {
//   const fetchi = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await fetchi.json();
//   console.log(data);
// }
// fetchh();

// const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";

// Promise.all([
//   fetch(url1).then((res) => res.json()),
//   fetch(url2).then((res) => res.json()),
// ]).then(([data1, data2]) => console.log(data1, data2));

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users"),
//   fetch("https://jsonplaceholder.typicode.com/posts"),
// ]).then((response) => Promise.all(response.map((res) => res.json()))).then(([user,data])=>console.log(data))

// using async await functions

// async function fetching() {
//   const fet = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await fet.json();
//   console.log(data);
// }
// fetching();



// the below code works properly but it slows down the code

// async function multiple() {
//   const fetch1 = await fetch("https://jsonplaceholder.typicode.com/users");
//   const fetch2 = await fetch("https://jsonplaceholder.typicode.com/posts");

//   const data1 = await fetch1.json();
//   const data2 = await fetch2.json();

//   console.log(data1);
//   console.log(data2);
// }

// multiple();

// to get both data fetching together we need to use Promise.all (it will not slowdown the code)

async function sameTime() {
  const [fet1, fet2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts")
  ]);

  const data1 = await fet1.json();
  const data2 = await fet2.json();

  console.log(data1);
  console.log(data2);
}
sameTime()

async function sameTimeTryCatch() {
    try {
      const [fet1, fet2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts")
      ]);
  
      // Check if the responses are ok (status in the range 200-299)
      if (!fet1.ok || !fet2.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data1 = await fet1.json();
      const data2 = await fet2.json();
  
      console.log(data1);
      console.log(data2);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  sameTimeTryCatch();
  
//   async function sameTimeTryCatch() {
//     try {
//       const [fet1, fet2] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users"),
//         fetch("https://jsonplaceholder.typicode.com/posts")
//       ]);
  
//       if (!fet1.ok) {
//         throw new Error(`Failed to fetch users: ${fet1.status} ${fet1.statusText}`);
//       }
//       if (!fet2.ok) {
//         throw new Error(`Failed to fetch posts: ${fet2.status} ${fet2.statusText}`);
//       }
  
//       const data1 = await fet1.json();
//       const data2 = await fet2.json();
  
//       console.log(data1);
//       console.log(data2);
//     } catch (error) {
//       console.error("An error occurred:", error.message);
//     }
//   }
  
//   sameTimeTryCatch(