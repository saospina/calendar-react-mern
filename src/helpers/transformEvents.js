import moment from "moment";



export const transformEvents = (events = []) => {
    
    return events.map((event) => {
        return {
            ...event,
             end: moment(event.end).toDate(),
             start: moment(event.start).toDate(),
            }
    })
};