import { ref, remove } from "firebase/database"
import Firebase from "../../config/firebase"

const DeleteDayApi = (year: string, month: string, date: string) => {
  remove(ref(Firebase, `calendar/${year}/${month}/${date}`))
}

export default DeleteDayApi