// getting data using axios method

const axios = require("axios");

// async function axiosFetch() {
//   const data = await axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(data);
// }
// axiosFetch();

async function multipleRequest() {
    const [data1,data2]=await Promise.all([axios.get("https://jsonplaceholder.typicode.com/users"),axios.get("https://jsonplaceholder.typicode.com/posts")])
 
  console.log(data1.data);
  console.log(data2.data);
}
multipleRequest();
