var doc = new jsPDF()

// const example ='This is the example text'


function genPDF(){
    doc.text(`${userFirstName}`, `${firstPosition}`, `${secondPosition}`);
    doc.text(`${userLastName}`, 10, 20);
    doc.setTextColor('#ffffff')
    doc.text(`${userBio}`, 10, 30);
    doc.setLineWidth(5);
    doc.line(0, 0, 0, 100);
    doc.setLineWidth(5);
    doc.line(0, 0, 100, 100);
  
    doc.save('a4.pdf');
}

let firstPosition = 10;
let secondPosition = 10;

let userFirstName = ''
let userLastName = ''
let userId = ""
let userAge = ""
let userBio = ""

function test (e){
    const currentProfile = e.target.dataset.id
    users.map((user)=> {
    firstPosition = 40;
    secondPosition= 40;
       
        if (currentProfile == user.id){
            let { firstName, 
                lastName,
                bio, 
                age } = user
                userFirstName = firstName
                userLastName = lastName
                userBio = bio
                userAge = age;

             [
            userFirstName,
            userLastName,
            userBio,
            userAge
            
            ] = [
                firstName ,
                lastName, 
                bio,
                age
            ] 
        }
        
    })

}

const article = document.querySelector("#text1")
console.log(article.dataset.id)
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')


article.addEventListener('click', test )
text2.addEventListener('click', test )

const users = [
    {id:1,
    firstName: 'Justin',
    lastName: 'O\'Halloran',
    bio: 'Actor with 25 years of expeirence working in the film industry',
    age: 25},
    {id:2,
    firstName: 'Alanna',
    lastName: 'Kriz',
    bio: 'Beautiful Girl',
    age: 26},
    
]