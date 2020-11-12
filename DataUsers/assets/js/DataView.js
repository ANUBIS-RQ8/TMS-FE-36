let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];
tableDraw(data);

function tableDraw(mass){
    let $table = document.querySelector('.table');

    for(let el of mass){
        $table.innerHTML += `<tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.age}</td>
      </tr>`;
    }
}