// ! Error Handeling in javascript
// * Error can be handle several techniques to ensure your code
// & 1. try , catch ,finally

// try {

//     let result = 10 / 0; This is fine in javascript but for example

// } catch (error) {
//     console.error("An Error occurred:", error);
// } finally {
//     console.log("Successfully code run!")
// }

// & 2.Async & await

// async function fetchData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let result =await response.json();
//         if (!response.ok) {
//             throw new error(`Error status:${response.status}`)
//         }
//         console.log(result)
//     }
//     catch (error) {
//         console.log("Error Fetching data:",error)
//     }
// }
fetchData();
//  & 3. promise rejection Handeling
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("Error aayi hai Dekh lo:", error));
