const myMusicList = [
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/5fZ3BmBaq29MYI2Xsb5FBR?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0Ir4WOwXR5F0Ah2CX1ViUG?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/1OOtq8tRnDM8kG2gqUPjAj?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0ikz6tENMONtK6qGkOrU3c?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/29d0nY7TzCoi22XBqDQkiP?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/4y1LsJpmMti1PfRQV9AWWe?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/6yEAAIEHu4GcUFptg5W9kI?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/2HHtWyy5CgaQbC7XSoOb0e?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
    "<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/7jwQlYGpOml9ETGre1HqGA?utm_source=generator&theme=0' width='100%' height='80' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>",
];

const mixList = document.querySelector(".my-songs");
const button = document.querySelector(".show-list");
const total = document.querySelector(".text");

//create the remove/hide functionality when clicking the button
button.addEventListener("click", function () {
  mySongs(myMusicList);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `The top ${myMusicList.length} songs of the decade 🎧`;

//function that turns the array into html list elements
const mySongs = function (songs) {
  //this is how we are able to access each string in the list we made
  songs.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;

    mixList.append(li);
  });
};