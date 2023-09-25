const data = [
    { title: "Python", content: "Let's Explore something new about Python" },
    { title: "Java", content: "Let's Explore something new about Java" },
    { title: "Swift", content: "Let's Explore something new about Swift" },
    { title: "C", content: "Let's Explore something new about C" },
    { title: "C++", content: "Let's Explore something new about C++" },
    { title: "C#", content: "Let's Explore something new about C#" },
    { title: "HTML5", content: "Let's Explore something new about HTML" },
    { title: "CSS", content: "Let's Explore something new about CSS" },
    { title: "JavaScript", content: "Let's Explore something new about JavaScript" },
    
  
];


const gridItems = document.querySelectorAll('.grid-item');


gridItems.forEach((item, index) => {
    const itemData = data[index];
    
  
    const itemHTML = `
        <h2>${itemData.title}</h2>
        <p>${itemData.content}</p>
    `;

   
    item.innerHTML = itemHTML;
});