//show rating
function showRating(rating) {
  let ratings = ""
  for (let i = 1; i <= Math.floor(rating); i++){
    if (i === rating){
      ratings += "*"
    }
    else{
      ratings += "* "
    }
  }

  if (!Number.isInteger(rating)){
    ratings += "."
  }

  return ratings
}

console.log(showRating(4))

//sort by lowest to highest price
function sortLowToHigh(numbers){
  return numbers.sort((a,b) => a.price - b.price)
}

console.log(sortLowToHigh([
  {id: 1, price: 500},
  {id: 2, price: 768},
  {id: 3, price: 80},
  {id: 4, price: 23},
]))

//find all posts by a single user using api
async function postsByUser(uid) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
  const result = await promise.json()

  const posts = result.filter(element => element.userId === uid)
  console.log(posts)
}

postsByUser(4)

//first 6 incomplete todos
async function firstSixIncomplete() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
  const result = await promise.json()

  const incompleteTasks = result.filter(elem => !elem.completed).slice(0,6)
  console.log(incompleteTasks)
}

firstSixIncomplete()

