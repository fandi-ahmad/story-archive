import { onValue, ref } from "firebase/database";
import Firebase from "../../config/firebase";

const ReadDayApi = () => {
  const starCountRef = ref(Firebase, 'calendar/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    return data
  });
}

export default ReadDayApi