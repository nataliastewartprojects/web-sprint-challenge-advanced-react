// write your custom hook here to control your checkout form
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useForm = (key, initialValue) => {
  //state properties

  const [values, setValues] = useLocalStorage(key, initialValue);

  //handleChanges
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
};
