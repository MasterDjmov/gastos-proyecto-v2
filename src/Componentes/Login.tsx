import React, { ReactHTMLElement } from "react";
import { useForm } from "react-hook-form";

type LoginProperties = {
  email: string;
  password: string;
};
export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginProperties>();

  //creamos una funcion para manejar el envio de form
  const onSubmit = (datosForm: LoginProperties) => {
    console.log(datosForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>Acceso A SisGasto-Prueba</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            autoComplete="off"
            {...register("email", {
              required: "Se necesita un correo",
              onChange: (e) => handleChange(e)
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Se necesita un password",
              onChange: (e) => handleChange(e)
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};
