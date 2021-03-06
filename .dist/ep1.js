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
// getDataCustomer = (customerName, customerAddress = "Bangkok") => {
//     const address = `name : ${customerName}
//     address : ${customerAddress}`
//     return address;
// }
// console.log(getDataCustomer("Ratcanon", "Samutprakarn"));
// console.log(getDataCustomer("Nadia"))
//--------------------------------------------------


//join and concat 
// const data =[100,200,300]
// console.log(data)

// const result = data .join("$")
// console.log(result)

// const data1 = [100,200,300]
// const data2 = [400,500]

// const alldata =data1.concat(data2)
// console.log(alldata)

//--------------------------------------------------

// push pop shift unshift
// const data = [10,20,30]
// console.log(data)
// data.push(500)
// data.push(1000)
// data.push(5200)
// console.log(data)
// data.pop()
// console.log(data)  
// data.shift()
// data.shift()
// console.log(data)
// data.unshift(50)
// console.log(data)

//--------------------------------------------------
// loop array
//for loop ,foreach , forof

//  const data = [10,20,30,40,50]
// for(let index = 0 ; index <data.length;index++){
//     if (data[i] >=30)
//     break
//     console.log(`${i} = ${data[i]}`);
// }

// data.forEach(e =>{
//     if(e>=30){
//         console.log("Hello")
//     }
//     console.log(`${e}`)
// }  ) 

// for ( const element of data){
//     if (element >=30) {
//         break
//     }
//     console.log(`${element}`)
// }

//--------------------------------------------------

// find data in array
//index of fine 
//find index 

// const colors = ["red","green","blue","purple","white"]
// const index = colors.indexOf("yellow")
// console.log(index)

// const search = colors.find(element=>element==="green")
// console.log(search)

//--------------------------------------------------

//Array map
// const number = [10,20,30,40]
// console.log(`number = ${number}`)
// const result = number.map(e=e*e)
// console.log(`${result}`)

// const re = data.map(e=>{
//     return e
// })
// console.log(re)

//  const data = [
//      {day:01062564,weater:"hot"},
//      {day:01062564,weater:"cold"},
//      {day:01062564,weater:"ranny"}
//  ]
//  const answer = data.map(e=>e.weater)

//  console.log(answer)


//--------------------------------------------------
//Array Reduce
const data =[10,20,30,40]
const mapdata = data.map(e=>100)
console.log(mapdata)
const filterdata = data.filter(e=>e>20)
console.log(filterdata)
//array.reduce(()=>{},ค่าเริ่มต้น)

const ttt=data.reduce((value,e)=>{ //total = 0
    console.log(value)
    const total = e+value
    return total
},0)
console.log(ttt)

const cart = [
    {name:"ssss",price:222},
    {name:"bbb",price:333},
    {name:"aaa",price:111}
]
const x = cart.reduce((value,e)=>e.price+value,0)
console.log(x)
//--------------------------------------------------