# 📌 PRD: Planejador de Conteúdo com IA para Criadores

## Visão Geral

A funcionalidade de **Planejamento de Conteúdo** permite que criadores conversem com um chatbot para gerar agendas de postagens personalizadas, de acordo com seus temas, estilo, frequência e objetivos. A IA atua como um planner criativo, sugerindo títulos, formatos, ideias de copy e estrutura de posts.

Esse recurso utiliza a **API da OpenAI** com RAG para enriquecer sugestões com exemplos reais, boas práticas e tendências atuais de conteúdo.

---

## 🎯 Objetivos

- Permitir que criadores de conteúdo descrevam seus objetivos e temas de interesse.
- Gerar automaticamente um plano editorial com sugestões estruturadas.
- Retornar os conteúdos sugeridos em formato JSON legível e reutilizável.
- Armazenar o histórico de conversas e planejamentos anteriores.
- Suportar iteração e refino com base em feedback do usuário.
- Converter planos em markdown e armazenar como embeddings vetoriais para buscas futuras.

---

## 🧱 Stack Tecnológica

- **Frontend:** React Router 7 (Modo Framework)
- **Banco de Dados:** SQLite
- **ORM:** Prisma ORM
- **API LLM:** OpenAI (com RAG para sugestões inteligentes)
- **Armazenamento Vetorial:** Solução compatível com SQLite

---

## 📥 Entrada do Usuário

Usuários fornecem:

- Tema central ou nicho (ex: "performance automotiva", "moda streetwear", etc.)
- Frequência desejada (ex: 3 posts por semana)
- Tipo de conteúdo (feed, reels, carrossel, vídeo, etc.)
- Tom e estilo (ex: provocador, educativo, descontraído)

---

## 🤖 Processamento pelo Chatbot

O sistema envia o input do criador para a **OpenAI**, incluindo instruções sobre estilo, frequência e tom, com contexto recuperado por RAG (como dicas de copywriting, tendências, formatos de alta performance).

### Exemplo de Prompt:


---

## 📤 Saída JSON Esperada

```json
{
  "title": "3 erros que matam a performance do seu carro",
  "type": "carrossel",
  "description": "Mostre os erros mais comuns que prejudicam o desempenho de carros preparados.",
  "copy_ideas": [
    "Seu carro merece mais — pare de cometer esses erros hoje.",
    "Se você faz isso, tá matando torque e nem sabe."
  ],
  "hashtags": ["#performanceautomotiva", "#carroforte", "#entusiasta"],
  "call_to_action": "Salve esse post e compartilhe com quem precisa parar de errar!",
  "image_suggestions": [
    "foto de motor com sujeira",
    "comparativo de desempenho com/sem ajustes"
  ]
}
```

---

## 💬 Histórico de Conversas
- Todas as conversas com o planner serão salvas na tabela chats.
- Criadores podem revisar e ajustar planos anteriores.
- Cada conversa é associada a um plano e registrada com data/hora.

---

## 📚 Estrutura de Armazenamento e Banco de Dados

### Tabelas


#### `contents`

| Campo                 | Tipo     | Descrição                                     |
| --------------------- | -------- | --------------------------------------------- |
| id                    | string   | UUID do plano                                 |
| title                 | string   | Título do conteúdo                            |
| description           | string   | Descrição detalhada da ideia                  |
| type                  | string   | Tipo de post (carrossel, reels, etc)          |
| copy_ideas            | string   | Ideias de copy para usar                      |
| hashtags              | string   | Hashtags sugeridas                            |
| call_to_action        | string   | CTA do post                                   |
| image_suggestions     | string   | Ideias visuais                                |
| content               | string   | Plano completo em formato markdown            |
| chat_history          | json     | Histórico da conversa de planejamento         |
| created_at            | datetime | Data de criação                               |
| updated_at            | datetime | Última atualização                            |

#### `embeddings`
| Campo      | Tipo     | Descrição                                   |
| ---------- | -------- | ------------------------------------------- |
| id         | string   | UUID do embedding                           |
| plan_id    | string   | Chave estrangeira para `plans`              |
| vector     | vector   | Vetor para busca semântica                  |
| created_at | datetime | Data de criação                             |

## 🧠 Funcionalidade Vetorial com IA (Futuro)

- Todos os planos finalizados serão armazenados como embeddings vetoriais.
- Um segundo chatbot poderá futuramente responder a perguntas como:
  - "Quais conteúdos envolvem chamadas para ação?"
  - "Liste ideias de postagens sobre lançamentos de produtos."

---

## 🖼️ Interface do Usuário

- Interface de chatbot para criar e refinar planos de conteúdo.
- Exibição do JSON refinado de forma legível.
- Botão "Salvar Plano" para persistir a sugestão.

---

## 📈 Métricas de Sucesso

- Percentual de planos refinados mais de uma vez.
- Tempo médio para finalizar um plano.
- Quantidade de planos armazenados com embeddings.
- Engajamento com sugestões e histórico de conversas.

---

## 📅 Roteiro Proposto

| Fase          | Entregas Principais                                           |
| ------------- | ------------------------------------------------------------- |
| MVP           | Entrada da ideia, integração com OpenAI, JSON, persistência   |
| Iterações     | Histórico de conversa, refinamentos, UI aprimorada            |
| Fase Vetorial | Embeddings vetoriais, chatbot com busca semântica             |

---

## 📝 Considerações Finais

Este recurso transforma ideias soltas em planos de conteúdo claros, criativos e acionáveis. Reduz a fricção de planejamento e empodera criadores a estruturar postagens com apoio de IA. Ideal para quem quer consistência e criatividade sem perder tempo.
