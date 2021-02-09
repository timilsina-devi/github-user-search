import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/searching.gif";
import loadingImage1 from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage1} className="loading-img" alt="loading" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
