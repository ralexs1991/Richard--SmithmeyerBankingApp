function AllData() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  console.log("ctx users is");
  console.log(ctx.users);
  
  return (
      
      <Card
          bgcolor="main"
          header="All Data"
          width="50rem"
          body={
              <>
              <div className="alldata">
                  <div className="offset"><h5>Name</h5></div>
                  <div><h5>Email</h5></div>
                  <div><h5>Password</h5></div>
                  <div><h5>Transactions</h5></div>
              </div>    
                  {ctx.users.map((user, index) => {
                      return (
                          <div className="alldata data-item" key={index}>
                              <div className="offset padded">{ctx.users.name}</div>
                              <div className="padded">{ctx.users.email}</div>
                              <div className="padded">{ctx.users.password}</div>
                              <div className="padded">
                                 <strong><em> Balance: '$'{ctx.users.balance}</em></strong>
                              />
                              )}
                              </div>
                          </div>
                      )
                  }




                  )}
              
              </>
          }
      
      
      
      
      />
      
  );
}
