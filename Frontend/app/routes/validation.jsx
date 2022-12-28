export const validatefirst = (firstname) => {
    if (!firstname) {
      return "firstName is required";
    } else if (typeof firstname !== "string" || firstname.length < 3) {
      return `First Name must be 3 characters`;
    }
  };
  
  export const validatelast = (lastname) => {
    if (!lastname) {
      return "lastname is required";
    } else if (typeof lastname !== "string" || lastname.length < 3) {
      return `Last Name must be 3 characters`;
    }
  };
  
  export const validateEmail = (email) => {
    if (!email) {
      return "Email is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Invalid Email Address";
    }
  };
  
  export const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (typeof password !== "string" || password.length < 6) {
      return `Passwords must be at least 6 characters long`;
    }
    else if(password.length > 0){
      let  PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!PASSWORD_REGEX.test(password)){
        return "Minimum one lowercase, uppercase, number and special character required";
    }
  }
  };
  
  export const validateComfirmPassword = (password, cpassword) => {
    if (!cpassword) {
      return "Confirm Password is required";
    } else if (password !== cpassword) {
      return "Password does not match";
    }
  };
  