import { ref, set } from "firebase/database";
import Firebase from "../../config/firebase";

const WriteDayApi = () => {
  set(ref(Firebase, 'calendar/' + 'y2024/m1/d04'), {
    images: "/image.jpg",
    notes: "tangal 8, update from empty"
  });
}

export default WriteDayApi