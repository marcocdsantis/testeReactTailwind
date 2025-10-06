import "./index.css";
import AddUserForm from "./AddUserForm";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col items-center justify-start p-6">
      <section className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 mt-12 border border-slate-100">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Gerenciar Usuários
        </h1>

        <AddUserForm />
      </section>
    </main>
  );
}
