import { onValue, ref } from "firebase/database";
import Firebase from "../../config/firebase";

const ReadDayApi = () => {
  return new Promise((resolve, reject) => {
    const starCountRef = ref(Firebase, 'calendar/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
}

export default ReadDayApi