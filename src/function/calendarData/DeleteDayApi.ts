import { ref, remove } from "firebase/database"
import Firebase from "../../config/firebase"

const DeleteDayApi = () => {
  remove(ref(Firebase, 'calendar/m2024_07'))
}

export default DeleteDayApi