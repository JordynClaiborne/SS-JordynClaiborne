import './App.css';
function App() {

  for (let b = 0; b < jordyn.length; b++)
   {
    console.log(jordyn(b))
   }
   const jordyn = {
      height: "5 feet, 3 inches",
      glasses: "yes",
      favFood: "burrito bowls, sushi",
      accessories: "bracelet, button, choker",
      favColors: "black, blue",
      MusicArtistsILike: "Jon Bellion, AJR, Stray Kids",
      favAuthors: "Becky Albertalli, James Patterson, James Dashner",
      instrumentProficiency: "clarinet, kalimba, ukulele, guitar (somewhat)",
      hairColor: "dark brown",
      writingGenre: "romance",
      personalityType: "INTJ (introvert, intuitive, thinking, judging)",
      favFoodChain: "Chipotle"
}



return (
  <div className="App">
    
    
    {jordyn.map((<ol>(b)</ol>))}
  </div>
   );
  }
  
export default App;