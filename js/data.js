let listAccount = [];

class Account {
    constructor ( username, password, role, name) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.name = name;
    }
}

let account = new Account("nguyenanhhuy", "123", "admin", "Nguyễn Anh Huy");
let account2 = new Account("caothohoanglong", "123", "admin", "Cao Thọ Hoàng Long");
let account3 = new Account("nguyenanhhao", "123", "admin", "Nguyễn Anh Hao");

listAccount.push(account)
listAccount.push(account2)
listAccount.push(account3)
console.log(listAccount);

export {listAccount}
