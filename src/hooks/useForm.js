import { useEffect, useState } from "react";

const useForm = (init, validate) => {
  const [state, setState] = useState(makeValuesToKeys({ ...init }));

  const handleChange = (e, name = "", definedValue = "") => {
    const { name: formName, value } = e ? e.target : {};
    const oldState = deepClone({ ...state });

    let key = formName;
    if (!formName) {
      key = name;
    }

    oldState[key].value = definedValue ? definedValue : value;
    const { errors, hasError } = getErrors(oldState);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState({ ...oldState });
  };

  const changeState = (newState) => {
    setState({ ...newState });
  };

  const handleFoucse = (e, name) => {
    const { name: formName, value } = e.target;
    let key = formName;
    if (!formName) {
      key = name;
    }

    const oldState = deepClone({ ...state });
    oldState[key].focused = true;
    oldState[key].touched = true;

    setState({ ...oldState });
  };

  const handleBlur = (e, name) => {
    const { name: formName, value } = e.target;
    let key = formName;
    if (!formName) {
      key = name;
    }

    const oldState = deepClone({ ...state });
    const { errors, hasError } = getErrors(oldState);
    oldState[key].focused = false;

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState({ ...oldState });
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const oldState = deepClone({ ...state });
    const { errors, hasError } = getErrors();

    if (hasError) {
      cb({
        errors,
        hasError,
      });
      Object.keys(errors).forEach((key) => {
        oldState[key].error = errors[key];
      });
      setState({ ...oldState });
    } else {
      cb({
        errors,
        hasError,
        touched: makeKeysToValues(state, "touched"),
        values: makeKeysToValues(state, "value"),
      });
    }
  };

  const getErrors = (cState = state) => {
    let errors = {};
    let hasError = false;

    const oldState = deepClone({ ...cState });

    if (typeof validate === "boolean") {
      hasError = validate;
    } else if (typeof validate === "function") {
      const errorsFromCb = validate(makeKeysToValues(oldState, "value"));
      errors = { ...errorsFromCb };
      hasError = !isEmpty(errorsFromCb);
    } else {
      throw new Error("validate must be a function or boolean");
    }

    return {
      errors,
      hasError,
    };
  };

  const clearValue = () => {
    setState(makeValuesToKeys({ ...init }));
  };

  return {
    state,
    changeState,
    clearValue,
    handleBlur,
    handleChange,
    handleSubmit,
    handleFoucse,
  };
};

// Helper functions :
// => object --> keyObject
const makeValuesToKeys = (values) => {
  return Object.keys(values).reduce((acc, curr) => {
    acc[curr] = {
      value: values[curr],
      error: "",
      focused: false,
      touched: false,
    };

    return acc;
  }, {});
};

const makeKeysToValues = (state, key) => {
  return Object.keys(state).reduce((acc, curr) => {
    acc[curr] = state[curr][key];
    return acc;
  }, {});
};

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
const isEmpty = (obj) => Object.keys(obj).length === 0;

export default useForm;
