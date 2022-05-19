function Deposit(name, email, password, log,) {
    const ctx = React.useContext(UserContext);
    const [show, setShow]         = React.useState(true);
    const [isValid, setIsValid]   = React.useState(false);
    const [status, setStatus]     = React.useState('');
    const [amount, setAmount]     = React.useState('');
    const [balance, setBalance] = React.useState('');
     if (ctx.users) {
            return true;
        } else {            
      alert('Please Login first');     
    }        
    console.log('user',);  
 
  
  function validate (field, value) {
    console.log( ' type:' + typeof value);
    console.log('String:' + value);
  }
 (value !== '' && Number(value) !== 0 &&!NaN(value));{
            setAmount(value);
            setIsValid(true);
        };
     
      
    
     function handleDeposit(){
    if (!validate ( 'amount', amount, 1)) return;
    if (ctx.users[0]) {
      let newBalance = parseFloat(balance) + parseFloat(amount);
      newBalance = newBalance.toFixed(2);
      ctx.users[0].balance = Number(newBalance);
      ctx[i].balance = parseFloat(balance).toFixed(2);
  
    }
  
 
  }
  
  
   return (
          <>
            <h1>Withdraw Funds</h1>
            <Card
              txtcolor= "black"
              header={`Current balance: $${balance}`}
              status= {status}
              body={show ? (
                <>
                  <label> Withdrawl Amount:</label><br/>
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
                    value={Withdrawl}
                    onClick={handleWithdraw} />
                  </>
              ):( 
                <>
                  <h5 className='text-success mb-4'> ${parseFloat(amount).toFixed(2)} have been successfully withdrawn</h5>
                  <button
                    type='submit'
                    className="btn btn-primary"
                    onClick={clearForm}> New withdraw 
                  </button>
                  </>
              )}
            />    
          </>
        )
    }
