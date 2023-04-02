import React, { useState } from "react";
import Form from "react-jsonschema-form";
import Joi from "joi";

const Validator = Joi.object().keys({
  name: Joi.string().required(),
  pizza_type: Joi.object().keys({
    type: Joi.string().required(),
    Naples: Joi.object().keys({
      slices: Joi.string().required(),
    }),
    NewYork: Joi.object().keys({
      cheeseburst: Joi.boolean(),
    }),
  }),
  toppings: Joi.object().keys({
    sauce: Joi.string().required(),
    cheese: Joi.string().required(),
    veggies: Joi.array().items(Joi.string()),
    meats: Joi.array().items(Joi.string()),
  }),
});

export const Jsonschema = () => {
  const [schema, setSchema] = useState({});

  const SchemaHandler = (e) => {
    try {
      const newSchema = JSON.parse(e.target.value);
      setSchema(newSchema);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = ({ formData }) => {
    const result = Validator.validate(formData);
    if (result.error) {
      alert(result.error.details[0].message);
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center gap-12 justify-center mt-11  h-full">
        <div className="flex flex-col">
          <h1 className="mb-5 text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-400 to-slate-300 bg-clip-text">
            Paste it here
          </h1>
          <textarea
            className="h-96 w-96 bg-gradient-to-l from-emerald-300 via-emerald-300 to-emerald-200 text-slate-800  border border-sky-500"
            rows="100"
            cols="100"
            defaultValue={JSON.stringify(schema, null, 2)}
            onChange={SchemaHandler}
            name="schema"
          ></textarea>
        </div>

        <div>
          <Form schema={schema} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Jsonschema;
