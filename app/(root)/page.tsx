import React from "react";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async() => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {" "}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user= {loggedIn?.name || "Guest"}
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
