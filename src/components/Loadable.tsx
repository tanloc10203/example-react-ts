import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<TopBarProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
