import React from 'react'

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { styles } from '../styles';

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
    
    
    <div className='px-5  py-5 max-w-5xl items-center justify-center flex mx-auto flex-col rounded-xl pb-20 my-20'>
      <div id='contatos'>
      <div className='bg-neutral-800 text-center p-5 rounded-t-lg'>
          
          <p className={styles.sectionHeadText}>Entre em contato ☠︎︎</p>
          </div>
      <div className='bg-neutral-400 p-2  rounded-b-lg'>
        
        
        <h3 className="text-black ">E deixe sua sugestão.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Seu nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome."
              className='bg-neutral-200 p-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Seu email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu email."
              className='bg-neutral-200 p-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Seu Telefone</span>
            <input
              type='number'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="Digite seu Telefone"
              className='bg-neutral-200 p-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Sua mensagem</span>
            <textarea
              rows={8}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='O que gostaria de dizer?'
              className='bg-neutral-200 p-6 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className='bg-neutral-200 w-fit rounded-xl'>
            <button
              type='submit'
              className='py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md'
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
        <div>
       
        </div>
      </div>
    </div>
    </div>







  )
}

export default Contact