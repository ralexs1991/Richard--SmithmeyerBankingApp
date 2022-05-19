function Deposit() { 
    const [show, setShow]         = React.useState(true);
    const [isValid, setIsValid]   = React.useState(false);
    const [status, setStatus]     = React.useState('');
    const [amount, setAmount]     = React.useState('');
    const ctx = React.useContext(UserContext); 
  
    let balance = 0;
    if (ctx.users[0]){
    balance= ctx.users[0].balance;
    }
    balance = parseFloat(balance).toFixed(2);
    
    function validate(field, value){
      function showError(errorMsg, showErrorMsg) {
      if (showErrorMsg === 1){
        setStatus('Error: ' + errorMsg);
        setTimeout(() => setStatus(''), 3000);
      }
    }
      
  
    let errorMsg = '';
  
    if (field === 'amount'){
      if(value === ''){
          errorMsg = 'Enter Deposit amount';
          setValid(false);
          setAmount('');
          showError(errorMsg, showErrorMsg);
          return false;
        } else if
          (Number(value) <= 0) {
            errorMsg = 'Invalid Amount: Must be positive number';
            setAmount(value);
            setIsValid(false);
            showError(errorMsg, showErrorMsg);
            return(false);}
            else if (value !== '' && isNaN(value)){
              errorMsg = 'Invalid Amount: Enter a positive number';
              setIsValid(false);
              showError(errorMsg, showErrorMsg, 1);
              return false;
            } else if (value !== '' && Number(value) !== 0 &&!isNaN(value)){
              setAmount(value);
              setIsValid(true);
          }
        }
        return true;
        }
  
        function handleDeposit(){
          if (!validate ( 'amount', amount, 1)) return;
          if (ctx.users[0]) {
            let newBalance = parseFloat(balance) + parseFloat(amount);
            newBalance = newBalance.toFixed(2);
          if (newBalance < 0) {
            setStatus('Invalid Amount: Insufficient Funds');
            setTimeout(() => setStatus(''), 3000);
            clearForm();
            return false;
          }
            ctx.users[0].balance = Number(newBalance);
          } 
          setShow(false);
        }
  
        function clearForm(){
          setAmount('');
        }
  
        return (
          <>
            <h1>Deposit Funds</h1>
            <Card
              txtcolor= "black"
              header={`Current balance: $${balance}`}
              status= {status}
              body={show ? (
                <>
                  <label> Deposit Amount:</label><br/>
                  $<input
                    type= "input"
                    id= "amount"
                    placeholder='0'
                    value={amount}
                    onChange={e => validate('amount', e.currentTarget.value, 1)}
                    style={{maxwidth: '300px'}} /> <br/>
                  <input
                    type="submit"
                    className={`btn ${isValid ? "btn-primary": "btn-light text-black-50"}`}
                    id='submit-button'
                    value={Deposit}
                    onClick={handleDeposit} />
                  </>
              ):( 
                <>
                  <h5 className='text-success mb-4'> ${parseFloat(amount).toFixed(2)} have been successfully withdrawn</h5>
                  <button
                    type='submit'
                    className="btn btn-primary"
                    onClick={clearForm}> New Deposit 
                  </button>
                  </>
              )}
            />    
          </>
        )
    }
  
