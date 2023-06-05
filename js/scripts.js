window.onload = function () {
    const h1Remove = document.querySelector("h1");
    h1Remove.remove();

    const firstH1 = document.createElement("h1");
    firstH1.append("Webpage Recreation Practice")
    document.body.append(firstH1);

    const firstP = document.createElement("p");
    firstP.append("The HTML of this webpage was created with JavaScript");
    document.body.append(firstP);

    const img = document.createElement("img");
    img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    document.body.appendChild(img);

    const secondH1 = document.createElement("h1");
    secondH1.append("Facts about the Multicolored Tanager");
    document.body.appendChild(secondH1);

}