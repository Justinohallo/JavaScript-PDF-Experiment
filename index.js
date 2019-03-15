var doc = new jsPDF()

const example ='This is the example text'


function genPDF(){
    doc.text(`${example}`, 10, 10);
    doc.save('a4.pdf');

}

let userFirstName = ''
let userLastName = ''
let userId = ""
let userAge = ""
let userBio = ""

function test (e){
    const currentProfile = e.target.dataset.id
    users.map((user)=> {
       const {  firstName, 
                lastName,
                bio, 
                age } = user
        if (currentProfile == user.id){
            [userFirstName, 
            userLastName,
            userID, 
            userAge, 
            userBio
            ] = [
                firstName,
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