let accountLogin = sessionStorage.getItem("account")
let accountObject = JSON.parse(accountLogin)
if(accountObject == null || accountObject.role != "admin"){
    window.location.href = "../page/index.html"
}