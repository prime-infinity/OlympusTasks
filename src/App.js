
function App() {

  const x = true

  return (
    <div className="container">
      <h2>Hello from react</h2>
      <h3>hello { x ? 'yes': 'no' }</h3>      
    </div>  
  );
}

export default App;
