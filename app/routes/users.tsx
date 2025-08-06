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

export async function loader() {  return {
    users: await prisma.user.findMany(),
  };
}

export default function ({ loaderData }: Route.ComponentProps) {
  // Definindo tipo para loaderData
  const users =
    loaderData && "users" in loaderData
      ? (loaderData as { users: any[] }).users
      : [];
  return (
    <div className="p-6">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Idade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: any) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
