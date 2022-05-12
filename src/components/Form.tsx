import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (
    <form className="flex items-center justify-around" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-col items-center justify-center">
        <div className="bg-green-900 w-[50vw] border-orange-900 border-4 h-[50vh] rounded-xl mb-5 text-white">
          <h1 className="text-lg p-10">O aluno sabe realizar a separação silábica?</h1>
        </div>

        <div className="flex justify-between text-xl">
          <button className="hover:text-stone-300 transition" type="submit">anterior</button>
          <button className="hover:text-stone-300 transition" type="submit">Próxima</button>
        </div>

      </div>


      <div>

        <input className="cursor-pointer" type="range" min="0" max="2" />
        {/* target = document.getElementById('range') // get range value
        const value = target.value */}
      </div>
    </form>
  );
}
