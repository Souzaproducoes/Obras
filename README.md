# CPFM Implementos & Serviços — Gestão de Obras

Dashboard completo para gestão de obras com IA integrada (Groq API).

## Estrutura do Projeto

```
/
├── index.html          # Dashboard principal
├── api/
│   └── chat.js         # Função serverless (protege a API key)
├── LogoCpfm.png        # Logo da empresa
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## Hospedagem na Vercel

### Pré-requisitos
- Conta no [GitHub](https://github.com)
- Conta na [Vercel](https://vercel.com)
- API Key da [Groq](https://console.groq.com) (gratuita)

### Passo 1: Criar repositório no GitHub
1. Acesse github.com e crie um novo repositório (pode ser Privado)
2. Faça upload de todos os arquivos desta pasta

### Passo 2: Configurar na Vercel
1. Acesse vercel.com e faça login com GitHub
2. Clique em "Add New" > "Project"
3. Importe o repositório que criou
4. **IMPORTANTE:** Antes de clicar em Deploy:
   - Va em "Environment Variables"
   - Adicione: `GROQ_API_KEY` = `sua_chave_da_groq`
   - Clique em "Add"
5. Clique em "Deploy"

### Passo 3: Acessar o site
Após o deploy, a Vercel fornecerá uma URL como:
`https://seu-projeto.vercel.app`

## Variáveis de Ambiente

| Variável | Descrição | Onde obter |
|----------|-----------|------------|
| `GROQ_API_KEY` | Chave da API Groq | [console.groq.com](https://console.groq.com) |

## Funcionalidades

- Dashboard com 11 páginas de gestão
- CRUD completo (Diário, Orçamento, Materiais, Equipe)
- IA integrada com Llama 3.3 70B (Groq)
- Exportação JSON, PDF e CSV
- Persistência em localStorage
- Layout responsivo (mobile/tablet/desktop)
- Acessibilidade WCAG 2.1

## Tecnologias

- HTML5 / CSS3 / JavaScript vanilla
- Chart.js para gráficos
- Groq API (Llama 3.3 70B) para IA
- Vercel Serverless Functions

## Desenvolvido por

**Souza Produções**  
WhatsApp: +55 62 99144-4852

## Licença

Projeto proprietário — CPFM Implementos & Serviços
