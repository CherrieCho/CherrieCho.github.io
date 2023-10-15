
const img = ["chihiro014", "chihiro043", "karigurashi002", "karigurashi028", "mononoke024", "ponyo050", "chihiro015"]

const chosenImage = img[Math.floor(Math.random() * img.length)];

//js에서 이미지 태그 생성하기
const bgImage = document.createElement("img");
bgImage.src = `./images/${chosenImage}.jpg`
//생성한 태그 html에 넣어주기
const body = document.body;
body.appendChild(bgImage);

