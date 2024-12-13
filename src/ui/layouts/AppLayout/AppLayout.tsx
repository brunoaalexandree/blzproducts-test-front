import { Outlet } from "react-router-dom";
import { AppNavbar } from "../AppNavbar";

export function AppLayout() {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex flex-col min-h-screen">
          <AppNavbar />

          <main className="w-full flex flex-col items-center">
            <Outlet />
          </main>
        </div>
      </body>
    </html>
  );
}
