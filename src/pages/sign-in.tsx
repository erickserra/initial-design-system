import { Envelope } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button/Button";
import { Heading } from "../components/Heading/Heading";
import { TextInput } from "../components/TextInput/TextInput";
import Logo from "../Logo";
import { Text } from "../components/Text/Text";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Lock } from "phosphor-react";
import axios from "axios";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "erick@gmail.com",
      password: "1234",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen flex-col h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center ">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-1" size="lg">
          Faça login e comece a usar
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox.Root>
            <Checkbox.Input />
            <Checkbox.Label size="sm" className="text-gray-400">
              Lembrar de mim por 30 dias
            </Checkbox.Label>
          </Checkbox.Root>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-100">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-100">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
