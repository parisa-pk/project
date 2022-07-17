
const user = []
const tbody = document.querySelector('tbody')


fetch('https://jsonplaceholder.ir/users')
.then(function (result) {

return result.json()})
    .then(function(data){

        table(data)
    });
function table(users) {
    users.forEach(function(user , index) {
        const tr = document.createElement('tr');
    
        const td = document.createElement('td');
        td.innerText = index + 1
        tr.append(td);

        const td1 = document.createElement('td')
        td1.innerText = user.name
        tr.append(td1)
        
        const td2 =document.createElement('td')
        td2.innerText =user.email
        tr.append(td2)


        const td3 =document.createElement('td')
        td3.innerText = user.id
        tr.append(td3)


        tbody.append(tr);
    
    })
}
    