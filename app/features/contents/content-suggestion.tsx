import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Lightbulb,
  Tag,
  MessageSquare,
  Image,
  Megaphone,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

export function ContentPlanner() {
  const taskData = {
    title: "3 erros que matam a performance do seu carro",
    type: "carrossel",
    description: "Mostre os erros mais comuns que prejudicam o desempenho de carros preparados.",
    copy_ideas: [
      "Seu carro merece mais — pare de cometer esses erros hoje.",
      "Se você faz isso, tá matando torque e nem sabe."
    ],
    hashtags: ["#performanceautomotiva", "#carroforte", "#entusiasta"],
    call_to_action: "Salve esse post e compartilhe com quem precisa parar de errar!",
    image_suggestions: [
      "foto de motor com sujeira",
      "comparativo de desempenho com/sem ajustes"
    ],
  };

  return (
    <section>
     <ScrollArea className="h-[80vh]">
        <div className="space-y-6">

          {/* Título */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              <CardTitle>Título</CardTitle>
            </CardHeader>
            <CardContent>{taskData.title}</CardContent>
          </Card>

          {/* Tipo */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              <CardTitle>Tipo de Conteúdo</CardTitle>
            </CardHeader>
            <CardContent>{taskData.type}</CardContent>
          </Card>

          {/* Descrição */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>{taskData.description}</CardContent>
          </Card>

          {/* Ideias de Copy */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Megaphone className="h-5 w-5" />
              <CardTitle>Ideias de Copy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {taskData.copy_ideas.map((copy, i) => (
                  <li key={i}>{copy}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Hashtags */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              <CardTitle>Hashtags</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {taskData.hashtags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Megaphone className="h-5 w-5" />
              <CardTitle>Call to Action</CardTitle>
            </CardHeader>
            <CardContent>{taskData.call_to_action}</CardContent>
          </Card>

          {/* Sugestões de Imagens */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Image className="h-5 w-5" />
              <CardTitle>Sugestões de Imagens</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {taskData.image_suggestions.map((img, i) => (
                  <li key={i}>{img}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </ScrollArea>

      <div className="flex justify-end">
        <Button>Salvar Plano</Button>
      </div>
    </section>
  );
}
