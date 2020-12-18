import React, { useState, useEffect } from "react";
// import packageJson from "../package.json";
import moment from "moment";
import { setCookie, getCookie, removeCookie } from "./utils/helper";
import { url } from "./utils/api";


const buildDateGreaterThan = (latestDate, currentDate) => {
    const momLatestDateTime = moment(latestDate);
    const momCurrentDateTime = moment(currentDate);
  
    if (momLatestDateTime.isAfter(momCurrentDateTime)) {
      console.log('buildDates are different, doing cache burst and hard reload !')
      return true;
    } else {
      return false;
    }
};

function withClearCache(Component) {
    function ClearCacheComponent(props) {
      const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);
  
      useEffect(() => {
        fetch(`${url}/meta.json`)
          .then((response) => response.json())
          .then((meta) => {
            console.log(meta);

            if(!getCookie('buildDate')){
              setCookie('buildDate', meta.buildDate);
            }


            const latestVersionDate = meta.buildDate;
            // const currentVersionDate = packageJson.buildDate;
            const currentVersionDate = Number(getCookie('buildDate'));
            
  
            const shouldForceRefresh = buildDateGreaterThan(
              latestVersionDate,
              currentVersionDate
            );
            if (shouldForceRefresh) {
              setIsLatestBuildDate(false);
              refreshCacheAndReload();
            } else {
              setIsLatestBuildDate(true);
            }
          });
      }, []);
  
      const refreshCacheAndReload = () => {
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then((names) => {
            for (const name of names) {
              caches.delete(name);
            }
          });
        }

        //Remove cookie
        removeCookie('buildDate');
        // delete browser cache and hard reload
        window.location.reload(true);
      };
  
      return (
        <React.Fragment>
          {isLatestBuildDate ? <Component {...props} /> : null}
        </React.Fragment>
      );
    }
  
    return ClearCacheComponent;
}

  


export default withClearCache;
