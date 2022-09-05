import logger from "../../logger";
import { formzStore } from "../store";

function incrementFormSubmitCount(id: string) {
  formzStore.setState((state) => {
    if (state.forms[id]) {
      state.forms[id].submitCount++;
    } else {
      logger.error(
        `You are attempting to submit a form that has unmounted with id: `,
        id
      );
    }
  });
}

export default incrementFormSubmitCount;
