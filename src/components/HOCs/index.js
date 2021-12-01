import { CalendarContext } from "../../context";

export const WithDate = (Component) => (...rest) =>
  <CalendarContext.Consumer>{
    ([date, setDate]) => <Component date={date} setDate={setDate} rest/>
  }</CalendarContext.Consumer>