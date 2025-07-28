
import React from 'react'
import MealSearchInput from './components/MealSearchInput';

export default async function MealsPage({searchParams}) {

  const query = await searchParams

  

   

    const fetchMeals = async () =>{
      try {

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
        const data = await res.json();
        // setMeals(data?.meals || [])

        return data.meals
        
      } catch (error) {
        console.log(error);
        return []
      }
        
    }

    const meals = await fetchMeals()

   
  return (
    <div className='grid grid-cols-4 gap-5 bg-indigo-900'>

    <div className='col-span-4 '>
       <MealSearchInput></MealSearchInput>
    </div>

      {meals.map((meal)=> <div  key={meal.idMeal}>
        <p>
          {meal.strMeal}
        </p>
        <img className='w-63 h-63' src={meal.strMealThumb} alt={meal.strMeal} />
      </div>)}

    </div>
  )
}
