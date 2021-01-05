import React, { Component } from "react";
import { Avatar,Container,FormControl,Button,Input,TextField } from "@material-ui/core";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userLineID: "",
      pictureUrl: "",
      email: "",
      getOS: ""
    };
  }
  
  componentDidMount = async () => {
    await liff.init({ liffId: `1655455050-XMdoKgQQ` }).catch((err) => {
      throw err;
    });
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      let getOS = await liff.getOS();
      let getOpenid = await liff.getDecodedIDToken();
      console.log(getOpenid);

      this.setState({
        getOS: getOS,
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
        email: getOpenid.email,
      });
    } else {
      liff.login();
    }
  };

  render() {

    const handleChange = (event) => {
      setName(event.target.value);
    };

    return (
      <Container component="main" maxWidth="xs">
     
      <div className="App">
      <header className="App-header">
      <FormControl>
        <Avatar alt="User Profile" src={this.state.pictureUrl} />
        <TextField
          label="Name"
          id="standard-full-width"
          defaultValue={this.state.name}
          variant="outlined"
          value={this.state.name} 
          onChange={handleChange}
        />
        <TextField
          label="Email"
          id="standard-full-width"
          defaultValue={this.state.email}
          variant="outlined"
          value={this.state.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone number"
          type="Number"
          id="standard-full-width"
          defaultValue="08XXXXXXXX"
          variant="outlined"
          onChange={handleChange}
        />



        <Button variant="outlined" color="secondary">
        Submit
      </Button>
       
   
          <div className="support">
            <p>OS: {this.state.getOS}</p>
            <p>ชื่อ: {this.state.name}</p>
            <p>Line ID: {this.state.userLineID}</p>
            <p>Email: {this.state.email}</p>
            
          </div>
          </FormControl>

          </header>
      </div>
      </Container>
 
    );
  }
}

export default App;
