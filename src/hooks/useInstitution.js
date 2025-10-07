import { useEffect, useState } from "react";
import { SearchInstitution } from "../api/searchInstitutions";

const useInstitution = () => {
  const [institutions, setInstitutions] = useState([
    { title: "Select your institution" },
  ]);
  // this is for custom added institutions
  const [typedValue, setTypedValue] = useState("");

  useEffect(() => {
    SearchInstitution(typedValue)
      .then((data) => {
        if (data.data.options) {
          const institute = data.data.options.reduce((acc, curr) => {
            acc.push({
              title: curr,
            });
            return acc;
          }, []);
          setInstitutions(institute);
        } else {
          setInstitutions((prev) => [...prev]);
        }
      })
      .catch((e) => {
        setInstitutions((prev) => [...prev]);
      });
  }, [typedValue]);

  return {
    institutions,
    setTypedValue,
  };
};

export default useInstitution;
