import moment from "moment";


export const getBuildDate = (epoch) => {
    const buildDate = moment(epoch).format("DD-MM-YYYY HH:MM");
    return buildDate;
};
  

export const getAppVersion = () => {
    return '1.0.3';
}