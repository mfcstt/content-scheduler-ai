import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

export function Welcome() {
  return (
    <main className="container mx-auto p-4 space-y-4">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Bem-vindo ao AI Content Scheduler</CardTitle>
          <CardDescription>
            Uma ferramenta inteligente para gerenciar e agendar seu conteúdo de
            forma eficiente.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Recursos Principais</CardTitle>
          <CardDescription className="space-y-2">
            <p>✨ Geração de conteúdo assistida por IA</p>
            <p>📅 Agendamento automático de postagens</p>
            <p>📊 Análise de desempenho em tempo real</p>
            <p>🔄 Integração com principais redes sociais</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
