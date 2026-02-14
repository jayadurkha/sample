
function ExampleForm() {
  return (
    <div className="App">

<h1>JOB APPLICATION FORM</h1>

<form>
  <label>Name : </label>
  <input type="text" name="name" /><br /><br />

  <label>Email : </label>
  <input type="email" name="email" /><br /><br />

  <label>Password : </label>
  <input type="password" name="password" /><br /><br />

  <label>Gender:</label><br />
  <input type="radio" name="gender" /> Male<br />
  <input type="radio" name="gender" /> Female<br /><br />

  <label>Course:</label><br />
  <select>
    <option>Python</option>
    <option>Java</option>
    <option>Web Development</option>
  </select><br /><br />

  <input type="submit" value="Submit" /><br/><br/>
  <input type="submit" value="new form" />
</form>
 

    </div>
  );
}


export default ExampleForm;
