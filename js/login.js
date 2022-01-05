import {listAccount} from './data.js'
console.log(listAccount);

let submitTage = document.getElementById("submit")

submitTage.addEventListener("click", (e) =>{
    e.preventDefault()
    let userName = document.getElementById("user_name").value
    let passWord = document.getElementById("password").value
    console.log(userName);
    console.log(passWord);
    let account = listAccount.filter(function(account) {
        return account.username == userName && account.password == passWord
    })
    console.log(account);
    if (account.length == 0 ){
        document.getElementById("user_name").value = ""
        document.getElementById("password").value = ""
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tài khoản không tồn tại!',
          })
    }else{
        let accountJson = JSON.stringify(account[0])
        sessionStorage.setItem('account', accountJson)
        window.location.href = "../page/admin.html"
    }
})
