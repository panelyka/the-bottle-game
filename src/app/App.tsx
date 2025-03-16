import './styles/index.scss';

import {ClassNames} from "shared/lib/classNames/classNames";
import {Suspense} from "react";
import {MainPage} from "pages/MainPage";







const App = () => {


  return (
    <div className={ClassNames('app', {}, [])} >
        <Suspense fallback={<div>Loading...</div>}>
        <div className="content-page">
            <MainPage />
        </div>
        </Suspense>
    </div>
  );
};

export default App;