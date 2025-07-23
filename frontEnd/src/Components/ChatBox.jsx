import { useEffect } from "react";
import { news } from "../Services/ApI/NewsData";

function ChatBox() {
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await news.getSport5News();
        console.log(res);
        return res;
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return <div>ChatBox</div>;
}

export default ChatBox;
