setTimeout(() => {
    let loaderdiv = document.getElementById("loaderdiv");
    let container = document.getElementById("container");
    let body = document.querySelector("body");
    let navbar1 = document.getElementById("navbar1");
    body.style.backgroundColor = "whitesmoke";
    container.style.display = "block";
    navbar1.style.display = "flex";
    loaderdiv.style.display = "none";
}, 5000);


// Navbar
const navabr2 = document.getElementsByClassName("navbar2");
const hamburger = document.getElementById("hamburger");
window.addEventListener("resize", () => {
    if (screen.width > 700)
        navabr2[0].style.display = "none";
})
hamburger.addEventListener("click", () => {
    if (navabr2[0].style.display != "block" && screen.width < 700) {
        navabr2[0].style.display = "block";
        hamburger.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_ueR9nYplLvUHLNoZ4JIdP9gG0HWz8qA3g&s";
    } else {
        navabr2[0].style.display = "none";
        hamburger.src = "./assets/hamburger.png";
    }

})


// Projects
let projectname = [
    '2048',
    'Project Management Tool',
    
];
let projectimg = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNS1NC6ZkZgLEoSyWHqMMWbxQOXTbeQMdFg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiw-ScI3h_Wm0cN8VWhc_5FlHkJx-yXbNhuteRRcUOJTcmR8Ir8GVz5qzZOu8yasXR89k&usqp=CAU',
    
];
let projectdescription = [
    '2048 is a single-player mathematical puzzle game',
    'Your  Remote-Friendly Team Workspace Where Knowledge And Collaboration Meet',
    
];
// ⦾ ⦿
let projectlongdescription = 
    [//CIDECODE
        "Skills: HTML, CSS, JavaScript",
        "Skills: HTML, CSS, JavaScript"
    
];
let projectlink = [
    'https://github.com/MeenakshiMV/2048-game',
    'https://github.com/MeenakshiMV/project-management-tool',
];
const cardcontainer = document.getElementById("cardcontainer");
for (var i = 0; i < projectname.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("onclick", `projectextracontainerbuild(${i})`);
    let projectnameh1 = document.createElement("h1");
    let projectimgimg = document.createElement("img");
    let projectdescp = document.createElement("h3")

    card.className += "card";
    card.setAttribute("id", `${projectname[i]}`);
    projectnameh1.className += "projectname";
    projectimgimg.className += "projectimg";
    projectdescp.className += "projectdescription"

    projectnameh1.innerHTML = `${projectname[i]}`;
    projectimgimg.src = `${projectimg[i]}`;
    projectimgimg.alt = `${projectname[i]}`;
    projectdescp.innerHTML = `${projectdescription[i]}`;

    card.append(projectnameh1);
    card.append(projectimgimg);
    card.append(projectdescp);

    cardcontainer.append(card);
}
//Project Extra Container
const projectextracontainer = document.getElementById("projectextracontainer");
const projectextraclose = document.getElementById("projectextraclose");
const projectextraimg = document.getElementById("projectextraimg");
const projectextraname = document.getElementById("projectextraname");
const projectextradescription = document.getElementById("projectextradescription");
const projectextralink = document.getElementById("projectextralink");
const textdata = document.getElementById("textdata");

function projectextracontainerbuild(index) {

    // projectextracontainer.innerHTML = ``;
    projectextraimg.innerHTML = '';
    projectextraname.innerHTML = '';
    projectextradescription.innerHTML = '';
    projectextralink.innerHTML = '';
    projectextracontainer.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_ueR9nYplLvUHLNoZ4JIdP9gG0HWz8qA3g&s" alt="Close" class="projectextraclose" onclick="closeprojectextracontainer()">`;

    let projectextraimgele = document.createElement("img");
    projectextraimgele.src = `${projectimg[index]}`;
    projectextraimgele.alt = `${projectname[index]}`;

    projectextraimg.append(projectextraimgele);

    let projectextranameh1 = document.createElement("h1");
    projectextranameh1.innerHTML = `${projectname[index]}`;

    projectextraname.append(projectextranameh1);

    let projectdescul = document.createElement("h3");
    projectextradescription.innerHTML = `${projectlongdescription[index]}`;

    projectextradescription.append(projectdescul);


    let projectlinka = document.createElement("a");
    projectlinka.href = projectlink[index];
    projectlinka.setAttribute("target", "_blank");
    projectlinka.innerHTML = `Come Check this <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj71iX3L4E1uZyPTjdPFkigvJF7GY3V_NYEA&s" >`;

    projectextralink.append(projectlinka);

    textdata.append(projectextraname)
    textdata.append(projectextradescription)
    textdata.append(projectextralink)

    projectextracontainer.append(projectextraimg);
    projectextracontainer.append(textdata);

    projectextracontainer.style.display = "flex";
}

function closeprojectextracontainer() {
    projectextracontainer.style.display = "none";
}






// // NewProjects
// let projectname = [
//     '2048',
//     'Project Management Tool',
    
// ];
// let projectimg = [
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNS1NC6ZkZgLEoSyWHqMMWbxQOXTbeQMdFg&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiw-ScI3h_Wm0cN8VWhc_5FlHkJx-yXbNhuteRRcUOJTcmR8Ir8GVz5qzZOu8yasXR89k&usqp=CAU',
    
// ];
// let projectdescription = [
//     '2048 is a single-player mathematical puzzle game',
//     'Your  Remote-Friendly Team Workspace Where Knowledge And Collaboration Meet',
    
// ];
// // ⦾ ⦿
// let projectlongdescription = 
//     [//CIDECODE
//         "Skills: HTML, CSS, JavaScript",
//         "Skills: HTML, CSS, JavaScript"
    
// ];
// let projectlink = [
//     'https://github.com/MeenakshiMV/2048-game',
//     'https://github.com/MeenakshiMV/project-management-tool',
// ];
// const cardcontainer = document.getElementById("cardcontainer");
// for (var i = 0; i < projectname.length; i++) {
//     let card = document.createElement("div");
//     card.setAttribute("onclick", `projectextracontainerbuild(${i})`);
//     let projectnameh1 = document.createElement("h1");
//     let projectimgimg = document.createElement("img");
//     let projectdescp = document.createElement("h3")

//     card.className += "card";
//     card.setAttribute("id", `${projectname[i]}`);
//     projectnameh1.className += "projectname";
//     projectimgimg.className += "projectimg";
//     projectdescp.className += "projectdescription"

//     projectnameh1.innerHTML = `${projectname[i]}`;
//     projectimgimg.src = `${projectimg[i]}`;
//     projectimgimg.alt = `${projectname[i]}`;
//     projectdescp.innerHTML = `${projectdescription[i]}`;

//     card.append(projectnameh1);
//     card.append(projectimgimg);
//     card.append(projectdescp);

//     cardcontainer.append(card);
// }
// //Project Extra Container
// const projectextracontainer = document.getElementById("projectextracontainer");
// const projectextraclose = document.getElementById("projectextraclose");
// const projectextraimg = document.getElementById("projectextraimg");
// const projectextraname = document.getElementById("projectextraname");
// const projectextradescription = document.getElementById("projectextradescription");
// const projectextralink = document.getElementById("projectextralink");
// const textdata = document.getElementById("textdata");

// function projectextracontainerbuild(index) {

//     // projectextracontainer.innerHTML = ``;
//     projectextraimg.innerHTML = '';
//     projectextraname.innerHTML = '';
//     projectextradescription.innerHTML = '';
//     projectextralink.innerHTML = '';
//     projectextracontainer.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_ueR9nYplLvUHLNoZ4JIdP9gG0HWz8qA3g&s" alt="Close" class="projectextraclose" onclick="closeprojectextracontainer()">`;

//     let projectextraimgele = document.createElement("img");
//     projectextraimgele.src = `${projectimg[index]}`;
//     projectextraimgele.alt = `${projectname[index]}`;

//     projectextraimg.append(projectextraimgele);

//     let projectextranameh1 = document.createElement("h1");
//     projectextranameh1.innerHTML = `${projectname[index]}`;

//     projectextraname.append(projectextranameh1);

//     let projectdescul = document.createElement("h3");
//     projectextradescription.innerHTML = `${projectlongdescription[index]}`;

//     projectextradescription.append(projectdescul);


//     let projectlinka = document.createElement("a");
//     projectlinka.href = projectlink[index];
//     projectlinka.setAttribute("target", "_blank");
//     projectlinka.innerHTML = `Come Check this <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj71iX3L4E1uZyPTjdPFkigvJF7GY3V_NYEA&s" >`;

//     projectextralink.append(projectlinka);

//     textdata.append(projectextraname)
//     textdata.append(projectextradescription)
//     textdata.append(projectextralink)

//     projectextracontainer.append(projectextraimg);
//     projectextracontainer.append(textdata);

//     projectextracontainer.style.display = "flex";
// }

// function closeprojectextracontainer() {
//     projectextracontainer.style.display = "none";
// }




//Experience
let exprole = [
    'Azure AI-900',
    'Asia AI Odyssey Challenge',
    'Coding challenge',
    'Starting with Cyber Security',
    'Cyber Hygiene Practices',
    'Python Basics by Accenture'
];
let expcompany = [
    'Microsoft',
    'Microsoft',
    'RV College of Engineering',
    'futureskillsprime',
    'ISEA',
    'Accenture'
];
let expduration = [
    'June 2024',
    'June 2024',
    'June 2024',
    'March 2024',
    'November 2023',
    'March 2024'
];
let expdescription = [
    '"fundamental knowledge about AI and Cloud services "',
    '"enhance my AI skills"',
    '"sharpens my coding skills"',
    '"Knowledge about Cyber Security"',
    '"e-learning organized as a part of Stay Safe Online(SSO) campaign "',
    '"informative web links, hands-on exercises, and quizzes to strengthen my understanding of Python"'
];
let expimg = [
    'https://images.squarespace-cdn.com/content/v1/624f533702b64e5c9c78e131/1678942955789-QY2AY83IJ497E181JUDZ/AI-900+Badge.png',
    'https://pbs.twimg.com/media/GH3JQeyWgAAjIGY?format=jpg&name=4096x4096',
    'https://upload.wikimedia.org/wikipedia/en/d/d2/R.V._College_of_Engineering_logo.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh34w0EQa0tzqiGu5PVN1mgtpNe0QYYQOcfg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5KxqjvybdOkZmiXBHu5Lek9dmjkszbcBPg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR04JR4XygFh022WJxB6dVnY-D2JxL0CT2tA&s'
];

let explink=
[
    'https://learn.microsoft.com/en-us/users/meenakshimv-3648/credentials/c069170ff57edd31',
    'https://drive.google.com/file/d/1iTVjWvZRskHY0YjSgsYF7zHg1HcY17BD/view?usp=drivesdk',
    'https://drive.google.com/file/d/1m6pEyrt3IZkyX_T1UydgphVBCuzr4vUX/view?usp=drivesdk',
    '',
    
    'https://drive.google.com/file/d/1m7rer02-X0YCQTPNkJ5NNS5mxE-XAgh1/view?usp=drivesdk',
    '',
];

const experiencemaincontainer = document.getElementById("experiencemaincontainer");
for (var i = 0; i < exprole.length; i++) {
    let experiencecard = document.createElement("div");
    experiencecard.className = "experiencecard";
    experiencecard.setAttribute("onclick", `expextracontainerbuild(${i})`);
    let expimgdiv = document.createElement("div");
    expimgdiv.className += "expimgdiv";

    let experienceimg = document.createElement("img");
    experienceimg.className += "experienceimg"
    experienceimg.src = `${expimg[i]}`

    let experiencerole = document.createElement("h1");
    experiencerole.className += "experiencerole";
    experiencerole.innerHTML = `${exprole[i]}`

    let experiencecompany = document.createElement("h3");
    experiencecompany.className += "experiencecompany";
    experiencecompany.innerHTML = `${expcompany[i]}`

    let experienceduration = document.createElement("h3");
    experienceduration.className += "experienceduration";
    experienceduration.innerHTML = `${expduration[i]}`

    let experiencedescription = document.createElement("h2");
    experiencedescription.className += "experiencedescription";
    experiencedescription.innerHTML = `${expdescription[i]}`
    
    expimgdiv.append(experienceimg)

    experiencecard.append(expimgdiv);
    experiencecard.append(experiencerole);
    experiencecard.append(experiencecompany);
    experiencecard.append(experienceduration);
    experiencecard.append(experiencedescription);
    



    experiencemaincontainer.append(experiencecard)
}
//Experience Extra Container
const expextracontainer = document.getElementById("expextracontainer");
const expextraimg = document.getElementById("expextraimg");
const exptextdata = document.getElementById("exptextdata");
const expextralink = document.getElementById("expextralink");



function expextracontainerbuild(index) {

    expextraimg.innerHTML = '';
    exptextdata.innerHTML = '';
    expextralink.innerHTML = '';
    


    let expextraimgele = document.createElement("img");
    expextraimgele.src = `${expimg[index]}`;
    expextraimgele.alt = `${expcompany[index]}`;
    expextraimg.append(expextraimgele);

    let expextrah1 = document.createElement("h1");
    expextrah1.innerHTML = `${exprole[index]}`;
    let expextrah3 = document.createElement("h3");
    expextrah3.innerHTML = `${expcompany[index]}`;
    
    let expdescul = document.createElement("ul");
    for (var i = 0; i < explongdescription[index].length; i++) {
        let expdescpli = document.createElement("li");
        expdescpli.innerText = explongdescription[index][i];
        expdescul.append(expdescpli);
    }
    exptextdata.append(expextrah1);
    exptextdata.append(expextrah3);
    exptextdata.append(expdescul);

    let explinka = document.createElement("a");
    explinka.href = explink[index];
    explinka.setAttribute("target", "_blank");
    explinka.innerHTML = `Come Check this <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj71iX3L4E1uZyPTjdPFkigvJF7GY3V_NYEA&s" >`;
    
    expextralink.append(explinka);

    expextracontainer.append(expextraimg);
    expextracontainer.append(exptextdata);
    expextracontainer.style.display = "flex";


    textdata.append(projectextraname)
    textdata.append(projectextradescription)
    textdata.append(expextralink)
}


function closeexpextracontainer () {
    expextracontainer.style.display = "none";
}


//Awards
const hackathon = document.getElementById("hackathon");
const hackathonextracontainer = document.getElementById("hackathonextracontainer");

hackathon.addEventListener("click", () => {
    hackathonextracontainer.style.display = "block";
})

const closehackathonextracontainer = () => {
    hackathonextracontainer.style.display = "none";
}

const paperpresentation = document.getElementById("paperpresentation");
const paperextracontainer = document.getElementById("paperextracontainer");

paperpresentation.addEventListener("click", () => {
    paperextracontainer.style.display = "block";
})

const closeppextracontainer = () => {
    paperextracontainer.style.display = "none";
}

const academicexcellence = document.getElementById("academicexcellence");
const academicextracontainer = document.getElementById("academicextracontainer");

academicexcellence.addEventListener("click", () => {
    academicextracontainer.style.display = "block";
})

const closeacademicextracontainer = () => {
    academicextracontainer.style.display = "none";
}

const coding = document.getElementById("coding");
const codingextracontainer = document.getElementById("codingextracontainer");

coding.addEventListener("click", () => {
    codingextracontainer.style.display = "block";
})

const closecodingextracontainer = () => {
    codingextracontainer.style.display = "none";
}