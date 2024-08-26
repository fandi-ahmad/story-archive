import { ref, set } from "firebase/database";
import Firebase from "../../config/firebase";
import { DayDataRenderType } from "../../interface";

const WriteDayApi = (data: DayDataRenderType) => {
  set(ref(Firebase, 'calendar/' + `${data.year}/${data.month}/${data.date}`), {
    image: data.image,
    note: data.note
  });
}

export default WriteDayApi