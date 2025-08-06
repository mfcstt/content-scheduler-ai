import type { Route } from "../+types/root";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../components/ui/table";
import prisma from "prisma/prisma";

export async function loader() {
  return {
    contents: await prisma.content.findMany(),
  };
}

export default function ({ loaderData }: Route.ComponentProps) {
  const contents =
    loaderData && "contents" in loaderData
      ? (loaderData as { contents: any[] }).contents
      : [];
  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Descrição</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.map((content: any) => (
            <TableRow key={content.id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
