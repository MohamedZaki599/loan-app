import './FormStyles.css'
import Modal from './Modal'
import { useState } from 'react';
export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber, age } = loanInputs;
    if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format is Incorrect")
    }
    else if (age < 18 || age > 100) {
      setErrorMessage("The Age is Not Allowed")
    }
    else {
      setErrorMessage(null)
    }
    setShowModal(true)
  }

  const btnIsDisable =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  function handleDevClick() {
    if (showModal) {
      setShowModal(false)
    }
  }
  return (
    <div
      onClick={handleDevClick}
      className="flex" style={{ flexDirection: "column" }}>

      <form className="flex" id="loan-form">

        <div className="header">
          <h1>Requesting a Loan </h1>
          <h1>طلب قرض</h1>
        </div>

        <hr />

        <label> Name: </label>
        <input value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value })
          }} />

        <label> Phone Number: </label>
        <input value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value })
          }} />

        <label> Age: </label>
        <input value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value })
          }} />

        <label style={{ marginTop: "30px" }}> Are You an Employee? </label>
        <input type='checkbox' checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked })
          }} />

        <label> Salary: </label>
        <select value={loanInputs.salary}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value })
          }}>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnIsDisable ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisable}
          id="submit-loan-btn"> Submit</button>

      </form>

      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}