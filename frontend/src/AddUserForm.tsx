import { SyntheticEvent, useState } from "react";
import axios from "axios";

interface AddUserFormProps {
  onUserAdded: () => void;
}

export default function AddUserForm({ onUserAdded }: AddUserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5289/users",
        { name, email },
        { headers: { "Content-Type": "application/json" } }
      );
      setName("");
      setEmail("");
      onUserAdded();
    } catch (err) {
      console.error("Erro ao adicionar usuário:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-slate-50 p-6 rounded-xl shadow-sm"
    >
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Adicionar Usuário
      </button>
    </form>
  );
}
