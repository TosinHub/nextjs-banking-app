import React from "react";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Tosin",
    lastName: "Gbenga",
    email: "contact@gmail.com"
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {" "}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user= {loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your account efficiently"
          />

          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={8000}/>
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 1234}, {currentBalance: 3455}]}
      />
    </section>
  );
};

export default Home;
