// import express from "express";
// import { createTweet, getProfileByHandle, getTweets, getTweetsByHandle } from "./data";
// import {Profile, Tweet } from "./types";
// import { deflate } from "zlib";


// const app = express();

// app.set("view engine","ejs");

// // Deel 1: Zorg dat de public map beschikbaar gemaakt wordt voor de gebruiker
// // dit gebruiken om css te verbinen met index.ts
// app.use(express.static("public"));

// app.use(express.json({ limit: '1mb' }));
// app.use(express.urlencoded({ extended:true}));

// app.get("/", async(req,res) => {
//     let tweets: Tweet[] = await getTweets();
//     const profile = await getProfileByHandle("default");
//     return res.render("index", {tweets, profile}); // Deel 2: variabele tweets doorgeven
// });

// // Deel 3: Het posten van tweets
// // app.post("/", async(req, res) =>{
// //     // per kolom een variabele aanmaken
// //     // bij GETs, zijn de gegevens WEL zichtbaar, die kan je in de url-balk aflezen
// //     // bij POSTS: gegevens zijn onzichtbaar voor gebruikers, daarom gebruik je req.body
// //     const handle = req.body.text;
// //     const text = req.body.profile;
// //     const tweet0 = req.body.tweet;
// //     // const tweet = await createTweet(tweet0);
// //     // const feed = await (tweet) ? createTweet(tweet): "";
// //     if(profile){
        
// //     }else{
// //         const feed = "";
// //     }
// //     // 

// //     const profile = await getProfileByHandle(handle);
// //     // er zijn 2 variabelen
// // });


// app.get("/", async(req,res) => {
//     let tweets : Tweet[] = await getTweets();
//     return res.render("index", {
//         tweets : tweets
//     });
// });
 
// app.post("/", async(req,res) => {
//     const text = req.body.text;
//     const handle = req.body.handle;
//     const profile = await getProfileByHandle(handle);
 
//     if (profile) {
//         await createTweet({handle:handle, text:text, name: profile.name, createdOn: new Date()});
//         res.redirect("/");
//     }
// });

// // Deel 4:
// // om elke handle in te vullen in de url
// app.get("/:handle", async(req,res) => {
//     // /: --> je kan zoeken alles wat je wilt
//     // /:handler --> je kan zoeken op elk handler dat je wilt
//     // handler ophalen van de url
//     let handle: string = req.params.handle; // pakt hetgeen je in de url schrijft
//     let profile: Profile | undefined = await getProfileByHandle(handle);
//     // als de profile bestaat, maken we een nieuwe array van tweets op
//     if(profile){
//         let tweets: Tweet[] = await getTweetsByHandle(handle);
//         // dit opent de ejs file, voor in de index-pagina is een "/"
//         res.render("profile", {profile, tweets});
//         // nu kunnen we deze variabeln gebruiken in profile.ejs
//     }

// });

// app.listen(3000, async() => {
//     console.log(`The application is listening on http://localhost:3000`);
// })

import express from "express";
import { createTweet, getProfileByHandle, getTweets, getTweetsByHandle } from "./data";
import {Profile, Tweet } from "./types";

const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended:true}));

app.get("/", async(req,res) => {
    let tweets : Tweet[] = await getTweets();
    const profile  = await getProfileByHandle("defaultHandle");
    return res.render("index", {
        tweets : tweets,
        profile: profile
    });
});

app.post("/", async(req,res) => {
    const text = req.body.text;
    const handle = req.body.handle;
    const profile  = await getProfileByHandle(handle);

    if (profile) {
        await createTweet({handle:handle, text:text, name: profile.name, createdOn: new Date()});
        res.redirect("/");
    }
});


app.get("/:handle", async(req,res) => {
    let handle : string = req.params.handle;
    let profile : Profile | undefined = await getProfileByHandle(handle);

    if (profile) {
        let tweets : Tweet[] = await getTweetsByHandle(handle);
        res.render("profile",{profile, tweets} )
    }
});

app.listen(3000, async() => {
    console.log(`The application is listening on http://localhost:3000`);
})