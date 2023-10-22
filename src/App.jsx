import { Route, Routes } from "react-router-dom";
import { CheckMail, Home } from "./Component";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState([]);
  const getEmails = async () => {
    try {
      const res = await axios.get(
        `https://flipkart-email-mock.vercel.app/?page=${page}`
      );
      if (res.data) {
        setEmail(res.data.list);
      }
    } catch (error) {
      console.error("Error occurs while fetching emails", error);
    }
  };

  useEffect(() => {
    getEmails();
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home email={email} />} />
        <Route exact path="/email/:id" element={<CheckMail email={email} />} />
      </Routes>
    </>
  );
};

export default App;
