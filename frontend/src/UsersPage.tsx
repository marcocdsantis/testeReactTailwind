import { useEffect, useState } from "react";
import axios from "axios";
import AddUserForm from "./AddUserForm";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5289/users"); 
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return;
    try {
      await axios.delete(`http://localhost:5289/users/${id}`);
      fetchUsers(); 
    } catch (err) {
      console.error("Erro ao excluir usuário:", err);
    }
  };

  const handleUserAdded = () => {
    // debugger;
    fetchUsers();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col items-center p-6">
      <section className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 mt-10 border border-slate-100">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Gerenciar Usuários
        </h1>

        <AddUserForm onUserAdded={() => handleUserAdded()} />

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Usuários cadastrados
          </h2>

          {users.length === 0 ? (
            <p className="text-slate-500 text-center py-4">
              Nenhum usuário encontrado.
            </p>
          ) : (
            <ul className="divide-y divide-slate-200">
              {users.map((u: any) => (
                <li
                  key={u.id}
                  className="flex justify-between items-center py-3 px-2 hover:bg-slate-50 rounded-md"
                >
                  <div>
                    <p className="font-medium text-slate-800">{u.name}</p>
                    <p className="text-slate-500 text-sm">{u.email}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}