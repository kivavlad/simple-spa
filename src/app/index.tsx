import PageLayout from "../components/page-layout";
import Header from "../modules/header";
import Main from "../modules/main";

const App: React.FC = () => {
  return (
    <PageLayout>
      <Header/>
      <Main/>
    </PageLayout>
  )
}

export default App;