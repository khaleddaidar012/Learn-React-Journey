// 1- في تيرمنال تاني 
// 2- npm install 
// 3-npm start
// 4- node app.js في تيرمنال تاني 

const { useEffect } = require("react")



// 1- 5امثله عن fetch data
//5- exaples of error handling
// 2- const resposne = await fetch("url ").then( (res) => )
// بس لازم تحول ال كومبونت ال async لو استخدمنا await 
// اما من غيرها 
fetch("url ").then( (res) =>{

return res.json()

} ).then((resDtat) =>{

resData.mydata// ال مكتوبه في الباك اند

setAvalibalePlaces(resData.places)
})
// بس الكود كدا هيؤدي ال infiteloop

//الحل باذن الله استخدام useeffect
useEffect(() =>{


    fetch("url ").then( (res) =>{

return res.json()

} ).then((resDtat) =>{

resData.mydata// ال مكتوبه في الباك اند

setAvalibalePlaces(resData.places)
})
},[])


// 5 تطبيقات ازاي اعمل fetch لصور
// app.use(express.static("images"))

////////////////////////////////////////////

useEffect(() =>{

async function fetchmydata() {

    const response = await fetch("url ");
    const resData = await response.json();
    setAvalibalePlaces(resData.places)
    
}
    
},[])

//*/////////////////////////////////////////////*/
//error handling 

