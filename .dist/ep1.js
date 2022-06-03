// ---------------------
// block scope 
// let x = 10;
// let y = 50;
// if (x===10) {
//     let y = 500;
//     console.log(y);
// }
// console(y);

// ---------------------
// let x = 50 // const (constance)
// x = 100
// console.log(x)
// ----------------------

// arrow function 
// fullname = (fname,lname) => fname + lname ==> ไม่ต้องใส่ปีกกา


// old 
// console.log(fullname("Ratchanon","Traitiprt"))
// function fullname(fname,lname){
//     return fname+" "+lname
// }  

//------------------------------------
// fullname=(fname,lname) =>fname+" "+lname
// console.log(fullname("Ratchanon","Traitiprat"))

// setage=(age)=> "age " +age
// console.log(setage(20))
//------------------------------------
//object
// const customer = {
//     customerName : "Ratchanon",
//     age:40,
//     address: Samutprakarn
// }
// console.log(customer);

// -------------------------------------------------
// const username="Ratchanon"
// const age = 20
// const address = "Samutprakarn"

// const customer = {
//     customerName : username,
//     age:age,
//     address: address,
//     showdata(){
//         console.log("Name = " +this.customerName)
//     }
// }
// console.log(customer);
// customer.showdata();
// -------------------------------------------------

//String 
// multiline String สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ `

// interpolation 

// -- String --
// multiline ==> '' to `

// let customerName = "Nadia";
// let addresss = "xx / xx"
// let tell = "09xxxxxxxx"

// const address = `customername : ${customerName}
// address :  ${addresss}
// tel :  ${tell}`

// console.log(address);
//-------------------------------------------------

// spread Operator (...)
// const newArr = [100,200,300,400]
// const data = [10,20,...newArr]
// const colors = ["green","blue","white"]
// const allcolors = ["red","yellow",...colors]
// const newcolors = ["black","purple"]
// allcolors.push(...newcolors)
// console.log(allcolors)
// console.log(data)

//--------------------------------------------------
// Rest Operator ==> ใช้ในการส่งค่า parameter เข้าไปทำงานใน function โดยไม่จำกัดเครื่องหมาย ...
// Rest Parameter 

// summation=(x,y) =>{
//     return x+y
// }
// summation=(x,y,z,a) =>{
//     return x+y+z+a
// }
// console.log(summation(1,2));
// console.log(summation(1,2,3,4));

// summation=(...numberArr) =>{
//     let total=0
//     for (let number of numberArr)   total+=number//1 + 2
//     return total

// }
// console.log(summation(1,2,3,4));

//--------------------------------------------------

//destructuring

//Array
// const colors = ["green", "red", "yellow"]
// const [green, red, yellow] = colors
// console.log(green)
// console.log(red)
// console.log(yellow)

//--------------------------------------------------
//default parameter
getDataCustomer = (customerName, customerAddress = "Bangkok") => {
    const address = `name : ${customerName}
    address : ${customerAddress}`
    return address;
}
console.log(getDataCustomer("Ratcanon", "Samutprakarn"));
console.log(getDataCustomer("Nadia"))
//--------------------------------------------------






