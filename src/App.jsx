import Game from "./Game";
function App(){
  const winningSum=16;
  return(
    <Game n={3} winningSum={winningSum}/>
  )
}
export default App;