import jobs from "./main.js";

jobs.forEach((item) => {
  const listItems = document.getElementById("list__items");
  listItems.style.padding = "2rem 9%";
  listItems.style.marginTop = "5rem";

  const listItem = document.createElement("li");
  listItem.style.backgroundColor = "#fff";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.justifyContent = "space-between";
  listItem.style.padding = "2rem 3rem";
  listItem.style.margin = "3rem 0";
  listItem.style.borderRadius = "0.4rem";
  listItem.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0, 0.1)";
  listItems.appendChild(listItem);

  const listBox = document.createElement("div");
  listBox.style.display = "flex";
  listBox.style.alignItems = "center";
  listBox.style.gap = "2rem";
  listItem.appendChild(listBox);

  const listImg = document.createElement("img");
  listImg.src = item.logo;
  listBox.appendChild(listImg);

  const listContent = document.createElement("div");
  listBox.appendChild(listContent);
  
  const listLink1 = document.createElement("a");
  listLink1.textContent = item.company;
  listLink1.style.color = "rgba(92, 165, 165, 1)";
  listLink1.style.fontWeight = "550";
  listContent.appendChild(listLink1);
  
  const listNew = document.createElement("a");
  listNew.style.backgroundColor = "rgba(92, 165, 165, 1)";
  listNew.style.borderRadius = "1rem";
  listNew.style.color = "#fff";
  listNew.style.padding = "0.3rem 1rem";
  listNew.style.margin = "0 1rem";
  if (item.new == true) {
    listNew.textContent = "New!";
    listContent.appendChild(listNew);
}

  const listFeatured = document.createElement("a");
  listFeatured.style.backgroundColor = "#3a3737";
  listFeatured.style.borderRadius = "1rem";
  listFeatured.style.color = "#fff";
  listFeatured.style.padding = "0.3rem 1rem";
  if (item.featured == true) {
      listFeatured.textContent = "Featured";
      listContent.appendChild(listFeatured);
    }
    
    const listHeading = document.createElement("h3");
    listHeading.textContent = item.position;
    listHeading.style.fontWeight = "620";
    listHeading.style.padding = "1rem 0";
    listContent.appendChild(listHeading);
    
    const listSpans = document.createElement("div")
    listSpans.style.display = "flex"
    listSpans.style.alignItems = "center"
    listSpans.style.justifyContent = "space-between"
    listSpans.style.gap = "1rem"
    listContent.appendChild(listSpans)
    

  const listSpan1 = document.createElement("span");
  listSpan1.classList.add("list__span");
  listSpan1.textContent = item.postedAt;
  listSpans.appendChild(listSpan1);

  const listCircle = document.createElement("div")
  listCircle.style.backgroundColor = "#444"
  listCircle.style.width = "0.3rem"
  listCircle.style.height = "0.3rem"
  listCircle.style.borderRadius = "50%"
  listSpans.appendChild(listCircle)

  const listSpan2 = document.createElement("span");
  listSpan2.classList.add("list__span");
  listSpan2.textContent = item.contract;
  listSpans.appendChild(listSpan2);

  const listCircle2 = document.createElement("div")
  listCircle2.style.backgroundColor = "#444"
  listCircle2.style.width = "0.3rem"
  listCircle2.style.height = "0.3rem"
  listCircle2.style.borderRadius = "50%"
  listSpans.appendChild(listCircle2)

  const listSpan3 = document.createElement("span");
  listSpan3.classList.add("list__span");
  listSpan3.textContent = item.location;
  listSpans.appendChild(listSpan3);

  const listButtons = document.createElement("div");
  listItem.appendChild(listButtons);

  const buttonElement1 = document.createElement("button");
  buttonElement1.classList.add("button");
  buttonElement1.textContent = item.role;
  listButtons.appendChild(buttonElement1);

  const buttonElement2 = document.createElement("button");
  buttonElement2.classList.add("button");
  buttonElement2.textContent = item.level;
  listButtons.appendChild(buttonElement2);

  const listLanguages = item.languages;
  listLanguages.forEach((word) => {
    const buttonElement3 = document.createElement("button");
    buttonElement3.classList.add("button");
    buttonElement3.textContent = word;
    listButtons.appendChild(buttonElement3);
  });

  const listTools = item.tools;
  listTools.forEach((word) => {
    const buttonElement4 = document.createElement("button");
    buttonElement4.classList.add("button");
    buttonElement4.textContent = word;
    listButtons.appendChild(buttonElement4);
  });
});
