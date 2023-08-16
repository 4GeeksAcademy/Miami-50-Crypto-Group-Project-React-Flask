import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { useEffect } from "react";
import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      news: [],
      token: null,
      message: null,
      error: null,
      favoriteCardIds: [],
      userId: sessionStorage.getItem("userId") || null,
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
      fetchNewsData: async () => {
        const url = "https://crypto-news16.p.rapidapi.com/news/coindesk";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          if (response.status === 429) {
            setStore({
              error: "Too many requests. Please try again later.",
              news: [],
            });
          } else {
            const result = await response.json();
            setStore({ news: result, error: null });
            // Save the news data in localStorage
            localStorage.setItem("newsData", JSON.stringify(result));
          }
        } catch (error) {
          console.error(error);
          setStore({
            error: "Failed to load news. Please try again later.",
            news: [],
          });
        }
      },

      startNewsDataUpdate: () => {
        // Check if news data exists in localStorage
        const storedNewsData = localStorage.getItem("newsData");

        if (storedNewsData) {
          // If data exists in localStorage, use it to update the store
          const newsData = JSON.parse(storedNewsData);
          setStore({ news: newsData, error: null });
        } else {
          // If no data in localStorage, fetch initial data immediately
          getActions().fetchNewsData();
        }

        const interval = setInterval(getActions().fetchNewsData, 60000); // Fetch data every 60 seconds

        return () => {
          clearInterval(interval); // Clear the interval on component unmount
        };
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      synTokenFromSessStore: () => {
        const token = sessionStorage.getItem("token");
        const localToken = localStorage.getItem("token");
        const userId = sessionStorage.getItem("userId"); // Get the user ID from session storage

        if (token && token !== "" && token !== undefined) {
          setStore({ token: token, userId: userId }); // Set the user ID along with the token
        } else if (
          localToken &&
          localToken !== "" &&
          localToken !== undefined
        ) {
          // If token is found in local store, synchronize it to the session store
          sessionStorage.setItem("token", localToken);
          setStore({ token: localToken, userId: userId }); // Set the user ID along with the token
        }
        console.log(
          "Synchronized token and userId from local to session store"
        );
      },

      setTokenAndUserId: (token, userId) => {
        localStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId); // Store the user ID in sessionStorage
        setStore({ token: token, userId: userId });
      },
      logout: () => {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
        setStore({ token: null });
        console.log("Logged out");
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

          // Use getActions() to set both token and userId
          getActions().setTokenAndUserId(data.access_token, data.user_id);

          console.log("User ID set to:", data.user_id);
        } catch (error) {
          console.error("ERROR ERROR ERROR DOES NOT COMPUTE", error);
        }
      },

      fetchCryptoData: async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24&locale=en"
          );

          // Add a unique integer ID to each crypto object
          const cryptoDataWithIds = response.data.map((crypto, index) => ({
            ...crypto,
            uniqueId: index + 1, // You can use any logic you prefer for generating IDs
          }));

          // Save the data in the store
          setStore({ cryptoData: cryptoDataWithIds });

          // Also, save the data in localStorage for persistence across page reloads
          localStorage.setItem("cryptoData", JSON.stringify(cryptoDataWithIds));
        } catch (error) {
          console.error("Error fetching crypto data", error);
        }
      },

      startCryptoDataUpdate: () => {
        const storedCryptoData = localStorage.getItem("cryptoData");

        if (storedCryptoData) {
          // If data exists in localStorage, use it to update the store
          const cryptoData = JSON.parse(storedCryptoData);
          setStore({ cryptoData });
        } else {
          // If no data in localStorage, fetch initial data immediately
          getActions().fetchCryptoData();
        }

        const interval = setInterval(getActions().fetchCryptoData, 120000); // Fetch data every 60 seconds

        return () => {
          clearInterval(interval); // Clear the interval on component unmount
        };
      },

      fetchTrendingData: async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          const trendingData = response.data;

          // Save the data in the store
          setStore({ trendingData });

          // Also, save the data in localStorage for persistence across page reloads
          localStorage.setItem("trendingData", JSON.stringify(trendingData));
        } catch (error) {
          console.error("Error fetching trending data", error);
        }
      },

      startTrendingDataUpdate: () => {
        const storedTrendingData = localStorage.getItem("trendingData");

        if (storedTrendingData) {
          // If data exists in localStorage, use it to update the store
          const trendingData = JSON.parse(storedTrendingData);
          setStore({ trendingData });
        } else {
          // If no data in localStorage, fetch initial data immediately
          getActions().fetchTrendingData();
        }

        const interval = setInterval(getActions().fetchTrendingData, 60000); // Fetch data every 60 seconds

        return () => {
          clearInterval(interval); // Clear the interval on component unmount
        };
      },

      getFavoriteCards: async () => {
        try {
          const token = localStorage.getItem("token");
          const userId = localStorage.getItem("userId");

          if (!userId) {
            // If userId is null, synch the session storage token to store to get the userId
            actions.synTokenFromSessStore();
          }

          const response = await fetch(
            `http://127.0.0.1:3001/api/users/${
              getStore().userId
            }/favorite-cards`, // Use getStore().userId here
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 401) {
            console.error("Authentication error: Invalid token");
            // Handle unauthorized access, e.g., redirect to login page
            return [];
          } else if (response.status !== 200) {
            console.error("Error getting favorite cards");
            throw new Error("Error getting favorite cards");
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error getting favorite cards:", error);
          throw error;
        }
      },
      addFavoriteCard: async (cardId, inputPrice) => {
        try {
          const token = localStorage.getItem("token");
          const userId = localStorage.getItem("userId");

          if (!userId) {
            // If userId is null, synch the session storage token to store to get the userId
            getActions().synTokenFromSessStore();
          }

          const requestData = {
            input_price: inputPrice, // Pass the inputPrice here
          };

          const response = await fetch(
            `http://127.0.0.1:3001/api/users/${
              getStore().userId
            }/favorite-cards/${cardId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(requestData),
            }
          );

          if (response.status !== 200) {
            console.error("Error adding card to favorites");
          } else {
            console.log("Card added to favorites");
          }
        } catch (error) {
          console.error("Error adding card to favorites:", error);
          throw error;
        }
      },

      removeFavoriteCard: async (cardId) => {
        try {
          const { token, userId } = getStore(); // Get both token and userId from the store

          if (!userId) {
            // If userId is null, synch the session storage token to store to get the userId
            actions.synTokenFromSessStore();
          }

          const response = await fetch(
            `http://127.0.0.1:3001/api/users/${
              getStore().userId
            }/favorite-cards/${cardId}`, // Use getStore().userId here
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status !== 200) {
            console.error("Error removing card from favorites");
          } else {
            console.log("Card removed from favorites");
          }
        } catch (error) {
          console.error("Error removing card from favorites:", error);
        }
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
