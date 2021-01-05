import React, { Component } from "react";
import axios, { post } from "axios";
import Swal from "sweetalert2";
import InputAddress from "react-thailand-address-autocomplete";
import { Avatar,Container,FormControl,Button,Input,TextField,Grid,Box } from "@material-ui/core";

class App extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        userLineID: "",
        pictureUrl: "",
        email: "",
        getOS: "",
        phone: ""
      };
    }
    
    componentDidMount = async () => {
        this.setState({
          getOS: "getOS",
          name: "Benz",
        //   userLineID: getProfile.userId,
        //   pictureUrl: getProfile.pictureUrl,
          email: "ekkasit@tectony.co.th",
        });
    };
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    onSendOTP = async () => {
        var OTPnumber = "";
        var possible = "0123456789";
        for (var i = 0; i < 6; i++) {
          OTPnumber += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        var Ref = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++) {
          Ref += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        var messages = "รหัสอ้างอิง : " + Ref + "\r\n" + "รหัส OTP : " + OTPnumber;
        var data = {
          otp: OTPnumber,
          ref: Ref,
        };
        console.log(data);
        axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer my-token",
            "My-Custom-Header": "foobar",
          },
          url: "/api/register",
          data: JSON.stringify({ data: data }),
        }).then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
        this.setState({
          refcode: Ref,
          otpconfirm_show: true,
        });
        var phone = await this.state.phonenumber;
        // axios
        //   .get("http://www.thsms.com/api/rest", {
        //     params: {
        //       method: "send",
        //       username: "tectony",
        //       password: "&1Va64vBHq5F99AJ",
        //       from: "OTP",
        //       to: phone,
        //       message: messages,
        //     },
        //   })
        //   .then(function (response) {})
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    };
    render() {
        
        
  
      return (
          
        <Container component="main" maxWidth="md">
       
        <div className="App">
        <header className="App-header">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}
        >

        <Grid item md={3}>
    
   


        <FormControl>
          <Box justifyContent="center">
            <Avatar alt="User Profile" src={this.state.pictureUrl} />
          </Box>
          <Box mt={3} bgcolor="background.paper">
 
            <TextField
                label="Name"
                id="standard-full-width"
                defaultValue={this.state.name}
                variant="outlined"
                value={this.state.name} 
                onChange={(e) => this.setState({ name: e.target.value })}
               
            />
          </Box>
          <Box mt={3} bgcolor="background.paper">
          <TextField
            label="Email"
            id="standard-full-width"
            defaultValue={this.state.email}
            variant="outlined"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          </Box>
          <Box mt={3} bgcolor="background.paper">
          <TextField
            label="Phone number"
            type="Number"
            id="standard-full-width"
            defaultValue="08XXXXXXXX"
            variant="outlined"
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
          </Box>
          
        
  
          <Box mt={3} bgcolor="background.paper">
            <Button variant="outlined" color="secondary" onClick={this.onSendOTP}>
                Submit
            </Button>
          </Box>
     
            <div className="support">
              <p>OS: {this.state.getOS}</p>
              <p>ชื่อ: {this.state.name}</p>
              <p>Line ID: {this.state.userLineID}</p>
              <p>Email: {this.state.email}</p>
            </div>
            </FormControl>
            </Grid> 
            </Grid>
            </header>
        </div>
        </Container>
   
      );
    }
  }
  
  export default App;
  