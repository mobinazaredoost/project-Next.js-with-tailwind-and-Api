import { useState } from "react";

const useFormFelids = (initialState={}) => {
  const [felids, setFelids] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFelids({ ...felids, [name]: value });
  };
  return [felids, handleChange];
};
export default useFormFelids;
