import { Music, Play, Layers, Clock, ShieldCheck, Zap } from "lucide-react";
import { Feature, SongCategory, Bonus, FAQItem, Testimonial } from "./types";

export const FEATURES: Feature[] = [
  {
    icon: Music,
    title: "+1000 Músicas Prontas",
    description: "Repertório gigante já simplificado. É só olhar e tocar, sem perder tempo procurando cifras erradas na internet."
  },
  {
    icon: Play,
    title: "Videoaulas Direto ao Ponto",
    description: "Sem enrolação. Aulas curtas mostrando exatamente onde colocar o dedo para sair o som."
  },
  {
    icon: Layers,
    title: "Método Zero Teoria",
    description: "Esqueça partituras. Nosso foco é prática. Você aprende tocando, não lendo livros chatos."
  },
  {
    icon: Clock,
    title: "No Seu Tempo",
    description: "Acesso vitalício. A vida tá corrida? Estude 10 minutos por dia e tenha resultados."
  },
  {
    icon: Zap,
    title: "Resultado Imediato",
    description: "O método foi desenhado para você tocar sua primeira música completa na primeira semana."
  },
  {
    icon: ShieldCheck,
    title: "Risco Zero",
    description: "Teste por 7 dias. Se achar difícil, devolvemos todo o seu dinheiro na hora."
  }
];

export const SONG_CATEGORIES: SongCategory[] = [
  {
    title: "Sucessos Internacionais",
    songs: ["Ed Sheeran - Perfect", "Beatles - Let it Be", "Coldplay - Yellow"]
  },
  {
    title: "Músicas Brasileiras",
    songs: ["Legião Urbana - Tempo Perdido", "Alceu Valença - Anunciação", "Jota Quest - Dias Melhores"]
  },
  {
    title: "Pop & Acústico",
    songs: ["Vitor Kley - O Sol", "Melim - Meu Abrigo", "Iza - Dona de Mim"]
  },
  {
    title: "Fáceis para Iniciantes",
    songs: ["Parabéns pra Você", "Asa Branca", "Músicas com 2 acordes"]
  }
];

export const BONUSES: Bonus[] = [
  {
    title: "Exercícios de 'Destravamento'",
    description: "Para seus dedos ganharem agilidade rápido e você não sentir dores no começo.",
    oldPrice: 97
  },
  {
    title: "Memorização de Acordes",
    description: "O segredo para trocar de acorde sem olhar e sem parar a música no meio.",
    oldPrice: 47
  },
  {
    title: "Aulas Extras: Hits do Momento",
    description: "Passo a passo das músicas que estão tocando nas rádios hoje.",
    oldPrice: 67
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Preciso ter violão para começar?",
    answer: "O ideal é que sim, para praticar. Mas você pode começar assistindo as aulas para entender a lógica enquanto providencia o seu instrumento."
  },
  {
    question: "Preciso saber música ou ler partitura?",
    answer: "Não! O método foi criado especificamente para quem não sabe nada. Você não precisa ler partitura nem entender teoria complexa."
  },
  {
    question: "Em quanto tempo consigo tocar?",
    answer: "Isso varia de aluno para aluno, mas muitos alunos tocam sua primeira música completa já na primeira semana de curso seguindo o passo a passo."
  },
  {
    question: "O acesso é mensal ou vitalício?",
    answer: "O acesso é VITALÍCIO. Você paga uma única vez e o curso é seu para sempre, incluindo futuras atualizações."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu valor."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Mendes",
    role: "Iniciante Absoluto",
    text: "Eu achava que não tinha o dom. Comprei o violão e ficou parado por 2 anos. Com o Clube das Notas, toquei 'Tempo Perdido' em 3 dias!",
    rating: 5
  },
  {
    name: "Mariana Souza",
    role: "Estudante",
    text: "A didática é incrível. Sem aquela enrolação de teoria que ninguém entende. É pegar o violão e tocar. Recomendo demais!",
    rating: 5
  },
  {
    name: "Roberto Silva",
    role: "Aposentado",
    text: "Sempre quis aprender para tocar para meus netos. Hoje já faço a festa nos almoços de domingo. Muito obrigado!",
    rating: 5
  }
];