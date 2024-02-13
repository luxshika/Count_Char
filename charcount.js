
function countchar(){
  const GetString1 = document.querySelector('.paragraph');
  let paragraph = GetString1.value;
  
  let length1 = paragraph.length;
  document.querySelector('.answer').innerHTML = `<h1 class = "countchar">${length1}</h1>`;
}