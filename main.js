const container = document.getElementById("container");

const apiChara = "https://potterapi-fedeperin.vercel.app/en/characters";

async function app() {
  const res = await fetch(apiChara);
  const characters = await res.json();
  console.log(characters);

  characters.forEach((character) => {
    const hpBox = document.createElement("div");
    hpBox.className = "box";
    const hpImg = document.createElement("img");
    const hpFname = document.createElement("h1");
    const hpNname = document.createElement("h2");
    const hpHouse = document.createElement("p");

    hpImg.src = character.image;
    hpFname.textContent = character.fullName;
    hpNname.textContent = character.nickname;
    hpHouse.textContent = character.hogwartsHouse;

    hpBox.append(hpImg, hpHouse, hpFname, hpNname);
    container.append(hpBox);
  });
}

app();
