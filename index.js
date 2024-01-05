
let timeOut=null
document.getElementById("inp").addEventListener("input",function(){
    clearInterval(timeOut);
   timeOut= setTimeout(function(){
   searchMeal(document.getElementById("inp").value)
   },2000)
})


async function searchMeal(query){
try {
   let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
   let data=await res.json()
   ShowMeal(data.meals)
} catch (error) {
    return error
}
}


function ShowMeal(Meal){

    let mealList=document.getElementById("container")
    mealList.innerHTML=""
    if(Meal){
        Meal.forEach(ele=>{
            mealList.innerHTML+=`
            <div>
            <img id="img" src=${ele.strMealThumb}>
            <h3>${ele.strMeal}</h3>
            
            </div>

            `
        })

        
    }

}