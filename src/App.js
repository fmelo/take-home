import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="container center">
          <h2 className="tkh-title">Sign Up for email update</h2>
          <p className="tkh-text m-0">*Indicates Required Field</p>
          <form action="">
              <ul className="list-reset form-list d-flex">
                  <li>
                      <label className="tkh-label" htmlFor="firstName">First Name *</label>
                      <input type="text" className="tkh-input" id="firstName"/>
                  </li>
                  <li>
                      <label className="tkh-label" htmlFor="lastName">Last Name *</label>
                      <input type="text" className="tkh-input" id="lastName"/>
                  </li>
                  <li>
                      <label className="tkh-label" htmlFor="emailAddress">Email Address *</label>
                      <input type="text" className="tkh-input" id="emailAddress"/>
                  </li>
                  <li>
                      <label className="tkh-label" htmlFor="organization">Organization</label>
                      <input type="text" className="tkh-input" id="organization"/>
                  </li>
                  <li className="w-100">
                      <label className="tkh-label" htmlFor="euResident">Eu Resident *</label>
                      <select name="euResident" id="euResident" className="tkh-input tkh-select">
                          <option value="option 1">Option 1</option>
                          <option value="option 1">Option 2</option>
                          <option value="option 1">Option 3</option>
                          <option value="option 1">Option 4</option>
                          <option value="option 1">Option 5</option>
                      </select>
                  </li>
              </ul>
              <ul className="list-reset form-list d-flex mt-3">
                  <li>
                      <input type="checkbox" className="tkh-checkbox" id="advances"/>
                      <label className="tkh-label" htmlFor="advances">Advances</label>
                  </li>
                  <li>
                      <input type="checkbox" className="tkh-checkbox" id="alerts"/>
                      <label className="tkh-label" htmlFor="alerts">Alerts</label>
                  </li>
                  <li>
                      <input type="checkbox" className="tkh-checkbox" id="oCommunication"/>
                      <label className="tkh-label" htmlFor="oCommunication">Other Communications</label>
                  </li>
              </ul>
              <div className="d-flex py-5">
                  <button className="tkh-button tkh-button--positive">Submit</button>
                  <button className="tkh-button tkh-button--cancel">Reset</button>
              </div>
          </form>
      </section>
    </div>
  );
}

export default App;
