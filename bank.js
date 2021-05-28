class Bank {

    static getAccountDetails() {


        var accountDetails = {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1002: { acno: 1002, name: "usertwo", balance: 3000, password: "user2" },
            1003: { acno: 1003, name: "userthree", balance: 5000, password: "user3" },
            1004: { acno: 1004, name: "userfour", balance: 5000, password: "user4" },
            1005: { acno: 1005, name: "userfour", balance: 5000, password: "user5" }
        }
        return accountDetails
    }
    static authenticateUser(accno, password) {
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (password == data[accno]["password"]) {
                return 0 //valid credentials
            }
            else {
                return 1   //invalid password
            }


        }
        else {
            return -1   //invalid account number
        }
    }


    static login() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        //    alert(pwd)
        let data = Bank.getAccountDetails()
        //console.log(data);
        if (accno in data) {
            if (pwd == data[accno]["password"]) {
                alert("authentication success")
                window.location.href = "userhome.html";
            }
            else {
                alert("invalid password")
            }
            //  alert("user exist")

        }
        else {
            alert("there is no user with accno")
        }
    }
    static deposit() {

        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(accno, pwd)
        let data = Bank.getAccountDetails()
        if (user == 0) {
            data[accno]["balance"] += Number(amount)
            alert("aval bal" + data[accno]["balance"])
        }
        else if (user == 1) {
            alert("invalid password")
        }
        else {
            alert("invalid accno")
        }
    }

    static withdraw() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(accno, pwd)
        let data = Bank.getAccountDetails()
        if (user == 0) {
            if (amount > data[accno]["balance"]) {
                alert("insufficient amount")
            }
            else {
                data[accno]["balance"] -= Number(amount)
                alert(data[accno]["balance"])
            }
        }
    }
}
