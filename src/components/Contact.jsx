import React from 'react'

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_85mackf',
        'template_e89bsp7',
        {
          from_name: form.name,
          to_name: "Equipe After",
          from_email: form.email,
          to_email: "Tony2k01@outlook.com",
          message: form.message,
          phone: form.phone
        },
        'YzHWeBbXx32dm_BO2'
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado, entraremos em contato o mais rapido o possivel.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ops, parece que algo deu errado, tente novamente.");
        }
      );
  };

  return (
    <div id='contatos'
      className={`container mx-auto px-5 py-10 lg:px-32 lg:pt-24 gradientecoral5 rounded-xl`}
    >
        <p className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 flex flex-end'>Entre em contato 👾</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome."
              className='gradientecoral2 py-4 px-6  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu email."
              className='gradientecoral2 py-4 px-6  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu Telefone</span>
            <input
              type='number'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="Digite seu Telefone"
              className='gradientecoral2 py-4 px-6  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua mensagem</span>
            <textarea
              rows={8}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='O que gostaria de dizer?'
              className='gradientecoral2 py-4 px-6  rounded-lg outline-none border-none font-medium'
            />
          </label>
<div className='gradientecoral2 w-fit rounded-xl'>
          <button
            type='submit'
            className='py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          </div>
        </form>
    </div>



     

       
 
  )
}

export default Contact