<template>
  <div>
    <HeaderComponent />
    <div class="faixa_header">
      <h2>Perguntas frequentes</h2>
    </div>
    <div class="container">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel
          class="expasion"
          v-for="(pergunta, index) in perguntas"
          :key="index"
          :title="pergunta.title"
          :text="pergunta.description"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/core/components/TheHeader.vue";
import FooterComponent from "@/core/components/TheFooter.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      perguntas: [
        {
          title: "Como consigo acessar a sala de atendimento?",
          description:
            "Ao confirmar a data e o horário do agendamento da sua consulta, você receberá o link do acesso à sala por e-mail, WhatsApp e SMS. No dia da sua consulta, um lembrete será reenviado!",
        },
        {
          title: "Recomendações para que sua consulta seja excelente:",
          description: `– Verifique a bateria do seu computador ou celular;

– Verifique a conexão e velocidade de internet; Caso a conexão caia, retorne a sala utilizando o mesmo link, o médico irá aguardá-lo por alguns minutos;

– Esteja em um ambiente privado, lembre-se, você irá fazer um atendimento médico, é necessário privacidade.

– Utilizar preferencialmente o navegador Google Chrome e mantê-lo atualizado. Nossa plataforma aceita outros navegadores, mas o desempenho é sempre melhor no Chrome.

– Lembrar das permissões de microfone e câmera do dispositivo, nossa plataforma faz a validação automaticamente e o paciente aceita os acessos antes de entrar na sala de consulta virtual.

– Caso haja algum erro inesperado, sempre tente recarregar a página, limpar o histórico de navegação/cookies/cache. Caso não funcione nossa equipe de suporte poderá orientar na resolução do problema.`,
        },
        {
          title: "Estou com dificuldade para acessar a consulta. O que fazer?",
          description:
            "Você pode entrar em contato com a nossa central telefônica ou enviar um e-mail para XXX",
        },
        {
          title: "Preciso fazer algo antes da consulta?",
          description:
            "Sim! Vamos precisar da sua autorização para o uso da câmera e do microfone do seu dispositivo. Fique tranquilo, esse processo é realizado dentro do próprio aplicativo e é feito de maneira rápida. Além disso, você pode testar o seu áudio e câmera, para saber se o médico conseguirá te enxergar e ouvir com clareza. Precisamos também que você leia e aceite os termos de uso, para que consiga entrar no atendimento.",
        },
        {
          title: "Como faço para testar minha câmera e microfone?",
          description:
            "Abra o menu no canto superior da tela e clique na opção “Teste de dispositivo”. Autorize o uso da câmera e do microfone e veja se tudo está funcionando corretamente!",
        },
        {
          title: "Quanto tempo tenho para entrar no link do atendimento?",
          description:
            "Seu médico ficará aguardando com cinco minutos de antecedência do horário agendado e aguardará mais cinco minutos após o horário agendado. A tolerância de atraso depende da disponibilidade da agenda do  médico, então o ideal é ser pontual, caso não consiga cumprir o prazo reagende seu atendimento.",
        },
        {
          title: "Qual o procedimento em caso de urgência/emergência?",
          description:
            "Nos casos de urgência e/ou emergência, os colaboradores e/ou seu dependente devem se dirigir ao pronto atendimento hospitalar.",
        },
        {
          title: "Como agendar um atendimento pelo aplicativo?",
          description:
            "Nos casos de urgência e/ou emergência, os colaboradores e/ou seu dependente devem se dirigir ao pronto atendimento hospitalar.",
        },
        {
          title: "Qual o procedimento em caso de urgência/emergência?",
          description: `– Vá até a loja do seu celular (Android, Play Store, se for Iphone, Apple Store)

– Procure pelo nome Docway (logomarca verde)

– Realize o processo de download do APP

– Se for o seu primeiro acesso, clique em “Cadastrar”no aplicativo”, confirme seu CPF você e digite os 4 dígitos que você vai receber por e-mail. Coloque seu login (CPF) e cadastre sua senha

– Faça o login (CPF) e coloque a senha cadastrada

– Passe ou pule o verificar de sintomas e agende seu atendimento

– Você receberá novo link de atendimento por e-mail, SMS e WhatsApp para realizar a consulta médica

– Com o link em mãos, você pode acessar o consultório virtual pelo computador ou pelo seu celular

– Faça as confirmações de áudio e vídeo e realize seu atendimento`,
        },
        {
          title:
            "Não recebi a prescrição e o atestado após a consulta, o que devo fazer?",
          description:
            "Por favor, envie um e-mail explicando o seu caso para XXX para que possam te auxiliar.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.faixa_header {
  margin-top: 120px;
  width: 100%;
  padding: 30px 0;
  text-align: center;
  background: #69aa04;
  color: white;
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }
}
.container {
  padding: 50px 2%;
}
.expasion {
  // margin-top: 20px;
}
</style>
