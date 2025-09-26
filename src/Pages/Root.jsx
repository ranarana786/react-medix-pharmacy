import { Outlet, useNavigation } from "react-router-dom";

import Header from "../components/Header";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
