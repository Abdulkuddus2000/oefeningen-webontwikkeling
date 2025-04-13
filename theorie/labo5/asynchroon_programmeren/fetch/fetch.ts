// // Fetch voorbeeld

// import { error } from "console";

// /* 
// fetch is een functie
//     argument: url
//     geeft een Promise terug
//     Promise bevat een response object
//     response bevat de data die je terugkrijgt van de server
//     geef het type van de data di eje verwacht ook mee
//     => voorzie een interface die de data beschrijft
// */

// // stap 1: interface aanmaken
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// // stap 2: fetch gebruiken
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((response: Post[]) => {console.log(response[0].title);})
//     .catch((error) => { console.log(error); });
    
// // hetzelfde met async/ await
// (async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const posts: Post[] = await response.json();
//         console.log(posts[0].title);
//     } catch { // om errors op netwerk niveau op te vangen
//         console.log(error);
//     }
// })

// // error afhandeling
// fetch('https://jsonplaceholder.typicode.com/posts/123')
//     .then(r => {
//         if (!r.ok) throw new Error(`HTTP error! Status: ${r.status}`)
//         return r.json()
//     })
//     .then(r => console.log(r))
//     .catch(e => console.log(e));

// // hetzelfde met async await:

// (async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/123');
//         if (!response.ok) throw new Error(response.status);
//         const posts : Post[] = await response.json();
//         console.log(posts[0].title);
//     } catch (error: any) {
//         console.log(error);
//     }
// })();

// // status code opvragen mbhv. de status property
// (async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/123');

//         if (response.status === 404) throw new Error('Not found');
//         if (response.status === 500) throw new Error('Internal server error');

//         const posts: Post[] = await response.json();
//         console.log(posts[0].title);
//     } catch (error: any) {
//         console.log(error);
//     }
// })


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// ===== 1. Basic fetch with .then() =====
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts: Post[]) => {
        console.log(posts[0].title);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });

// ===== 2. Same with async/await =====
(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await response.json();
        console.log(posts[0].title);
    } catch (error) { // Catches network errors
        console.error("Network error:", error);
    }
})(); // <-- Invoked immediately

// ===== 3. Error handling (404, etc.) =====
fetch('https://jsonplaceholder.typicode.com/posts/123')
    .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
    .then((post) => console.log(post))
    .catch((error) => console.error("Error:", error));

// ===== 4. Same with async/await =====
(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const post: Post = await response.json();
        console.log(post.title);
    } catch (error) {
        console.error("Error:", error);
    }
})();

// ===== 5. Status code checks =====
(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123');
        
        if (response.status === 404) throw new Error('Post not found (404)');
        if (response.status === 500) throw new Error('Server error (500)');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const post: Post = await response.json();
        console.log(post.title);
    } catch (error) {
        console.error("Error:", error);
    }
})();