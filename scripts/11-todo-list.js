
//1st to do list

// const addList=[];
// function add(){
//   const inputElement=document.querySelector('.input-btn');
//   const value=inputElement.value;
//   //console.log(value);
//   addList.push(value);
//   console.log(addList);
//   inputElement.value='';
// }


//2nd to do list



// const addList=[];

// renderHtml();
// function renderHtml(){
//   let todolist='';
//   for(let i=0;i<addList.length;i++){
//     const work=addList[i];
//     const html=`<p>${work}</p>`;
//     todolist+=html;
//   }
//   document.querySelector('.js-text').innerHTML=todolist;
// }

// function add(){
//   const inputElement=document.querySelector('.input-btn');
//   const value=inputElement.value;
//   addList.push(value);
//   inputElement.value='';
//   renderHtml();
// }

 




//3rd to do list
const addList=[{name:'washing clothes',duedate:20-4-2024},{name:'cleaning utensils',duedate:25-2-2025}];
renderHtml();

function renderHtml(){
  let todo='';
  for(let i=0;i<addList.length;i++){
    const text=addList[i];
    // const name=text.name;
    // const duedate=text.duedate;
    const {name,duedate}=text;
    const todoHtml=`
    <div>${name}</div>
    <div>${duedate}</div>
    <button onclick="
      addList.splice(${i},1);
      renderHtml();" class="delete-btn">Delete
    </button>
    `;
    todo+=todoHtml;
  }
  console.log(todo);
  document.querySelector('.js-text').innerHTML=todo;
}

function add(){
  const inputElement=document.querySelector('.input');
  const value=inputElement.value;
  const date=document.querySelector('.js-date');
  const duedate=date.value;
  addList.push(
    {name:value,
    //duedate:duedate,
    duedate});
  inputElement.value='';
  renderHtml();
}


