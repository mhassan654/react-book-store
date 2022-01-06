export const signup = (user) => {
  return fetch("http://localhost:8000/api/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signIn = (user) => {
  return fetch("http://localhost:8000/api/auth/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    // next();
    return fetch("http://localhost:8000/api/auth/signout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Signout", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};


export const isAuth=()=>{
  if(typeof window == "undefined"){
    return false;
  }
  if(localStorage.getItem("jwt")){
    return JSON.parse(localStorage.getItem('jwt'));
  }else{
    return false;
  }
}