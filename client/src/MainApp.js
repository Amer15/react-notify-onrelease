import withClearCache from "./ClearCache";
import App from './App';


const ClearCacheComponent = withClearCache(App);

function MainApp(params) {
    return <ClearCacheComponent />;
}


export default MainApp;