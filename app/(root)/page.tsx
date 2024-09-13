import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getMaxListeners } from 'events'

const Home = async () => {
  const loggedIn = await getLoggedInUser();

 return (
   <section className="home">
     <div className="home-content">
      <header className="home-header">
        <HeaderBox 
         type="greeting"
         title="Welcome"
         user={loggedIn?.name || 'Guest'}
         subtext="Access and manage your account and transaction efficiently."
        />
        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        
        />
      </header>
      RECENT TRANSCTIONS
     </div>
     <RightSidebar 
       user={loggedIn}
       transactions={[]}
       banks={[{ currentBalance: 1503.50},{ currentBalance: 1200.50}]}
     />

   </section>
  )
}

export default Home
