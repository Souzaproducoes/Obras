export default async function handler(req, res) {
    // Apenas aceitar POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { prompt, system } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt é obrigatório' });
    }

    // Verificar se a API key existe
    if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: 'API Key não configurada no servidor' });
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: system || "Você é um assistente útil." },
                    { role: "user", content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 1500
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return res.status(response.status).json({ 
                error: errorData.error?.message || 'Erro na API Groq' 
            });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Erro no handler:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
