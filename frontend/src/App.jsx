import "./index.css";
import UsersPage from "./UsersPage";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col items-center justify-start p-6">
      <section className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 mt-12 border border-slate-100">
        <UsersPage />
      </section>
    </main>
  );
}
