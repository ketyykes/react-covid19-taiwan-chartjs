import axios from "axios";
import dayjs from "dayjs";
const url = "./covid202204.json";
export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
