import { Logo } from './Logo';
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';
import './styles/global.css'
import { Envelope, Lock } from 'phosphor-react';
import { CheckBox } from './components/Checkbox';

export function App() {
  return (
    <div className='w-screen h-screen max-w bg-gray-900 flex items-center flex-col justify-center text-gray-100'>
      <header className="flex items-center flex-col" >
        <Logo />
        <Heading className='mt-4 font-bold' size='lg'>Ignite Lab</Heading>
        <Text className='text-gray-400 mt-1' size='lg'>Faça login e comece a usar!</Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder='Digite seu email' />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
        <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" placeholder='**********' />
          </TextInput.Root>
        </label>
 
      <label htmlFor='remember' className='flex items-center gap-2'>
        <CheckBox id='remember' />
        <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
      </label>

        <Button className='mt-4' type="submit">Entrar na plataforma</Button>
      </form>

      <footer className='flex items-center flex-col gap-4 mt-8'>
        <Text asChild size='sm' className='text-gray-400 underline hover:text-gray-200'>
          <a href="">Esqueceu sua senha?</a>
        </Text>

        <Text asChild size='sm' className='text-gray-400 underline hover:text-gray-200'>
          <a href="">Não possui conta? Crie agora!</a>
        </Text>
      </footer>

    </div>
  )
}
