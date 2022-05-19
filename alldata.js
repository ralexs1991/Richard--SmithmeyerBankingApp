function AllData() {
  const ctx = React.useContext(UserContext);
  
  function getName() {
    const currentUser = ctx.users.filter((user) => user.loggedIn == true)
    if (currentUser.length > 0) {
      return currentUser[0].name;
    }
    else {
      return "No one logged in"
    }
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="All Data"
      body={
        <div>
          <div style={{paddingBottom: "5px"}}>
            <h5 className="text-dark">Current User: {getName()}</h5>
          </div>
          <Card/>
        </div>}
    />
  );
}
