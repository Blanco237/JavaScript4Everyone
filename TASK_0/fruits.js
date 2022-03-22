//To get user input
// let prompt = require('prompt-sync')();

//Fruits Array
let fruits = [
    {
        name: 'Mango',
        category: 'Yellow'
    },
    {
        name: 'Pear',
        category: 'Green'
    }
];

// let commandList = "1: Add Fruit\n2: Delete Fruits\n3: Update Fruit Category\n4: Update Fruit Name"+
// "\n5: View All Fruits\n6:Get Fruit By Name\n7:Display Fruits by Category\n8: Exit\n\n"

// console.log(commandList);
// let command = parseInt(prompt('Select A Command:  '));
// while(command != 8){
//     switch(command){
//         case 1: 
//             addFruits();
//             break;
//         case 2:
//             deleteFruits();
//             break;
//         case 3:
//             upDateCategory();
//             break;
//         case 4:
//             upDateName();
//             break;
//         case 5:
//             displayAllFruits();
//             break;
//         case 6:
//             getFruitByName();
//             break;
//         case 7:
//             displayFruitsByCategory();
//             break;
//         case 8:
//             break;
//         default:
//             console.log('Please Enter a valid command');
//     }

//     console.log(commandList);
//     command = parseInt(prompt('Select A Command:  '));
// }

window.onload = loadList;

function addFruit() {
    let name = document.getElementById('fruitName').value;
    let category = document.getElementById('fruitCategory').value;

    fruits.push({ name, category });
    alert('Fruit Added!');

    loadList();
}

function deleteFruit() {
    let id = parseInt(document.querySelector('#delFruitId').value);
    console.log(id);
    if (id > (fruits.length - 1) || id < 0 || isNaN(id)) {
        alert('Please Enter a valid id');
        return;
    }
    fruits.splice(id, 1);
    alert('Fruit Deleted Successfully\n');
    loadList();
}

function updateFruit() {
    let name = document.querySelector('input[value="Name"]');
    let category = document.querySelector('input[value="Category"]');
    let id = parseInt(document.getElementById('upFruitId').value);
    if (id > (fruits.length - 1) || id < 0 || isNaN(id)) {
        alert('Please Enter a valid id');
        return;
    }
    let data = document.getElementById('upData').value;

    if (name.checked) {
        fruits[id].name = data;
    }
    else if (category.checked) {
        fruits[id].category = data;
    }
    alert('Fruit Updated');

    loadList();
}

function loadList() {
    let list = document.querySelector('.fruits');
    let data = "";
    fruits.forEach((fruit, index) => {
        data += `<p class='item'>${index} -- ${fruit.name}  -- ${fruit.category}</p>`
    })

    list.innerHTML = data;

}



function addFruits() {
    let name = prompt('Enter fruit name:  ');
    let category = prompt('Enter food Category:  ');

    fruits.push({ name, category });
    console.log('Fruit Added!!\n');
}


function deleteFruits() {
    displayAllFruits();
    let selectedIndex = parseInt(prompt('Enter fruit number to delete'));
    if (selectedIndex > fruits.length || selectedIndex < 0) {
        console.log('Please Enter a valid index');
        return;
    }
    fruits.splice(selectedIndex, 1);
    console.log('Fruit Deleted Successfully\n');
}

function upDateCategory() {
    displayAllFruits();
    let selectedIndex = parseInt(prompt('Enter fruit number to update Category: '));
    if (selectedIndex > fruits.length || selectedIndex < 0) {
        console.log('Please Enter a valid index');
        return;
    }
    let category = prompt('Enter new fruit category:  ');
    fruits[selectedIndex].category = category;
}

function upDateName() {
    displayAllFruits();
    let selectedIndex = parseInt(prompt('Enter fruit number to update Name:  '));
    if (selectedIndex > fruits.length || selectedIndex < 0) {
        console.log('Please Enter a valid index');
        return;
    }
    let name = prompt('Enter new fruit name:  ');
    fruits[selectedIndex].name = name;
}

function getFruitByName() {
    let name = prompt('Enter fruit name you wish to find:  ');
    let fruit = fruits.reduce((prev, curr) => {
        return curr.name == name ? curr : prev
    }, {});
    console.log(`Name: ${fruit.name} | Category: ${fruit.category}\n`);
}

function displayAllFruits() {
    if (fruits.length == 0) {
        console.log("NO FRUITS RECORDED\n");
        return;
    }
    console.log("\n")
    fruits.forEach((fruit, index) => {
        console.log(`${index}-Name: ${fruit.name} | Category: ${fruit.category}`)
    });
    console.log("\n")
}

function displayFruitsByCategory() {
    let category = prompt('Enter Category you wish to display:  ');
    console.log("\n")
    fruits.forEach((fruit, index) => {
        if (fruit.category != category) {
            return;
        }
        console.log(`${index}-Name: ${fruit.name} | Category: ${fruit.category}`)
    });
    console.log("\n")
}