import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { useEffect } from "react";
import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      synTokenFromSessStore: () => {
        const token = sessionStorage.getItem("token");

        if (token && token != "" && token != undefined)
          setStore({ token: token });
        console.log(
          "Everything loaded, synching the session storage token to store"
        );
      },
      logout: () => {
        const token = sessionStorage.removeItem("token");

        setStore({ token: null });
        console.log("Login out");
      },
      login: async (email, password) => {
        const opt = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch("http://127.0.0.1:3001/api/token", opt);

          if (resp.status !== 200) {
            alert("Invalid Email or Password");
            return false;
          }

          const data = await resp.json();
          console.log("Backend data check", data);
          sessionStorage.setItem("token", data.access_token);
          //   localStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
        } catch (error) {
          console.error("ERROR ERROR ERROR DOES NOT COMPUTE", error);
        }
      },

      fetchCryptoData: async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24&locale=en"
          );
          setStore({ cryptoData: response.data });
        } catch (error) {
          console.error("Error fetching crypto data", error);
        }
      },

      startCryptoDataUpdate: () => {
        const interval = setInterval(getActions().fetchCryptoData, 60000); // Fetch data every 60 seconds

        // Fetch initial data immediately
        getActions().fetchCryptoData();

        return () => {
          clearInterval(interval); // Clear the interval on component unmount
        };
      },
    },
  };
};
//   getMessage: async () => {
//     try {
//       // fetching data from the backend
//       const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
//       const data = await resps.json();
//       setStore({ message: data.message });
//       // don't forget to return something, that is how the async resolves
//       return data;
//     } catch (error) {
//       console.log("Error loading message from backend", error);
//     }
//   },
//   changeColor: (index, color) => {
//     //get the store
//     const store = getStore();

//     //we have to loop the entire demo array to look for the respective index
//     //and change its color
//     const demo = store.demo.map((elm, i) => {
//       if (i === index) elm.background = color;
//       return elm;
//     });

//     //reset the global store
//     setStore({ demo: demo });
//   },

export default getState;
