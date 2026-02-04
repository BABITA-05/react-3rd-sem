//always start with capital letter while making a component 
let App = () => {
  let count=0;
  //return always return only one jsx element 
  //return noly looks at the same line for code 
  //<> </> is fragment and is used to return multiple jsx elements 
  //always use () after return in the same line and return only one jsx element inside ()
  return (
    <>
      <h1>hello world</h1>
      <h4>Count:{count}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae deserunt illum quae, iusto odit, tempora unde beatae labore odio excepturi natus, reprehenderit totam! Optio voluptate ipsa unde aperiam non.</p>
      {/*never use capital letter for jsx element*/}
      {/* <I>this is italic</I> */}
      {/* use classname attribute instead of class */}
      <i className="italic">this is italic</i><br/>
      {/* use Htmlfor attribute instead of for */}
      <label htmlFor="name">Full Name:</label>
      <input placeholder="Enter your name:" id="name"/><br/>
      {/* always use {} for expression inside jsx elements */}
      <b>Bold text display:{5*3+5-3}</b>
    </>
  )
}
export default App