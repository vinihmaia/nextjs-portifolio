// Todos os textos do portfólio ficam aqui.
// Para atualizar o site, mude este arquivo e mantenha as aspas e as vírgulas.

export const perfil = {
  nome: "Vinicius Maia",
  cargo: "Analista de suporte de TI e desenvolvedor web",
  local: "Cotia, São Paulo",
  resumo:
    "Sou formado em Ciência da Computação e trabalho com suporte de TI e infraestrutura de redes, com experiência em provedor de internet. Também sou fundador da Vitrapi, onde desenvolvo sites, APIs e sistemas para pequenos negócios, como o Buzinou, plataforma de gestão para transporte escolar.",
  // Para usar uma foto: coloque o arquivo na pasta public (por exemplo, public/vinicius.jpg)
  // e troque "" por "/vinicius.jpg".
  foto: "",
  iniciais: "VM",
};

export const contatos = {
  email: "viniciusmaia_2022@hotmail.com",
  linkedin: "https://www.linkedin.com/in/vini-maia",
  github: "https://github.com/vinihmaia",
  instagram: "https://www.instagram.com/vinihmaia",
  site: "https://vitrapi.com",
};

export type Projeto = {
  nome: string;
  status: string;
  descricao: string;
  destaques: string[];
  tecnologias: string[];
  site: string;
  // Endereço do repositório no GitHub. Deixe "" se o repositório for privado:
  // assim o botão "Ver código" não aparece.
  codigo: string;
};

export const projetos: Projeto[] = [
  {
    nome: "Buzinou",
    status: "Em produção",
    descricao:
      "Painel para vans de transporte escolar, feito para quem dirige a van e cuida de tudo sozinho.",
    destaques: [
      "Contratos assinados pelo celular, com código de confirmação por e-mail",
      "Mensalidades com Pix copia e cola e cobrança pronta no WhatsApp",
      "Roteiro do dia no mapa e área da família para os responsáveis",
      "Assinatura mensal por Pix, com 7 dias de teste grátis",
    ],
    tecnologias: ["JavaScript", "Supabase", "PostgreSQL", "Edge Functions", "PWA", "Vercel"],
    site: "https://painel.vitrapi.com",
    codigo: "",
  },
  {
    nome: "Vitrapi",
    status: "Em produção",
    descricao:
      "Site do meu negócio de criação de sites e sistemas para pequenas empresas de Cotia e região.",
    destaques: [
      "Raio-X da Vitrine: confere segurança, velocidade e presença no Google de qualquer site",
      "Prévia da Vitrine: monta uma amostra do site do cliente, com orçamento na hora",
      "Proposta em PDF, contrato assinado pelo celular e pagamento por Pix",
      "Links de contrato e pagamento protegidos por uma função serverless",
    ],
    tecnologias: ["HTML", "CSS", "JavaScript", "Vercel Functions", "jsPDF", "Supabase"],
    site: "https://vitrapi.com",
    codigo: "",
  },
  {
    nome: "LV Cakes",
    status: "Em produção",
    descricao: "Pedidos de bolo de pote entregues no bloco do condomínio.",
    destaques: [
      "Cardápio com combos montados pelo melhor preço",
      "Pix copia e cola e cartão fidelidade",
      "Painel da loja com fila de entrega, financeiro e despesas",
    ],
    tecnologias: ["JavaScript", "Supabase", "Canvas", "Web Audio"],
    site: "https://lvcakes.vitrapi.com",
    codigo: "",
  },
  {
    nome: "Site da Van PV",
    status: "Em produção",
    descricao:
      "Landing page da Van Escolar Tia Patrícia e Tio Vitor, que atende Jandira e Barueri.",
    destaques: [
      "Rota real no mapa, com distância e tempo calculados",
      "Vale desconto que vira imagem para enviar no WhatsApp",
      "Geradores de capa, posts e cartão de visita em PDF",
    ],
    tecnologias: ["HTML", "CSS", "JavaScript", "Leaflet", "OpenStreetMap", "jsPDF"],
    site: "https://tiapatricia.vercel.app",
    codigo: "",
  },
];

export const experiencias = [
  {
    cargo: "Analista de suporte de TI",
    empresa: "IMPAKTO Higiene, Limpeza e Descartáveis",
    periodo: "set 2026 – atual",
    local: "Embu das Artes, SP",
    descricao:
      "Troubleshooting de hardware e software, suporte a redes (TCP/IP, DHCP e DNS), administração de acessos, inventário de TI e apoio à implantação de novas unidades.",
  },
  {
    cargo: "Fundador",
    empresa: "Vitrapi",
    periodo: "atual",
    local: "Cotia, SP",
    descricao:
      "Desenvolvimento de sites, APIs e sistemas para pequenos negócios, do design à hospedagem e à segurança.",
  },
  {
    cargo: "Técnico de suporte em TI",
    empresa: "Smart Net Internet Banda Larga",
    periodo: "mar 2026 – set 2026",
    local: "Itapevi, SP",
    descricao:
      "Configuração e troubleshooting de roteadores, com TCP/IP, DHCP, DNS, NAT e VLANs. A análise de conectividade reduziu em 80% o tempo médio de resolução de chamados de média complexidade.",
  },
  {
    cargo: "Transporte e recebimento",
    empresa: "Ideal Work Uniformes e EPI's",
    periodo: "fev 2025 – mar 2026",
    local: "Jandira, SP",
    descricao: "Faturamento, emissão de NF-e, lançamentos no ERP Sisplan e controle de estoque.",
  },
];

export const formacao = {
  curso: "Bacharelado em Ciência da Computação",
  instituicao: "UNINOVE",
  periodo: "2022 – 2025",
};

export const certificados = [
  { nome: "Endereçamento de Rede e Solução Básica de Problemas", emissor: "Cisco Networking Academy", ano: "2026" },
  { nome: "Fundamentos de Cloud com AWS", emissor: "DIO e GFT", ano: "2026" },
  { nome: "GitHub Copilot e Azure Serverless na Prática", emissor: "DIO e Microsoft", ano: "2026" },
  { nome: "Cibersegurança", emissor: "DIO e Riachuelo", ano: "2026" },
  { nome: "Machine Learning e GenAI na Prática", emissor: "DIO e Nexa", ano: "2026" },
  { nome: "Desenvolvimento Java e Cloud", emissor: "DIO", ano: "2026" },
  { nome: "Formação Scrum Master", emissor: "DIO", ano: "2026" },
  { nome: "Administração de Servidores e Serviços de Rede", emissor: "", ano: "" },
  { nome: "Fundamentos de Redes para DevOps", emissor: "Udemy", ano: "2024" },
];

export const competencias = [
  {
    grupo: "Infraestrutura e redes",
    itens: ["Windows", "Linux", "TCP/IP", "DHCP", "DNS", "NAT", "VLANs", "Wi-Fi", "Fibra óptica (ONU/ONT)"],
  },
  {
    grupo: "Cloud e ferramentas",
    itens: ["AWS", "AWS Lambda", "Amazon S3", "EC2", "IAM", "Docker", "PowerShell", "Git"],
  },
  {
    grupo: "Desenvolvimento",
    itens: ["JavaScript", "TypeScript", "Python", "Java", "C", "HTML", "CSS", "SQL", "PostgreSQL", "APIs REST", "Supabase", "Next.js"],
  },
  {
    grupo: "Metodologias",
    itens: ["Scrum", "SLA"],
  },
];