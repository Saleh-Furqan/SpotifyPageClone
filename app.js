let audioIndex = 0;
let audioElement = new Audio("audio/superIdol.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let audioItems = Array.from(document.getElementsByClassName("audioItem"));

let audios = [
  {
    audioName: "super-idol",
    filePath: "audio/0.mp3",
    coverPath: "covers/superIdol.jpg",
  },
  {
    audioName: "augh",
    filePath: "audio/1.mp3",
    coverPath: "covers/augh.jpg",
  },
  {
    audioName: "baby shark",
    filePath: "audio/2.mp3",
    coverPath: "covers/babyshark.jpg",
  },
  {
    audioName: "fortnite or pubg?",
    filePath: "audio/3.mp3",
    coverPath: "covers/fortinayti.jpg",
  },
  {
    audioName: "humpty dumpty",
    filePath: "audio/4.mp3",
    coverPath: "covers/humpty.jpg",
  },
  {
    audioName: "chinese ad",
    filePath: "audio/5.mp3",
    coverPath: "covers/jiafi.jpg",
  },
  {
    audioName: "johny johny",
    filePath: "audio/6.mp3",
    coverPath: "covers/johny.jpg",
  },
];

audioItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = audios[i].coverPath;
  element.getElementsByClassName("audioName")[0].innerText =
    audios[i].audioName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("audioItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("audioItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      audioIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `audio/${audioIndex}.mp3`;
      masterSongName.innerText = audios[audioIndex].audioName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  masterSongName.innerText = audios[audioIndex].audioName;
  if (audioIndex >= 6) {
    audioIndex = 0;
  } else {
    audioIndex += 1;
  }
  audioElement.src = `audio/${audioIndex}.mp3`;
  masterSongName.innerText = audios[audioIndex].audioName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (audioIndex <= 0) {
    audioIndex = 6;
  } else {
    audioIndex -= 1;
  }
  audioElement.src = `audio/${audioIndex}.mp3`;
  masterSongName.innerText = audios[audioIndex].audioName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
