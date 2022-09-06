import { useFormz } from "../../store";

/**
 * Custom hook that returns a forms `lastPersistedAt` date i.e.
 * the date of the last time the form was persisted to
 * local storage.
 * @param id The id of the form.
 */
function useFormLastPersistedAt(id: string) {
    return useFormz((state => {
        const { lastPersistedAt } = state.forms[id];

        if (lastPersistedAt) {
            return new Date(lastPersistedAt)
        }
        return null;
    }));
}

export default useFormLastPersistedAt;
