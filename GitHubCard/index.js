/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function axiosFunction(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      // console.log(response);
      profileBox(response.data);
      return username;
    })
    // .then(username => {
    //   axios.get(`https://api.github.com/users/${username}/followers`)
    //     .then(response => {
    //       const followerCount = response.data;
    //       followerCount.forEach(item => {
    //         axios.get(`https://api.github.com/users/${item.login}`)
    //           .then(response => {
    //             profileBox(response.data);
    //           })
    //       })
    //     })
    // })

}


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersList = [
  "Krishan-Nattar",
  "shanreed",
  "raajnpatel",
  "michelangeloxo"
];

followersList.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      // console.log(response);
      profileBox(response.data);
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const pagePost = document.querySelector(".cards");

function profileBox(object) {

  // console.log(object);

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const avatarImg = document.createElement("img");
  avatarImg.src = object.avatar_url;

  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info");

  const nameH3 = document.createElement("h3");
  nameH3.classList.add("name");
  nameH3.textContent = object.name;

  const usernameP = document.createElement("p");
  usernameP.classList.add("username");
  usernameP.textContent = object.login;

  const locationP = document.createElement("p");
  locationP.textContent = `Location: ${object.location}`;

  const profileP = document.createElement("p");
  profileP.textContent = `Profile:`;

  const profileAnchor = document.createElement("a");
  profileAnchor.href = object.html_url;
  profileAnchor.textContent = 'Github Page';

  profileP.appendChild(profileAnchor);

  const followersP = document.createElement("p");
  followersP.textContent = 'Followers: ' + object.followers;
  
  const followingP = document.createElement("p");
  followingP.textContent = 'Following: ' + object.following;

  const bioP = document.createElement("p");
  bioP.textContent = `Bio: ${object.bio}`;

  const chartImg = document.createElement("img");
  chartImg.src = `http://ghchart.rshah.org/${object.login}`;
  chartImg.style.width = "100%";

  
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(usernameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  cardInfoDiv.appendChild(chartImg);

  cardDiv.appendChild(avatarImg);
  cardDiv.appendChild(cardInfoDiv);

  pagePost.appendChild(cardDiv);

  console.log(cardDiv)
}

axiosFunction("Cerberean");