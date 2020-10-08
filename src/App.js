/* global GLOBAL_CONFIG */
import React, {useReducer, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// ALL CONTEXT FILES
import BaseContext from './scripts/models/baseContext';
import LanguageContext from './scripts/models/languageContext';

// ALL SERVICES
import * as API from './scripts/service/api';

// ALL REDUCER
import {commonReducer} from './scripts/reducers/appReducer';

// ALL SHARED FILES
import * as Constant from './scripts/helper/constant';

import {HomePage} from './scripts/view/pages/home';

function App() {
  const [state, dispatch] = useReducer(commonReducer, {lang: Constant.GENERIC.DEFAULT_LANGUAGE});
  const baseContext = useContext(BaseContext);

  useEffect(() => {
    console.log("GLOBAL_CONFIG: ", GLOBAL_CONFIG.LANGUAGE.en)
    extractBase(Constant.GENERIC.DEFAULT_LANGUAGE);
  }, []);

  const extractBase = (lang) => {
    API.local('./data/translations/en.json').then(result => {
      console.log("Result: " + JSON.stringify(result));
      updateBase(result);
    });
  }

  const updateBase = (base) => {
    dispatch({
      type: Constant.TYPE.APPBASE,
      payload: base
    })
  }

  const updateLanguage = (lang) => {
    extractBase(lang);
    dispatch({
      type: Constant.TYPE.LANGUAGE,
      payload: lang
    })
  }

  

  if (baseContext.data) {
    return (
      <div className="App">
        <BaseContext.Provider value={{...state, updateBase}}>
        <LanguageContext.Provider value={{...state, updateLanguage}}>
        <Router basename={'/'}>
          <Route path="/" exact component={HomePage}/>
        </Router>
        </LanguageContext.Provider>
        </BaseContext.Provider>
      </div>
    );
    } else {
      return (
        <div className="App">Loading...</div>
      );
    }
}

export default App;
