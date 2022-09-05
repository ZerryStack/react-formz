import { useFormz } from "../../store";

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
