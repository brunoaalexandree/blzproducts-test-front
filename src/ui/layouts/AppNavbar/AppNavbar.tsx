import logoImage from '@/assets/logo.png';

import { useNavigate } from 'react-router-dom';

export function AppNavbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full py-3 flex justify-center bg-purple-primary">
      <div className="w-full max-w-screen-xl flex justify-between px-7 lg:px-0">
        <img src={logoImage} className="w-12 h-12" alt="BLZ Products" />

        <ul className="flex items-center gap-5 lg:gap-10 text-white font-semibold text-lg">
          <li
            onClick={() => navigate('/products')}
            className="hover:cursor-pointer hover:text-white/90"
          >
            Produtos
          </li>
          <li
            onClick={() => navigate('/products/register')}
            className="hover:cursor-pointer hover:text-white/90"
          >
            Cadastrar Produto
          </li>
        </ul>
      </div>
    </header>
  );
}
