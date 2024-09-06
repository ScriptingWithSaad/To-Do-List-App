const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("please Enter a task First")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData()

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()

    } else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }

}, false)


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




// function addTask() {
//     const inputBox = document.getElementById('input-box'),
//         task = inputBox.value.trim();

//     if (!task) return alert('Please enter a task!');

//     const li = document.createElement('li');
//     li.innerHTML = `${task} <span><i class="ri-close-line"></i></span>`;

//     document.querySelector('.list-container').appendChild(li);
//     inputBox.value = '';
//     saveData();

//     li.addEventListener('click', () => li.classList.toggle('checked'));
//     li.querySelector('span').addEventListener('click', e => {
//         e.stopPropagation();
//         li.remove();
//         saveData();
//     });
// }

// document.getElementById('input-box').addEventListener('keypress', e => {
//     if (e.key === 'Enter') addTask();
//     saveData();
// });


// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
// }

// showTask();