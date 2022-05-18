function AllData(){
  const ctx = React.useContext(UserContext);
  const data = JSON.stringify(ctx);
  const UserContext = JSON.parse(data);
  const displayData = UserContext.users.map((info)=>{

      return(
        <tr key={info.name}>
          <td>{info.name}</td>
          <td>{info.email}</td>
          <td>{info.password}</td>
          <td>{info.balance.toFixed(2)}</td>
        </tr>
      )
    }
  )

  return (
        <>
          <h1>All Data</h1>
          <div className="card text-white bg-secondary mb-3" style={{ width: 50 + 'rem', marginLeft: "20px", marginTop: "10px"}}>
            <div className="card-header">Member Data</div>
            <table className="table" style={{ color: "lightgrey" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {displayData}
              </tbody>
            </table>
          </div>
        </>
  );
}
